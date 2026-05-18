import React from 'react';

interface SilverCoinProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const SilverCoin: React.FC<SilverCoinProps> = ({ size = 64, className = '', style }) => {
  return (
    <div
      className={`flex items-center justify-center ${className}`}
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: 'radial-gradient(circle at 30% 30%, #e5e7eb, #9ca3af, #4b5563)',
        boxShadow: 'inset -4px -4px 8px rgba(0,0,0,0.3), 0 8px 24px rgba(0,0,0,0.4)',
        ...style,
      }}
    >
      <div
        style={{
          width: size * 0.7,
          height: size * 0.7,
          borderRadius: '50%',
          background: 'radial-gradient(circle at 30% 30%, #f3f4f6, #d1d5db, #6b7280)',
        }}
      />
    </div>
  );
};

export default React.memo(SilverCoin);
