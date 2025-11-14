import './Gradient.css';

export default function GradientText({
  children = null,
  className = '',
  colors = ['#A8FFD9', '#80CFFF', '#A8FFD9', '#80CFFF', '#A8FFD9'],
  animationSpeed = 8,
  showBorder = false
}: {
    children: React.ReactNode;
    className?: string;
    colors?: string[];
    animationSpeed?: number;
    showBorder?: boolean;
  }

) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`,
    animationDuration: `${animationSpeed}s`
  };

  return (
    <div className={`animated-gradient-text ${className}`}>
      {showBorder && <div className="gradient-overlay" style={gradientStyle}></div>}
      <div className="text-content" style={gradientStyle}>
        {children}
      </div>
    </div>
  );
}