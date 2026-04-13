export const Recursos = () => {
  return (
    <>
      <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <img
          src="https://cdn.pixabay.com/photo/2016/11/19/15/32/laptop-1839876_640.jpg"
          alt="Recursos multimedia"
          className="w-full h-48 object-cover rounded-xl mb-6 shadow-md"
        />
        <div class="mb-12">
          <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            5. Recursos Multimedia
          </h1>
          <p class="text-lg text-gray-600">
            Videos, infografías, juegos y enlaces confiables para seguir
            aprendiendo sobre seguridad digital y ética en la red.
          </p>
        </div>

        <div class="space-y-12">
          <div class="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
            <div class="bg-gradient-to-r from-red-600 to-red-700 px-6 py-4">
              <h2 class="text-2xl font-bold text-white">
                🎬 5.1 Videos explicativos
              </h2>
            </div>
            <div class="p-6">
              <div class="overflow-x-auto">
                <table class="min-w-full bg-white border border-gray-200 rounded-lg">
                  <thead class="bg-gray-100">
                    <tr>
                      <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                        Temática
                      </th>
                      <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                        Recurso
                      </th>
                      <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                        Descripción
                      </th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200">
                    <tr>
                      <td class="px-4 py-3 text-sm font-medium text-gray-900">
                        Seguridad de la información
                      </td>
                      <td class="px-4 py-3 text-sm">
                        <a
                          href="https://www.youtube.com/watch?v=gzES0MuWqHE"
                          class="text-blue-600 hover:underline"
                          target="_blank"
                        >
                          Aprende CIBERSEGURIDAD Desde Cero (Hixec)
                        </a>
                      </td>
                      <td class="px-4 py-3 text-sm text-gray-600">
                        Curso completo en español: conceptos básicos, privacidad
                        digital.
                      </td>
                    </tr>
                    <tr>
                      <td class="px-4 py-3 text-sm font-medium text-gray-900">
                        Ciberseguridad básica
                      </td>
                      <td class="px-4 py-3 text-sm">
                        <a
                          href="https://www.youtube.com/watch?v=NoV_pP0Bx_Q"
                          class="text-blue-600 hover:underline"
                          target="_blank"
                        >
                          Ciberseguridad Para Principiantes
                        </a>
                      </td>
                      <td class="px-4 py-3 text-sm text-gray-600">
                        Bootcamp introductorio con amenazas y protección.
                      </td>
                    </tr>
                    <tr>
                      <td class="px-4 py-3 text-sm font-medium text-gray-900">
                        Phishing
                      </td>
                      <td class="px-4 py-3 text-sm">
                        <a
                          href="https://www.youtube.com/watch?v=q2oC3XunbS0"
                          class="text-blue-600 hover:underline"
                          target="_blank"
                        >
                          Qué es el phishing y cómo protegerse
                        </a>
                      </td>
                      <td class="px-4 py-3 text-sm text-gray-600">
                        Técnicas de ciberdelincuentes y prevención.
                      </td>
                    </tr>
                    <tr>
                      <td class="px-4 py-3 text-sm font-medium text-gray-900">
                        Phishing fácil
                      </td>
                      <td class="px-4 py-3 text-sm">
                        <a
                          href="https://www.youtube.com/watch?v=pCKAri092IA"
                          class="text-blue-600 hover:underline"
                          target="_blank"
                        >
                          Te están engañando y no te das cuenta
                        </a>
                      </td>
                      <td class="px-4 py-3 text-sm text-gray-600">
                        Explicación visual y sencilla del phishing.
                      </td>
                    </tr>
                    <tr>
                      <td class="px-4 py-3 text-sm font-medium text-gray-900">
                        Huella digital
                      </td>
                      <td class="px-4 py-3 text-sm">
                        <a
                          href="https://liec.dgb.unam.mx/"
                          class="text-blue-600 hover:underline"
                          target="_blank"
                        >
                          Huella digital - LIEC (UNAM)
                        </a>
                      </td>
                      <td class="px-4 py-3 text-sm text-gray-600">
                        Micrositio con guías sobre identidad digital.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="mt-6">
                <h3 class="font-bold text-gray-800 text-lg">
                  📺 Canales de YouTube recomendados
                </h3>
                <ul class="list-disc pl-5 text-gray-700 space-y-1 mt-2">
                  <li>
                    <a
                      href="https://www.youtube.com/@InternetSeguraforKids"
                      class="text-blue-600 hover:underline"
                      target="_blank"
                    >
                      Internet Segura for Kids (IS4K)
                    </a>{" "}
                    – INCIBE para menores.
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/@PowerDMARC"
                      class="text-blue-600 hover:underline"
                      target="_blank"
                    >
                      PowerDMARC
                    </a>{" "}
                    – Defensa contra suplantación de identidad.
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/@seguridadsi"
                      class="text-blue-600 hover:underline"
                      target="_blank"
                    >
                      SeguridadSI
                    </a>{" "}
                    – Cursos y podcasts en español.
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/@TCMSecurityAcademy"
                      class="text-blue-600 hover:underline"
                      target="_blank"
                    >
                      The Cyber Mentor
                    </a>{" "}
                    – Hacking ético y pentesting (inglés).
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/@INCIBE"
                      class="text-blue-600 hover:underline"
                      target="_blank"
                    >
                      INCIBE
                    </a>{" "}
                    – Recursos educativos y eventos.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
            <div class="bg-gradient-to-r from-purple-600 to-purple-700 px-6 py-4">
              <h2 class="text-2xl font-bold text-white">
                🔗 5.2 Enlaces de interés
              </h2>
            </div>
            <div class="p-6">
              <h3 class="font-bold text-gray-800 text-lg">
                Organismos oficiales y entidades de referencia
              </h3>
              <ul class="list-disc pl-5 text-gray-700 space-y-1 mb-6">
                <li>
                  <a
                    href="https://www.incibe.es"
                    class="text-blue-600 hover:underline"
                    target="_blank"
                  >
                    INCIBE
                  </a>{" "}
                  – Instituto Nacional de Ciberseguridad de España.
                </li>
                <li>
                  <a
                    href="https://www.is4k.es"
                    class="text-blue-600 hover:underline"
                    target="_blank"
                  >
                    IS4K
                  </a>{" "}
                  – Internet Segura for Kids.
                </li>
                <li>
                  <a
                    href="https://www.cisa.gov"
                    class="text-blue-600 hover:underline"
                    target="_blank"
                  >
                    CISA
                  </a>{" "}
                  – Agencia de ciberseguridad de EE. UU.
                </li>
                <li>
                  <a
                    href="https://www.aepd.es"
                    class="text-blue-600 hover:underline"
                    target="_blank"
                  >
                    AEPD
                  </a>{" "}
                  – Agencia Española de Protección de Datos.
                </li>
                <li>
                  <a
                    href="https://www.unesco.org/es/artificial-intelligence/recommendation-ethics"
                    class="text-blue-600 hover:underline"
                    target="_blank"
                  >
                    UNESCO – Ética de la IA
                  </a>
                </li>
                <li>
                  <a
                    href="https://publications.iadb.org"
                    class="text-blue-600 hover:underline"
                    target="_blank"
                  >
                    BID – Reportes de tecnología y ética digital
                  </a>
                </li>
              </ul>
              <h3 class="font-bold text-gray-800 text-lg">
                🎮 Recursos interactivos y juegos didácticos
              </h3>
              <ul class="list-disc pl-5 text-gray-700 space-y-1 mb-6">
                <li>
                  <a
                    href="https://www.incibe.es/menores/tematicas/suplantacion-de-identidad/descubre-al-suplantador"
                    class="text-blue-600 hover:underline"
                    target="_blank"
                  >
                    Descubre al suplantador
                  </a>{" "}
                  – Juego sobre suplantación de identidad.
                </li>
                <li>
                  <a
                    href="https://www.incibe.es/menores/juegos/juegos-didacticos/carta-el-juego-de-ciberseguridad-para-las-redes-sociales"
                    class="text-blue-600 hover:underline"
                    target="_blank"
                  >
                    ¡Carta!
                  </a>{" "}
                  – Juego familiar sobre redes sociales.
                </li>
                <li>
                  <a
                    href="https://www.incibe.es/menores/juegos/juegos-didacticos/los-puzles-de-la-ciberseguridad"
                    class="text-blue-600 hover:underline"
                    target="_blank"
                  >
                    Los puzles de la ciberseguridad
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.incibe.es/ciudadania/juegos/juegos-mesa/trivial-de-la-ciberseguridad"
                    class="text-blue-600 hover:underline"
                    target="_blank"
                  >
                    Trivial de la Ciberseguridad
                  </a>
                </li>
                <li>
                  <a
                    href="https://cybersecuritynews.es/5-recursos-interactivos-para-ensenar-ciberseguridad-a-ninos-y-adolescentes/"
                    class="text-blue-600 hover:underline"
                    target="_blank"
                  >
                    Cyberscouts
                  </a>{" "}
                  – Misión virtual para proteger una ciudad.
                </li>
                <li>
                  <a
                    href="https://www.knowbe4.com/"
                    class="text-blue-600 hover:underline"
                    target="_blank"
                  >
                    KnowBe4 Kids
                  </a>{" "}
                  – Kit interactivo con trivias y simulaciones.
                </li>
              </ul>
              <h3 class="font-bold text-gray-800 text-lg">
                📘 Materiales didácticos para educadores y estudiantes
              </h3>
              <ul class="list-disc pl-5 text-gray-700 space-y-1 mb-6">
                <li>
                  <a
                    href="https://www.incibe.es/menores/educadores/materiales-didacticos"
                    class="text-blue-600 hover:underline"
                    target="_blank"
                  >
                    Unidades Didácticas IS4K
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.incibe.es/menores/educadores/aulas-de-ciberseguridad"
                    class="text-blue-600 hover:underline"
                    target="_blank"
                  >
                    Proyecto Aulas de Ciberseguridad
                  </a>
                </li>
                <li>
                  <a
                    href="https://fundacionaulasmart.org"
                    class="text-blue-600 hover:underline"
                    target="_blank"
                  >
                    CyberSmart! – Recursos interactivos
                  </a>
                </li>
              </ul>
              <h3 class="font-bold text-gray-800 text-lg">
                📝 Blogs y portales especializados
              </h3>
              <ul class="list-disc pl-5 text-gray-700 space-y-1">
                <li>
                  <a
                    href="https://www.welivesecurity.com"
                    class="text-blue-600 hover:underline"
                    target="_blank"
                  >
                    WeLiveSecurity (ESET)
                  </a>
                </li>
                <li>
                  <a
                    href="https://blog.hackmetrix.com"
                    class="text-blue-600 hover:underline"
                    target="_blank"
                  >
                    Hackmetrix Blog
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.trendmicro.com"
                    class="text-blue-600 hover:underline"
                    target="_blank"
                  >
                    Trend Micro
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.iberdrola.com/compromiso-social/etica-en-internet"
                    class="text-blue-600 hover:underline"
                    target="_blank"
                  >
                    Iberdrola – Ética en Internet
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.iebschool.com/hub/etica-digital-el-pilar-del-futuro-en-la-red-innovacion/"
                    class="text-blue-600 hover:underline"
                    target="_blank"
                  >
                    IEBSchool – Ética digital
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
            <div class="bg-gradient-to-r from-indigo-600 to-indigo-700 px-6 py-4">
              <h2 class="text-2xl font-bold text-white">
                📚 5.3 Recursos específicos por temática
              </h2>
            </div>
            <div class="p-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 class="font-bold text-gray-800">
                    Seguridad de la información
                  </h3>
                  <ul class="list-disc pl-5 text-sm">
                    <li>
                      <a
                        href="https://www.cisa.gov/topics/cyber-threats-and-advisories/malware-phishing-and-ransomware"
                        class="text-blue-600"
                      >
                        CISA (inglés)
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.incibe.es/ciudadania/tematicas/virus-y-otras-amenazas"
                        class="text-blue-600"
                      >
                        INCIBE - Virus y amenazas
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.incibe.es/ciudadania/tematicas/contrasenas-seguras/autenticacion-de-dos-factores"
                        class="text-blue-600"
                      >
                        INCIBE - 2FA
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 class="font-bold text-gray-800">
                    Inteligencia Artificial
                  </h3>
                  <ul class="list-disc pl-5 text-sm">
                    <li>
                      <a
                        href="https://www.ibm.com/es-es/think/topics/ai-data-protection"
                        class="text-blue-600"
                      >
                        IBM - Protección de datos en IA
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://layerxsecurity.com/es/generative-ai/ai-attack-surface/"
                        class="text-blue-600"
                      >
                        LayerX - Superficie de ataque
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://sosafe-awareness.com/es/recursos/informes/principales-amenazas-ia-organizaciones/"
                        class="text-blue-600"
                      >
                        SoSafe - Amenazas IA
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 class="font-bold text-gray-800">Big Data</h3>
                  <ul class="list-disc pl-5 text-sm">
                    <li>
                      <a
                        href="https://www.miteksystems.com/es/blog/5-principales-riesgos-big-data"
                        class="text-blue-600"
                      >
                        Mitek - 5 riesgos del Big Data
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.proofpoint.com/es/threat-reference/data-security"
                        class="text-blue-600"
                      >
                        Proofpoint - Seguridad de datos
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 class="font-bold text-gray-800">Blockchain</h3>
                  <ul class="list-disc pl-5 text-sm">
                    <li>
                      <a href="https://www.incibe.es" class="text-blue-600">
                        INCIBE - Infografía Blockchain
                      </a>
                    </li>
                    <li>
                      <a href="https://www.ibm.com" class="text-blue-600">
                        IBM - Seguridad blockchain
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 class="font-bold text-gray-800">
                    Internet of Things (IoT)
                  </h3>
                  <ul class="list-disc pl-5 text-sm">
                    <li>
                      <a href="https://www.fortinet.com" class="text-blue-600">
                        Fortinet - Vulnerabilidades IoT
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.keyfactor.com/es/blog/iot-device-security-risks-best-practices-tips/"
                        class="text-blue-600"
                      >
                        Keyfactor - Riesgos y buenas prácticas
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.getronics.com/es/insights/riesgos-seguridad-dispositivos-iot"
                        class="text-blue-600"
                      >
                        Getronics - Riesgos IoT
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 class="font-bold text-gray-800">
                    Ética digital y privacidad
                  </h3>
                  <ul class="list-disc pl-5 text-sm">
                    <li>
                      <a
                        href="https://www.cemefi.org/wp-content/uploads/2025/01/Ficha-Etica-Digital.pdf"
                        class="text-blue-600"
                      >
                        CEMEFI - Ficha ética digital (PDF)
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.docusign.com/es-mx/blog/etica-digital-empresas"
                        class="text-blue-600"
                      >
                        DocuSign - Ética digital en empresas
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://proyectatic.com/privacidad-y-etica-digital/"
                        class="text-blue-600"
                      >
                        Proyect@TIC - Privacidad y ética
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gray-50 rounded-xl border border-gray-200 p-6">
            <h3 class="text-xl font-bold text-gray-800 mb-4">
              📚 Referencias y fuentes de información
            </h3>
            <ul class="space-y-2 text-sm text-gray-700 list-disc pl-5">
              <li>
                INCIBE -{" "}
                <a
                  href="https://www.incibe.es"
                  class="text-blue-600 hover:underline"
                  target="_blank"
                >
                  Recursos educativos y juegos
                </a>
              </li>
              <li>
                IS4K -{" "}
                <a
                  href="https://www.is4k.es"
                  class="text-blue-600 hover:underline"
                  target="_blank"
                >
                  Materiales didácticos
                </a>
              </li>
              <li>
                Freepik -{" "}
                <a
                  href="https://www.freepik.es/"
                  class="text-blue-600 hover:underline"
                  target="_blank"
                >
                  Infografías de ciberseguridad
                </a>
              </li>

              <li>
                WeLiveSecurity -{" "}
                <a
                  href="https://www.welivesecurity.com"
                  class="text-blue-600 hover:underline"
                  target="_blank"
                >
                  Infografías sobre amenazas
                </a>
              </li>
              <li>
                CISA -{" "}
                <a
                  href="https://www.cisa.gov"
                  class="text-blue-600 hover:underline"
                  target="_blank"
                >
                  Malware, Phishing and Ransomware
                </a>
              </li>
              <li>
                UNESCO -{" "}
                <a
                  href="https://www.unesco.org/es/artificial-intelligence/recommendation-ethics"
                  class="text-blue-600 hover:underline"
                  target="_blank"
                >
                  Recomendación sobre Ética de la IA
                </a>
              </li>
              <li>
                KnowBe4 -{" "}
                <a
                  href="https://www.knowbe4.com/"
                  class="text-blue-600 hover:underline"
                  target="_blank"
                >
                  KnowBe4 Kids
                </a>
              </li>
              <li>
                Cybersecurity News -{" "}
                <a
                  href="https://cybersecuritynews.es/5-recursos-interactivos-para-ensenar-ciberseguridad-a-ninos-y-adolescentes/"
                  class="text-blue-600 hover:underline"
                  target="_blank"
                >
                  Cyberscouts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};
