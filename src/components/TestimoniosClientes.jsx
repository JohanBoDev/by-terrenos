import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';

const testimonios = [
  {
    id: 1,
    nombre: "Carlos Ramírez",
    ubicacion: "Nocaima, Cundinamarca",
    mensaje: "La experiencia fue increíble, encontré el lote perfecto gracias al acompañamiento constante y profesionalismo de B&Y Terrenos y Proyectos.",
    imagen: "https://images.unsplash.com/photo-1584043720379-b56cd9199c94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1lbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    nombre: "Ana María López",
    ubicacion: "Nimaima, Cundinamarca",
    mensaje: "El proceso de compra fue muy sencillo y seguro. Me brindaron toda la asesoría que necesitaba.",
    imagen: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tYW58ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    nombre: "Jorge Medina",
    ubicacion: "Villeta, Cundinamarca",
    mensaje: "Excelente atención, siempre atentos a responder todas mis dudas. 100% recomendados.",
    imagen: "https://images.unsplash.com/photo-1610088441520-4352457e7095?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWVufGVufDB8fDB8fHww",
  },
];

const TestimoniosClientes = () => {
  const [indexActual, setIndexActual] = useState(0);

  // Cambio automático en móviles
  useEffect(() => {
    const intervalo =
      window.innerWidth < 768
        ? setInterval(() => {
            setIndexActual((prevIndex) => (prevIndex + 1) % testimonios.length);
          }, 5000)
        : null;

    return () => {
      if (intervalo) clearInterval(intervalo);
    };
  }, []);

  const siguienteTestimonio = () => {
    setIndexActual((prevIndex) => (prevIndex + 1) % testimonios.length);
  };

  const anteriorTestimonio = () => {
    setIndexActual((prevIndex) =>
      prevIndex === 0 ? testimonios.length - 1 : prevIndex - 1
    );
  };

  return (
    <section class="bg-gray-100 py-16">
    <div class="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-5 md:px-0">

      {/* Sección Izquierda */}
      <div class="space-y-5">
      <div class="flex flex-wrap items-center justify-center  gap-3 md:gap-x-10 p-4">
  <h2 class="text-2xl md:text-3xl font-bold text-gray-800 text-center  flex items-center gap-2">
    ¿Qué dicen nuestros clientes sobre
  </h2> 
  <img 
    src="/assets/img/logo-negro.png" 
    class="h-10 md:h-14 w-auto scale-200 center"
    alt="Logo de B&Y Terrenos y Proyectos"
  />
</div>

        <p class="text-gray-600">
          Historias de satisfacción y confianza en B&Y Terrenos y Proyectos.
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
  <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
    <div class="text-center space-y-2">
      <h3 class="text-3xl font-bold text-blue-950">150+</h3>
      <p class="text-gray-500 text-lg">Clientes satisfechos</p>
    </div>
  </div>


  <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
    <div class="text-center space-y-2">
      <div class="flex items-center justify-center gap-2 text-blue-950">
        <h3 class="text-3xl font-bold">4.9</h3>
        <i class="fas fa-star text-yellow-500 text-2xl"></i>
      </div>
      <p class="text-gray-500 text-lg">Calificación promedio</p>
    </div>
  </div>
</div>
      </div>

      {/* Sección Derecha */}
      <div class="bg-white p-8 rounded-lg shadow-lg relative overflow-hidden">
        {/* Icono de Quote */}
        <i class="fas fa-quote-right absolute text-4xl text-gray-200 top-4 right-4"></i>

        {/* Información del cliente */}
        <div class="flex items-center gap-4 mb-4">
          <img
            src={testimonios[indexActual].imagen}
            alt={testimonios[indexActual].nombre}
            class="w-20 h-20 rounded-full object-cover border-2 border-gray-200 shadow-sm"
          />
          <div>
            <h3 class="text-xl font-semibold text-gray-800">
              {testimonios[indexActual].nombre}
            </h3>
            <p class="text-gray-500 text-sm">{testimonios[indexActual].ubicacion}</p>
          </div>
        </div>

        {/* Mensaje del testimonio */}
        <p class="text-gray-600 leading-relaxed mb-4 italic">
          "{testimonios[indexActual].mensaje}"
        </p>

        {/* Navegación Manual */}
        <div class="flex gap-4 mt-6 justify-center">
          <button
            onClick={anteriorTestimonio}
            class="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition shadow-md"
          >
            <i class="fas fa-chevron-left text-gray-600"></i>
          </button>
          <button
            onClick={siguienteTestimonio}
            class="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition shadow-md"
          >
            <i class="fas fa-chevron-right text-gray-600"></i>
          </button>
        </div>
      </div>
    </div>
  </section>
  );
};

export default TestimoniosClientes;
