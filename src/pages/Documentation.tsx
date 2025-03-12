import { CodeBlock } from '../components/CodeBlock';

export function Documentation() {
  return (
    <div className="prose prose-blue dark:prose-invert max-w-none">
      <h1>Documentation</h1>
      
      <section>
        <h2>Installation</h2>
        <CodeBlock
          code={`npm install ios-modal`}
          language="bash"
        />
      </section>

      <section>
        <h2>Basic Usage</h2>
        <p>
          Import the IOSModal component and use it in your React application:
        </p>
        <CodeBlock
          code={`import { IOSModal } from ios-modal';
import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <IOSModal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      title="Welcome"
      description="Modal description"
      actions={[
        {
          label: 'Cancel',
          onClick: () => setIsOpen(false),
          variant: 'outline'
        },
        {
          label: 'Continue',
          onClick: () => setIsOpen(false)
        }
      ]}
    >
      <div>Modal content here</div>
    </IOSModal>
  );
}`}
        />
      </section>

      <section>
        <h2>Props</h2>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Prop</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>isOpen</td>
                <td>boolean</td>
                <td>required</td>
                <td>Controls the visibility of the modal</td>
              </tr>
              <tr>
                <td>onClose</td>
                <td>{'() => void'}</td>
                <td>required</td>
                <td>Function called when the modal should close</td>
              </tr>
              <tr>
                <td>children</td>
                <td>ReactNode</td>
                <td>required</td>
                <td>Content to be rendered inside the modal</td>
              </tr>
              <tr>
                <td>title</td>
                <td>string</td>
                <td>undefined</td>
                <td>Modal title</td>
              </tr>
              <tr>
                <td>description</td>
                <td>string</td>
                <td>undefined</td>
                <td>Modal description</td>
              </tr>
              <tr>
                <td>actions</td>
                <td>ModalAction[]</td>
                <td>[]</td>
                <td>Array of action buttons</td>
              </tr>
              <tr>
                <td>size</td>
                <td>{'\'sm\' | \'md\' | \'lg\' | \'full\''}</td>
                <td>md</td>
                <td>Controls the width of the modal</td>
              </tr>
              <tr>
                <td>position</td>
                <td>{'\'bottom\' | \'center\''}</td>
                <td>bottom</td>
                <td>Modal position on screen</td>
              </tr>
              <tr>
                <td>variant</td>
                <td>{'\'default\' | \'sheet\' | \'alert\' | \'actionSheet\''}</td>
                <td>default</td>
                <td>Modal style variant</td>
              </tr>
              <tr>
                <td>showCloseButton</td>
                <td>boolean</td>
                <td>true</td>
                <td>Show/hide the close button</td>
              </tr>
              <tr>
                <td>closeOnOutsideClick</td>
                <td>boolean</td>
                <td>true</td>
                <td>Close modal when clicking outside</td>
              </tr>
              <tr>
                <td>className</td>
                <td>string</td>
                <td>undefined</td>
                <td>Additional CSS classes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Modal Variants</h2>
        <h3>Default</h3>
        <p>The standard modal with a clean, iOS-like design.</p>
        
        <h3>Sheet</h3>
        <p>A bottom sheet style modal that slides up from the bottom of the screen.</p>
        
        <h3>Alert</h3>
        <p>A compact, centered modal perfect for alerts and confirmations.</p>
        
        <h3>Action Sheet</h3>
        <p>An iOS-style action sheet with a list of actions.</p>
      </section>

      <section>
        <h2>Accessibility</h2>
        <p>The modal is built with accessibility in mind:</p>
        <ul>
          <li>Proper ARIA attributes for modal role and labels</li>
          <li>Focus management and focus trap within the modal</li>
          <li>Keyboard navigation support (Escape to close)</li>
          <li>Screen reader announcements</li>
        </ul>
      </section>
    </div>
  );
}