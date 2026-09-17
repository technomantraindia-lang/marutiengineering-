import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline-white' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  withArrow?: boolean;
  to?: string;
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  withArrow = false,
  to,
  href,
  className = '',
  children,
  ...props
}) => {
  const classes = `btn btn-${variant} btn-${size} ${className}`;

  const content = (
    <>
      <span className="btn-text">{children}</span>
      {withArrow && <ArrowRight className="btn-arrow-icon" size={size === 'sm' ? 15 : size === 'lg' ? 18 : 16} />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
};
