import tikzjax from 'node-tikzjax';
import { visit } from 'unist-util-visit';

const tex2svg = typeof tikzjax === 'function' ? tikzjax : tikzjax.default;

/**
 * Remark plugin that transforms fenced code blocks with language "tikz"
 * into inline SVGs rendered at build time via node-tikzjax.
 *
 * Runs at the remark (MDAST) stage, before Shiki syntax highlighting,
 * so the original language metadata is still available.
 *
 * Markdown usage:
 * ```tikz
 * \begin{tikzpicture}
 *   ...
 * \end{tikzpicture}
 * ```
 */
export function remarkTikz() {
  return async (tree) => {
    const nodes = [];

    visit(tree, 'code', (node, index, parent) => {
      if (node.lang !== 'tikz') return;
      nodes.push({ node, index, parent });
    });

    // Process sequentially — node-tikzjax cannot run multiple instances at once
    for (const { node, index, parent } of nodes) {
      try {
        const src = `\\begin{document}\n${node.value}\n\\end{document}`;
        const svg = await tex2svg(src, {
          embedFontCss: true,
          addToPreamble: '\\DeclareTextSymbolDefault{\\textdollar}{OT1}\n',
        });
        parent.children[index] = {
          type: 'html',
          value: `<div class="tikz-container">${svg}</div>`,
        };
      } catch (error) {
        console.error('Failed to render TikZ:', error);
        parent.children[index] = {
          type: 'html',
          value: `<div class="tikz-container tikz-error"><pre><code>${node.value}</code></pre></div>`,
        };
      }
    }
  };
}
