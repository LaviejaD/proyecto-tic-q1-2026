import { goTo } from "../router.tsx";
import { useState, useEffect, useRef } from "preact/hooks";
export const menuItems = [
  { name: "🏠 Inicio", route: "1" },
  { name: "🔒 Seguridad de la Información", route: "2" },
  { name: "⚖️ Ética Digital", route: "3" },
  { name: "✅ Buenas Prácticas", route: "4" },
  { name: "📊 Caso Práctico", route: "5" },
  { name: "🎬 Recursos Multimedia", route: "6" },
  { name: "📖 Glosario", route: "7" },
  { name: "📞 Contacto", route: "8" },
];
export const Navegation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const componentRef = useRef(null);

  //close menu if click outside of element
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      // 2. Verificar si el clic fue fuera del nodo referenciado
      if (
        componentRef.current &&
        // @ts-ignore
        !componentRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [componentRef]);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg shadow-lg transition-all duration-300 flex items-center gap-2"
      >
        <span>{isOpen ? "✕" : "☰"}</span>
        <span>{isOpen ? "Cerrar menú" : "Menú"}</span>
      </button>
      {isOpen && (
        <nav
          ref={componentRef}
          class="absolute    mt-2 bg-white rounded-lg shadow-xl overflow-hidden min-w-[220px] animate-slideDown"
        >
          <ul class="divide-y divide-gray-100">
            {menuItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => {
                    goTo(item.route);
                    setIsOpen(false);
                  }}
                  class="w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors
                   duration-200 flex items-center gap-2 font-medium"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};
