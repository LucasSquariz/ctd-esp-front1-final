import Filtros from "../componentes/personagens/filtros.componente";
import GradePersonagens from "../componentes/personagens/grade-personagens.componente";
import Paginacao from "../componentes/paginacao/paginacao.componente";
import { useDispatch, useSelector } from 'react-redux';
import { fetchPersonagemThunk, fetchPersonagemByName, fetchEpisodesPersonagem } from '../componentes/store/actions/personagem.action';
import { useEffect } from 'react';


/**
 * Esta é a página principal. Aqui você deve ver o painel de filtro junto com a grade de personagens.
 *
 * Uso:
 * ``` <PaginaInicio /> ```
 *
 * @returns Página inicio
 */
const PaginaInicio = () => {
  const searchByNamez = useSelector((state) => {
    return state.personagens?.searchByName
  })
  const personagensByName = useSelector((state) => {
    return state.personagens?.personagemByName?.personagens?.results;
  })
  const personagem = useSelector(state => {
    return state.personagens?.personagensAPI?.personagens?.results;
  });
  const isFetching = useSelector(state => {
    return state.personagens.isFetching;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (isFetching === true) {
      dispatch(fetchPersonagemThunk(1));
      dispatch(fetchEpisodesPersonagem('https://rickandmortyapi.com/api/episode'));
    }
    if (searchByNamez.enabled === true) {
      dispatch(fetchPersonagemByName(searchByNamez.name));      
    }
  })

  return (
    <div className="container">
      <div className="actions">
        {console.log(personagensByName)}
        <h3>Catálogo de Personagens</h3>
      </div>
      <Filtros />
      <Paginacao />
      {personagensByName?.length > 0
        ? <GradePersonagens personagem={personagensByName} />
        : <GradePersonagens personagem={personagem} />}
      <Paginacao />
    </div>
  );
};

export default PaginaInicio;
