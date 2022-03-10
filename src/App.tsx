import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useMemo } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { MainView } from 'views/MainView';
import { ThreeSceneView } from 'views/ThreeSceneView';

export const App = () => {
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: 'light',
          primary: {
            main: '#ff97c6',
            contrastText: 'rgba(67,22,131,0.87)',
          },
          secondary: {
            main: '#41ffff',
          },
          background: {
            default: '#fdfbfb',
            paper: '#ffffff',
          },
          divider: '#8ef4ff',
          text: {
            primary: '#1D3557',
          },
        },
        shape: {
          borderRadius: 12,
        },
        typography: {
          fontFamily: '"Roboto Mono", monospace',
          fontWeightLight: 100,
          fontWeightRegular: 300,
          fontWeightMedium: 500,
        },
      }),
    [],
  );

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<MainView />}>
            <Route index element={<Navigate replace to="/scene/blend-modes" />} />
            <Route path="/scene/:scene" element={<ThreeSceneView />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};
