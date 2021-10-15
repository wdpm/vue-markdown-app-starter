<template>
  <div class="component-page">
    <header class="header">
      <a class="toggle" id="toggle">☰</a>|
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
    </header>
    <main class="main">
      <nav class="nav">
        <ul>
          <li><a href="">Nav 1</a></li>
          <li><a href="">Nav 2</a></li>
          <li><a href="">Nav 3</a></li>
          <li><a href="">Nav 3</a></li>
          <li><a href="">Nav 3</a></li>
          <li><a href="">Nav 3</a></li>
          <li><a href="">Nav 3</a></li>
          <li><a href="">Nav 3</a></li>
          <li><a href="">Nav 3</a></li>
          <li><a href="">Nav 3</a></li>
          <li><a href="">Nav 3</a></li>
          <li><a href="">Nav 3</a></li>
          <li><a href="">Nav 3</a></li>
          <li><a href="">Nav 3</a></li>
          <li><a href="">Nav 3</a></li>
          <li><a href="">Nav 3</a></li>
          <li><a href="">Nav 3</a></li>
          <li><a href="">Nav 3</a></li>
          <li><a href="">Nav 3</a></li>
          <li><a href="">Nav 3</a></li>
          <li><a href="">Nav 3</a></li>
          <li><a href="">Nav 3</a></li>
          <li><a href="">Nav 3</a></li>
          <li><a href="">Nav 3</a></li>
          <li><a href="">Nav 3</a></li>
          <li><a href="">Nav 3</a></li>
          <li><a href="">Lorem ipsum dolor sit amet.</a></li>
          <li><a href="">Nav 3</a></li>
          <li><a href="">Nav 3</a></li>
          <li><a href="">Nav 3</a></li>
          <li><a href="">Nav 3</a></li>
          <li><a href="">Nav 3</a></li>
          <li><a href="">Nav 3</a></li>
          <li><a href="">Nav 3</a></li>
          <li><a href="">Nav 3</a></li>
          <li><a href="">Nav 3</a></li>
          <li><a href="">Nav 3</a></li>
          <li><a href="">Nav 3</a></li>
          <li><a href="">Nav 3</a></li>
          <li><a href="">Nav 3</a></li>
          <li><a href="">Nav 3</a></li>
          <li><a href="">end</a></li>
        </ul>
      </nav>
      <div class="center">
        <article class="markdown-body">
          <router-view />
        </article>
        <!-- footer -->
      </div>
      <aside class="toc">TOC here</aside>
    </main>
  </div>
</template>

