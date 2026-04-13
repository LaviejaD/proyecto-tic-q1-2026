export const Contactame = () => {
  return (
    <>
      <div className="mb-12 text-center">
        <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg px-6 py-2 mb-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Contacto
          </h1>
        </div>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          ¿Tienes dudas, comentarios o sugerencias sobre seguridad digital y
          ética en la red? Escríbeme.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Tarjeta de perfil con más color */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl shadow-xl p-6 md:p-8 border border-blue-200">
          <div className="flex flex-col items-center text-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-md opacity-70"></div>
              <img
                src="https://github.com/LaviejaD.png"
                alt="Foto de perfil de LaviejaD"
                className="w-32 h-32 rounded-full border-4 border-white shadow-md object-cover relative z-10"
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mt-4">LaviejaD</h2>
            <p className="text-blue-700 font-medium bg-blue-100 px-3 py-1 rounded-full inline-block mt-1">
              Estudiante de Tecnologías de la Información
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full my-3"></div>
            <p className="text-gray-700 text-sm max-w-xs">
              Apasionado por la ciberseguridad, la ética digital y el desarrollo
              web. Este sitio es parte de mi proyecto final para TIC I.
            </p>
          </div>

          <div className="mt-6 space-y-3">
            <div className="flex items-center justify-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full py-2 px-4 shadow-sm">
              <svg
                className="w-5 h-5 text-blue-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.26.82-.58 0-.287-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.73.082-.73 1.205.085 1.838 1.237 1.838 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.123-.3-.535-1.52.117-3.16 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.653 1.64.24 2.86.118 3.16.768.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.62-5.476 5.92.43.37.824 1.102.824 2.22 0 1.602-.015 2.894-.015 3.287 0 .322.216.698.83.578C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <a
                href="https://github.com/LaviejaD"
                target="_blank"
                className="text-blue-700 hover:text-blue-900 font-medium"
              >
                github.com/LaviejaD
              </a>
            </div>
          </div>

          <div className="mt-8 flex justify-center space-x-5"></div>
        </div>

        {/* Tarjeta del formulario con gradiente y color */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl shadow-xl p-6 md:p-8 border border-purple-200">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-4 mb-6 -mt-2 shadow-lg">
            <h2 className="text-2xl font-bold text-white flex items-center justify-center gap-2">
              <span>📩</span> Envíame un mensaje
            </h2>
          </div>
          <p className="text-gray-700 mb-6 text-center">
            Utiliza el siguiente formulario para dejarme tu consulta, reportar
            algún error o compartir tu opinión sobre el sitio. ¡Te responderé lo
            antes posible!
          </p>

          <div className="mb-8 rounded-xl overflow-hidden shadow-md border border-white/50">
            <iframe
              src="https://forms.cloud.microsoft/r/X8v1rFw2aZ"
              width="100%"
              height="500"
              frameBorder="0"
              className="rounded-lg bg-white"
              style={{ maxWidth: "100%" }}
              title="Formulario de contacto"
            ></iframe>
          </div>

          <div className="border-t border-purple-200 pt-5 mt-2">
            <div className="flex items-start space-x-3 text-sm text-gray-700 bg-white/50 rounded-lg p-3 backdrop-blur-sm">
              <svg
                className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <p>
                <strong className="text-gray-800">
                  Leyenda de privacidad:
                </strong>{" "}
                Los datos que compartas en este formulario serán utilizados
                únicamente para responder tus consultas y mejorar el contenido
                del sitio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
