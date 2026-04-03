import "./app.css";
import { Navegation } from "./components/navegation.tsx";
import { Home } from "./pages/home.tsx";
import { SeguridadInformacion } from "./pages/SeguridadInformacion.tsx";
import { Router } from "./router.tsx";

export function App() {
  return (
    <>
      <header
        className={"flex  w-full  mx-auto px-4 sm:px-6 lg:px-8  bg-gray-100 "}
      >
        <Navegation />
      </header>
      <main class="flex-grow w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 axd">
        <Router defaultRoute="1">
          <Home route="1" />
          <SeguridadInformacion route="2" />
        </Router>
      </main>
      <footer class="mt-auto"> footer </footer>
    </>
  );
}
