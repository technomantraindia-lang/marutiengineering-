import React from 'react';
import './Badge.css';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'orange' | 'navy' | 'outline' | 'subtle';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'subtle',
  className = ''
}) => {
  return (
    <span className={`badge badge-${variant} ${className}`}>
      {children}
    </span>
  );
};
