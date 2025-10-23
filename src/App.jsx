import { createBrowserRouter, RouterProvider } from "react-router";
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
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "shopinglist", element: <ShopingList /> },
      { path: "archive", element: <Archive /> },
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
