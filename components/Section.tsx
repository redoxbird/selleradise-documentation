import clsx from 'clsx';
import React from 'react';

import Image from './Image';

const colorsByIndex = new Map([
  [0, "bg-blue-500"],
  [1, "bg-indigo-500"],
]);

const Section = ({ image, title = null, number, tags = [] }) => {
  return (
    <div className="my-10 border-gray-100 border-2 rounded-lg overflow-hidden">
      {title && (
        <div className="flex justify-start items-center border-b-2 bg-gray-50 border-gray-100 p-4">
          {number && (
            <span className="inline-flex text-sm w-5 h-5 bg-gray-700 text-white justify-center items-center rounded-full mr-2 font-semibold">
              {number}
            </span>
          )}{" "}
          <h2 className="text-sm m-0">{title}</h2>
          {tags && tags.length > 0 && (
            <ul className="inline-flex ml-auto pl-3 list-none gap-2 m-0 p-0">
              {tags.map((tag, index) => {
                return (
                  <li
                    className={clsx(
                      " text-white text-xs rounded-full px-3 py-1 font-semibold",
                      colorsByIndex.get(index)
                    )}
                  >
                    {tag}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      )}
      <div>
        <Image
          className="no-spacing-on-image"
          src={image.src}
          alt={image.alt}
        />
      </div>
    </div>
  );
};

export default Section;
