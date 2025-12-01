import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from '../layouts';
import { Home, About, Contact, NotFound } from '../pages';

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <Layout>
                <Home />
            </Layout>
        ),
    },
    {
        path: '/about',
        element: (
            <Layout>
                <About />
            </Layout>
        ),
    },
    {
        path: '/contact',
        element: (
            <Layout>
                <Contact />
            </Layout>
        ),
    },
    {
        path: '*',
        element: (
            <Layout>
                <NotFound />
            </Layout>
        ),
    },
]);

export const AppRouter: React.FC = () => {
    return <RouterProvider router={router} />;
};
