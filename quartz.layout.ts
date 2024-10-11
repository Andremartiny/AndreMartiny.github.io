import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [Component.MobileOnly(
    Component.Explorer({
      mapFn: (node) => {
        // dont change name of root node
        if (node.depth > 0) {
          // set emoji for file/folder
          if (node.file) {
            node.displayName = node.displayName
          } else {
            node.displayName = "📁 " + node.displayName
          }
        }
      },
      sortFn: (a, b) => {
        if ((!a.file && !b.file) || (a.file && b.file)) {
          // sensitivity: "base": Only strings that differ in base letters compare as unequal. Examples: a ≠ b, a = á, a = A
          // numeric: true: Whether numeric collation should be used, such that "1" < "2" < "10"
          return a.name.localeCompare(b.name, undefined, {
            numeric: true,
            sensitivity: "base",
          })
        }
        if (a.file && !b.file) {
          return 1
        } else {
          return -1
        }
      },
      filterFn: (node) => {
        // set containing names of everything you want to filter out
        const omit = new Set(["definisjoner og teoremer", "defogteo", "forelesningsnotat"])
        return !omit.has(node.name.toLowerCase())
      },
      order: ["filter", "sort", "map"],
    }))],
  footer: Component.Footer({
    links: {},
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    // Component.sBreadcrumbs(),
    Component.ArticleTitle(),
    // Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.DesktopOnly(
    Component.Explorer({
      mapFn: (node) => {
        // dont change name of root node
        if (node.depth > 0) {
          // set emoji for file/folder
          if (node.file) {
            node.displayName =  node.displayName
          } else {
            node.displayName = "📁 " + node.displayName
          }
        }
      },
      sortFn: (a, b) => {
        if ((!a.file && !b.file) || (a.file && b.file)) {
          // sensitivity: "base": Only strings that differ in base letters compare as unequal. Examples: a ≠ b, a = á, a = A
          // numeric: true: Whether numeric collation should be used, such that "1" < "2" < "10"
          return a.name.localeCompare(b.name, undefined, {
            numeric: true,
            sensitivity: "base",
          })
        }
        if (a.file && !b.file) {
          return 1
        } else {
          return -1
        }
      },
      filterFn: (node) => {
        // set containing names of everything you want to filter out
        const omit = new Set(["definisjoner og teoremer", "defogteo", "forelesningsnotat"])
        return !omit.has(node.name.toLowerCase())
      },
      order: ["filter", "sort", "map"],
    })),
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle()], // , Component.ContentMeta()Component.Breadcrumbs(), 
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.DesktopOnly(Component.Explorer({
      mapFn: (node) => {
        // dont change name of root node
        if (node.depth > 0) {
          // set emoji for file/folder
          if (node.file) {
            node.displayName = node.displayName
          } else {
            node.displayName = "📁 " + node.displayName
          }
        }
      },
      sortFn: (a, b) => {
        if ((!a.file && !b.file) || (a.file && b.file)) {
          // sensitivity: "base": Only strings that differ in base letters compare as unequal. Examples: a ≠ b, a = á, a = A
          // numeric: true: Whether numeric collation should be used, such that "1" < "2" < "10"
          return a.name.localeCompare(b.name, undefined, {
            numeric: true,
            sensitivity: "base",
          })
        }
        if (a.file && !b.file) {
          return 1
        } else {
          return -1
        }
      },
      filterFn: (node) => {
        // set containing names of everything you want to filter out
        const omit = new Set(["definisjoner og teoremer", "defogteo", "forelesningsnotat"])
        return !omit.has(node.name.toLowerCase())
      },
      order: ["filter", "sort", "map"],
    }
  )),
    
  ],
  right: [],
}
