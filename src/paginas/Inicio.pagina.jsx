import Filtros from "../componentes/personagens/filtros.componente";
import GradePersonagens from "../componentes/personagens/grade-personagens.componente";
import Paginacao from "../componentes/paginacao/paginacao.componente";
import { useDispatch, useSelector } from 'react-redux';
import { fetchPersonagemIniciais, fetchPersonagemThunk } from '../componentes/store/actions/personagem.action';
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
    }
  })

  return (
    <div className="container">
      <div className="actions">        
        <h3>Catálogo de Personagens</h3>
        <button className="danger">Test Button</button>
      </div>
      <Filtros />
      <Paginacao />
      <GradePersonagens personagem={personagem} />
      <Paginacao />
    </div>
  );
};

export default PaginaInicio;
