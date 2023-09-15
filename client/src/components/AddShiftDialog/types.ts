import React from "react";

export type AddShiftDialogProps = {
  onSubmit: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isOpen: boolean;
  onClose: () => void;
};
