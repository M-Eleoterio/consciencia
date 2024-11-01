import './App.css';

const eventos = [
  {
    title: "Virada da Consciência Negra",
    description: "A Corrida da Consciência Negra fica maior em 2024: é realizada na região do estádio do Pacaembu em 20 de novembro de 2024, quarta-feira de feriado nacional, Dia da Consciência Negra.",
    link: "https://viradadaconsciencia.com.br/"
  },
  {
    title: "Mesas Temáticas pela Consciência Negra",
    description: "Uma celebração com apresentações musicais, danças e exposições de arte que destacam a cultura afro-brasileira.",
    link: "http://del.ufla.br/eventos/89-mesas-tematicas-pela-consciencia-negra"
  },
  {
    title: "Caminhada pela Igualdade Racial",
    description: "Evento que reúne pessoas em marcha para promover a luta contra o racismo e a valorização da cultura negra.",
    link: "https://www.caminhadapelaigualdaderacial.com"
  },
  {
    title: "Seminário sobre a História da Consciência Negra",
    description: "Debates e palestras que discutem a importância da história e da cultura afro-brasileira na formação do país.",
    link: "https://www.seminarioconsciencianel.com"
  },
  {
    title: "Exposição de Arte Afro-Brasileira",
    description: "Exposição que apresenta obras de artistas negros, destacando a riqueza da cultura afro-brasileira.",
    link: "https://www.instagram.com/consciencianegrasp/"
  }
];

const figurasImportantes = [
  {
    nome: "Zumbi dos Palmares",
    descricao: "Líder do Quilombo dos Palmares e símbolo da resistência negra no Brasil, Zumbi lutou pela liberdade e direitos dos afrodescendentes.",
    link: "https://pt.wikipedia.org/wiki/Zumbi_dos_Palmares"
  },
  {
    nome: "Marielle Franco",
    descricao: "Política e ativista pelos direitos humanos, Marielle foi uma voz importante na luta contra a violência e a desigualdade racial.",
    link: "https://pt.wikipedia.org/wiki/Marielle_Franco"
  },
  {
    nome: "Carolina Maria de Jesus",
    descricao: "Escritora e ativista, Carolina se destacou na literatura brasileira ao retratar a vida de pessoas negras e pobres em suas obras.",
    link: "https://pt.wikipedia.org/wiki/Carolina_Maria_de_Jesus"
  },
  {
    nome: "Lélia Gonzalez",
    descricao: "Antropóloga e feminista, Lélia foi uma das principais vozes na luta pela interseccionalidade e pelos direitos das mulheres negras.",
    link: "https://pt.wikipedia.org/wiki/L%C3%A9lia_Gonzalez"
  }
];


function App() {
  return (
    <div className="App">
     <header className='header'>
        <div className='banner'>
          <div className='header-text'>
            <h1>Dia da <br/> consciência <br/> negra</h1>
            <p>O Dia da Consciência Negra, comemorado em 20 de novembro, celebra a resistência e a contribuição da população negra no Brasil. Em homenagem a Zumbi dos Palmares, a data é um momento para refletir sobre a luta contra o racismo e a importância da cultura afro-brasileira. É um chamado à valorização da diversidade e à busca por igualdade racial.</p>
            <div style={{ display: "flex", gap: "10px"}}>
              <a href='#eventos'>
              Principais Eventos
                        </a>
                        <a href='#pessoas'>
              Principais Pessoas
                        </a>
            </div>
          </div>
          <div className='header-image'></div>
        </div>
     </header>
     <section className='eventos_container' id='eventos'>
      <h2>Principais eventos</h2>
      <div>
        {
          eventos.map(evento => {
            return (
              <div className='card'>
                <h3>{evento.title}</h3>
                <p>{evento.description}</p>
                <a href={evento.link}>Ver mais</a>
              </div>
            )
          })
        }
      </div>
     </section>
     <section className='eventos_container' id='pessoas'>
      <h2>Principais pessoas</h2>
      <div>
        {
          figurasImportantes.map(figs => {
            return (
              <div className='card'>
                <h3>{figs.nome}</h3>
                <p>{figs.descricao}</p>
                <a href={figs.link}>Ver mais</a>
              </div>
            )
          })
        }
      </div>
     </section>
    </div>
  );  
}

export default App;
