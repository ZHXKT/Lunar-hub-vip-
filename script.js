// Lista completa de sistemas, conforme o print
const sistemas = [
  {
    nome: "Tarefas SP",
    descricao: "Sistema automatizado para resolução de tarefas da plataforma SP",
    link: "https://crimsonzerohub.xyz/tarefaspremier.php",
    status: "online"
  },
  {
    nome: "Expansão Noturno",
    descricao: "Sistema automatizado para atividades do programa Expansão Noturno",
    link: "https://crimsonzerohub.xyz/expansaonoturnopremier.php",
    status: "online"
  },
  {
    nome: "Khan Academy",
    descricao: "Automatize seus cursos no Khan com este script desenvolvido por Bakai.",
    link: "https://script-khan-eclipe-lunar.vercel.app/",
    status: "online" // 👈 AGORA É ONLINE!
  },
  {
    nome: "Alura",
    descricao: "Sistema automatizado para cursos da plataforma Alura",
    link: "#",
    status: "soon"
  },
  {
    nome: "Apostila Response",
    descricao: "Sistema automatizado para resolução de apostilas e exercícios",
    link: "#",
    status: "soon"
  },
  {
    nome: "Educação Profissional",
    descricao: "Sistema automatizado para cursos de educação profissional",
    link: "#",
    status: "soon"
  },
  {
    nome: "Leia SP",
    descricao: "Sistema automatizado para atividades da plataforma Leia SP",
    link: "#",
    status: "soon"
  },
  {
    nome: "Prepara SP",
    descricao: "Sistema automatizado para atividades do Prepara SP",
    link: "#",
    status: "soon"
  },
  {
    nome: "Redação SP",
    descricao: "Sistema automatizado para atividades de redação SP",
    link: "#",
    status: "offline"
  }
];

// Separa "Tarefas SP" (primeiro)
const tarefasSP = sistemas.find(s => s.nome === "Tarefas SP");
const demais = sistemas.filter(s => s.nome !== "Tarefas SP");

// Embaralha os demais
const embaralhados = [...demais].sort(() => Math.random() - 0.5);

// Monta a lista final
const cardsFinais = [tarefasSP, ...embaralhados];

// Renderiza os cards
const container = document.getElementById("cardsContainer");

cardsFinais.forEach(sistema => {
  const card = document.createElement("a");
  card.href = sistema.link;
  card.target = "_blank";
  card.rel = "noopener noreferrer";
  card.className = "card";

  let statusClass, statusText;

  if (sistema.status === "online") {
    statusClass = "status-online";
    statusText = "ONLINE";
  } else if (sistema.status === "soon") {
    statusClass = "status-soon";
    statusText = "EM BREVE";
  } else { // offline
    statusClass = "status-offline";
    statusText = "OFFLINE";
  }

  card.innerHTML = `
    <div class="status-badge ${statusClass}">${statusText}</div>
    <h2 class="card-title">${sistema.nome}</h2>
    <p class="card-description">${sistema.descricao}</p>
  `;

  container.appendChild(card);
});