import React from 'react';

const VolunteerWork = () => (
  <div className="flex container max-w-screen-lg m-auto px-4 flex-col mt-32">
    <div>
      <h2 className="text-3xl leading-9 tracking-tight font-extrabold text-gray-400 sm:text-4xl sm:leading-10">
        Volunteer Work
      </h2>
    </div>

    <div className="mt-12 grid gap-16 border-t-2 border-gray-100 pt-12">
      <dl>
        <div className="md:grid md:grid-cols-12 md:gap-8">
          <dt className="md:col-span-5">
            <h3 className="text-base leading-6 font-medium text-gray-400 ">
              Manchester Metropolitan University Gamers Society
            </h3>

            <p className="text-base leading-6 text-gray-500">
              August 2010 - June 2011
            </p>
          </dt>
          <dd className="mt-2 md:mt-0 md:col-span-7">
            <ul className="text-base leading-1 text-gray-500 mb-3">
              <li className="mb-1">Managing any transaction within the society account, including the budget</li>
              <li className="mb-1">Running and organising events</li>
              <li className="mb-1">Creating and maintaining communication streams with members and the university</li>
              <li className="mb-1">Liaising with university and media on behalf of the society</li>
              <li>Working as a part of the committee</li>
            </ul>
          </dd>
        </div>
      </dl>
    </div>
  </div>
);

export default VolunteerWork;
