import React, { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  // Use a ref to target the container where elements will be appended
  const backgroundRef = useRef(null);

  useEffect(() => {
    const numElements = 100;
    const body = backgroundRef.current; // Use the ref as the container
    const codeChars = ['0', '1', 'a', 'b', 'c', ';', '{', '}', '<', '>', '=', '+', '-'];
    const dbChars = ['{ }', '< >', '⊕', '#', '$', '&', '%'];
    const bugChars = ['🐞','⚡', '💻', '🌐', '💾', '🔌', '📡', '⚙️', '📈', '🔒', '🔑', '🚀', '🧠'];
    const symbolChars = ['/', '\\'];

    function getRandom(min, max) {
      return Math.random() * (max - min) + min;
    }

    const createdElements = []; // To keep track of elements for cleanup

    function createFloatingElement(className, chars) {
      const element = document.createElement('div');
      element.className = `floating-element ${className}`;
      element.textContent = chars[Math.floor(Math.random() * chars.length)];
      element.style.left = `${getRandom(0, 100)}vw`;
      element.style.top = `${getRandom(0, 100)}vh`;
      element.style.animationDelay = `${getRandom(0, 5)}s`;
      element.style.animationName = 'float';

      // Append only if the ref current exists (component is mounted)
      if (body) {
        body.appendChild(element);
        createdElements.push(element); // Add to cleanup list

        // Use a flag to prevent creating new elements if component unmounts
        let componentMounted = true;
        const handleAnimationIteration = () => {
          if (componentMounted) { // Only create new if component is still mounted
            element.remove();
            createFloatingElement(className, chars);
          }
        };

        element.addEventListener('animationiteration', handleAnimationIteration);

        // Cleanup function for useEffect: remove elements and listeners
        return () => {
            componentMounted = false; // Set flag to false
            element.removeEventListener('animationiteration', handleAnimationIteration);
            element.remove();
        };
      }
    }

    // Initial creation of elements
    for (let i = 0; i < numElements; i++) {
      const type = Math.random();
      if (type < 0.35) {
        createFloatingElement('code', codeChars);
      } else if (type < 0.6) {
        createFloatingElement('db', dbChars);
      } else if (type < 0.85) {
        createFloatingElement('bug', bugChars);
        
      } else {
        createFloatingElement('symbol', symbolChars);
      }
    }

    // Cleanup function when component unmounts
    return () => {
        createdElements.forEach(el => el.remove()); // Remove all created elements
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div
      ref={backgroundRef} // Attach the ref to this div
      style={{
        position: 'fixed', // Fixed to cover the whole viewport
        top: 0,
        left: 0,
        background:'#10192b',
        width: '100vw',
        height: '100vh',
        zIndex: -1, // Ensure it stays behind other content
        overflow: 'hidden', // Hide overflow from animations
      }}
    >
      {/* Elements will be appended here by JavaScript */}
    </div>
  );
};

export default AnimatedBackground;