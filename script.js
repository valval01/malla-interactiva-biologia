const mallaContainer = document.getElementById('malla');

const ramos = [
  // SEMESTRE 1
  { nombre: "Actividades Artísticas y Deportivas", codigo: "AAD", semestre: 1, creditos: 1, prerequisitos: [] },
  { nombre: "Taller de Método de Estudio Universitario", codigo: "TMEU", semestre: 1, creditos: 2, prerequisitos: [] },
  { nombre: "Taller de Comunicación Oral y Escrita I", codigo: "TCOE1", semestre: 1, creditos: 2, prerequisitos: [] },
  { nombre: "Matemática", codigo: "MAT", semestre: 1, creditos: 3, prerequisitos: [] },
  { nombre: "Inglés I", codigo: "ING1", semestre: 1, creditos: 2, prerequisitos: [] },
  { nombre: "Química", codigo: "QUI", semestre: 1, creditos: 3, prerequisitos: [] },
  { nombre: "Biología", codigo: "BIO", semestre: 1, creditos: 4, prerequisitos: [] },

  // SEMESTRE 2
  { nombre: "Psicología General", codigo: "PSICO", semestre: 2, creditos: 2, prerequisitos: [] },
  { nombre: "Lógica y Filosofía", codigo: "LF", semestre: 2, creditos: 3, prerequisitos: [] },
  { nombre: "Taller de Comunicación Oral y Escrita II", codigo: "TCOE2", semestre: 2, creditos: 2, prerequisitos: ["TCOE1"] },
  { nombre: "Inglés II", codigo: "ING2", semestre: 2, creditos: 2, prerequisitos: ["ING1"] },
  { nombre: "Formación Histórica del Perú", codigo: "FHP", semestre: 2, creditos: 2, prerequisitos: [] },
  { nombre: "Física", codigo: "FIS", semestre: 2, creditos: 3, prerequisitos: ["MAT"] },
  { nombre: "Química Orgánica", codigo: "QORG", semestre: 2, creditos: 4, prerequisitos: ["QUI"] },
  { nombre: "Estructura y Función Animal", codigo: "EFA", semestre: 2, creditos: 3, prerequisitos: ["BIO"] },

  // SEMESTRE 3
  { nombre: "Recursos Naturales y Medio Ambiente", codigo: "RNMA", semestre: 3, creditos: 2, prerequisitos: [] },
  { nombre: "Realidad Nacional", codigo: "RN", semestre: 3, creditos: 3, prerequisitos: [] },
  { nombre: "Historia de la Civilización", codigo: "HCIV", semestre: 3, creditos: 3, prerequisitos: [] },
  { nombre: "Protozoología", codigo: "PROT", semestre: 3, creditos: 3, prerequisitos: ["EFA"] },
  { nombre: "Estructura y Función Vegetal", codigo: "EFV", semestre: 3, creditos: 4, prerequisitos: ["BIO"] },
  { nombre: "Bioestadística", codigo: "BEST", semestre: 3, creditos: 3, prerequisitos: ["MAT"] },
  { nombre: "Fisicoquímica", codigo: "FQ", semestre: 3, creditos: 3, prerequisitos: ["QORG"] },

  // SEMESTRE 4
  { nombre: "Ecología", codigo: "ECO", semestre: 4, creditos: 4, prerequisitos: ["RNMA"] },
  { nombre: "Ficología", codigo: "FICO", semestre: 4, creditos: 3, prerequisitos: ["EFV"] },
  { nombre: "Helmintología", codigo: "HELM", semestre: 4, creditos: 3, prerequisitos: ["PROT"] },
  { nombre: "Bioquímica", codigo: "BQC", semestre: 4, creditos: 4, prerequisitos: ["FQ"] },
  { nombre: "Métodos Estadísticos", codigo: "MEST", semestre: 4, creditos: 3, prerequisitos: ["BEST"] },
  { nombre: "Histología", codigo: "HIST", semestre: 4, creditos: 3, prerequisitos: ["EFA"] },

  // SEMESTRE 5
  { nombre: "Biología Molecular y Celular", codigo: "BMC", semestre: 5, creditos: 4, prerequisitos: ["BQC"] },
  { nombre: "Micología y Criptogamas Vasculares", codigo: "MCV", semestre: 5, creditos: 3, prerequisitos: ["FICO"] },
  { nombre: "Malacología y Carcinología", codigo: "MALCAR", semestre: 5, creditos: 3, prerequisitos: ["HELM"] },
  { nombre: "Nutrición", codigo: "NUT", semestre: 5, creditos: 3, prerequisitos: ["BQC"] },
  { nombre: "Dinámica de Poblaciones", codigo: "DP", semestre: 5, creditos: 3, prerequisitos: ["ECO"] },
  { nombre: "Fisiología Animal", codigo: "FISA", semestre: 5, creditos: 3, prerequisitos: ["HELM"] },
];
// SEMESTRE 6
ramos.push(
  { nombre: "Fanerogamas", codigo: "FANE", semestre: 6, creditos: 3, prerequisitos: ["FICO"] },
  { nombre: "Entomología", codigo: "ENTO", semestre: 6, creditos: 3, prerequisitos: ["MALCAR"] },
  { nombre: "Biología del Desarrollo", codigo: "BDES", semestre: 6, creditos: 3, prerequisitos: ["BMC"] },
  { nombre: "Microbiología General", codigo: "MICG", semestre: 6, creditos: 5, prerequisitos: ["NUT"] },
  { nombre: "Fisiología Vegetal", codigo: "FISV", semestre: 6, creditos: 3, prerequisitos: ["MCV"] },
  { nombre: "Genética", codigo: "GEN", semestre: 6, creditos: 4, prerequisitos: ["BMC"] }
);

