import React from 'react';
import PremiumGlassButton from './PremiumGlassButton';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

/**
 * EyeFollowButton Component
 * Renders the reference liquid glass pill button with 70% white opacity
 * and mouse-tracking eyes across the entire application.
 */
export default function EyeFollowButton({
  children,
  onClick,
  type = 'button',
  size = 'md', // 'sm' | 'md' | 'lg'
  icon = 'none', // 'up-right' | 'right' | 'none' | ReactNode
  className = '',
  showEye = true,
  baseColor = '#000000',
  glassColor = '#ffffff',
}) {
  const renderIcon = () => {
    if (React.isValidElement(icon)) return icon;
    if (icon === 'up-right') {
      return <ArrowUpRight className="w-4 h-4 text-brand-red ml-1 shrink-0" />;
    }
    if (icon === 'right') {
      return <ArrowRight className="w-4 h-4 text-brand-red ml-1 shrink-0" />;
    }
    return null;
  };

  return (
    <PremiumGlassButton
      onClick={onClick}
      type={type}
      size={size}
      className={className}
      showEye={showEye}
      icon={renderIcon()}
      baseColor={baseColor}
      glassColor={glassColor}
      hoverSpeed={0.7}
    >
      {children}
    </PremiumGlassButton>
  );
}
