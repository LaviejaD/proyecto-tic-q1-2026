export const CasosPracticos = () => {
  return (
    <>
      <div class="mb-12">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          4. Casos Prácticos o Situaciones Reales
        </h1>
        <p class="text-lg text-gray-600">
          Análisis de ciberataques reales y dilemas éticos, sus causas,
          consecuencias y lecciones aprendidas.
        </p>
      </div>

      <div class="space-y-12">
        <div class="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
          <div class="bg-gradient-to-r from-red-600 to-red-700 px-6 py-4">
            <h2 class="text-2xl font-bold text-white">
              4.1 Ransomware en Infraestructura Crítica: Colonial Pipeline
              (2021)
            </h2>
          </div>
          <div class="p-6">
            <h3 class="font-bold text-gray-800 text-lg">Problema</h3>
            <p class="text-gray-700 mb-4">
              El 7 de mayo de 2021, Colonial Pipeline, el mayor oleoducto de
              combustible de Estados Unidos, sufrió un ataque de ransomware por
              parte del grupo criminal DarkSide. Los atacantes comprometieron la
              red de facturación a través de una única contraseña de VPN sin
              autenticación multifactor (MFA). La empresa pagó un rescate de 4.4
              millones de dólares en Bitcoin, lo que provocó el cierre del
              oleoducto, declaración de emergencia en 17 estados,
              desabastecimiento y aumento masivo de precios.
            </p>
            <h3 class="font-bold text-gray-800 text-lg">Solución Propuesta</h3>
            <ul class="list-disc pl-5 text-gray-700 space-y-1 mb-2">
              <li>
                <strong>Para la empresa:</strong> Implementar MFA en todas las
                cuentas críticas, segmentar redes industriales de las
                administrativas, mantener copias de seguridad offline y contar
                con un plan de respuesta a incidentes.
              </li>
              <li>
                <strong>Para los usuarios:</strong> Usar contraseñas únicas y
                robustas, activar verificación en dos pasos en todas las cuentas
                personales y profesionales.
              </li>
            </ul>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
          <div class="bg-gradient-to-r from-orange-600 to-orange-700 px-6 py-4">
            <h2 class="text-2xl font-bold text-white">
              4.2 Violación de Datos de Equifax (2017)
            </h2>
          </div>
          <div class="p-6">
            <h3 class="font-bold text-gray-800 text-lg">Problema</h3>
            <p class="text-gray-700 mb-4">
              Entre mayo y julio de 2017, Equifax sufrió una brecha masiva que
              expuso datos personales y financieros de más de 147 millones de
              personas. Los atacantes explotaron una vulnerabilidad crítica en
              Apache Struts para la que existía un parche desde hacía dos meses,
              pero Equifax no lo había instalado. La información robada incluía
              números de Seguro Social, fechas de nacimiento, direcciones y
              licencias de conducir.
            </p>
            <h3 class="font-bold text-gray-800 text-lg">Solución Propuesta</h3>
            <ul class="list-disc pl-5 text-gray-700 space-y-1 mb-2">
              <li>
                <strong>Para la empresa:</strong> Programa robusto de gestión de
                vulnerabilidades y parches, inventario de software actualizado,
                auditorías de seguridad regulares y plan de respuesta con
                comunicación transparente.
              </li>
              <li>
                <strong>Para los usuarios:</strong> Monitorear informes de
                crédito, estar atentos a correos de phishing, usar un gestor de
                contraseñas con claves únicas para cada servicio.
              </li>
            </ul>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
          <div class="bg-gradient-to-r from-purple-600 to-purple-700 px-6 py-4">
            <h2 class="text-2xl font-bold text-white">
              4.3 Dilema Ético en IA: Sesgo de Género
            </h2>
          </div>
          <div class="p-6">
            <h3 class="font-bold text-gray-800 text-lg">Problema</h3>
            <p class="text-gray-700 mb-4">
              Los sistemas de IA aprenden de datos históricos que contienen
              sesgos sociales. Por ejemplo, al buscar "colegiala" los resultados
              suelen ser sexualizados, mientras que "colegial" muestra
              estudiantes comunes. Esto perpetúa estereotipos de género dañinos.
              La opacidad de la "caja negra" de la IA dificulta la rendición de
              cuentas.
            </p>
            <h3 class="font-bold text-gray-800 text-lg">Solución Propuesta</h3>
            <ul class="list-disc pl-5 text-gray-700 space-y-1 mb-2">
              <li>
                <strong>Para desarrolladores y empresas:</strong> IA Ética por
                Diseño: auditar conjuntos de datos, equipos diversos, pruebas de
                equidad, transparencia algorítmica. Seguir la Recomendación de
                la UNESCO sobre Ética de la IA.
              </li>
              <li>
                <strong>Para los usuarios:</strong> Cuestionar los resultados de
                la IA, educarse sobre su funcionamiento, apoyar regulaciones
                éticas y reportar sesgos observados.
              </li>
            </ul>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
          <div class="bg-gradient-to-r from-pink-600 to-pink-700 px-6 py-4">
            <h2 class="text-2xl font-bold text-white">
              4.4 Estafas con Deepfake de Voz (2025)
            </h2>
          </div>
          <div class="p-6">
            <h3 class="font-bold text-gray-800 text-lg">Problema</h3>
            <p class="text-gray-700 mb-4">
              En 2025, se desarticuló en Argentina una organización que clonaba
              voces mediante IA a partir de mensajes de voz de WhatsApp.
              Contactaban a los contactos de la víctima fingiendo emergencias u
              oportunidades de negocio para que realizaran transferencias
              bancarias. Las víctimas confiaban al reconocer la voz.
            </p>
            <h3 class="font-bold text-gray-800 text-lg">Solución Propuesta</h3>
            <ul class="list-disc pl-5 text-gray-700 space-y-1 mb-2">
              <li>
                <strong>Para los usuarios:</strong> Establecer una "palabra
                clave familiar" para verificar identidad en emergencias.
                Confirmar por otro canal (llamada tradicional) cualquier
                solicitud de dinero por mensajería.
              </li>
              <li>
                <strong>Para las plataformas:</strong> Implementar sistemas de
                detección de deepfakes, tecnologías de marca de agua para
                contenido generado por IA y educar a los usuarios sobre estos
                riesgos.
              </li>
            </ul>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
          <div class="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
            <h2 class="text-2xl font-bold text-white">Ciberataques Reciente</h2>
          </div>
          <div class="p-6 overflow-x-auto">
            <table class="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead class="bg-gray-100">
                <tr>
                  <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Año
                  </th>
                  <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Víctima
                  </th>
                  <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Tipo de Amenaza
                  </th>
                  <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Impacto Clave
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr>
                  <td class="px-4 py-3 text-sm font-medium text-gray-900">
                    2025
                  </td>
                  <td class="px-4 py-3 text-sm text-gray-600">Bybit</td>
                  <td class="px-4 py-3 text-sm text-gray-600">
                    Robo de criptomonedas
                  </td>
                  <td class="px-4 py-3 text-sm text-gray-600">
                    Pérdida de más de 1.400 millones de dólares en Ethereum
                  </td>
                </tr>
                <tr>
                  <td class="px-4 py-3 text-sm font-medium text-gray-900">
                    2025
                  </td>
                  <td class="px-4 py-3 text-sm text-gray-600">Coupang</td>
                  <td class="px-4 py-3 text-sm text-gray-600">
                    Violación de datos
                  </td>
                  <td class="px-4 py-3 text-sm text-gray-600">
                    Exposición de datos de más de 33 millones de usuarios en
                    Corea del Sur
                  </td>
                </tr>
                <tr>
                  <td class="px-4 py-3 text-sm font-medium text-gray-900">
                    2025
                  </td>
                  <td class="px-4 py-3 text-sm text-gray-600">
                    Collins Aerospace
                  </td>
                  <td class="px-4 py-3 text-sm text-gray-600">
                    Ransomware / Sabotaje
                  </td>
                  <td class="px-4 py-3 text-sm text-gray-600">
                    Afectó sistemas de facturación y embarque de aeropuertos
                    europeos
                  </td>
                </tr>
                <tr>
                  <td class="px-4 py-3 text-sm font-medium text-gray-900">
                    2025
                  </td>
                  <td class="px-4 py-3 text-sm text-gray-600">
                    Base de datos múltiple
                  </td>
                  <td class="px-4 py-3 text-sm text-gray-600">
                    Filtración de credenciales
                  </td>
                  <td class="px-4 py-3 text-sm text-gray-600">
                    Exposición de más de 16 mil millones de registros de
                    usuarios
                  </td>
                </tr>
                <tr>
                  <td class="px-4 py-3 text-sm font-medium text-gray-900">
                    2024
                  </td>
                  <td class="px-4 py-3 text-sm text-gray-600">
                    Bank of America
                  </td>
                  <td class="px-4 py-3 text-sm text-gray-600">
                    Brecha en proveedor externo
                  </td>
                  <td class="px-4 py-3 text-sm text-gray-600">
                    Exposición de datos de 57,028 clientes
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="bg-gray-50 rounded-xl border border-gray-200 p-6">
          <h3 class="text-xl font-bold text-gray-800 mb-4">
            📚 Referencias y fuentes de información
          </h3>
          <ul class="space-y-2 text-sm text-gray-700 list-disc pl-5">
            <li>
              <a
                href="https://www.cisa.gov/news-events/news/attack-colonial-pipeline-what-weve-learned-what-weve-done-over-past-two-years"
                class="text-blue-600 hover:underline"
                target="_blank"
              >
                CISA - The Attack on Colonial Pipeline: What We've Learned
                (inglés)
              </a>
            </li>
            <li>
              <a
                href="https://en.wikipedia.org/wiki/Colonial_Pipeline_ransomware_attack"
                class="text-blue-600 hover:underline"
                target="_blank"
              >
                Wikipedia - Colonial Pipeline ransomware attack (inglés)
              </a>
            </li>
            <li>
              <a
                href="https://unitelciberseguridad.es/casos-reales-de-ciberataques-y-lecciones-aprendidas/"
                class="text-blue-600 hover:underline"
                target="_blank"
              >
                Unitel Ciberseguridad - El ciberataque a Equifax (2017) y
                lecciones aprendidas
              </a>
            </li>
            <li>
              <a
                href="https://ethicsunwrapped.utexas.edu/glossary/equifax-case"
                class="text-blue-600 hover:underline"
                target="_blank"
              >
                Universidad de Texas - Equifax y su abuso de confianza (inglés)
              </a>
            </li>
            <li>
              <a
                href="https://www.unesco.org/es/artificial-intelligence/recommendation-ethics/cases"
                class="text-blue-600 hover:underline"
                target="_blank"
              >
                UNESCO - Inteligencia artificial: ejemplos de dilemas éticos
              </a>
            </li>
            <li>
              <a
                href="https://www.weforum.org/agenda/2021/06/ai-machine-learning-bias-discrimination/"
                class="text-blue-600 hover:underline"
                target="_blank"
              >
                Foro Económico Mundial - Tackling bias in artificial
                intelligence (inglés)
              </a>
            </li>
            <li>
              <a
                href="https://www.cronica.com.ar/fmq/noticias-locales/Usaban-inteligencia-artificial-para-clonar-voces-y-estafar-por-WhatsApp-increibles-detalles-de-la-causa-20251230-0009.html"
                class="text-blue-600 hover:underline"
                target="_blank"
              >
                Crónica - Usaban inteligencia artificial para clonar voces y
                estafar por WhatsApp
              </a>
            </li>
            <li>
              <a
                href="https://tn.com.ar/tecnologia/2025/12/30/la-suplantacion-de-identidad-por-clonacion-de-voz-fue-la-estafa-por-whatsapp-mas-peligrosa-de-2025/"
                class="text-blue-600 hover:underline"
                target="_blank"
              >
                TN - La suplantación de identidad por clonación de voz fue la
                estafa más peligrosa de 2025
              </a>
            </li>
            <li>
              <a
                href="https://www.incibe.es/incibe-cert/publicaciones/bitacora-de-seguridad/top-7-ciberincidentes-durante-el-ano-2025"
                class="text-blue-600 hover:underline"
                target="_blank"
              >
                INCIBE - Top 7 ciberincidentes durante el año 2025
              </a>
            </li>
            <li>
              <a
                href="https://www.welivesecurity.com/es/cibercrimen/10-ciberataques-filtraciones-de-datos-marcaron-2025/"
                class="text-blue-600 hover:underline"
                target="_blank"
              >
                WeLiveSecurity - 10 ciberataques y filtraciones de datos que
                marcaron el 2025
              </a>
            </li>
            <li>
              <a
                href="https://blog.hackmetrix.com/ejemplos-de-ciberataques/"
                class="text-blue-600 hover:underline"
                target="_blank"
              >
                Hackmetrix - Ejemplos reales de ataques cibernéticos y sus
                impactos (Bank of America, etc.)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
