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
import DashBoardLayout from "./layout/DashBoardLayout";
import DashboardAdmin from "./pages/DashboardAdmin";
import CreateBerita from "./pages/CreateBerita";
import Berita from "./pages/Berita";
import UmkmDashboard from "./pages/UmkmDashboard";

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
          <Route index element={<DashboardAdmin />} />
          <Route path="BuatBerita" element={<CreateBerita />} />
          <Route path="Berita" element={<Berita />} />
          <Route path="Umkm" element={<UmkmDashboard />} />
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
