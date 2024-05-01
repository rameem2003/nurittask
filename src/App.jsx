import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Rootlayout from "./layout/Rootlayout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Product from "./pages/Product";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product" element={<Product />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
