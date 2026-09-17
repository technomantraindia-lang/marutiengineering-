import React from 'react';
import './SectionHeading.css';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlightWord?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  variant?: 'light' | 'dark';
  action?: React.ReactNode;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  highlightWord,
  subtitle,
  align = 'left',
  variant = 'light',
  action,
  className = ''
}) => {
  // Render title with highlighted word
  const renderTitle = () => {
    if (!highlightWord) return title;

    const parts = title.split(new RegExp(`(${highlightWord})`, 'gi'));
    return parts.map((part, i) =>
      part.toLowerCase() === highlightWord.toLowerCase() ? (
        <span key={i} className="text-orange">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className={`section-header-wrapper section-header-${align} section-header-${variant} ${className}`}>
      <div className="section-header-content">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2 className="section-title">{renderTitle()}</h2>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
      </div>
      {action && <div className="section-header-action">{action}</div>}
    </div>
  );
};
