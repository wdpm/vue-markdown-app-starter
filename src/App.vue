<template>
  <header class="header">
    <a id="toggle">toggle</a>|
    <router-link to="/">Home</router-link>
    |
    <router-link to="/about">About</router-link>
  </header>
  <main>
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
        <li><a href="">Nav 333333333333333333333</a></li>
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
    <article class="markdown-body">
      <router-view />
    </article>
    <aside class="toc">
      <ol>
        <li><a href="#introduction">Introduction</a></li>
        <li><a href="#request-response">Request &amp; Response</a></li>
        <li><a href="#authentication">Authentication</a></li>
        <li>
          <a href="#endpoints">Endpoints</a>
          <ul>
            <li class=""><a href="#endpoints--root">Root</a></li>
            <li class="">
              <a href="#endpoints--cities-overview">Cities Overview</a>
            </li>
            <li class=""><a href="#endpoints--city-detail">City Detail</a></li>
            <li class=""><a href="#endpoints--city-config">City Config</a></li>
            <li class="">
              <a href="#endpoints--city-spots-overview">City Spots Overview</a>
            </li>
            <li class="">
              <a href="#endpoints--city-spot-detail">City Spot Detail</a>
            </li>
            <li class="">
              <a href="#endpoints--city-icons-overview">City Icons Overview</a>
            </li>
            <li class="">
              <a href="#endpoints--city-icon-detail">City Icon Detail</a>
            </li>
          </ul>
        </li>
        <li class=""><a href="#links">Links</a></li>
        <li class=""><a href="#expanders">Expanders</a></li>
        <li class=""><a href="#filters">Filters</a></li>
      </ol>
    </aside>
  </main>
</template>

<script>
export default {
  mounted() {
    // sync toc when scroll html
    window.addEventListener("DOMContentLoaded", () => {

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          const id = entry.target.getAttribute("id");
          if (entry.intersectionRatio > 0) {
            document.querySelector(`.toc li a[href="#${id}"]`).parentElement.classList.add("active");
          } else {
            document.querySelector(`.toc li a[href="#${id}"]`).parentElement.classList.remove("active");
          }
        });
      });

      // Track all sections that have an `id` applied
      document.querySelectorAll("section[id]").forEach((section) => {
        observer.observe(section);
      });

    });

    let toggle = document.getElementById("toggle");
    let main = document.getElementsByTagName("main");
    const nav = document.querySelector(".nav");

    /* max-content 1fr 15em -> max-content 1fr 0 ->  0 1fr 0 */
    toggle.addEventListener("click", function(evt) {
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

// listen for two break point and recover when come across these points
    var mql = window.matchMedia("(min-width: 1200px)");
    var mql2 = window.matchMedia("(min-width: 999px)");

    function resetStyle(e) {
      if (e && e.matches) {
        // document.body.style.backgroundColor = "rgba(255,0,0,.2)";
        // reset previous css style
        main[0].style.gridTemplateColumns = "";
        nav.style.display = "";
        //remove toggle active class if has= 解除toggle激活状态
        toggle.classList.toggle("active", false);
        console.log("reset style on", e.matches);
      } else {
        // document.body.style.backgroundColor = "rgba(0,0,255,.2)";
      }
    }

    mql.addEventListener("change", resetStyle);
    mql2.addEventListener("change", resetStyle);
  }
};
</script>

<style lang="scss">
// https://github.com/sindresorhus/github-markdown-css
@import "~github-markdown-css";
// https://github.com/highlightjs/highlight.js/#es6-modules--import
@import "~highlight.js/styles/github.css";

@import "styles/base";

// for debug visual
* {
  //border: 1px solid rgba(0, 0, 0, 0.3);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #444444;
}

.header {
  padding: 1em;
  border: 1px solid #ccc;
  display: block;
  width: 100%;
  /*margin: 1rem auto;*/
  position: fixed;
  height: 60px;
  color: white;
  background: rgba(0, 0, 0, 0.1);
  z-index: 9;

  a {
    font-weight: bold;
    color: #444444;

    &.router-link-exact-active {
      color: #16e3a4;
    }
  }
}

// override github-markdown-css
.markdown-body {
  box-sizing: border-box;
  //min-width: 200px;
  //max-width: 980px;
  //margin: 0 auto;
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

// app.css
/* 2. Make nav sticky */
/* 3. ScrollSpy active styles (see JS tab for activation) */
.toc li.active > a {
  color: #333;
  font-weight: 500;
}

/* nav Navigation */
.toc {
  position: sticky;
  top: 84px; /*84 =60(header height) + 24 (margin-top) ; hacking no scroll but fixed position as grid item*/
  align-self: start;
  margin-top: 24px;
  padding-left: 0;
  border-left: 1px solid #e557c4;
}

.toc a {
  text-decoration: none;
  display: block;
  padding: 0.125rem 0;
  color: #ccc;
  transition: all 50ms ease-in-out; /* 💡 This small transition makes setting of the active state smooth */
}

.toc a:hover,
.toc a:focus {
  color: #666;
}

ul,
ol {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin-left: 1rem;
}

// toc item style
.table-of-contents {
  ol {
    counter-reset: list-item;
  }

  li {
    display: block;
    counter-increment: list-item;
  }

  li:before {
    content: counters(list-item, '.') ' ';
  }
}


/** page layout **/
main {
  display: grid;
  grid-template-columns: max-content 1fr 15em;
  /*max-width: 100em;*/
  width: 100%;
  position: relative;
  padding-top: 60px;
  transition: all 2s;
}

/** enlarge the sections for this demo, so that we have a long scrollable page **/
section {
  //margin-bottom: 20rem;
}

.nav {
  position: sticky;
  //background-color: #e8aa95;
  border-right: 1px solid darkgrey;
  top: 60px;
  align-self: start;
  height: calc(100vh - 60px);
  overflow-y: scroll;
}

#toggle {
  border: 1px solid red;
  display: none;
}

@media screen and (max-width: 1200px) {
  .toc {
    display: none;
  }

  #toggle {
    display: inline-block;
  }

  main {
    grid-template-columns: max-content 1fr 0;
  }
}

@media screen and (max-width: 999px) {
  main {
    grid-template-columns: 0 1fr 0;
  }
}
</style>
