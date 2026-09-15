const translations = {
  en: {
    navExperience: "Experience", navAI: "AI in action", navContact: "Contact",
    available: "Barcelona · Open to fully remote", hello: "Hi, I’m", heroLead: "I solve customer problems, coordinate travel operations and use AI to turn repetitive work into clear, faster workflows.",
    seeAI: "See how I use AI", downloadCV: "Download CV", years: "years in support & travel", cases: "cases handled daily", languages: "working languages",
    noteOne: "Human first", noteTwo: "AI assisted", experienceKicker: "Experience", experienceTitle: "Calm under pressure.<br>Curious by default.", present: "Present",
    nuiteeTitle: "Customer Service Representative", nuiteeText: "Managing 70+ daily B2B hotel cases, from check-in instructions and booking changes to supplier escalations — across five markets and a 48–72 hour SLA.",
    bookingTitle: "Customer Service Specialist", bookingText: "Supported travellers and accommodation partners in Bulgarian, English and Spanish, resolving reservations, cancellations, refunds and overbooking cases.",
    founderTitle: "Founder & Digital Operator", founderText: "Built a practical service portal for the Bulgarian community in Barcelona, coordinating client enquiries, content, services and partners end to end.",
    almaTitle: "B2B Reservations Agent", almaText: "Managed reservations and booking coordination for travel agency partners — the foundation of my supplier-side understanding.",
    labKicker: "Interactive AI lab", labTitle: "Give me a situation.", labIntro: "AI does not replace judgment. It helps me structure information, spot gaps and move faster. Choose a real work scenario:",
    scenarioEscalation: "Urgent customer escalation", scenarioWorkflow: "Repetitive team workflow", scenarioContent: "Multilingual content task", labFootnote: "The important part is not the prompt. It is knowing what to verify before acting.",
    toolboxKicker: "Toolbox", toolboxTitle: "Tools change.<br>Good judgment travels.", languagesKicker: "Languages", native: "Native",
    contactKicker: "Let’s talk", contactTitle: "Need someone who can handle the customer — and improve the system behind the conversation?", emailMe: "Email me", surprise: "One last click ✦", footer: "Made with curiosity, judgment & AI.",
    surpriseMessage: "Plot twist: the AI built the sparkle. Leda decided where it belongs.",
  },
  es: {
    navExperience: "Experiencia", navAI: "IA en acción", navContact: "Contacto",
    available: "Barcelona · Disponible para trabajo 100% remoto", hello: "Hola, soy", heroLead: "Resuelvo problemas de clientes, coordino operaciones de viaje y uso la IA para convertir tareas repetitivas en procesos claros y ágiles.",
    seeAI: "Cómo uso la IA", downloadCV: "Descargar CV", years: "años en soporte y turismo", cases: "casos gestionados al día", languages: "idiomas de trabajo",
    noteOne: "Primero, lo humano", noteTwo: "Con ayuda de IA", experienceKicker: "Experiencia", experienceTitle: "Calma bajo presión.<br>Curiosidad por defecto.", present: "Actualidad",
    nuiteeTitle: "Representante de Atención al Cliente", nuiteeText: "Gestión de más de 70 casos B2B hoteleros al día: instrucciones de check-in, cambios de reserva y escalaciones a proveedores, para cinco mercados y con SLA de 48–72 horas.",
    bookingTitle: "Especialista en Atención al Cliente", bookingText: "Soporte a viajeros y alojamientos en búlgaro, inglés y español, resolviendo reservas, cancelaciones, reembolsos y casos de overbooking.",
    founderTitle: "Fundadora y Operadora Digital", founderText: "Creé un portal práctico para la comunidad búlgara de Barcelona y coordino consultas, contenido, servicios y colaboradores de principio a fin.",
    almaTitle: "Agente de Reservas B2B", almaText: "Gestioné reservas y coordinación para agencias de viaje, la base de mi conocimiento del lado del proveedor.",
    labKicker: "Laboratorio interactivo de IA", labTitle: "Dame una situación.", labIntro: "La IA no sustituye el criterio. Me ayuda a estructurar información, detectar vacíos y avanzar más rápido. Elige un escenario real:",
    scenarioEscalation: "Escalación urgente de cliente", scenarioWorkflow: "Proceso de equipo repetitivo", scenarioContent: "Tarea de contenido multilingüe", labFootnote: "Lo importante no es el prompt. Es saber qué verificar antes de actuar.",
    toolboxKicker: "Herramientas", toolboxTitle: "Las herramientas cambian.<br>El buen criterio viaja.", languagesKicker: "Idiomas", native: "Nativo",
    contactKicker: "Hablemos", contactTitle: "¿Buscas a alguien que atienda al cliente y mejore el sistema detrás de la conversación?", emailMe: "Escríbeme", surprise: "Un último clic ✦", footer: "Hecho con curiosidad, criterio e IA.",
    surpriseMessage: "Giro de guion: la IA creó el brillo. Leda decidió dónde colocarlo.",
  }
};

