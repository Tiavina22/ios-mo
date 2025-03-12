import React, { useState } from 'react';
import { IOSModal } from '../lib/ios-modal/IOSModal';
import { CodeBlock } from '../components/CodeBlock';

export function Examples() {
  const [defaultOpen, setDefaultOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [actionSheetOpen, setActionSheetOpen] = useState(false);

  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-2xl font-bold mb-4">Default Modal</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <button
              onClick={() => setDefaultOpen(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Open Default Modal
            </button>
            <IOSModal
              isOpen={defaultOpen}
              onClose={() => setDefaultOpen(false)}
              title="Welcome"
              description="This is the default modal style"
              actions={[
                {
                  label: 'Cancel',
                  onClick: () => setDefaultOpen(false),
                  variant: 'outline'
                },
                {
                  label: 'Continue',
                  onClick: () => setDefaultOpen(false)
                }
              ]}
            >
              <p>This is the default modal with a clean, iOS-like design.</p>
            </IOSModal>
          </div>
          <CodeBlock
            code={`<IOSModal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Welcome"
  description="This is the default modal style"
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
  <p>Modal content here</p>
</IOSModal>`}
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Sheet Modal</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <button
              onClick={() => setSheetOpen(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Open Sheet Modal
            </button>
            <IOSModal
              isOpen={sheetOpen}
              onClose={() => setSheetOpen(false)}
              variant="sheet"
              title="Sheet Modal"
              actions={[
                {
                  label: 'Done',
                  onClick: () => setSheetOpen(false)
                }
              ]}
            >
              <div className="py-4">
                <p>This modal variant mimics the iOS sheet presentation style.</p>
              </div>
            </IOSModal>
          </div>
          <CodeBlock
            code={`<IOSModal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  variant="sheet"
  title="Sheet Modal"
  actions={[
    {
      label: 'Done',
      onClick: () => setIsOpen(false)
    }
  ]}
>
  <p>Sheet content here</p>
</IOSModal>`}
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Alert Modal</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <button
              onClick={() => setAlertOpen(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Open Alert Modal
            </button>
            <IOSModal
              isOpen={alertOpen}
              onClose={() => setAlertOpen(false)}
              variant="alert"
              size="sm"
              position="center"
              title="Delete Item"
              description="Are you sure you want to delete this item? This action cannot be undone."
              actions={[
                {
                  label: 'Cancel',
                  onClick: () => setAlertOpen(false),
                  variant: 'outline'
                },
                {
                  label: 'Delete',
                  onClick: () => setAlertOpen(false),
                  variant: 'destructive'
                }
              ]}
            />
          </div>
          <CodeBlock
            code={`<IOSModal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  variant="alert"
  size="sm"
  position="center"
  title="Delete Item"
  description="Are you sure you want to delete this item?"
  actions={[
    {
      label: 'Cancel',
      onClick: () => setIsOpen(false),
      variant: 'outline'
    },
    {
      label: 'Delete',
      onClick: () => setIsOpen(false),
      variant: 'destructive'
    }
  ]}
/>`}
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Action Sheet</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <button
              onClick={() => setActionSheetOpen(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Open Action Sheet
            </button>
            <IOSModal
              isOpen={actionSheetOpen}
              onClose={() => setActionSheetOpen(false)}
              variant="actionSheet"
              title="Share"
              actions={[
                {
                  label: 'Copy Link',
                  onClick: () => setActionSheetOpen(false)
                },
                {
                  label: 'Share on Twitter',
                  onClick: () => setActionSheetOpen(false)
                },
                {
                  label: 'Share on Facebook',
                  onClick: () => setActionSheetOpen(false)
                },
                {
                  label: 'Delete',
                  onClick: () => setActionSheetOpen(false),
                  variant: 'destructive'
                }
              ]}
            />
          </div>
          <CodeBlock
            code={`<IOSModal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  variant="actionSheet"
  title="Share"
  actions={[
    {
      label: 'Copy Link',
      onClick: () => setIsOpen(false)
    },
    {
      label: 'Share on Twitter',
      onClick: () => setIsOpen(false)
    },
    {
      label: 'Share on Facebook',
      onClick: () => setIsOpen(false)
    },
    {
      label: 'Delete',
      onClick: () => setIsOpen(false),
      variant: 'destructive'
    }
  ]}
/>`}
          />
        </div>
      </section>
    </div>
  );
}