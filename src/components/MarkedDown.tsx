import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

import { Copy, Check } from "lucide-react";

interface MarkdownRendererProps {
  content: string;
  copiedText: string | null;
  onCopy: (text: string) => void;
 
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
  content,
  copiedText,
  onCopy,
}) => {
  const markdownComponents = {
    code({ node, inline, className, children, ...props }: any) {
      const match = /language-(\w+)/.exec(className || "");
      const codeString = String(children).replace(/\n$/, "");

      if (!inline && match) {
        return (
          <div className="relative group">
            <div className="flex items-center justify-between bg-[#171717] px-4 py-2 rounded-t-lg ">
              <span className="text-xs font-normal text-white  tracking-wide">
                {match[1]}
              </span>
              <button
                onClick={() => onCopy(codeString)}
                className="text-gray-300 hover:text-white transition-colors p-1 rounded"
              >
                {copiedText === codeString ? (
                  <Check size={14} />
                ) : (
                  <Copy size={14} />
                )}
              </button>
            </div>
            <SyntaxHighlighter
              style={tomorrow}
              customStyle={{ fontSize: "0.9rem" }}
              language={match[1]}
              PreTag="div"
              className="!mt-0 !bg-[#171717] !rounded-t-none"
              {...props}
            >
              {codeString}
            </SyntaxHighlighter>
          </div>
        );
      }

      return (
        <code
          className=" text-white bg-[#4e4c4c] px-2 py-1 my-1 rounded text-sm font-mono "
          {...props}
        >
          {children}
        </code>
      );
    },

    blockquote({ children }: any) {
      return (
        <blockquote className="border-l-4 border-gray-400 pl-4 py-2 my-3 bg-[#424242] rounded-r-lg italic text-white">
          {children}
        </blockquote>
      );
    },
    ul({ children }: any) {
      return (
        <ul className="list-disc ml-5 space-y-3 my-4 text-white">
          {children}
          
        </ul>
      );
    },
    ol({ children }: any) {
      return (
        <ol className="list-decimal ml-5 space-y-3 my-4 text-white">
          {children}
        </ol>
      );
    },
    li({ children }: any) {
      return <li className="leading-relaxed">{children}</li>;
    },
    h1({ children }: any) {
      return (
        <h1 className="text-2xl font-bold text-white mb-3 mt-4">{children}</h1>
      );
    },
    h2({ children }: any) {
      return (
        <h2 className="text-xl font-semibold text-white my-3">
          {children}
        </h2>
      );
    },
    h3({ children }: any) {
      return (
        <h3 className="text-lg font-medium text-white my-3">{children}</h3>
      );
    },
    p({ children }: any) {
      return <p className="leading-relaxed text-gray-200 my-3">{children}</p>;
    },
    a({ href, children }: any) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors"
        >
          {children}
        </a>
      );
    },
   
    table({ children }: { children: React.ReactNode }) {
      return (
        <div className="overflow-x-auto my-4">
          <table className="min-w-full border border-gray-700 rounded-lg overflow-hidden">
            {children}
          </table>
        </div>
      );
    },
    th({ children }: { children: React.ReactNode }) {
      return (
        <th className="bg-gray-800 border border-gray-700 px-4 py-2 text-left font-semibold text-white">
          {children}
        </th>
      );
    },
    td({ children }: { children: React.ReactNode }) {
      return (
        <td className="border border-gray-700 px-4 py-2 text-gray-200">
          {children}
        </td>
      );
    },
  };

  return (
    // <div className="prose prose-invert prose-sm max-w-none">
    <div className="text-base leading-7 font-light text-white prose prose-sm prose-invert max-w-none">
      <ReactMarkdown components={markdownComponents}>{content}</ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
