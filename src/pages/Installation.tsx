import { CodeBlock } from '../components/CodeBlock';

export function Installation() {
  return (
    <div className="prose prose-blue dark:prose-invert max-w-none">
      <h1>Installation</h1>
      
      <section>
        <h2>NPM</h2>
        <CodeBlock
          code={`npm install ios-mo`}
          language="bash"
        />
      </section>

      <section>
        <h2>Quick Start</h2>
        <p>
          After installation, you can import and use the modal in your React application:
        </p>
        <CodeBlock
          code={`import { IOSModal } from ios-mo';
import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Open Modal
      </button>

      <IOSModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Welcome"
      >
        <p>Hello from iOS Mo!</p>
      </IOSModal>
    </>
  );
}`}
        />
      </section>

      <section>
        <h2>Requirements</h2>
        <ul>
          <li>React 16.8+ (for Hooks support)</li>
          <li>Tailwind CSS (for styling)</li>
        </ul>
      </section>

      <section>
        <h2>TypeScript Support</h2>
        <p>
          The library includes TypeScript definitions out of the box. No additional types need to be installed.
        </p>
      </section>
    </div>
  );
}