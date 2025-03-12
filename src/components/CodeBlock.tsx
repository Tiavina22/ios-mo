import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language = 'tsx' }: CodeBlockProps) {
  return (
    <div className="rounded-lg overflow-hidden">
      <SyntaxHighlighter
        language={language}
        style={coldarkDark}
        customStyle={{
          margin: 0,
          padding: '1rem',
          backgroundColor: '#1a1b26',
          borderRadius: '0.5rem',
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}