import {
  BrowserRouter as Router,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import MainLayout from "./layout/MainLayout";
import DashBoardLayout from "./layout/DashBoardLayout";
import DashboardAdmin from "./pages/Admin/DashboardAdmin";
import CreateBerita from "./pages/Admin/BeritaDashboard/CreateBerita";

import UmkmDashboard from "./pages/Admin/UmkmDashboard/UmkmDashboard";
import UmkmPages from "./pages/UMKM/UmkmPages";
import Struktur from "./pages/Struktur/Struktur";
import BeritaDashboard from "./pages/Admin/BeritaDashboard/BeritaDashboard";
import Berita from "./pages/Berita/Berita";
import LayananMasyarakat from "./pages/Layanan/LayananMasyarakat";
import LayananPengaduan from "./pages/Layanan/LayananPengaduan";
import CreateUmkm from "./pages/Admin/UmkmDashboard/CreateUmkm";
import BeritaDetailDashboard, {
  beritaLoader,
} from "./pages/Admin/BeritaDashboard/BeritaDetailDashboard";
import EditBerita from "./pages/Admin/BeritaDashboard/EditBerita";
import UmkmDasboardDetail, {
  umkmLoader,
} from "./pages/Admin/UmkmDashboard/UmkmDasboardDetail";
import EditUmkm from "./pages/Admin/UmkmDashboard/EditUmkm";
import BeritaDetail from "./pages/Berita/BeritaDetail";
import UmkmDetail from "./pages/UMKM/UmkmDetail";
import CreateHeroSection from "./pages/Admin/HeroSectionDashboard/CreateHeroSection";
import LayananPindahDomisili from "./pages/Layanan/LayananPindahDomisili";
import LayananBPJS from "./pages/Layanan/LayananBPJS";
import LayananSKTM from "./pages/Layanan/LayananSKTM";
import HeroSectionDashboard from "./pages/Admin/HeroSectionDashboard/HeroSectionDashboard";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MainLayout />}>
          {/* Homepage */}
          <Route index element={<Home />} />
          {/* halaman Umkm */}
          <Route path="/umkm" element={<UmkmPages />} />
          <Route
            path="/umkm/:id"
            element={<UmkmDetail />}
            loader={umkmLoader}
          />
          <Route path="/struktur" element={<Struktur />} />
          <Route path="/berita" element={<Berita />} />
          <Route
            path="/berita/:id"
            element={<BeritaDetail />}
            loader={beritaLoader}
          />
          <Route path="/layanan" element={<LayananMasyarakat />} />
          <Route path="/pengaduan" element={<LayananPengaduan />} />
          <Route
            path="/LayananSuratPindahDomisili"
            element={<LayananPindahDomisili />}
          />
          <Route path="/LayananPengajuanBPJS" element={<LayananBPJS />} />
          <Route path="/LayananPengajuanSKTM" element={<LayananSKTM />} />
        </Route>
        <Route path="/dashboard" element={<DashBoardLayout />}>
          <Route index element={<DashboardAdmin />} />
          {/* <Route path="BuatBerita" element={<CreateBerita />} /> */}
          <Route path="Berita" element={<BeritaDashboard />} />
          <Route
            path="Berita/:id"
            element={<BeritaDetailDashboard />}
            loader={beritaLoader}
          />
          <Route
            path="Edit-Berita/:id"
            element={<EditBerita />}
            loader={beritaLoader}
          />
          <Route path="Umkm" element={<UmkmDashboard />} />
          <Route
            path="Umkm/:id"
            element={<UmkmDasboardDetail />}
            loader={umkmLoader}
          />
          <Route
            path="Edit-Umkm/:id"
            element={<EditUmkm />}
            loader={umkmLoader}
          />
          <Route path="PostBerita" element={<CreateBerita />} />
          <Route path="PostUmkm" element={<CreateUmkm />} />
          <Route path="HeroSection" element={<HeroSectionDashboard />} />
          <Route path="heroSlider" element={<CreateHeroSection />} />
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
