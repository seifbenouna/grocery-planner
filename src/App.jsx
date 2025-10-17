import ShopingList from "./pages/ShopingList";
import Dashboard from "./pages/Dashboard";
import Archive from "./pages/Archive";
import NotFound from "./pages/NotFound";
import MainLayout from "./pages/MainLayout";
import { ArchiveProvider } from "./context/ArchiveProvider";
import { ShopingProvider } from "./context/ShopingProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AmountProvider } from "./context/AmountProvider";
import "./styles/App.css";

function App() {
  return (
    <div className="container">
      <AmountProvider>
        <ArchiveProvider>
          <ShopingProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<MainLayout />}>
                  <Route index element={<Dashboard />} />
                  <Route path="/shopinglist" element={<ShopingList />} />
                  <Route path="/archive" element={<Archive />} />
                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </ShopingProvider>
        </ArchiveProvider>
      </AmountProvider>
    </div>
  );
}

export default App;
