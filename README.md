# iOS Mo for React

A beautiful, accessible, and customizable iOS-style modal component for React applications.

## Features

- 🎨 Beautiful iOS-like design and animations
- 🌫️ Backdrop blur effect
- 📱 Responsive and mobile-friendly
- ♿ Fully accessible (WAI-ARIA compliant)
- ⌨️ Keyboard navigation support
- 🎯 TypeScript support
- 🎨 Highly customizable
- 🪶 Lightweight

## Installation

```bash
npm install ios-mo
```

## Usage

```tsx
import { IOSModal } from 'ios-mod';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <IOSModal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      title="Welcome"
      description="This is a modal description"
      actions={[
        {
          label: 'Cancel',
          onClick: () => setIsOpen(false),
          variant: 'outline'
        },
        {
          label: 'Confirm',
          onClick: () => {
            // Handle confirmation
            setIsOpen(false);
          }
        }
      ]}
    >
      <div>Your modal content here</div>
    </IOSModal>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| isOpen | boolean | required | Controls the visibility of the modal |
| onClose | () => void | required | Function called when the modal should close |
| children | ReactNode | required | Content to be rendered inside the modal |
| title | string | undefined | Modal title |
| description | string | undefined | Modal description |
| actions | ModalAction[] | [] | Array of action buttons |
| size | 'sm' \| 'md' \| 'lg' \| 'full' | 'md' | Controls the width of the modal |
| position | 'bottom' \| 'center' | 'bottom' | Modal position on screen |
| showCloseButton | boolean | true | Show/hide the close button |
| closeOnOutsideClick | boolean | true | Close modal when clicking outside |
| className | string | undefined | Additional CSS classes |

### ModalAction Type

```typescript
interface ModalAction {
  label: string;
  onClick: () => void;
  variant?: 'default' | 'destructive' | 'outline' | 'ghost';
  className?: string;
}
```

## Accessibility

The modal is built with accessibility in mind:

- Proper ARIA attributes
- Focus management
- Keyboard navigation
- Screen reader support
- Focus trap within the modal

## License

MIT © Tiavina