import { createBrowserRouter, RouterProvider } from "react-router";
import { archiveLoader, dashboardLoader } from "./db/dataLoad";
import ShopingList from "./pages/ShopingList";
import Dashboard from "./pages/Dashboard";
import Archive from "./pages/Archive";
import NotFound from "./pages/NotFound";
import MainLayout from "./pages/MainLayout";
import { ArchiveProvider } from "./context/ArchiveProvider";
import { ShopingProvider } from "./context/ShopingProvider";
import { AmountProvider } from "./context/AmountProvider";
import "./styles/App.css";

const router = createBrowserRouter([
  {
    path: "/grocery-planner",
    element: <MainLayout />,
    HydrateFallback: () => <div>Loading...</div>,
    errorElement: <p>Error loading page</p>,
    children: [
      { index: true, element: <Dashboard />, loader: dashboardLoader },
      { path: "shopinglist", element: <ShopingList /> },
      { path: "archive", element: <Archive />, loader: archiveLoader },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return (
    <div className="container">
      <AmountProvider>
        <ArchiveProvider>
          <ShopingProvider>
            <RouterProvider router={router} />
          </ShopingProvider>
        </ArchiveProvider>
      </AmountProvider>
    </div>
  );
}

export default App;
