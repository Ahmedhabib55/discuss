import { Button } from "@nextui-org/react";

import React from "react";
import { useFormStatus } from "react-dom";

interface FormButtonProps {
  children: React.ReactNode;
  classes?: string;
}
const FormButton = ({ children, classes }: FormButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <Button isLoading={pending} type="submit" className={` ${classes}`}>
      {children}
    </Button>
  );
};

export default FormButton;
