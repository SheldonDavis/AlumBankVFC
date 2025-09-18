import { Outlet } from 'react-router';
import Header from '../Components/Header';
import type { Route } from './+types/shell';

export async function loader({ params, request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const match = url.pathname.match(/\/(.*?)\//);
  const path = match ? match[1] : ``;

  return await { path: path.toString() };
}

export default function Shell({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <Header path={loaderData.path} />
      <main className={``}>
        <Outlet />
      </main>
    </>
  );
}
