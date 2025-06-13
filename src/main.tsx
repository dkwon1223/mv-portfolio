import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { MantineProvider } from '@mantine/core';
import { createBrowserRouter, RouterProvider } from 'react-router';
import RootLayout from './pages/RootLayout.tsx';
import Overview from './pages/Overview.tsx';
import Projects from './pages/Projects.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        path: "/overview",
        Component: Overview, 
      },
      {
        path: "/projects",
        Component: Projects
      }
    ],
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <MantineProvider>
        <RouterProvider router={router} />
      </MantineProvider>
  </StrictMode>,
)
