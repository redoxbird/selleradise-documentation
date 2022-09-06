import '../styles/globals.css';

import { nth, startCase } from 'lodash-es';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const routes: any = [
  {
    href: "/getting-started",
    children: [
      {
        href: "/getting-started/requirements",
      },
      {
        href: "/getting-started/theme-installation",
        children: [
          {
            href: "/getting-started/setup-homepage",
          },
        ],
      },
      {
        href: "/getting-started/plugins-installation",
      },
      {
        href: "/getting-started/import-demo-content",
      },
    ],
  },
];

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="flex justify-start items-stretch">
        <nav className="w-72 py-16 pr-10 pl-6 border-r-2 border-gray-100 h-screen fixed top-0 bottom-0 bg-white">
          <Links routes={routes} />
        </nav>

        <main className="p-20 w-5/6 prose max-w-none pl-80">
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

const Links = ({ routes }: any) => {
  return (
    <ul className="flex flex-col justify-start items-start gap-4 pl-4 mt-4">
      {routes.map((route: any) => {
        const name = route.href.split("/");
        return (
          <li>
            <NavLink
              href={route.href}
              name={startCase(nth(name, -1))}
              isParent={route.children}
            />

            {route.children && <Links routes={route.children} />}
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
          router?.asPath === href
            ? "text-gray-900 underline font-semibold"
            : "text-gray-600"
        } ${isParent && "text-gray-900"}`}
      >
        {name}
      </a>
    </Link>
  );
};

export default MyApp;
