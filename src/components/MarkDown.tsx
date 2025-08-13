// MemoizedMarkdown.tsx
import { marked } from 'marked';
import { memo, useMemo } from 'react';
import MarkdownRenderer from './MarkedDown';


function parseMarkdownIntoBlocks(markdown: string): string[] {
  const tokens = marked.lexer(markdown);
  return tokens.map(token => token.raw);
}

const MemoizedMarkdownBlock = memo(
  ({ content, copiedText, onCopy }: { content: string; copiedText: string | null; onCopy: (text: string) => void }) => {
    return <MarkdownRenderer content={content} copiedText={copiedText} onCopy={onCopy} />;
  },
  (prevProps, nextProps) => prevProps.content === nextProps.content
);

MemoizedMarkdownBlock.displayName = 'MemoizedMarkdownBlock';

export const MemoizedMarkdown = memo(
  ({ content, id, copiedText, onCopy }: { content: string; id: string; copiedText: string | null; onCopy: (text: string) => void }) => {
    const blocks = useMemo(() => parseMarkdownIntoBlocks(content), [content]);

    return blocks.map((block, index) => (
      <MemoizedMarkdownBlock
        key={`${id}-block_${index}`}
        content={block}
        copiedText={copiedText}
        onCopy={onCopy}
      />
    ));
  }
);

MemoizedMarkdown.displayName = 'MemoizedMarkdown';
