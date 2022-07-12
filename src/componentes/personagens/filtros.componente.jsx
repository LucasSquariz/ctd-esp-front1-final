import "./filtros.css";

const Filtros = () => {
  return (
    <div className="filtros">      
      <label htmlFor="nome">Filtrar por nome:</label>
      <input
        type="text"
        placeholder="Rick, Morty, Beth, Alien, ...etc"
        name="nome"
      />
      <button className="danger" type="submit">Pesquisar</button>
      <button className="danger">Limpar filtro</button>
    </div>
  );
};

export default Filtros;