// SEMESTRE 7
ramos.push(
  { nombre: "Bioseguridad", codigo: "BIOSEG", semestre: 7, creditos: 3, prerequisitos: ["TBV"] },
  { nombre: "Manejo de Fauna Silvestre", codigo: "MFS", semestre: 7, creditos: 3, prerequisitos: ["CORD"] },
  { nombre: "Reproducción y Producción de Organismos", codigo: "RPO", semestre: 7, creditos: 3, prerequisitos: ["BCON"] },
  { nombre: "Botánica Económica", codigo: "BOTEC", semestre: 7, creditos: 3, prerequisitos: ["FANE"] },
  { nombre: "Bioética", codigo: "BIOET", semestre: 7, creditos: 3, prerequisitos: ["TBA"] },
  { nombre: "Ecotoxicología", codigo: "ECTOX", semestre: 7, creditos: 3, prerequisitos: ["FISA"] },
  { nombre: "Biología Forense", codigo: "BFOREN", semestre: 7, creditos: 3, prerequisitos: ["FISA"] },
  { nombre: "Control Biológico", codigo: "CBIO", semestre: 7, creditos: 3, prerequisitos: ["ENTO"] },
  { nombre: "Modelos Matemáticos en Biología", codigo: "MMBIO", semestre: 7, creditos: 3, prerequisitos: ["MEST"] },
  { nombre: "Microbiología de Alimentos y Agua", codigo: "MAA", semestre: 7, creditos: 3, prerequisitos: ["MICA"] },
  { nombre: "Citogenética", codigo: "CITO", semestre: 7, creditos: 3, prerequisitos: ["GEN"] },
  { nombre: "Genética Bacteriana", codigo: "GBAC", semestre: 7, creditos: 3, prerequisitos: ["GMOL"] },
  { nombre: "Genética Humana", codigo: "GHUM", semestre: 7, creditos: 3, prerequisitos: ["GEN"] },
  { nombre: "Enzimología", codigo: "ENZI", semestre: 7, creditos: 3, prerequisitos: ["BQC"] },
  { nombre: "Ecología de Comunidades y Ecosistemas", codigo: "ECOCOM", semestre: 7, creditos: 3, prerequisitos: ["GA"] },
  { nombre: "Legislación Biológica", codigo: "LEG", semestre: 7, creditos: 3, prerequisitos: ["GA"] },
  { nombre: "Administración y Gestión Empresarial", codigo: "ADMGE", semestre: 7, creditos: 3, prerequisitos: ["EIA"] },
  { nombre: "Taller de Sistemática y Filogenia", codigo: "TSF", semestre: 7, creditos: 3, prerequisitos: [] },
  { nombre: "Cordados", codigo: "CORD", semestre: 7, creditos: 4, prerequisitos: ["ENTO"] },
  { nombre: "Microbiología Aplicada", codigo: "MICA", semestre: 7, creditos: 5, prerequisitos: ["MICG"] },
  { nombre: "Inmunología", codigo: "INMU", semestre: 7, creditos: 4, prerequisitos: ["BDES"] },
  { nombre: "Química de Productos Naturales", codigo: "QPN", semestre: 7, creditos: 3, prerequisitos: ["FANE"] },
  { nombre: "Gestión Ambiental", codigo: "GA", semestre: 7, creditos: 3, prerequisitos: ["DP"] }
);

