import React from 'react';
import { Route } from 'react-router-dom';
import { useAppSelector } from '../';

interface IPrivateRouteProps {
  path?: string;
  children: React.ReactElement[];
}

function PrivateRoutes({ children }: IPrivateRouteProps) {
  const isAuthenticated = useAppSelector((state) => state.users.isAuthenticated);
  console.log(children)
//   return isAuthenticated ? (
//     <Route path="user" >
//           {
//     ...children
// }
//     </Route>

//   ) : (
//     <></>
//   );
return isAuthenticated ? children : null
}

export default PrivateRoutes;
