# design website layout

## our goal

- [x] A sticky header.
  > position: fixed
- [x] A sticky, flexible-width sidebar.
  > gird template column: max-content
- [x] A flexible main content container (that changes width based on the content of the sidebar)
  > gird template column: 1fr
- [x] The sidebar and main content container scroll independently.
  > make container div: overflow-y: scroll;
- [x] Sticky aside for TOC of one page
  > position: sticky
- When scroll y, sync toc to highlight current active item
  > use IntersectionObserver to check visible section, then add `active` css class to style item
