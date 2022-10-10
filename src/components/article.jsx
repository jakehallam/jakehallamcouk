import React from 'react';

const Article = ({
  tag, title, description, link, date, metadata,
}) => (
  <div>
    <p className="mt-3 text-base leading-6 text-gray-500" dangerouslySetInnerHTML={{ __html: description }} />

    <div className="mt-6 flex items-center">
      <div className="flex text-sm leading-5 text-gray-500">
        {date && (
          <>
            <time dateTime="2020-03-16">
              {date}
            </time>
          </>
        )}
        <span>
          {metadata}
        </span>
      </div>
    </div>
  </div>
);

export default Article;
