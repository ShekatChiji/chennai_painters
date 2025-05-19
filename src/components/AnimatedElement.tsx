import React, { useEffect, useRef, useState } from 'react';

type AnimatedElementProps = {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-in' | 'slide-in-right';
  delay?: number;
  className?: string;
  threshold?: number;
};

const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  animation = 'fade-up',
  delay = 0,
  className = '',
  threshold = 0.2,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  const getAnimationClasses = () => {
    if (!isVisible) {
      return 'opacity-0';
    }

    const baseClasses = 'opacity-100 transition-all duration-700';
    
    const animationClasses = {
      'fade-up': `${baseClasses} transform translate-y-0`,
      'fade-in': baseClasses,
      'slide-in-right': `${baseClasses} transform translate-x-0`,
    };

    return animationClasses[animation];
  };

  const getInitialClasses = () => {
    const initialClasses = {
      'fade-up': 'transform translate-y-10',
      'fade-in': '',
      'slide-in-right': 'transform translate-x-10',
    };

    return initialClasses[animation];
  };

  const style = {
    transitionDelay: `${delay}ms`,
  };

  return (
    <div
      ref={ref}
      className={`${getInitialClasses()} ${getAnimationClasses()} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;