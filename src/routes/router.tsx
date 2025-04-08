import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import Club from "../views/Club";
import Contacto from "../views/Contacto";
import Donaciones from "../views/Donaciones";
import Eventos from "../views/Eventos";
import Campañas from "../views/Campañas";
import Nosotros from "../views/Nosotros";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/campañas", element: <Campañas /> },
  { path: "/club", element: <Club /> },
  { path: "/contacto", element: <Contacto /> },
  { path: "/donaciones", element: <Donaciones /> },
  { path: "/eventos", element: <Eventos /> },
  { path: "/nosotros", element: <Nosotros /> }
]);

export default router;



