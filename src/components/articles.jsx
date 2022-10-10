import React from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';
import Article from './article';

const Articles = ({ isVisible = true }) => {
  const animation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
  });

  return (
    <animated.div className="flex container max-w-screen-lg m-auto px-4 flex-col" style={animation}>
      <div>
        <h2 className="text-3xl leading-9 tracking-tight font-extrabold text-gray-400 sm:text-4xl sm:leading-10">
          Some People Have Said... 
        </h2>
      </div>

      <div className="mt-12 grid gap-16 border-t-2 border-gray-100 pt-12 lg:grid-cols-3 lg:col-gap-5 lg:row-gap-12 flex-row">
        <Article
          description="blah"
          date="name"
        />
        
        <Article
          description="blah"
          date="name"
        />

        <Article
          description="blah"
          date="name"
        />
      </div>
    </animated.div>
  );
};

Articles.propTypes = {
  isVisible: PropTypes.bool,
};

Articles.defaultProps = {
  isVisible: true,
};

export default Articles;
