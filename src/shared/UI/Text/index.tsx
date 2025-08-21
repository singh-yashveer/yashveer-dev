import React, { CSSProperties } from "react";
import { Typography, typographyType } from "./typography";

interface StyleProps {
  typography: CSSProperties;
}

const generateStyles = ({ typography }: StyleProps): React.CSSProperties => ({
  ...typography,
});

const Text = ({
  children,
  typography = "text-body-md-regular",
  style,
  tag: Tag = "p",
  ...props
}: {
  tag?: keyof React.JSX.IntrinsicElements;
  children?: React.ReactNode;
  typography?: typographyType;
  style?: React.CSSProperties;
  color?: string;
} & React.HTMLAttributes<any>) => {
  const typographyStyles = generateStyles({
    typography: Typography[typography],
  });

  return (
    <Tag
      style={{
        ...typographyStyles,
        ...style,
      }}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Text;
