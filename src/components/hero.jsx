import React from 'react';
import { useSpring, animated } from 'react-spring';
import BackgroundShapes from './background-shapes';

const Hero = ({
  name, title, description, button,
}) => {
  const loadInAnimation = useSpring({
    opacity: 1,
    transform: 'translateX(0)',
    from: {
      opacity: 0,
      transform: 'translateX(-20px)',
    },
  });

  return (
    <section className="relative">
      <div
        className="relative container max-w-screen-lg m-auto flex px-4 h-100 z-10"
        style={{
          minHeight: '75vh',
        }}
      >
        <animated.div className="m-auto w-full h-full" style={loadInAnimation}>
          <h1 className="text-purple-500 text-xl mb-8 leading-tight font-bold">{name}</h1>
          <h2 className="text-gray-400 text-4xl md:text-6xl mb-8 leading-none font-extrabold max-w-3xl" dangerouslySetInnerHTML={{ __html: title }} />
          <p className="text-gray-500 text-base leading-6">{description}</p>

          {button || null}
        </animated.div>
      </div>

      <BackgroundShapes />
    </section>
  );
};

export default Hero;
