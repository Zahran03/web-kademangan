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

import UmkmDashboard from "./pages/UmkmDashboard";
import UmkmPages from "./pages/UmkmPages";
import Struktur from "./pages/Struktur";
import BeritaDashboard from "./pages/BeritaDashboard";
import Berita from "./pages/Berita";
import LayananMasyarakat from "./pages/LayananMasyarakat";
import LayananPengaduan from "./pages/LayananPengaduan";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MainLayout />}>
          {/* Homepage */}
          <Route index element={<Home />} />
          {/* halaman Umkm */}
          <Route path="/umkm" element={<UmkmPages />} />
          <Route path="/struktur" element={<Struktur />} />
          <Route path="/berita" element={<Berita />} />
          <Route path="/layanan" element={<LayananMasyarakat />} />
          <Route path="/pengaduan" element={<LayananPengaduan />} />
        </Route>
        <Route path="/dashboard" element={<DashBoardLayout />}>
          <Route index element={<DashboardAdmin />} />
          <Route path="BuatBerita" element={<CreateBerita />} />
          <Route path="Berita" element={<BeritaDashboard />} />
          <Route path="Umkm" element={<UmkmDashboard />} />
          <Route path="PostBerita" element={<CreateBerita />} />
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
