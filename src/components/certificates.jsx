import React from 'react';

const Certificates = () => (
  <div className="flex container max-w-screen-lg m-auto px-4 flex-col mt-32">
    <div>
      <h2 className="text-3xl leading-9 tracking-tight font-extrabold text-gray-400 sm:text-4xl sm:leading-10">
        Certificates
      </h2>
    </div>

    <div className="mt-12 grid gap-16 border-t-2 border-gray-100 pt-12">
      <dl>
        <div className="md:grid md:grid-cols-12 md:gap-8">
          <dt className="md:col-span-5">
            <h3 className="text-base leading-6 font-medium text-gray-400 ">
              Sitecore XP 7 Certified Front-End Developer
            </h3>

            <p className="text-base leading-6 text-gray-500">
              August 2014
            </p>
          </dt>
          <dd className="mt-2 md:mt-0 md:col-span-7">
            <p className="text-base leading-6 text-gray-500 mb-3">
              Work as an effective front-end developer on a Sitecore project by
              adapting existing skills and practices to suit a content managed
              environment.
            </p>
            <p className="text-base leading-6 text-gray-500 mb-3">
              Build modular HTML, CSS, and JavaScript that supports Sitecore’s presentation
              engine, the Page Editor, and Sitecore’s marketing features.
            </p>
            <p className="text-base leading-6 text-gray-500">
              Know how to communicate with back-end developers to understand their implementation
              requirements, and produce a front end that facilitates these needs.
            </p>
          </dd>
        </div>
      </dl>
    </div>
  </div>
);

export default Certificates;
