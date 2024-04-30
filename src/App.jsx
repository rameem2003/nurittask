import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Rootlayout from "./layout/Rootlayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={<Rootlayout />}></Route>)
  );

  return <RouterProvider router={router} />;
}

export default App;