// SEMESTRE 8
ramos.push(
  { nombre: "Biología Marina y Continental", codigo: "BMCN", semestre: 8, creditos: 4, prerequisitos: ["CORD"] },
  { nombre: "Taller de Biotecnología Vegetal", codigo: "TBV", semestre: 8, creditos: 2, prerequisitos: ["FISV"] },
  { nombre: "Genética Cuantitativa", codigo: "GCUANT", semestre: 8, creditos: 3, prerequisitos: ["GEN"] },
  { nombre: "Virología", codigo: "VIRO", semestre: 8, creditos: 3, prerequisitos: ["MICA"] },
  { nombre: "Tesis I", codigo: "TESIS1", semestre: 8, creditos: 2, prerequisitos: [] },
  { nombre: "Control de Calidad e Inocuidad", codigo: "CCI", semestre: 8, creditos: 4, prerequisitos: ["MICA"] }
);

// SEMESTRE 9
ramos.push(
  { nombre: "Biología de la Conservación", codigo: "BCON", semestre: 9, creditos: 3, prerequisitos: ["BMCN"] },
  { nombre: "Genética Molecular", codigo: "GMOL", semestre: 9, creditos: 3, prerequisitos: ["GCUANT"] },
  { nombre: "Taller de Biotecnología Animal", codigo: "TBA", semestre: 9, creditos: 2, prerequisitos: ["TBV"] },
  { nombre: "Acuicultura", codigo: "ACUI", semestre: 9, creditos: 4, prerequisitos: ["BMCN"] },
  { nombre: "Evaluación del Impacto y Auditoría Ambiental", codigo: "EIA", semestre: 9, creditos: 3, prerequisitos: ["GA"] },
  { nombre: "Tesis II", codigo: "TESIS2", semestre: 9, creditos: 2, prerequisitos: ["TESIS1"] },
  { nombre: "Paleontología", codigo: "PALEO", semestre: 9, creditos: 2, prerequisitos: ["CORD"] }
);

// SEMESTRE 10
ramos.push(
  { nombre: "Evaluación y Valoración de la Biodiversidad", codigo: "EVBIO", semestre: 10, creditos: 4, prerequisitos: ["BCON"] },
  { nombre: "Taller de Bioinformática", codigo: "TBINF", semestre: 10, creditos: 2, prerequisitos: ["GMOL"] },
  { nombre: "Etnobiología", codigo: "ETNO", semestre: 10, creditos: 3, prerequisitos: ["EIA"] },
  { nombre: "Taller de Biotecnología Ambiental", codigo: "TBAM", semestre: 10, creditos: 2, prerequisitos: ["TBA"] },
  { nombre: "Prácticas Pre Profesional", codigo: "PPP", semestre: 10, creditos: 2, prerequisitos: [] },
  { nombre: "Curso de Trabajo de Investigación", codigo: "CTI", semestre: 10, creditos: 1, prerequisitos: ["TESIS2"] }
);

// Funcionalidad de la malla
const aprobados = new Set();

function crearRamoCard(ramo) {
  const card = document.createElement('div');
  card.className = 'ramo';
  card.id = ramo.codigo;
  card.innerHTML = `
    <h3>${ramo.nombre}</h3>
    <p><strong>Créditos:</strong> ${ramo.creditos}</p>
    <p><strong>Semestre:</strong> ${ramo.semestre}</p>
    <button onclick="aprobarRamo('${ramo.codigo}')">Aprobar</button>
  `;
  if (ramo.prerequisitos.length > 0) card.classList.add('bloqueado');
  return card;
}

function renderMalla() {
  mallaContainer.innerHTML = '';
  ramos.forEach(ramo => {
    const card = crearRamoCard(ramo);
    mallaContainer.appendChild(card);
  });
  actualizarBloqueos();
}

function aprobarRamo(codigo) {
  aprobados.add(codigo);
  document.getElementById(codigo).classList.add('aprobado');
  actualizarBloqueos();
}

function actualizarBloqueos() {
  ramos.forEach(ramo => {
    const card = document.getElementById(ramo.codigo);
    const requisitosCumplidos = ramo.prerequisitos.every(req => aprobados.has(req));
    if (requisitosCumplidos) {
      card.classList.remove('bloqueado');
    } else if (!aprobados.has(ramo.codigo)) {
      card.classList.add('bloqueado');
    }
  });
}

renderMalla();
