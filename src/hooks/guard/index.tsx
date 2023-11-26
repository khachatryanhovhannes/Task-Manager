// PrivateRoutes.tsx
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAppSelector } from '../';

interface IPrivateRouteProps {
  path: string;
  element: React.ReactNode;
}

function PrivateRoutes({ element, path }: IPrivateRouteProps) {
  const isAuthenticated = useAppSelector((state) => state.users.isAuthenticated);

  return isAuthenticated ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/signin" />
  );
}

export default PrivateRoutes;
