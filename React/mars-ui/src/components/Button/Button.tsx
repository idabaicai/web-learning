import React, { HtmlHTMLAttributes } from 'react';
import classNames from 'classnames';

export enum ButtonSize {
  Large =  'lg',
  Small = 'sm'
}

export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link',
}

interface BaseProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children?: React.ReactNode;
  href?: string;
}

type NativeButtonProps = BaseProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseProps & React.AnchorHTMLAttributes<HTMLElement>

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>; // Partial 将所有属性设置为可选

const Button:React.FC<ButtonProps> = (props) => {
  const { 
    btnType, 
    disabled, 
    size, 
    children, 
    href,
    className,
    ...restProps
  } = props;
  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: disabled
  })
  if(btnType === ButtonType.Link) {
    return (
      <a 
        className={classes}
        href={href}
        {...restProps}>
        {children}
      </a>
    )
  } else {
    return (
      <button
        className={classes}
        disabled={disabled}
        {...restProps}
      >
        {children}
      </button>
    )
  }
}
Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default,
  
}

export default Button;
