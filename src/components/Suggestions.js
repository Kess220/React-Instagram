function Suggestions() {
  const suggestions = ["meowed", "barked", "respondeai", "wawawicomics"];
  const imagens = {
    barked: "assets/img/barked.svg",
    meowed: "assets/img/meowed.svg",
    respondeai: "assets/img/respondeai.svg",
    wawawicomics: "assets/img/wawawicomics.svg",
  };

  return (
    <div className="sugestoes">
      <div className="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      {suggestions.map((suggestion, index) => (
        <div key={index} className="sugestao">
          <div className="usuario">
            <img src={imagens[suggestion]} alt={suggestion} />
            <div className="texto">
              <div className="nome">{suggestion}</div>
              <div className="razao">Segue você</div>
            </div>
          </div>
          <div className="seguir">Seguir</div>
        </div>
      ))}
    </div>
  );
}

export default Suggestions;
