export type SelectOption = {
  label: string;
  value: string;
  disabled?: boolean;
};

export type DropdownItem = {
  label: string;
  description?: string;
  onSelect?: () => void;
};

export type ToastTone = 'info' | 'success' | 'warning' | 'error';
