import '../styles/globals.css';

import { clsx } from 'clsx';
import { nth, startCase } from 'lodash-es';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Image from '~/components/Image';
import { routes } from '~/utils/global';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="flex justify-start items-stretch">
        <nav className="w-72 pt-10 pr-10 pb-16 pl-6 border-r-2 border-gray-100 h-screen fixed top-0 bottom-0 bg-white">
          <a href="https://selleradise.com">
            <Image
              className="bg-transparent w-full px-6 mx-auto mb-10"
              src="/img/logo.png"
            />
          </a>

          <Links routes={routes} level={0} />
        </nav>

        <main className="p-20 w-full prose max-w-none pl-80">
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export const Links = ({ routes, level }: any) => {
  return (
    <ul
      className={clsx([
        "flex flex-col justify-start items-start gap-4 pl-4 mt-4",
        level > 0 && "border-l-2 border-gray-100",
      ])}
    >
      {routes.map((route: any) => {
        const name = route.href.split("/");
        return (
          <li key={`${route.href}-${level}`}>
            <NavLink
              href={route.href}
              name={route.name || startCase(nth(name, -1))}
              isParent={level <= 0}
            />

            {route.children && (
              <Links routes={route.children} level={level + 1} />
            )}
          </li>
        );
      })}
    </ul>
  );
};

const NavLink = ({ href, name, isParent }: any) => {
  const router = useRouter();

  return (
    <Link href={href}>
      <a
        className={`${
          router?.asPath === href ? "text-gray-900 underline" : "text-gray-600"
        } ${isParent && "font-semibold"}`}
      >
        {name}
      </a>
    </Link>
  );
};

export default MyApp;
