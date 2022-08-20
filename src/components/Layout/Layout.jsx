import { AppBar } from 'components';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div display="grid" gridtemplatecolumns="200px 1fr">
      <AppBar />
      <Outlet />
    </div>
  );
};
