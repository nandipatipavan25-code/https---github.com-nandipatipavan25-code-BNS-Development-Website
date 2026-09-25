import React from 'react';
import { ArrowUp, Sparkles, MessageSquare, ArrowRight } from 'lucide-react';
import PremiumGlassButton from './PremiumGlassButton';

/**
 * FluidGlassButton Component
 * Uses the exact WebGL shader from https://welcomed-accessibility-469964.framer.app/
 */
export default function FluidGlassButton({
  onClick,
  icon = 'message', // 'message' | 'top' | 'sparkle' | 'none'
  label = 'Contact Us',
  position = 'bottom-right', // 'bottom-right' | 'inline'
  className = '',
  size = 'md',
  baseColor = '#000000',
  glassColor = '#ffffff',
}) {
  const positionClass =
    position === 'bottom-right'
      ? 'fixed bottom-6 right-6 z-40'
      : 'relative';

  const renderIcon = () => {
    switch (icon) {
      case 'message':
        return <MessageSquare className="w-3.5 h-3.5 text-brand-red ml-1" />;
      case 'top':
        return <ArrowUp className="w-3.5 h-3.5 text-brand-red ml-1" />;
      case 'sparkle':
        return <Sparkles className="w-3.5 h-3.5 text-brand-red ml-1" />;
      case 'right':
        return <ArrowRight className="w-3.5 h-3.5 text-brand-red ml-1" />;
      default:
        return null;
    }
  };

  return (
    <div className={`${positionClass} ${className}`}>
      <PremiumGlassButton
        onClick={onClick}
        size={size}
        baseColor={baseColor}
        glassColor={glassColor}
        hoverSpeed={0.65}
        icon={renderIcon()}
      >
        {label}
      </PremiumGlassButton>
    </div>
  );
}
