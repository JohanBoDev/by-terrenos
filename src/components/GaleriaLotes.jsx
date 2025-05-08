/** @jsxImportSource preact */
import { useState } from 'preact/hooks';

const LotesEnVenta = () => {
  const [selectedLote, setSelectedLote] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const lotes = [
    { id: 1, ubicacion: 'Nocaima', infoImage: '/assets/img/galeria-lote1.jpg', precio: '260 Millones COP' },
    { id: 2, ubicacion: 'Nimaima', infoImage: '/assets/img/galeria-lote2.jpg', precio: '160 Millones COP' },
    { id: 3, ubicacion: 'Nocaima', infoImage: '/assets/img/galeria-lote3.jpg', precio: '160 Millones COP' },
    { id: 4, ubicacion: 'Nimaima', infoImage: '/assets/img/galeria-lote4.jpg', precio: '150 Millones COP' },
    { id: 5, ubicacion: 'Nocaima', infoImage: '/assets/img/galeria-lote5.jpg', precio: '150 Millones COP' },
    { id: 6, ubicacion: 'Nimaima', infoImage: '/assets/img/galeria-lote6.jpg', precio: '450 Millones COP' },
  ];

  const getGridSpan = (index) => {
    if (index === 0 || index === 5) {
      return 'lg:col-span-2';
    }
    return 'lg:col-span-1';
  };

  const openModal = (lote) => {
    setSelectedLote(lote);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => {
      setSelectedLote(null);
    }, 300); // Tiempo para el fadeOut
  };

  return (
    <div className="max-w-screen-xl mx-auto p-8">
<div class="flex flex-col md:flex-row items-center gap-4 md:gap-6 justify-center p-4">
  <h2 class="text-2xl md:text-4xl font-bold text-gray-800 text-center md:text-left">
  Lotes en Venta - Naturaleza y Exclusividad por  </h2> 
  <img 
    src="/assets/img/logo-negro.png" 
    class="h-14 md:h-20 w-auto scale-200 md:scale-150" 
    alt="Logo de B&Y Terrenos y Proyectos"
  />
</div>
<div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
  {lotes.map((lote, index) => (
    <div
      key={lote.id}
      className={`relative overflow-hidden rounded-lg shadow-lg group cursor-pointer ${getGridSpan(index)}`}
      onClick={() => openModal(lote)}
    >
      <img
        src={`/assets/img/lote${lote.id}.png`}
        alt={`Lote ${lote.id}`}
        className="w-full h-72 object-cover"
      />

      <a
        href={`https://wa.me/573123456789?text=Hola, estoy interesado en el Lote ${lote.id} ubicado en ${lote.ubicacion}.`}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-2 right-2 bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition-all duration-200 z-40"
      >
        <i className="fab fa-whatsapp text-xl"></i>
      </a>

      {/* Botón para móviles */}
      <div className="absolute top-2 left-2 md:hidden">
        <button
          onClick={(e) => {
            e.stopPropagation();
            openModal(lote);
          }}
          className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-700 transition-all"
        >
          Clic para más detalles
        </button>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4 space-y-2">
        <div className="bg-black/70 p-3 rounded-lg mb-2 shadow-lg">
          <h3 className="text-white text-2xl font-semibold tracking-wide">
            Lote {lote.id} - {lote.ubicacion}
          </h3>
          <p className="text-gray-300 text-sm">Cundinamarca, Colombia</p>
          <p className="text-gray-200 text-lg font-bold mt-2">
            {lote.precio}
          </p>
        </div>
      </div>

      {/* Overlay para desktop */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 hidden md:flex items-center justify-center transition-all duration-300">
        <div className="text-center text-white">
          <i className="fas fa-info-circle text-2xl mb-2"></i>
          <p className="text-lg font-semibold">Más detalles</p>
        </div>
      </div>
    </div>
  ))}
</div>


      {/* Modal */}
      {selectedLote && (
        <div
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 transition-all duration-300 ${
            isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="relative w-full max-w-lg">
            <button
              className="absolute top-2 right-5 text-white bg-transparent border border-white hover:bg-red-600 hover:border-transparent px-2 py-1 rounded-full z-40 md:px-3 md:py-2"
              onClick={closeModal}
            >
              ✕
            </button>
            <img
              src={selectedLote.infoImage}
              alt={`Información Lote ${selectedLote.id}`}
              className="w-full h-auto max-h-[80vh] rounded-lg shadow-lg object-contain relative"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default LotesEnVenta;
