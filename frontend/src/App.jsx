import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import MainLayout from "./layout/MainLayout";
import HomeDashboard from "./components/dashboard/HomeDashboard";

import DashBoardLayout from "./layout/DashBoardLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MainLayout />}>
          {/* Homepage */}
          <Route index element={<Home />} />
          {/* test dashboard */}
        </Route>
        <Route path="/dashboard" element={<DashBoardLayout />}>
          <Route path="navbar" element={<HomeDashboard />} />
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
