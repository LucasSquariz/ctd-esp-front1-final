import "./filtros.css";
import { useDispatch } from 'react-redux';
import { searchByName } from "../store/actions/personagem.action";

const Filtros = () => {
  const dispatch = useDispatch();

  const handlerSearchByName = (validator, name) => {
    dispatch(searchByName(validator, name))
  }

  return (
    <div className="filtros" >
      <label htmlFor="nome">Filtrar por nome:</label>
      <div >
        <input
          type="text"
          placeholder="Rick, Morty, Beth, Alien, ...etc"
          name="nome"
        />
        <button className="danger" type="submit" onClick={(e) => handlerSearchByName(true, e.target.parentElement.getElementsByTagName("input")[0].value)}>Pesquisar</button>
        <button className="danger"onClick={(e) => handlerSearchByName(false, '')}>Limpar filtro</button>
      </div>
    </div>
  );
};

export default Filtros;
