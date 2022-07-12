import GradePersonagens from "../componentes/personagens/grade-personagens.componente";
import { useSelector } from 'react-redux';

/**
 * Esta é a página de favoritos. Aqui você deve ver todos os personagens marcados como favoritos
 *
 * Uso:
 * ``` <PaginaFavoritos /> ```
 *
 * @returns Página de favoritos
 */
const PaginaFavoritos = () => {
  const personagem = useSelector(state => {
    return state.personagens?.personagensAPI?.personagens?.results;
  });

  const favorito = useSelector(state => {
    return state.personagens?.favoritos;
  });

  let filtrarPersonagensPorId = (arrayPersonagens, arrayFavoritos) => {
    let results = [];
    for(let i = 0; i < arrayPersonagens.length; i++){
      if(arrayFavoritos.includes((arrayPersonagens[i].id))){
        results.push(arrayPersonagens[i])
      }
    }
    return results
  }

  const personagensFiltrados = filtrarPersonagensPorId(personagem, favorito);  

  return (
    <div className="container">        
      <div className="actions">
        <h3>Personagens Favoritos</h3>        
      </div>
      <GradePersonagens personagem={personagensFiltrados}/>
    </div>
  );
};

export default PaginaFavoritos;
