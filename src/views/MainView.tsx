import { InsetContainer } from 'components/InsetContainer';
import { Navigation } from 'containers/Navigation';
import React from 'react';
import { Outlet } from 'react-router-dom';

export const MainView = () => {
  return (
    <InsetContainer>
      <Navigation />
      <Outlet />
    </InsetContainer>
  );
};
