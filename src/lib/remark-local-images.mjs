import path from "node:path"
import { fileURLToPath } from "node:url"

// Images uploaded via Pages CMS live in src/assets/images and are written into
// Markdown as "/images/...". Point them at the actual file so Astro optimizes them.
const imagesDir = fileURLToPath(new URL("../assets/images/", import.meta.url))

export function remarkLocalImages() {
  return (tree, file) => {
    const walk = (node) => {
      if (node.type === "image" && node.url.startsWith("/images/")) {
        const target = path.join(imagesDir, decodeURI(node.url.slice("/images/".length)))
        const relative = path.relative(path.dirname(file.path), target).split(path.sep).join("/")
        node.url = relative.startsWith(".") ? relative : `./${relative}`
      }
      node.children?.forEach(walk)
    }
    walk(tree)
  }
}
