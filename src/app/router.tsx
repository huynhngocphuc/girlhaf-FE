import { createBrowserRouter } from 'react-router-dom'
import { PrivateRoute } from '@/components/routing/PrivateRoute'
import { AppLayout } from '@/layouts/AppLayout'
import { AdminPage } from '@/pages/AdminPage'
import { HomePage } from '@/pages/HomePage'
import { LoginPage } from '@/pages/LoginPage'
import { NotFoundPage } from '@/pages/NotFoundPage'

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/login', element: <LoginPage /> },
      {
        element: <PrivateRoute />,
        children: [
          { path: '/account', element: <HomePage /> },
          { path: '/admin', element: <AdminPage /> },
        ],
      },
    ],
  },
])
