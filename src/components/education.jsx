import React from 'react';

const Education = () => (
  <div className="flex container max-w-screen-lg m-auto px-4 flex-col mt-32">
    <div>
      <h2 className="text-3xl leading-9 tracking-tight font-extrabold text-gray-400 sm:text-4xl sm:leading-10">
        Education
      </h2>
    </div>

    <div className="mt-12 grid gap-16 border-t-2 border-gray-100 pt-12">
      <dl>
        <div className="md:grid md:grid-cols-12 md:gap-8">
          <dt className="md:col-span-5">
            <h3 className="text-base leading-6 font-medium text-gray-400 ">
              Manchester Metropolitan University
            </h3>

            <p className="text-base leading-6 text-gray-500">
              2009 - 2013
            </p>
          </dt>
          <dd className="mt-2 md:mt-0 md:col-span-7">
            <ul className="text-base leading-1 text-gray-500 mb-3">
              <li>Bachelor of Science (BSc), Software Engineering (First Class Honours)</li>
            </ul>
          </dd>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-6 md:grid md:grid-cols-12 md:gap-8">
          <dt className="md:col-span-5">
            <h3 className="text-base leading-6 font-medium text-gray-400 ">
              Wigan and Leigh College
            </h3>

            <p className="text-base leading-6 text-gray-500">
              2007 - 2009
            </p>
          </dt>
          <dd className="mt-2 md:mt-0 md:col-span-7">
            <ul className="text-base leading-1 text-gray-500 mb-3">
              <li className="mb-1">BTEC National Diploma: Software Development (Distinction, Distinction, Distinction)</li>
              <li className="mb-1">Key Skills: Communication Level 3 (Pass)</li>
              <li>Key Skills: Application of Number (Pass)</li>
            </ul>
          </dd>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-6 md:grid md:grid-cols-12 md:gap-8">
          <dt className="md:col-span-5">
            <h3 className="text-base leading-6 font-medium text-gray-400 ">
              Deanery High School
            </h3>

            <p className="text-base leading-6 text-gray-500">
              2001 - 2007
            </p>
          </dt>
          <dd className="mt-2 md:mt-0 md:col-span-7">
            <ul className="text-base leading-6 text-gray-500 mb-3">
              <li className="mb-1">HP IT Essentials 1 Certificate (Pass)</li>
              <li className="mb-1">Business Studies AS Level</li>
              <li className="mb-1">Geography AS Level</li>
              <li>10 GCSEs at A* - C including English, Science and Mathematics</li>
            </ul>
          </dd>
        </div>
      </dl>
    </div>
  </div>
);

export default Education;
