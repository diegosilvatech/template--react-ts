import * as s from './button.styles';

export type ButtonProps = {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset';
  isFullWidth?: boolean;
  handleClick?: () => void;
};

const Button = ({
  children = 'button label example',
  variant = 'primary',
  type = 'button',
  isFullWidth = false,
  handleClick
}: ButtonProps) => {
  return (
    <s.ButtonWrapper
      variant={variant}
      type={type}
      isFullWidth={isFullWidth}
      onClick={handleClick}
    >
      {children}
    </s.ButtonWrapper>
  );
};

export { Button };
