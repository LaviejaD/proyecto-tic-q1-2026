import { goTo } from "../router";
export const Home = () => {
  return (
    <>
      <div class="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-xl overflow-hidden mb-12">
        <div class="px-6 py-12 md:px-12 md:py-16">
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            InfoSeguro
          </h1>
          <p class="text-xl text-blue-100 mb-6">
            Conocimiento para un mundo digital responsable
          </p>
          <div class="w-20 h-1 bg-yellow-400 rounded mb-6"></div>
          <p class="text-white text-lg md:text-xl leading-relaxed mb-4">
            Vivimos conectados. Cada día compartimos información, trabajamos en
            la nube, usamos redes sociales y dependemos de la tecnología en casi
            todo lo que hacemos. ¿Estamos realmente protegidos? ¿Actuamos con
            ética en el entorno digital?
          </p>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden mb-12">
        <div class="border-b border-gray-200 bg-gray-50 px-6 py-4">
          <h2 class="text-2xl font-bold text-gray-800">
            📌 Sobre este Proyecto
          </h2>
        </div>
        <div class="p-6 md:p-8">
          <p class="text-gray-700 text-lg mb-4">
            Este sitio web ha sido creado como parte del{" "}
            <strong class="text-blue-600">
              Proyecto Final de la asignatura Tecnología de la Información y
              Comunicación I (Q 2026)
            </strong>
            .
          </p>
          <p class="text-gray-700 text-lg mb-6">
            Su objetivo es promover la{" "}
            <strong class="text-blue-600">seguridad de la información</strong> y
            el{" "}
            <strong class="text-blue-600">
              uso responsable de la tecnología
            </strong>
            , aplicando principios de ética digital, diseño web y organización
            de contenidos.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <button
              className={"cursor-pointer group hover:bg-blue-50"}
              onClick={() => goTo("2")}
            >
              <div class="flex items-start space-x-3">
                <span class="text-2xl">🔐</span>
                <div>
                  <h3 class="font-semibold text-gray-800 group-hover:text-blue-600">
                    Seguridad de la Información
                  </h3>
                  <p class="text-gray-600 text-sm">
                    Amenazas, protección, IA, Big Data, Blockchain e IoT
                  </p>
                </div>
              </div>{" "}
            </button>

            <button
              onClick={() => goTo("3")}
              class="group hover:bg-blue-50 cursor-pointer"
            >
              <div class="flex items-start space-x-3">
                <span class="text-2xl">⚖️</span>
                <div>
                  <h3 class="font-semibold text-gray-800 group-hover:text-blue-600">
                    Ética Digital
                  </h3>
                  <p class="text-gray-600 text-sm">
                    Uso responsable, derechos de autor, huella digital
                  </p>
                </div>
              </div>{" "}
            </button>
            <button
              onClick={() => goTo("4")}
              class="group hover:bg-blue-50 cursor-pointer"
            >
              {" "}
              <div class="flex items-start space-x-3  ">
                <span class="text-2xl">✅</span>
                <div>
                  <h3 class="font-semibold text-gray-800 group-hover:text-blue-600">
                    Buenas Prácticas
                  </h3>
                  <p class="text-gray-600 text-sm">
                    Protección de datos, redes sociales seguras
                  </p>
                </div>
              </div>
            </button>
            <button
              onClick={() => goTo("4")}
              class="group hover:bg-blue-50 cursor-pointer"
            >
              <div class="flex items-start space-x-3">
                <span class="text-2xl">📊</span>
                <div>
                  <h3 class="font-semibold text-gray-800 group-hover:text-blue-600">
                    Caso Práctico Real
                  </h3>
                  <p class="text-gray-600 text-sm">
                    Análisis de ciberataques y soluciones éticas
                  </p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div class="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-6">
        <div class="flex items-start space-x-3">
          <span class="text-3xl">🛡️</span>
          <div>
            <p class="text-gray-800 text-lg font-medium">
              "El conocimiento es tu mejor antivirus."
            </p>
            <p class="text-gray-600 mt-2">
              Te invitamos a explorar, aprender y convertirte en un agente de
              cambio digital. ¡Tu seguridad y tu ética en la red comienzan hoy!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
