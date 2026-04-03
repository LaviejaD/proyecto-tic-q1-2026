export const SeguridadInformacion = () => {
  return (
    <>
      <div class="mb-12">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          1. Seguridad de la Información
        </h1>
        <p class="text-lg text-gray-600">
          Conoce los fundamentos, amenazas, casos reales y estrategias de
          protección en el mundo digital actual.
        </p>
      </div>
      <div class="space-y-12">
        <div class="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
          <div class="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
            <h2 class="text-2xl font-bold text-white">
              1.1 ¿Qué es la seguridad de la información?
            </h2>
          </div>
          <div class="p-6">
            <p class="text-gray-700 leading-relaxed mb-4">
              La seguridad de la información (InfoSec) es el conjunto de
              prácticas y medidas diseñadas para proteger la información
              importante contra el acceso, uso, divulgación, alteración o
              interrupción no autorizados. Aplica a datos en cualquier formato
              (digital, físico o incluso verbal) y busca mantener tres pilares
              fundamentales:
            </p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div class="bg-blue-50 rounded-lg p-4 text-center">
                <span class="text-3xl block mb-2">🔒</span>
                <h3 class="font-bold text-blue-800">Confidencialidad</h3>
                <p class="text-sm text-gray-600">
                  Solo usuarios autorizados acceden a los datos
                </p>
              </div>
              <div class="bg-green-50 rounded-lg p-4 text-center">
                <span class="text-3xl block mb-2">✓</span>
                <h3 class="font-bold text-green-800">Integridad</h3>
                <p class="text-sm text-gray-600">
                  Los datos se mantienen exactos y sin alteraciones no
                  permitidas
                </p>
              </div>
              <div class="bg-purple-50 rounded-lg p-4 text-center">
                <span class="text-3xl block mb-2">⏱️</span>
                <h3 class="font-bold text-purple-800">Disponibilidad</h3>
                <p class="text-sm text-gray-600">
                  La información está accesible cuando se necesita
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
          <div class="bg-gradient-to-r from-red-600 to-red-700 px-6 py-4">
            <h2 class="text-2xl font-bold text-white">
              1.2 Tipos de amenazas (virus, phishing, malware, etc.)
            </h2>
          </div>
          <div class="p-6">
            <div class="overflow-x-auto">
              <table class="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead class="bg-gray-100">
                  <tr>
                    <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                      Amenaza
                    </th>
                    <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                      Descripción
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                  <tr>
                    <td class="px-4 py-3 text-sm font-medium text-gray-900">
                      Malware
                    </td>
                    <td class="px-4 py-3 text-sm text-gray-600">
                      Software malicioso diseñado para dañar, interrumpir u
                      obtener acceso no autorizado a sistemas. Incluye virus,
                      gusanos, troyanos, ransomware, spyware y adware.
                    </td>
                  </tr>
                  <tr>
                    <td class="px-4 py-3 text-sm font-medium text-gray-900">
                      Ransomware
                    </td>
                    <td class="px-4 py-3 text-sm text-gray-600">
                      Bloquea o cifra los datos de la víctima y exige un rescate
                      económico para liberarlos.
                    </td>
                  </tr>
                  <tr>
                    <td class="px-4 py-3 text-sm font-medium text-gray-900">
                      Phishing
                    </td>
                    <td class="px-4 py-3 text-sm text-gray-600">
                      Estafa en línea que utiliza correos o mensajes engañosos
                      para que el usuario revele información privada
                      (contraseñas, datos bancarios).
                    </td>
                  </tr>
                  <tr>
                    <td class="px-4 py-3 text-sm font-medium text-gray-900">
                      Spyware
                    </td>
                    <td class="px-4 py-3 text-sm text-gray-600">
                      Programa que se instala en secreto y recolecta información
                      del usuario (actividad en línea, contraseñas) sin su
                      conocimiento.
                    </td>
                  </tr>
                  <tr>
                    <td class="px-4 py-3 text-sm font-medium text-gray-900">
                      Troyanos
                    </td>
                    <td class="px-4 py-3 text-sm text-gray-600">
                      Software malicioso que se hace pasar por legítimo para
                      engañar al usuario e instalar una amenaza oculta.
                    </td>
                  </tr>
                  <tr>
                    <td class="px-4 py-3 text-sm font-medium text-gray-900">
                      Gusanos
                    </td>
                    <td class="px-4 py-3 text-sm text-gray-600">
                      Se replican automáticamente a través de redes sin
                      necesidad de interacción humana.
                    </td>
                  </tr>
                  <tr>
                    <td class="px-4 py-3 text-sm font-medium text-gray-900">
                      Keyloggers
                    </td>
                    <td class="px-4 py-3 text-sm text-gray-600">
                      Registran cada tecla que el usuario presiona para capturar
                      contraseñas e información confidencial.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
          <div class="bg-gradient-to-r from-yellow-600 to-yellow-700 px-6 py-4">
            <h2 class="text-2xl font-bold text-white">
              1.3 Ejemplos de ataques reales
            </h2>
          </div>
          <div class="p-6">
            <div class="overflow-x-auto">
              <table class="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead class="bg-gray-100">
                  <tr>
                    <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                      Ataque
                    </th>
                    <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                      Año
                    </th>
                    <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                      Impacto
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                  <tr>
                    <td class="px-4 py-3 text-sm font-medium text-gray-900">
                      Gusano Morris
                    </td>
                    <td class="px-4 py-3 text-sm text-gray-600">1988</td>
                    <td class="px-4 py-3 text-sm text-gray-600">
                      Infectó aproximadamente el 10% de todos los sistemas
                      conectados a Internet en ese momento.
                    </td>
                  </tr>
                  <tr>
                    <td class="px-4 py-3 text-sm font-medium text-gray-900">
                      Stuxnet
                    </td>
                    <td class="px-4 py-3 text-sm text-gray-600">2010</td>
                    <td class="px-4 py-3 text-sm text-gray-600">
                      Primer ciberataque dirigido a infraestructura nuclear
                      (sabotaje al programa nuclear de Irán).
                    </td>
                  </tr>
                  <tr>
                    <td class="px-4 py-3 text-sm font-medium text-gray-900">
                      WannaCry
                    </td>
                    <td class="px-4 py-3 text-sm text-gray-600">2017</td>
                    <td class="px-4 py-3 text-sm text-gray-600">
                      Ransomware que infectó más de 200,000 sistemas en 150
                      países, causando pérdidas de 3.5 mil millones de euros.
                    </td>
                  </tr>
                  <tr>
                    <td class="px-4 py-3 text-sm font-medium text-gray-900">
                      PlayStation Network
                    </td>
                    <td class="px-4 py-3 text-sm text-gray-600">2011</td>
                    <td class="px-4 py-3 text-sm text-gray-600">
                      Robo de datos de 77 millones de cuentas, servicio inactivo
                      por semanas.
                    </td>
                  </tr>
                  <tr>
                    <td class="px-4 py-3 text-sm font-medium text-gray-900">
                      Yahoo
                    </td>
                    <td class="px-4 py-3 text-sm text-gray-600">2013-2014</td>
                    <td class="px-4 py-3 text-sm text-gray-600">
                      Dos brechas masivas que afectaron a 500 millones y 1,000
                      millones de cuentas.
                    </td>
                  </tr>
                  <tr>
                    <td class="px-4 py-3 text-sm font-medium text-gray-900">
                      Filtración masiva de datos (2024)
                    </td>
                    <td class="px-4 py-3 text-sm text-gray-600">2024</td>
                    <td class="px-4 py-3 text-sm text-gray-600">
                      Archivo de 12 terabytes con 26 mil millones de registros
                      de usuarios de múltiples plataformas (Dropbox, LinkedIn,
                      Twitter).
                    </td>
                  </tr>
                  <tr>
                    <td class="px-4 py-3 text-sm font-medium text-gray-900">
                      Bank of America
                    </td>
                    <td class="px-4 py-3 text-sm text-gray-600">2024</td>
                    <td class="px-4 py-3 text-sm text-gray-600">
                      Brecha que expuso datos de 57,028 clientes a través de
                      proveedor externo.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
          <div class="bg-gradient-to-r from-green-600 to-green-700 px-6 py-4">
            <h2 class="text-2xl font-bold text-white">
              1.4 Medidas de protección (contraseñas seguras, antivirus, etc.)
            </h2>
          </div>
          <div class="p-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="bg-gray-50 rounded-lg p-4">
                <h3 class="font-bold text-gray-800">🔐 Contraseñas seguras</h3>
                <p class="text-sm text-gray-600">
                  Usar combinaciones largas y complejas (mayúsculas, minúsculas,
                  números y símbolos), evitar palabras comunes y no repetir la
                  misma contraseña en diferentes servicios.
                </p>
              </div>
              <div class="bg-gray-50 rounded-lg p-4">
                <h3 class="font-bold text-gray-800">
                  📱 Autenticación de dos factores (2FA)
                </h3>
                <p class="text-sm text-gray-600">
                  Añade una capa extra de seguridad: además de la contraseña, se
                  requiere un código enviado al móvil o generado por una app.
                </p>
              </div>
              <div class="bg-gray-50 rounded-lg p-4">
                <h3 class="font-bold text-gray-800">
                  🗄️ Gestores de contraseñas
                </h3>
                <p class="text-sm text-gray-600">
                  Herramientas que almacenan y generan contraseñas complejas y
                  únicas para cada servicio.
                </p>
              </div>
              <div class="bg-gray-50 rounded-lg p-4">
                <h3 class="font-bold text-gray-800">
                  🛡️ Antivirus y antimalware
                </h3>
                <p class="text-sm text-gray-600">
                  Software especializado que escanea, detecta y elimina
                  programas maliciosos del sistema.
                </p>
              </div>
              <div class="bg-gray-50 rounded-lg p-4">
                <h3 class="font-bold text-gray-800">
                  🔄 Actualizaciones regulares
                </h3>
                <p class="text-sm text-gray-600">
                  Mantener sistemas operativos y aplicaciones actualizados para
                  corregir vulnerabilidades conocidas.
                </p>
              </div>
              <div class="bg-gray-50 rounded-lg p-4">
                <h3 class="font-bold text-gray-800">🔒 Cifrado de datos</h3>
                <p class="text-sm text-gray-600">
                  Convierte la información en un código ilegible sin la clave de
                  descifrado correspondiente.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
          <div class="bg-gradient-to-r from-purple-600 to-purple-700 px-6 py-4">
            <h2 class="text-2xl font-bold text-white">
              1.5 Amenazas en sistemas de Inteligencia Artificial
            </h2>
          </div>
          <div class="p-6">
            <ul class="space-y-3">
              <li class="flex items-start">
                <span class="text-purple-600 font-bold mr-2">•</span>
                <span>
                  <strong>Inyección de prompts:</strong> Los atacantes ocultan
                  comandos maliciosos en las entradas que se dan a la IA para
                  manipular su comportamiento.
                </span>
              </li>
              <li class="flex items-start">
                <span class="text-purple-600 font-bold mr-2">•</span>
                <span>
                  <strong>Deepfakes:</strong> Uso de IA para generar videos,
                  audios o imágenes falsos pero hiperrealistas para engañar o
                  suplantar identidades.
                </span>
              </li>
              <li class="flex items-start">
                <span class="text-purple-600 font-bold mr-2">•</span>
                <span>
                  <strong>Ataques de envenenamiento de datos:</strong>{" "}
                  Manipulación de los datos de entrenamiento del modelo para que
                  la IA aprenda comportamientos erróneos.
                </span>
              </li>
              <li class="flex items-start">
                <span class="text-purple-600 font-bold mr-2">•</span>
                <span>
                  <strong>Fuga de datos sensibles:</strong> Los modelos de IA
                  pueden recordar y exponer involuntariamente información
                  confidencial utilizada durante su entrenamiento.
                </span>
              </li>
              <li class="flex items-start">
                <span class="text-purple-600 font-bold mr-2">•</span>
                <span>
                  <strong>Phishing con IA:</strong> Los ciberdelincuentes
                  utilizan IA para crear correos y mensajes personalizados y
                  altamente convincentes que engañan defensas tradicionales.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
          <div class="bg-gradient-to-r from-indigo-600 to-indigo-700 px-6 py-4">
            <h2 class="text-2xl font-bold text-white">
              1.6 Desafíos de seguridad en entornos de Big Data
            </h2>
          </div>
          <div class="p-6">
            <ul class="space-y-3">
              <li class="flex items-start">
                <span class="text-indigo-600 font-bold mr-2">•</span>
                <span>
                  <strong>Pérdida de anonimato:</strong> Es cada vez más difícil
                  anonimizar datos realmente, ya que grandes volúmenes de
                  información pueden cruzarse para re-identificar a personas.
                </span>
              </li>
              <li class="flex items-start">
                <span class="text-indigo-600 font-bold mr-2">•</span>
                <span>
                  <strong>Discriminación predictiva:</strong> Los algoritmos
                  pueden tomar decisiones automatizadas (créditos, empleos) que
                  discriminen injustamente a ciertos grupos.
                </span>
              </li>
              <li class="flex items-start">
                <span class="text-indigo-600 font-bold mr-2">•</span>
                <span>
                  <strong>Ciberataques a gran escala:</strong> La enorme
                  concentración de datos convierte a las bases de datos Big Data
                  en blancos atractivos.
                </span>
              </li>
              <li class="flex items-start">
                <span class="text-indigo-600 font-bold mr-2">•</span>
                <span>
                  <strong>Uso gubernamental de datos:</strong> Los gobiernos
                  acumulan ingentes cantidades de información personal, lo que
                  genera riesgos de vigilancia masiva.
                </span>
              </li>
              <li class="flex items-start">
                <span class="text-indigo-600 font-bold mr-2">•</span>
                <span>
                  <strong>Falta de transparencia:</strong> Muchas organizaciones
                  no explican claramente cómo recopilan, procesan y utilizan los
                  datos de los usuarios.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
          <div class="bg-gradient-to-r from-pink-600 to-pink-700 px-6 py-4">
            <h2 class="text-2xl font-bold text-white">
              1.7 Riesgos y vulnerabilidades en sistemas Blockchain
            </h2>
          </div>
          <div class="p-6">
            <ul class="space-y-3">
              <li class="flex items-start">
                <span class="text-pink-600 font-bold mr-2">•</span>
                <span>
                  <strong>Exploits de contratos inteligentes:</strong> Código
                  defectuoso en contratos inteligentes que los atacantes
                  aprovechan para robar fondos o manipular transacciones.
                </span>
              </li>
              <li class="flex items-start">
                <span class="text-pink-600 font-bold mr-2">•</span>
                <span>
                  <strong>Mala gestión de claves privadas:</strong> Si un
                  usuario pierde o le roban sus claves privadas, pierde acceso
                  permanente a sus criptoactivos.
                </span>
              </li>
              <li class="flex items-start">
                <span class="text-pink-600 font-bold mr-2">•</span>
                <span>
                  <strong>Ataques de consenso:</strong> Manipulación de los
                  mecanismos de consenso de la red blockchain (por ejemplo,
                  ataques del 51%).
                </span>
              </li>
              <li class="flex items-start">
                <span class="text-pink-600 font-bold mr-2">•</span>
                <span>
                  <strong>Ataques a la cadena de suministro:</strong>{" "}
                  Explotación de bibliotecas o proveedores de servicios
                  compartidos para afectar múltiples proyectos.
                </span>
              </li>
              <li class="flex items-start">
                <span class="text-pink-600 font-bold mr-2">•</span>
                <span>
                  <strong>Manipulación de oráculos:</strong> Los oráculos
                  (fuentes de datos externos) pueden ser manipulados para
                  introducir información falsa en la blockchain.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
          <div class="bg-gradient-to-r from-teal-600 to-teal-700 px-6 py-4">
            <h2 class="text-2xl font-bold text-white">
              1.8 Seguridad del Internet de las Cosas (IoT)
            </h2>
          </div>
          <div class="p-6">
            <ul class="space-y-3">
              <li class="flex items-start">
                <span class="text-teal-600 font-bold mr-2">•</span>
                <span>
                  <strong>Credenciales por defecto:</strong> Muchos dispositivos
                  IoT vienen con contraseñas genéricas ("admin/admin", "1234")
                  que los usuarios nunca cambian.
                </span>
              </li>
              <li class="flex items-start">
                <span class="text-teal-600 font-bold mr-2">•</span>
                <span>
                  <strong>Firmware desactualizado:</strong> El software interno
                  de los dispositivos no recibe actualizaciones de seguridad,
                  dejando vulnerabilidades sin parchear por años.
                </span>
              </li>
              <li class="flex items-start">
                <span class="text-teal-600 font-bold mr-2">•</span>
                <span>
                  <strong>Falta de cifrado:</strong> Muchos dispositivos
                  transmiten datos mediante protocolos inseguros (HTTP, Telnet)
                  que pueden ser interceptados fácilmente.
                </span>
              </li>
              <li class="flex items-start">
                <span class="text-teal-600 font-bold mr-2">•</span>
                <span>
                  <strong>Botnets IoT:</strong> Atacantes infectan miles de
                  dispositivos IoT vulnerables y los utilizan como red para
                  lanzar ataques masivos de denegación de servicio (DDoS).
                </span>
              </li>
              <li class="flex items-start">
                <span class="text-teal-600 font-bold mr-2">•</span>
                <span>
                  <strong>Puertos abiertos:</strong> Dispositivos con puertos de
                  red expuestos que permiten acceso remoto no autorizado.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
          <div class="bg-gradient-to-r from-gray-700 to-gray-800 px-6 py-4">
            <h2 class="text-2xl font-bold text-white">
              📌 Resumen visual rápido
            </h2>
          </div>
          <div class="p-6 overflow-x-auto">
            <table class="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead class="bg-gray-100">
                <tr>
                  <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Tecnología
                  </th>
                  <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Principales riesgos
                  </th>
                  <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Claves de protección
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr>
                  <td class="px-4 py-3 text-sm font-medium text-gray-900">
                    Sistemas tradicionales
                  </td>
                  <td class="px-4 py-3 text-sm text-gray-600">
                    Malware, phishing, ransomware
                  </td>
                  <td class="px-4 py-3 text-sm text-gray-600">
                    Antivirus, 2FA, contraseñas seguras
                  </td>
                </tr>
                <tr>
                  <td class="px-4 py-3 text-sm font-medium text-gray-900">
                    Inteligencia Artificial
                  </td>
                  <td class="px-4 py-3 text-sm text-gray-600">
                    Inyección de prompts, deepfakes
                  </td>
                  <td class="px-4 py-3 text-sm text-gray-600">
                    Validación de entradas, control de acceso
                  </td>
                </tr>
                <tr>
                  <td class="px-4 py-3 text-sm font-medium text-gray-900">
                    Big Data
                  </td>
                  <td class="px-4 py-3 text-sm text-gray-600">
                    Pérdida de anonimato, discriminación algorítmica
                  </td>
                  <td class="px-4 py-3 text-sm text-gray-600">
                    Cifrado, anonimización robusta
                  </td>
                </tr>
                <tr>
                  <td class="px-4 py-3 text-sm font-medium text-gray-900">
                    Blockchain
                  </td>
                  <td class="px-4 py-3 text-sm text-gray-600">
                    Contratos inteligentes vulnerables, robo de claves
                  </td>
                  <td class="px-4 py-3 text-sm text-gray-600">
                    Auditorías de código, wallets seguras
                  </td>
                </tr>
                <tr>
                  <td class="px-4 py-3 text-sm font-medium text-gray-900">
                    IoT
                  </td>
                  <td class="px-4 py-3 text-sm text-gray-600">
                    Credenciales por defecto, botnets
                  </td>
                  <td class="px-4 py-3 text-sm text-gray-600">
                    Cambiar contraseñas, actualizaciones frecuentes
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
              IBM (español):{" "}
              <a
                href="https://www.ibm.com/es-es/think/topics/information-security"
                class="text-blue-600 hover:underline"
                target="_blank"
              >
                ¿Qué es la seguridad de la información?
              </a>
            </li>
            <li>
              UPN Blog:{" "}
              <a
                href="https://blogs.upn.edu.pe/posgrado/que-es-seguridad-de-la-informacion"
                class="text-blue-600 hover:underline"
                target="_blank"
              >
                ¿Qué es la seguridad de la información? Principios y pilares
              </a>
            </li>
            <li>
              Universitat Carlemany:{" "}
              <a
                href="https://www.universitatcarlemany.com/actualidad/blog/seguridad-informatica-que-es"
                class="text-blue-600 hover:underline"
                target="_blank"
              >
                Seguridad informática: qué es, principios, tipos y ejemplos
              </a>
            </li>
            <li>
              CISA.gov:{" "}
              <a
                href="https://www.cisa.gov/topics/cyber-threats-and-advisories/malware-phishing-and-ransomware"
                class="text-blue-600 hover:underline"
                target="_blank"
              >
                Malware, Phishing, and Ransomware
              </a>
            </li>
            <li>
              CrowdStrike:{" "}
              <a
                href="https://www.crowdstrike.com/en-us/cybersecurity-101/malware/types-of-malware/"
                class="text-blue-600 hover:underline"
                target="_blank"
              >
                12 Types of Malware + Examples
              </a>
            </li>
            <li>
              Trend Micro (español):{" "}
              <a
                href="https://www.trendmicro.com/es_es/what-is/cyber-attack/types-of-cyber-attacks.html"
                class="text-blue-600 hover:underline"
                target="_blank"
              >
                Los 15 tipos de ciberataques más comunes
              </a>
            </li>
            <li>
              INCIBE:{" "}
              <a
                href="https://www.incibe.es/ciudadania/tematicas/virus-y-otras-amenazas"
                class="text-blue-600 hover:underline"
                target="_blank"
              >
                Virus y otras amenazas
              </a>
            </li>
            <li>
              Hackmetrix Blog:{" "}
              <a
                href="https://blog.hackmetrix.com/ejemplos-de-ciberataques/"
                class="text-blue-600 hover:underline"
                target="_blank"
              >
                Ejemplos reales de ataques cibernéticos y sus impactos
              </a>
            </li>
            <li>
              Politécnico de Suramérica:{" "}
              <a
                href="https://www.polisura.edu.co/top-5-ataques-ciberneticos-de-la-historia"
                class="text-blue-600 hover:underline"
                target="_blank"
              >
                Top 5 ataques cibernéticos de la historia
              </a>
            </li>
            <li>
              ESEDS/L:{" "}
              <a
                href="https://www.esedsl.com/blog/20-ciberataques-mas-sonados-historia"
                class="text-blue-600 hover:underline"
                target="_blank"
              >
                Los 20 ciberataques más "sonados" de la historia
              </a>
            </li>
            <li>
              INCIBE:{" "}
              <a
                href="https://www.incibe.es/ciudadania/tematicas/contrasenas-seguras/autenticacion-de-dos-factores"
                class="text-blue-600 hover:underline"
                target="_blank"
              >
                Autenticación de dos factores (2FA)
              </a>
            </li>
            <li>
              Sistecsa:{" "}
              <a
                href="https://sistecsa.com/que-medidas-de-seguridad-son-esenciales-para-proteger-tus-datos/"
                class="text-blue-600 hover:underline"
                target="_blank"
              >
                ¿Qué medidas de seguridad son esenciales para proteger tus
                datos?
              </a>
            </li>
            <li>
              Microsoft:{" "}
              <a
                href="https://www.microsoft.com/es-es/security/business/security-101/what-is-two-factor-authentication-2fa"
                class="text-blue-600 hover:underline"
                target="_blank"
              >
                ¿Qué es la autenticación en dos fases?
              </a>
            </li>
            <li>
              LayerX Security:{" "}
              <a
                href="https://layerxsecurity.com/es/generative-ai/ai-attack-surface/"
                class="text-blue-600 hover:underline"
                target="_blank"
              >
                Superficie de ataque de la IA
              </a>
            </li>
            <li>
              SoSafe:{" "}
              <a
                href="https://sosafe-awareness.com/es/recursos/informes/principales-amenazas-ia-organizaciones/"
                class="text-blue-600 hover:underline"
                target="_blank"
              >
                Principales amenazas de ciberseguridad relacionadas con la IA
              </a>
            </li>
            <li>
              IBM:{" "}
              <a
                href="https://www.ibm.com/es-es/think/topics/ai-data-protection"
                class="text-blue-600 hover:underline"
                target="_blank"
              >
                Guía de protección de datos de IA y machine learning
              </a>
            </li>
            <li>
              Mitek Systems:{" "}
              <a
                href="https://www.miteksystems.com/es/blog/5-principales-riesgos-big-data"
                class="text-blue-600 hover:underline"
                target="_blank"
              >
                Los 5 principales riesgos del Big Data
              </a>
            </li>
            <li>
              Proofpoint:{" "}
              <a
                href="https://www.proofpoint.com/es/threat-reference/data-security"
                class="text-blue-600 hover:underline"
                target="_blank"
              >
                Seguridad de datos – Qué es, métodos y desafíos
              </a>
            </li>
            <li>
              OneSafe Blog:{" "}
              <a
                href="https://www.onesafe.io/es/blog/hidden-threats-crypto-assets-web3-security"
                class="text-blue-600 hover:underline"
                target="_blank"
              >
                Vulnerabilidades Clave en Seguridad Web3
              </a>
            </li>
            <li>
              MDPI:{" "}
              <a
                href="https://www.mdpi.com/1999-5903/17/4/183"
                class="text-blue-600 hover:underline"
                target="_blank"
              >
                Securing Decentralized Ecosystems: Blockchain Vulnerabilities
                Review
              </a>
            </li>
            <li>
              OneKey:{" "}
              <a
                href="https://onekey.so/es/blog/defi-hacks-explained"
                class="text-blue-600 hover:underline"
                target="_blank"
              >
                Distribuido e Indefenso: Cómo Ocurren los Hackeos en DeFi
              </a>
            </li>
            <li>
              Seguritecnia:{" "}
              <a
                href="https://www.seguritecnia.es/actualidad/antonio-manzanares-aeinse-ciberseguridad-e-integracion-iot-sicur-cyber_20260225.html"
                class="text-blue-600 hover:underline"
                target="_blank"
              >
                Ciberseguridad en el IoT: SICUR Cyber 2026
              </a>
            </li>
            <li>
              CASMAR Global:{" "}
              <a
                href="https://www.casmarglobal.com/es/blog/post/principales-riesgos-de-seguridad-en-iot-en-2025-y-como-protegerse"
                class="text-blue-600 hover:underline"
                target="_blank"
              >
                Principales riesgos de seguridad en IoT en 2025
              </a>
            </li>
            <li>
              Keyfactor:{" "}
              <a
                href="https://www.keyfactor.com/es/blog/iot-device-security-risks-best-practices-tips/"
                class="text-blue-600 hover:underline"
                target="_blank"
              >
                Seguridad de los dispositivos IoT: Riesgos, buenas prácticas y
                consejos
              </a>
            </li>
            <li>
              Getronics:{" "}
              <a
                href="https://www.getronics.com/es/insights/riesgos-seguridad-dispositivos-iot"
                class="text-blue-600 hover:underline"
                target="_blank"
              >
                Riesgos para la seguridad de los dispositivos IoT
              </a>
            </li>
          </ul>
        </div>
      </div>{" "}
    </>
  );
};
