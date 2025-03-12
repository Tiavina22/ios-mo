import { ReactNode } from 'react';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  description?: string;
  actions?: ModalAction[];
  size?: 'sm' | 'md' | 'lg' | 'full';
  position?: 'bottom' | 'center';
  variant?: 'default' | 'sheet' | 'alert' | 'actionSheet';
  showCloseButton?: boolean;
  closeOnOutsideClick?: boolean;
  className?: string;
}

export interface ModalAction {
  label: string;
  onClick: () => void;
  variant?: 'default' | 'destructive' | 'outline' | 'ghost';
  className?: string;
}