<script>
export default {
  name: "Component",
  data() {
    return {
      asideObserver: null
    };
  },
  mounted() {
    this.copyMarkdownTocToAside();
    this.syncAsideWhenScroll();
    this.setupToggleMenu();
    this.setupMediaQuery();
  },
  beforeUnmount() {
    this.stopObserveAside();
  },
  methods: {
    stopObserveAside() {
      const anchors = document.querySelectorAll(".header-anchor");
      anchors.forEach((section) => {
        this.asideObserver.unobserve(section.parentElement);
      });
    },
    syncAsideWhenScroll() {
      this.asideObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id");
          const anchorLink = document.querySelector(`.toc li a[href="#${id}"]`);
          if (!anchorLink) console.error("id", id);
          if (entry.intersectionRatio > 0) {
            anchorLink.parentElement.classList.add("active");
          } else {
            anchorLink.parentElement.classList.remove("active");
          }
        });
      });

      // Track all headers that have an `id` applied
      // alternatives selector: h1,h2,... with[id]
      const anchors = document.querySelectorAll(".header-anchor");
      anchors.forEach((section) => {
        this.asideObserver.observe(section.parentElement);
      });
    },
    copyMarkdownTocToAside() {
      const tableOfContent = document.querySelector("html .markdown-body section html .table-of-contents");
      const toc = document.querySelector(".toc");
      toc.appendChild(tableOfContent.cloneNode(true));
    },
    setupToggleMenu() {
      const toggle = document.getElementById("toggle");
      const main = document.getElementsByTagName("main");
      const nav = document.querySelector(".nav");
      /* max-content 1fr 15em -> max-content 1fr 0 ->  0 1fr 0 */
      toggle.addEventListener("click", function (evt) {
        const status = toggle.classList.contains("active");
        // console.log("toggle before status:", status);
        if (!status) {
          // change to middle state max-content 1fr 0
          main[0].style.gridTemplateColumns = "max-content 1fr 0";
          nav.style.display = "block";
          toggle.classList.add("active");
        } else {
          main[0].style.gridTemplateColumns = "0 1fr 0";
          nav.style.display = "";
          toggle.classList.remove("active");
        }
      });
    },
    setupMediaQuery() {
      // listen for two break point and recover when come across these points
      const mql = window.matchMedia("(min-width: 1200px)");
      const mql2 = window.matchMedia("(min-width: 999px)");

      const toggle = document.getElementById("toggle");
      const main = document.getElementsByTagName("main");
      const nav = document.querySelector(".nav");

      function resetStyle(e) {
        if (e && e.matches) {
          // reset previous css style
          main[0].style.gridTemplateColumns = "";
          nav.style.display = "";
          //remove toggle active class if it has= 解除toggle激活状态
          toggle.classList.toggle("active", false);
        }
      }

      mql.addEventListener("change", resetStyle);
      mql2.addEventListener("change", resetStyle);
    }
  }
};
</script>

<style lang="scss">
// override github-markdown-css
.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  margin: 0 auto;
  padding: 24px 45px;
}

@media (max-width: 767px) {
  .markdown-body {
    padding: 15px;
  }
}

.markdown-body .highlight {
  margin-bottom: 0;
}

.header {
  position: fixed;
  display: block;
  width: 100%;
  height: 60px;
  padding: 1em;

  color: white;
  background: #ccc;
  border: 1px solid #ccc;
  z-index: 9;

  a {
    font-weight: bold;
    color: #444444;

    &.router-link-exact-active {
      color: #16e3a4;
    }
  }

  .toggle {
    display: none;
    cursor: pointer;
  }
}

.main {
  display: grid;
  grid-template-columns: max-content 1fr 15em;
  width: 100%;
  position: relative;
  padding-top: 60px;
  transition: all 2s;
}

.nav {
  position: sticky;
  border-right: 1px solid darkgrey;
  top: 60px;
  align-self: start;
  height: calc(100vh - 60px);
  overflow-y: scroll;
}

.center {
  overflow: hidden;
}

.toc {
  position: sticky;
  margin-top: 24px;
  top: 84px; /*84 =60(header height) + 24 (margin-top);*/
  right: 24px;
  align-self: start;
  max-height: 80vh;
  padding-left: 0;
  border-left: 1px solid #e557c4;
  overflow-y: auto;

  li.active > a {
    color: #333;
    font-weight: 500;
  }

  a {
    text-decoration: none;
    display: inline-block;
    padding: 0.125rem 0;
    color: #ccc;
    transition: all 50ms ease-in-out; /* 💡 This small transition makes setting of the active state smooth */

    :hover,
    :focus {
      color: #666;
    }
  }
}

// markdown body toc
.table-of-contents {
  // prepend order number to header link
  ol {
    counter-reset: list-item;
    padding: 0;
  }

  li {
    margin-left: 1rem;
    display: block;
    counter-increment: list-item;
  }

  li:before {
    content: counters(list-item, ".") " ";
  }
}

@media screen and (max-width: 1200px) {
  .toc {
    display: none;
  }

  .main {
    grid-template-columns: max-content 1fr 0;
  }
}

@media screen and (max-width: 999px) {
  .header {
    .toggle {
      display: inline-block;
    }
  }

  .main {
    grid-template-columns: 0 1fr 0;
  }
}
</style>
