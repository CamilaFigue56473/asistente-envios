// ==========================================
// 1. SELECCIÓN DE ELEMENTOS DEL DOM
// ==========================================

// Tarjetas de servicios
const tarjetaBasico = document.getElementById('tarjeta-basico');
const tarjetaEstandar = document.getElementById('tarjeta-estandar');
const tarjetaPrioritario = document.getElementById('tarjeta-prioritario');

// Agrupamos las tarjetas en un array para manejarlas fácilmente
const tarjetas = [tarjetaBasico, tarjetaEstandar, tarjetaPrioritario];

// ==========================================
// 2. EVENTOS E INTERACCIONES VISUALES
// ==========================================

// Requisito de rúbrica: Selección visual mediante classList
tarjetas.forEach(tarjeta => {
    tarjeta.addEventListener('click', () => {
        // Primero, limpiamos la selección de todas las tarjetas
        tarjetas.forEach(t => t.classList.remove('is-selected'));
        
        // Luego, agregamos la clase solo a la tarjeta clickeada
        tarjeta.classList.add('is-selected');
    });
});
// ==========================================
// 3. LÓGICA DE RECOMENDACIÓN Y FORMULARIO
// ==========================================
const formulario = document.getElementById('formulario-envio');
const panelRecomendacion = document.getElementById('panel-recomendacion');
const resultadoContenido = document.getElementById('resultado-contenido');
const btnLimpiar = document.getElementById('btn-limpiar');

// Evento submit del formulario
formulario.addEventListener('submit', function(evento) {
    // 1. Evitamos que la página se recargue (Requisito obligatorio)
    evento.preventDefault();

    // 2. Capturamos los valores
    const origen = document.getElementById('origen').value;
    const destino = document.getElementById('destino').value;
    const tipoEnvio = document.getElementById('tipo-envio').value;
    const peso = document.getElementById('peso').value;
    const urgencia = document.getElementById('urgencia').value;

    // 3. Regla funcional de recomendación
    let servicioSugerido = "";
    if (urgencia === "baja") {
        servicioSugerido = "Servicio Básico";
    } else if (urgencia === "media") {
        servicioSugerido = "Servicio Estándar";
    } else if (urgencia === "alta") {
        servicioSugerido = "Servicio Prioritario";
    }

    // 4. Generamos el panel de resumen dinámico
    resultadoContenido.innerHTML = `
        <p class="mb-1">Ruta: <strong>${origen}</strong> a <strong>${destino}</strong></p>
        <p class="mb-1">Envío: <strong>${tipoEnvio}</strong> (${peso} kg)</p>
        <hr class="border-light">
        <p class="mb-2">Te sugerimos contratar:</p>
        <span class="badge bg-light text-primary fs-6 p-2 shadow-sm">${servicioSugerido}</span>
    `;

    // 5. Mostramos el panel quitando la clase 'd-none' de Bootstrap
    panelRecomendacion.classList.remove('d-none');
});

// ==========================================
// 4. RESTABLECER LA INTERFAZ
// ==========================================
btnLimpiar.addEventListener('click', function() {
    // Volvemos a ocultar el panel
    panelRecomendacion.classList.add('d-none');
    
    // Limpiamos las selecciones de las tarjetas
    tarjetas.forEach(t => t.classList.remove('is-selected'));
});