const scenarios = {
  en: {
    escalation: `<div class="prompt">&gt; A guest cannot check in. Information is incomplete. What now?</div><strong>My AI-assisted workflow:</strong><ul><li>Extract verified booking facts and identify what is missing.</li><li>Prioritise by urgency, guest impact and SLA.</li><li>Draft a clear message for the hotel and a calm update for the partner.</li><li>Record actions and the next commitment time.</li></ul><span class="human-check">Human check → Never send an unverified confirmation.</span>`,
    workflow: `<div class="prompt">&gt; The same question appears 20 times a week. What now?</div><strong>My AI-assisted workflow:</strong><ul><li>Group the recurring cases and find the common decision points.</li><li>Turn the best resolution into a concise checklist or template.</li><li>Test it against exceptions before sharing it with the team.</li><li>Measure whether it saves time without reducing quality.</li></ul><span class="human-check">Human check → Automate repetition, not responsibility.</span>`,
    content: `<div class="prompt">&gt; One message, three languages, different audiences. What now?</div><strong>My AI-assisted workflow:</strong><ul><li>Clarify intent, audience and non-negotiable facts.</li><li>Create language-native drafts rather than literal translations.</li><li>Check tone, local context, names, numbers and links.</li><li>Adapt the final version to the channel and desired action.</li></ul><span class="human-check">Human check → Fluency still needs cultural judgment.</span>`
  },
  es: {
    escalation: `<div class="prompt">&gt; Un huésped no puede hacer check-in. Falta información. ¿Qué hago?</div><strong>Mi proceso con IA:</strong><ul><li>Extraer los datos verificados e identificar lo que falta.</li><li>Priorizar según urgencia, impacto y SLA.</li><li>Preparar un mensaje claro para el hotel y una actualización tranquila para el partner.</li><li>Registrar acciones y la hora del siguiente compromiso.</li></ul><span class="human-check">Control humano → Nunca enviar una confirmación no verificada.</span>`,
    workflow: `<div class="prompt">&gt; La misma pregunta aparece 20 veces por semana. ¿Qué hago?</div><strong>Mi proceso con IA:</strong><ul><li>Agrupar casos repetidos y detectar los puntos de decisión.</li><li>Convertir la mejor solución en un checklist o plantilla breve.</li><li>Probarla con excepciones antes de compartirla con el equipo.</li><li>Medir si ahorra tiempo sin reducir la calidad.</li></ul><span class="human-check">Control humano → Automatizar la repetición, no la responsabilidad.</span>`,
    content: `<div class="prompt">&gt; Un mensaje, tres idiomas y públicos diferentes. ¿Qué hago?</div><strong>Mi proceso con IA:</strong><ul><li>Definir intención, público y datos que no pueden cambiar.</li><li>Crear textos naturales, no traducciones literales.</li><li>Revisar tono, contexto local, nombres, cifras y enlaces.</li><li>Adaptar la versión final al canal y a la acción deseada.</li></ul><span class="human-check">Control humano → La fluidez también necesita criterio cultural.</span>`
  }
};

let language = "en";
let activeScenario = "escalation";
const output = document.getElementById("scenarioOutput");
const languageToggle = document.getElementById("languageToggle");

function renderScenario() { output.innerHTML = scenarios[language][activeScenario]; }
function setLanguage(next) {
  language = next;
  document.documentElement.lang = next;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const value = translations[next][el.dataset.i18n];
    if (value) el.innerHTML = value;
  });
  languageToggle.textContent = next === "en" ? "ES" : "EN";
  languageToggle.setAttribute("aria-label", next === "en" ? "Cambiar a español" : "Switch to English");
  renderScenario();
}

document.querySelectorAll(".scenario").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".scenario").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    activeScenario = button.dataset.scenario;
    renderScenario();
  });
});

languageToggle.addEventListener("click", () => setLanguage(language === "en" ? "es" : "en"));

document.getElementById("surpriseButton").addEventListener("click", event => {
  document.getElementById("surpriseMessage").textContent = translations[language].surpriseMessage;
  const symbols = ["✦", "AI", "Hola", "Hi", "✓", "♥"];
  for (let i = 0; i < 24; i++) {
    const spark = document.createElement("span");
    spark.className = "spark";
    spark.textContent = symbols[i % symbols.length];
    spark.style.left = `${event.clientX}px`;
    spark.style.top = `${event.clientY}px`;
    spark.style.color = i % 2 ? "#d7ff58" : "#ff6b5f";
    spark.style.setProperty("--x", `${(Math.random() - .5) * 430}px`);
    spark.style.setProperty("--y", `${(Math.random() - .5) * 300}px`);
    document.body.appendChild(spark);
    setTimeout(() => spark.remove(), 950);
  }
});

renderScenario();
