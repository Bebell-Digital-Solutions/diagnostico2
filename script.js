
document.addEventListener('DOMContentLoaded', () => {

    // --- DATOS DE LA APLICACIÓN ---
    const SECCIONES = [
        {
            id: 1, title: 'Fundamentos y Visión',
            questions: [
                { id: '1_1', text: '¿Qué impulsa tu negocio?', options: [{ value: 'A', text: 'Demanda validada del mercado (con datos)' }, { value: 'B', text: 'Pasión personal (me encanta, pero no sé si hay mercado)' }, { value: 'C', text: 'Seguir tendencias (otros lo hacen)' }, { value: 'D', text: 'Creció accidentalmente (sin visión intencional)' }] },
                { id: '1_2', text: '¿Cómo mides el éxito?', options: [{ value: 'A', text: 'Rentabilidad + sistemas sostenibles' }, { value: 'B', text: 'Reconocimiento de marca' }, { value: 'C', text: 'Libertad personal (tiempo/ingresos)' }, { value: 'D', text: 'Todavía lo estoy definiendo' }] }
            ]
        },
        {
            id: 2, title: 'Estructura y Operaciones',
            questions: [
                { id: '2_1', text: '¿Cómo se delegan las tareas?', options: [{ value: 'A', text: 'Roles claros/SOPs documentados' }, { value: 'B', text: '"Quien esté libre" (improvisado)' }, { value: 'C', text: 'Yo hago todo lo crítico' }, { value: 'D', text: 'Caos total' }] },
                { id: '2_2', text: 'Si te ausentaras un mes, ¿las operaciones continuarían?', options: [{ value: 'A', text: 'Sí (equipo autónomo)' }, { value: 'B', text: 'Mayormente (con supervisión mínima)' }, { value: 'C', text: 'No (todo colapsaría)' }, { value: 'D', text: 'No tengo equipo' }] }
            ]
        },
        {
            id: 3, title: 'Productividad y Gestión del Tiempo',
            questions: [
                { id: '3_1', text: '¿Cuál es tu mayor fuga de productividad?', options: [{ value: 'A', text: 'Reuniones/correos' }, { value: 'B', text: 'Redes sociales/distracciones' }, { value: 'C', text: 'Tareas de bajo valor (delegables)' }, { value: 'D', text: 'Sobreplanificar, poco ejecutar' }] },
                { id: '3_2', text: '¿Cómo priorizas el trabajo?', options: [{ value: 'A', text: 'Por ROI (impacto económico)' }, { value: 'B', text: 'Urgencia (apagar incendios)' }, { value: 'C', text: 'Estado de ánimo (lo que "apetece")' }, { value: 'D', text: 'Sin sistema' }] }
            ]
        },
        {
            id: 4, title: 'Salud Financiera',
            questions: [
                { id: '4_1', text: '¿Con qué frecuencia revisas finanzas?', options: [{ value: 'A', text: 'Semanalmente (detallado)' }, { value: 'B', text: 'Mensualmente (general)' }, { value: 'C', text: 'Solo en impuestos' }, { value: 'D', text: 'Lo evito (me estresa)' }] },
                { id: '4_2', text: 'Tu flujo de caja es...', options: [{ value: 'A', text: 'Estable (6+ meses de reserva)' }, { value: 'B', text: 'Ajustado (sobrevives mes a mes)' }, { value: 'C', text: 'Impredecible' }, { value: 'D', text: 'No lo registro' }] }
            ]
        },
        {
            id: 5, title: 'Marketing y Ventas',
            questions: [
                { id: '5_1', text: '¿Cómo atraes clientes?', options: [{ value: 'A', text: 'Campañas basadas en datos' }, { value: 'B', text: 'Orgánico (boca a boca)' }, { value: 'C', text: 'Esfuerzos aleatorios' }, { value: 'D', text: 'Batallo para conseguir leads' }] },
                { id: '5_2', text: 'Tu proceso de ventas es...', options: [{ value: 'A', text: 'Sistematizado (replicable)' }, { value: 'B', text: 'Depende de relaciones personales' }, { value: 'C', text: 'Inconsistente' }, { value: 'D', text: 'No existe' }] }
            ]
        },
        {
            id: 6, title: 'Protección Legal',
            questions: [
                { id: '6_1', text: '¿Qué tan protegido está tu negocio legalmente?', options: [{ value: 'A', text: 'Totalmente (revisado por abogado)' }, { value: 'B', text: 'Uso plantillas básicas' }, { value: 'C', text: 'Ignoro los riesgos' }, { value: 'D', text: 'No tengo idea' }] }
            ]
        },
        {
            id: 7, title: 'Identidad de Marca',
            questions: [
                { id: '7_1', text: 'Tu marca destaca porque...', options: [{ value: 'A', text: 'Propuesta de valor única y clara' }, { value: 'B', text: 'Identidad visual fuerte' }, { value: 'C', text: '"Somos más baratos/simpáticos"' }, { value: 'D', text: 'No hay diferenciación' }] }
            ]
        },
        {
            id: 8, title: 'Servicio al Cliente',
            questions: [
                { id: '8_1', text: '¿Cómo manejas quejas?', options: [{ value: 'A', text: 'Sistematizado (FAQs, chatbots)' }, { value: 'B', text: 'Respondo personalmente todo' }, { value: 'C', text: 'Reactivo (solo cuando escalan)' }, { value: 'D', text: 'Rara vez recibo feedback' }] }
            ]
        },
        {
            id: 9, title: 'Tecnología y Herramientas',
            questions: [
                { id: '9_1', text: 'Tu stack tecnológico es...', options: [{ value: 'A', text: 'Optimizado (ahorra tiempo/recursos)' }, { value: 'B', text: 'Parches (algunas herramientas útiles)' }, { value: 'C', text: 'Obsoleto/ineficiente' }, { value: 'D', text: 'No existe (uso Excel/papel)' }] }
            ]
        },
        {
            id: 10, title: 'Crecimiento e Innovación',
            questions: [
                { id: '10_1', text: '¿Cuándo innovaste por última vez?', options: [{ value: 'A', text: 'Último trimestre (probé algo nuevo)' }, { value: 'B', text: 'Hace más de un año' }, { value: 'C', text: 'Copio a competidores' }, { value: 'D', text: '"Si funciona, no lo toco"' }] }
            ]
        },
        {
            id: 11, title: 'Preparación en IA',
            questions: [
                { id: '11_1', text: 'Uso de IA en tu negocio:', options: [{ value: 'A', text: 'Automatizo procesos clave' }, { value: 'B', text: 'Pruebo herramientas puntuales' }, { value: 'C', text: 'No sé cómo aplicarla' }, { value: 'D', text: '"No es relevante para mí"' }] },
                { id: '11_2', text: 'Herramientas de IA que usas:', options: [{ value: 'A', text: 'ChatGPT, Midjourney, análisis predictivo' }, { value: 'B', text: 'Solo Grammarly/Canva AI' }, { value: 'C', text: 'Ninguna' }, { value: 'D', text: '"No entiendo la IA"' }] }
            ]
        },
        {
            id: 12, title: 'Infraestructura Digital',
            questions: [
                { id: '12_1', text: 'Tu dispositivo principal es:', options: [{ value: 'A', text: 'Laptop/PC de alto rendimiento' }, { value: 'B', text: 'Tablet/dispositivo antiguo' }, { value: 'C', text: 'Solo teléfono móvil' }, { value: 'D', text: 'Comparto/pidiendo prestado' }] },
                { id: '12_2', text: 'Estabilidad de tu conexión a internet:', options: [{ value: 'A', text: 'Fibra óptica (siempre estable)' }, { value: 'B', text: 'A veces falla' }, { value: 'C', text: 'Dependo de WiFi público' }, { value: 'D', text: '"Es un problema constante"' }] }
            ]
        },
        {
            id: 13, title: 'Presupuesto y Recursos',
            questions: [
                { id: '13_1', text: 'Presupuesto mensual para crecimiento:', options: [{ value: 'A', text: '$500+ (inversión activa)' }, { value: 'B', text: '$100-$500 (lo básico)' }, { value: 'C', text: 'Menos de $100' }, { value: 'D', text: '"No tengo presupuesto"' }] },
                { id: '13_2', text: 'Horas semanales para estrategia:', options: [{ value: 'A', text: '20+ horas (dedicación total)' }, { value: 'B', text: '5-10 horas (entre otras tareas)' }, { value: 'C', text: 'Menos de 5 horas' }, { value: 'D', text: '"Solo apago incendios"' }] }
            ]
        }
    ];
    
    const PUNTUACIONES = { 'A': 3, 'B': 2, 'C': 1, 'D': 0 };
    const COLORES = { 3: '#4caf50', 2: '#2196f3', 1: '#ffc107', 0: '#f44336' };
    const TOTAL_PREGUNTAS = SECCIONES.reduce((acc, s) => acc + s.questions.length, 0);

    let respuestas = {};
    let chartInstance = null;

    const sectionsGrid = document.getElementById('sections-grid');
    const progressBar = document.getElementById('progress-bar');
    const progressPercentage = document.getElementById('progress-percentage');
    const formView = document.getElementById('form-view');
    const reportView = document.getElementById('report-view');
    const generateReportBtn = document.getElementById('generate-report-btn');
    const backToFormBtn = document.getElementById('back-to-form-btn');
    const downloadPdfBtn = document.getElementById('download-pdf-btn');
    const formError = document.getElementById('form-error');
    const themeToggle = document.getElementById('theme-toggle-checkbox');

    function inicializar() {
        cargarRespuestas();
        renderizarFormulario();
        actualizarProgreso();
        configurarEventListeners();
        configurarTema();
    }

    function configurarEventListeners() {
        generateReportBtn.addEventListener('click', manejarGeneracionReporte);
        backToFormBtn.addEventListener('click', () => cambiarVista('form'));
        downloadPdfBtn.addEventListener('click', descargarPDF);
        themeToggle.addEventListener('change', cambiarTema);
    }

    function configurarTema() {
        const temaGuardado = localStorage.getItem('theme') || 'light';
        document.documentElement.className = temaGuardado;
        themeToggle.checked = temaGuardado === 'dark';
    }

    function cambiarTema() {
        const temaActual = themeToggle.checked ? 'dark' : 'light';
        document.documentElement.className = temaActual;
        localStorage.setItem('theme', temaActual);
        if (reportView.style.display === 'block' && chartInstance) {
            renderizarGrafico();
        }
    }

    function renderizarFormulario() {
        sectionsGrid.innerHTML = '';
        SECCIONES.forEach(section => {
            const card = document.createElement('div');
            card.className = 'section-card';
            
            let questionsHTML = '';
            section.questions.forEach(q => {
                const respuestaActual = respuestas[q.id];
                questionsHTML += `
                    <div class="question-block">
                        <p class="question-text">${q.text}</p>
                        <div class="options-group" data-question-id="${q.id}">
                            ${q.options.map(opt => `
                                <label class="radio-label ${respuestaActual === opt.value ? 'selected' : ''}">
                                    <input type="radio" name="question-${q.id}" value="${opt.value}" ${respuestaActual === opt.value ? 'checked' : ''}>
                                    <span class="custom-radio"><span class="dot"></span></span>
                                    <span class="radio-text">${opt.text}</span>
                                </label>
                            `).join('')}
                        </div>
                    </div>
                `;
            });

            card.innerHTML = `<h3>${section.id}. ${section.title}</h3> ${questionsHTML}`;
            sectionsGrid.appendChild(card);
        });

        sectionsGrid.addEventListener('change', (e) => {
            if (e.target.tagName === 'INPUT' && e.target.type === 'radio') {
                const questionId = e.target.closest('.options-group').dataset.questionId;
                const value = e.target.value;
                
                e.target.closest('.options-group').querySelectorAll('.radio-label').forEach(label => {
                    label.classList.remove('selected');
                });
                e.target.parentElement.classList.add('selected');

                manejarCambioRespuesta(questionId, value);
            }
        });
    }

    function manejarCambioRespuesta(questionId, value) {
        respuestas[questionId] = value;
        guardarRespuestas();
        actualizarProgreso();
    }

    function actualizarProgreso() {
        const respondidos = Object.keys(respuestas).length;
        const porcentaje = TOTAL_PREGUNTAS > 0 ? (respondidos / TOTAL_PREGUNTAS) * 100 : 0;
        
        progressBar.style.width = `${porcentaje}%`;
        progressPercentage.textContent = `${Math.round(porcentaje)}%`;
        
        generateReportBtn.disabled = respondidos < TOTAL_PREGUNTAS;
    }

    function manejarGeneracionReporte() {
        if (Object.keys(respuestas).length < TOTAL_PREGUNTAS) {
            const faltantes = TOTAL_PREGUNTAS - Object.keys(respuestas).length;
            formError.textContent = `Por favor, responde las ${faltantes} pregunta${faltantes > 1 ? 's' : ''} restante${faltantes > 1 ? 's' : ''}.`;
            setTimeout(() => { formError.textContent = "" }, 4000);
            return;
        }
        formError.textContent = "";
        renderizarReporte();
        cambiarVista('report');
    }

    function renderizarReporte() {
        renderizarPlanDeAccion();
        renderizarGrafico();
        renderizarResumenRespuestas();
        document.getElementById('report-date').textContent = new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
        document.getElementById('current-year').textContent = new Date().getFullYear();
    }

    function renderizarGrafico() {
        const ctx = document.getElementById('results-chart').getContext('2d');
        const datosGrafico = SECCIONES.map(section => {
            const scores = section.questions.map(q => PUNTUACIONES[respuestas[q.id]] || 0);
            const avgScore = scores.reduce((a, b) => a + b, 0) / scores.length;
            return {
                label: section.title,
                score: avgScore,
                color: COLORES[Math.round(avgScore)] || '#cccccc'
            };
        });

        const esTemaOscuro = document.documentElement.classList.contains('dark');
        const colorTexto = esTemaOscuro ? '#f9fafb' : '#374151';
        const colorGrid = esTemaOscuro ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)';

        if (chartInstance) chartInstance.destroy();

        chartInstance = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: datosGrafico.map(d => d.label),
                datasets: [{
                    label: 'Puntuación Promedio',
                    data: datosGrafico.map(d => d.score),
                    backgroundColor: datosGrafico.map(d => d.color),
                    borderRadius: 4,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                indexAxis: 'y',
                scales: {
                    x: {
                        beginAtZero: true,
                        max: 3,
                        ticks: { stepSize: 1, color: colorTexto },
                        grid: { color: colorGrid }
                    },
                    y: { ticks: { color: colorTexto }, grid: { display: false } }
                },
                plugins: { legend: { display: false } }
            }
        });
    }

    function renderizarResumenRespuestas() {
        const summaryContainer = document.getElementById('answers-summary');
        summaryContainer.innerHTML = '';
        SECCIONES.forEach(section => {
            section.questions.forEach(q => {
                const answerValue = respuestas[q.id];
                const answerData = q.options.find(opt => opt.value === answerValue);
                const score = PUNTUACIONES[answerValue];
                const color = COLORES[score];
                
                const item = document.createElement('div');
                item.className = 'answer-item';
                item.style.borderColor = color;
                item.innerHTML = `
                    <p class="question">${section.title} - ${q.text}</p>
                    <p class="answer"><strong>Respuesta (${answerValue}):</strong> ${answerData.text}</p>`;
                summaryContainer.appendChild(item);
            });
        });
    }

    function renderizarPlanDeAccion() {
        const planContainer = document.getElementById('action-plan-content');
        const { diagnostico, areasCriticas } = generarPlanDeAccion();

        let html = `
            <div class="diagnosis-box type-${diagnostico.tipo}">
                <p><strong>Diagnóstico General: Perfil ${diagnostico.titulo}</strong></p>
                <p>${diagnostico.descripcion}</p>
                <p><strong>Riesgo principal:</strong> ${diagnostico.riesgo}</p>
            </div>`;

        if (areasCriticas.length > 0) {
            html += `<h4>Áreas de Enfoque Prioritario</h4><p>Basado en tus respuestas, estas son las áreas que requieren tu atención inmediata para fortalecer tu negocio y mitigar riesgos.</p><ul>`;
            areasCriticas.forEach(area => {
                html += `<li><strong>${area.title}:</strong> ${area.recomendacion}</li>`;
            });
            html += `</ul>`;
        } else {
             html += `<h4>¡Excelente Fundamento!</h4><p>Todas las áreas de tu negocio muestran una base sólida. Tu enfoque ahora debe ser la optimización continua y la búsqueda de nuevas oportunidades de crecimiento para mantener tu ventaja competitiva. ¡Sigue así!</p>`;
        }
        planContainer.innerHTML = html;
    }

    function generarPlanDeAccion() {
        const conteo = { A: 0, B: 0, C: 0, D: 0 };
        Object.values(respuestas).forEach(r => { conteo[r]++; });
        
        const tipoDominante = Object.keys(conteo).reduce((a, b) => conteo[a] > conteo[b] ? a : b);
        const perfiles = {
            A: { tipo: 'A', titulo: 'Estratégico Riguroso', descripcion: 'Operas con sistemas y datos, lo cual es excelente. Tu enfoque es la optimización y la escalabilidad.', riesgo: 'Perder agilidad o tardar en responder a cambios inesperados del mercado.' },
            B: { tipo: 'B', titulo: 'Funcional Reactivo', descripcion: 'Tu negocio funciona, pero a menudo reaccionas a las circunstancias en lugar de dirigir el rumbo. Hay una base sólida para construir.', riesgo: 'Estancamiento a largo plazo si no se implementan sistemas proactivos.' },
            C: { tipo: 'C', titulo: 'Supervivencia', descripcion: 'Estás enfocado en mantener el negocio a flote, a menudo con esfuerzos inconsistentes o falta de estrategia clara.', riesgo: 'Quedarse obsoleto o ser superado por competidores más organizados.' },
            D: { tipo: 'D', titulo: 'Crítico', descripcion: 'Existen problemas fundamentales en la estructura y operación de tu negocio que necesitan atención urgente.', riesgo: 'Fracaso inminente si no se abordan los problemas de raíz.' }
        };
        
        const recomendacionesPorArea = {
            1: 'Define o refina tu cliente ideal y tu propuesta de valor. La claridad en tu visión es el mapa para todas tus decisiones futuras.',
            2: 'Documenta un proceso clave esta semana (ej. cómo respondes a un nuevo cliente). Empieza a crear sistemas para no depender solo de ti.',
            3: 'Adopta una herramienta de gestión de tareas (como Trello o Asana) y aplica la regla de los 2 minutos. Si algo toma menos de 2 minutos, hazlo ya; si no, agéndalo.',
            4: 'Crea un presupuesto simple y revisa tus números semanalmente. La claridad financiera es fundamental para tomar decisiones inteligentes.',
            5: 'Define un único canal de adquisición de clientes y enfócate en él durante 90 días. Mide tus resultados y ajusta tu estrategia.',
            6: 'Utiliza plantillas de contratos básicos para tus clientes y proveedores. Es un primer paso simple para proteger tu negocio.',
            7: 'Escribe en una frase por qué un cliente debería elegirte a ti y no a tu competencia. Esa es tu propuesta de valor; comunícala en todos tus materiales.',
            8: 'Crea una lista de 5 preguntas frecuentes (FAQs) y sus respuestas para agilizar tu comunicación y mejorar la experiencia del cliente.',
            9: 'Identifica una tarea repetitiva que te quite tiempo y busca una herramienta que la automatice o simplifique. Empieza pequeño.',
            10: 'Dedica 2 horas a la semana para investigar tu mercado y competidores. La innovación nace de la información y la creatividad.',
            11: 'Prueba una herramienta de IA generativa (como ChatGPT) para ayudarte a redactar un correo o una publicación en redes sociales. Experimenta su potencial.',
            12: 'Evalúa si tu infraestructura actual te está costando tiempo o dinero. Una buena conexión o un dispositivo rápido no son un gasto, son una inversión.',
            13: 'Asigna una pequeña cantidad, aunque sean $50 al mes, para invertir en formación o herramientas. Trátalo como una factura obligatoria para tu crecimiento.'
        };
        
        const areasCriticas = SECCIONES.map(section => {
            const scores = section.questions.map(q => PUNTUACIONES[respuestas[q.id]]);
            const avgScore = scores.reduce((a, b) => a + b, 0) / scores.length;
            return { id: section.id, title: section.title, score: avgScore };
        })
        .filter(s => s.score < 1.75) // Umbral para considerar un área crítica o de mejora
        .sort((a,b) => a.score - b.score)
        .map(s => ({ title: s.title, recomendacion: recomendacionesPorArea[s.id]}));

        return { diagnostico: perfiles[tipoDominante], areasCriticas };
    }

    async function descargarPDF() {
        const reportContent = document.getElementById('report-content');
        const pdfHeader = reportContent.querySelector('.pdf-header');
        const pdfFooter = reportContent.querySelector('.pdf-footer');
        
        cambiarVista('pdf-render');
        pdfHeader.style.display = 'flex';
        pdfFooter.style.display = 'block';

        const options = {
            margin: [15, 10, 15, 10], // top, left, bottom, right
            filename: 'Diagnostico-Salud-Empresarial.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true, logging: false },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
            pagebreak: { mode: 'css', before: '.page-break-before', avoid: '.page-break-avoid' }
        };
        
        await html2pdf().from(reportContent).set(options).save();

        pdfHeader.style.display = 'none';
        pdfFooter.style.display = 'none';
        cambiarVista('report');
    }
    
    function cambiarVista(vista) {
        if (vista === 'form') {
            reportView.style.display = 'none';
            formView.style.display = 'block';
        } else if (vista === 'report') {
            formView.style.display = 'none';
            reportView.style.display = 'block';
            window.scrollTo(0, 0);
        }
        // 'pdf-render' no cambia la vista, solo prepara el DOM
    }

    function guardarRespuestas() {
        localStorage.setItem('diagnosticAnswers', JSON.stringify(respuestas));
    }

    function cargarRespuestas() {
        try {
            const guardado = localStorage.getItem('diagnosticAnswers');
            respuestas = guardado ? JSON.parse(guardado) : {};
        } catch (error) {
            console.error("Error al cargar respuestas guardadas, se empezará de cero.", error);
            respuestas = {};
        }
    }

    inicializar();
});
