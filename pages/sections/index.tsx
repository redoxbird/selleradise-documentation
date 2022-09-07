import { routes } from '~/utils/global';

import { Links } from '../_app';

export default function Home() {
  return (
    <div>
      <h1>Sections</h1>
      <Links
        routes={
          routes.find((route) => route.href === "/sections")?.children || []
        }
        level={0}
      />
    </div>
  );
}
