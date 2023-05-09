import React, { Suspense } from "react";
import { Navigate, useLocation, useRoutes } from "react-router-dom"
import "./app.css"
import CustomLoader from "./Components/CustomLoader/CustomLoader";
import ProtectedRoute from "./Pages/ProtectedRoute";

const LogIn = React.lazy(() => import('./Pages/LogIn/LogIn'));
const Dashboard = React.lazy(() => import('./Pages/Dashboard/Dashboard'));

function App() {
  const routes = useRoutes([
    {
      path: '',
      element: <Navigate to="/login" />
    },
    {
      path: "/login",
      element: <LogIn />
    },
    {
      path: "/dashboard",
      element: <ProtectedRoute> <Dashboard /> </ProtectedRoute>
    }
  ])

  return <Suspense fallback={<CustomLoader />}>{routes}</Suspense>;
}

export default App



