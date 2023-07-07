import React, { Suspense } from "react";
import { useRoutes } from 'react-router-dom';
import routeList from "@Layout/routes";
import Layout from "@Layout/Layout";
import './main.css';

function App() {
  const routes = useRoutes(routeList);
  return (
    <Layout>
      <Suspense fallback="Loading...">
        {routes}
      </Suspense>
    </Layout>
  )
}

export default App