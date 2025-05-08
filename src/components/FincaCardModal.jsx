import { useState, useEffect } from 'preact/hooks';
import { FincasData } from '../data/FincasData.js';

const FincaCardModal = () => {
  console.log("✅ FincaCardModal montado");

  const [finca, setFinca] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log("🔥 Componente cargado en el DOM");
  }, []);

  const openModal = (id) => {
    console.log("🔍 Abriendo Modal para ID:", id);
    const selectedFinca = FincasData.find((f) => f.id === id);
    if (selectedFinca) {
      console.log("✅ Finca encontrada:", selectedFinca);
      setFinca(selectedFinca);
      setIsOpen(true);
      console.log("🟢 Estado actualizado: Modal abierto");
    } else {
      console.error('❌ No se encontró la finca con ID:', id);
    }
  };

  const handleClose = () => {
    console.log("🔴 Cerrando Modal");
    setIsOpen(false);
  };

  return (
    <>
      <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {FincasData.map((finca) => (
          <article
            class="relative bg-white shadow-md rounded-xl overflow-hidden border border-gray-200 transition-transform transform hover:scale-105"
            key={finca.id}
          >
            <img src={finca.imagenUrl} alt={finca.nombre} class="w-full h-60 object-cover" />
            <div className="absolute top-2 left-2 flex gap-2">
  {finca.estado === "En alquiler" ? (
    <span className="bg-[#00a389] text-white text-xs px-2 py-1 rounded-md">
      EN ALQUILER
    </span>
  ) : (
    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-md">
      ALQUILADA
    </span>
  )}

  {finca.destacada && (
    <span className="bg-[#FFC107] text-gray-800 text-xs px-2 py-1 rounded-md">
      DESTACADO
    </span>
  )}
</div>


            <div class="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent p-4 text-white">
              <h2 class="text-lg font-semibold truncate">{finca.nombre}</h2>
              <p class="text-sm flex items-center gap-1 opacity-90">
                <i class="fas fa-map-marker-alt text-[#00a389]"></i> {finca.ubicacion}
              </p>
              <div class="flex items-center gap-4 mt-2 text-sm opacity-90">
                <span class="flex items-center gap-1">
                  <i class="fas fa-bed"></i> {finca.habitaciones}
                </span>
                <span class="flex items-center gap-1">
                  <i class="fas fa-bath"></i> {finca.banos}
                </span>
                <span class="flex items-center gap-1">
                  <i class="fas fa-users"></i> {finca.capacidad}
                </span>
              </div>
              <div class="flex items-center justify-between mt-4">
              <span className="text-xl font-bold text-white">
  {parseInt(finca.precioTemporada).toLocaleString('es-CO')}
</span>                <button
                  onClick={() => openModal(finca.id)}
                  class="bg-[#00a389] text-white px-4 py-1 rounded-lg hover:bg-[#007f6b] transition"
                >
                  Ver detalles
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>
      {isOpen && finca && (
  <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-md flex items-center justify-center">
    <div className="bg-white w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[70%] p-0 rounded-lg flex flex-col lg:flex-row shadow-lg relative overflow-auto max-h-[90vh]">
      
      {/* Botón de cerrar */}
      <button
        className="absolute top-3 right-3 text-gray-800 bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
        onClick={handleClose}
      >
        ✕
      </button>

      {/* Imagen a la izquierda */}
      <div className="w-full md:w-2/5 h-[250px] md:h-full overflow-hidden rounded-t-lg md:rounded-l-lg md:rounded-t-none">
        <img src={finca.imagenUrl} alt={finca.nombre} className="w-full h-full object-cover" />
      </div>

      {/* Información a la derecha */}
      <div className="w-full md:w-3/5 p-4 md:p-6 text-gray-800 flex flex-col justify-between">
        
        {/* Encabezado */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-1">{finca.nombre}</h2>
          <p className="text-sm text-gray-500 mb-2">{finca.ubicacion}</p>
        </div>

        {/* Características principales */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center gap-2">
            <i className="fas fa-users text-gray-600"></i>
            <p>{finca.capacidad} personas</p>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-bed text-gray-600"></i>
            <p>{finca.habitaciones} habitaciones</p>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-bath text-gray-600"></i>
            <p>{finca.banos} baños</p>
          </div>
          <div className="flex items-center gap-2">
  <i className="fas fa-money-bill-wave text-gray-600"></i>
  <p>
    {new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(finca.precioPersona)} por persona
  </p>
</div>

<div className="flex items-center gap-2">
  <i className="fas fa-calendar-alt text-gray-600"></i>
  <p>
    {new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(finca.precioTemporada)} por temporada
  </p>
</div>

        </div>

        {/* Descripción y características adicionales */}
        <div className="mt-2">
          <h3 className="font-semibold text-lg mb-1">Características:</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
            {finca.caracteristicas?.map((caracteristica) => (
              <li key={caracteristica}>{caracteristica}</li>
            ))}
          </ul>

          <div className="mt-4 p-3 bg-gray-100 rounded-md">
            <p className="text-sm text-gray-600">{finca.descripcion}</p>
          </div>
        </div>

        {/* Botón de Cotizar por WhatsApp */}
        <div className="mt-6">
          <a
            href={`https://wa.me/?text=Hola, estoy interesado en la finca ${finca.nombre} ubicada en ${finca.ubicacion}. ¿Podrían brindarme información sobre la cotización?`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white flex items-center justify-center gap-2 p-3 rounded-lg transition duration-300 ease-in-out"
          >
            <i className="fab fa-whatsapp text-lg"></i>
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  </div>
)}





    </>
  );
};

export default FincaCardModal;
