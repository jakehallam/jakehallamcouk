import React from 'react';

const WorkExperience = () => (
  <div className="flex container max-w-screen-lg m-auto px-4 flex-col">
    <div>
      <h2 className="text-3xl leading-9 tracking-tight font-extrabold text-gray-400 sm:text-4xl sm:leading-10">
        Work Experience
      </h2>
    </div>

    <div className="mt-12 grid gap-16 border-t-2 border-gray-100 pt-12">
      <dl>
        <div className="md:grid md:grid-cols-12 md:gap-8">
          <dt className="md:col-span-5">
            <h3 className="text-base leading-6 font-medium text-gray-400 ">
              HAVAS LYNX Group
            </h3>

            <p className="text-base leading-6 text-gray-500">
              Web developer
              <br />
              April 2020 - Present
            </p>
          </dt>
          <dd className="mt-2 md:mt-0 md:col-span-7">
            <p className="text-base leading-6 text-gray-500 mb-3">
              blah blah
            </p>
          </dd>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-6 md:grid md:grid-cols-12 md:gap-8">
          <dt className="md:col-span-5">
            <h3 className="text-base leading-6 font-medium text-gray-400 ">
              HAVAS LYNX Group
            </h3>

            <p className="text-base leading-6 text-gray-500">
              Junior Web developer
              <br />
              June 2018 - April 2020
            </p>
          </dt>
          <dd className="mt-2 md:mt-0 md:col-span-7">
            <p className="text-base leading-6 text-gray-500">
              blah blah
            </p>
          </dd>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-6 md:grid md:grid-cols-12 md:gap-8">
          <dt className="md:col-span-5">
            <h3 className="text-base leading-6 font-medium text-gray-400 ">
              The Fountain Company Ltd
            </h3>

            <p className="text-base leading-6 text-gray-500">
              Computer Aided Design Technician
              <br />
              September 2015 - June 2018
            </p>
          </dt>
          <dd className="mt-2 md:mt-0 md:col-span-7">
            <p className="text-base leading-6 text-gray-500">
              blah blah
            </p>
          </dd>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-6 md:grid md:grid-cols-12 md:gap-8">
          <dt className="md:col-span-5">
            <h3 className="text-base leading-6 font-medium text-gray-400 ">
              AMH Air Conditioning Ltd
            </h3>

            <p className="text-base leading-6 text-gray-500">
              Air Conditioning Technician Apprentice
              <br />
              March 2015 - September 2015
            </p>
          </dt>
          <dd className="mt-2 md:mt-0 md:col-span-7">
            <p className="text-base leading-6 text-gray-500 mb-3">
              blah blah 
            </p>
          </dd>
        </div>
      </dl>
    </div>
  </div>
);

export default WorkExperience;
