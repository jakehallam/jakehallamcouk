import React, { useRef } from 'react';
import Headroom from 'react-headroom';
import Layout from '../components/layout';
import SEO from '../components/seo';
import AnimatedBackground from '../components/animatedBackground';
import WorkExperience from '../components/work-experience';
import ProfilePicture from '../images/profile.png';
import Articles from '../components/articles';
import { HomeHero, HeadroomWrapper, HeaderButton } from '../styles/App.styles';

const IndexPage = () => {
  const homeHeroSection = useRef(0);
  const aboutSection = useRef(0);
  const workExperienceSection = useRef(0);
  const articlesSection = useRef(0);

  return (
    <Layout>
      <SEO title="Developer" />

      <HeadroomWrapper>
        <Headroom disableInlineStyles>
          <div className="p-4 fixed w-full top-0 z-50" style={{ boxShadow: "0px 6px 10px 0px #303b53", background: "rgba(36, 46, 67, 0.9)" }}>
            <div className="mx-auto flex justify-around text-white max-w-screen-lg">
              <HeaderButton className="hover-underline-animation" onClick={() => { homeHeroSection.current.scrollIntoView({ behavior: 'smooth' }) }}>Home</HeaderButton>
              <HeaderButton className="hover-underline-animation" onClick={() => { aboutSection.current.scrollIntoView({ behavior: 'smooth' }) }}>About</HeaderButton>
              <HeaderButton className="hover-underline-animation" onClick={() => { workExperienceSection.current.scrollIntoView({ behavior: 'smooth' }) }}>Work Experience</HeaderButton>
              <HeaderButton className="hover-underline-animation" onClick={() => { articlesSection.current.scrollIntoView({ behavior: 'smooth' }) }}>References</HeaderButton>
            </div>
          </div>
        </Headroom>
      </HeadroomWrapper>

      <AnimatedBackground />

      <HomeHero ref={homeHeroSection}>
        <div className="home-hero-container">
          <h1 className="text-5xl text-gray-400 font-extrabold tracking-tight sm:text-5xl">
            Jake Hallam
          </h1>

          <p className="text-xl text-gray-400 tracking-tight sm:text-2xl">Web developer from Manchester</p>
          
          <button class="scroll-down" aria-label="scroll-down" onClick={() => { aboutSection.current.scrollIntoView({ behavior: 'smooth' }) }}></button>
        </div>
      </HomeHero>

      <div className="pt-12 pb-16" ref={aboutSection}>
        <div className="mx-auto max-w-screen-lg mx-auto px-4">
          <div className="relative">
            <div className="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
              <div className="relative sm:py-16 lg:py-0">
                <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
                  <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
                    <img className="absolute inset-0 h-full w-full object-cover" src={ProfilePicture} alt="" />
                    <div className="absolute inset-0 bg-gray-600 mix-blend-multiply" style={{
                      'mix-blend-mode': 'multiply'
                    }}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-600 via-indigo-600 opacity-90"></div>
                    <div className="relative px-8">
                      <blockquote className="mt-8">
                        <div className="relative text-lg font-medium text-white md:flex-grow">
                          <p className="relative">blah blah blah</p>
                        </div>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
                <div className="pt-12 sm:pt-16 lg:pt-20">
                  <div className="text-gray-500 space-y-6">
                    <p className="mb-3">blah</p>
                  
                    <h3 className="mb-4 mt-6 text-base font-semibold tracking-wider text-indigo-600 uppercase">A few extra things... </h3>
                    <p className="mb-3">blah</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-16 mt-32" ref={workExperienceSection}>
          <WorkExperience />
        </div>
{/* 
        <div className="relative pt-32">
          <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
            <h2 className="text-base font-semibold tracking-wider text-indigo-600 uppercase">Some Previous Clients Include;</h2>
            <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">AstraZeneca, Pfizer, Manchester City Council, Jaguar, Land Rover</p>
          </div>
        </div> */}

        <div className="pt-16 mt-32" ref={articlesSection}>
          <Articles />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage;
