// import "./app.css";
import { useState, useEffect } from "preact/hooks";
// Components
import { Navegation } from "./components/navegation.tsx";
// route manager
import { goTo, Router } from "./router.tsx";
// Papes
import { Home } from "./pages/home.tsx";
import { SeguridadInformacion } from "./pages/SeguridadInformacion.tsx";
import { BuenasPracticas } from "./pages/BuenasPracticas.tsx";
import { EticaDigital } from "./pages/EticaDigital.tsx";
import { CasosPracticos } from "./pages/CasosPracticos.tsx";

export function App() {
  //If the page was reloaded, it doesn't take the current argument and the rendering becomes corrupted; this load by default the page #1 Home to avoid this problem.
  goTo("1");

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlShow = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
      // Si haces scroll hacia abajo y has bajado más de 100px, oculta
      setShow(false);
    } else {
      // Si haces scroll hacia arriba, muestra
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlShow);
    return () => {
      window.removeEventListener("scroll", controlShow);
    };
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`fixed  left-0 w-full   mx-auto px-4 sm:px-6 lg:px-8  bg-gray-100 transition-all duration-300 z-50 
      ${show ? "top-0" : "-top-20"}`}
      >
        <div
          className={"flex  w-full  mx-auto px-4 sm:px-6 lg:px-8  bg-gray-100 "}
        >
          {" "}
        </div>
        <Navegation />
      </header>
      <span>"" </span>
      <main class="flex-grow w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Router defaultRoute="1">
          <Home route="1" />
          <SeguridadInformacion route="2" />
          <EticaDigital route="3" />
          <BuenasPracticas route="4" />
          <CasosPracticos route="5" />
        </Router>
      </main>
      <footer class="mt-auto"> footer </footer>
    </>
  );
}
