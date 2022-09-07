import { useBoolean, useInViewport } from 'ahooks';
import { clsx } from 'clsx';
import React, { useRef } from 'react';

export default function Image({
  src,
  width = 0,
  height = 0,
  alt = "",
  className = "",
  ...props
}: {
  src: string;
  width?: number;
  height?: number;
  alt?: string;
  className?: string;
}) {
  const imageRef = useRef(null);
  const [inViewport, ratio] = useInViewport(imageRef, {
    threshold: 0.15,
    rootMargin: "100px",
  });
  const [isLoaded, loaded] = useBoolean();
  const [isError, err] = useBoolean();

  return (
    <div className={className} ref={imageRef}>
      {isError ? (
        <div className="px-2 text-center">
          <span className="text-center text-xs font-semibold text-gray-500">
            Image Not Found
          </span>
        </div>
      ) : (
        <img
          src={inViewport ? src : isLoaded ? src : undefined}
          alt={alt}
          height={height}
          width={width}
          className={clsx("h-full w-full object-cover", [
            isLoaded ? "opacity-100" : "opacity-0",
          ])}
          onLoad={() => loaded.setTrue()}
          onError={() => err.setTrue()}
          {...props}
        />
      )}
    </div>
  );
}
