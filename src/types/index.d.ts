declare module 'ios-mo' {
  export interface IOSModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    description?: string;
    children?: React.ReactNode;
    actions?: Array<{
      label: string;
      onClick: () => void;
      variant?: 'outline' | 'default'
    }>;
  }

  export const IOSModal: React.FC<IOSModalProps>;
}
