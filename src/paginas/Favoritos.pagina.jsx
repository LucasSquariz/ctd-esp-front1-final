import GradePersonagens from "../componentes/personagens/grade-personagens.componente";
import { useSelector, useDispatch } from 'react-redux';

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

  const state = useSelector(state => {
    return state;
  });
  const favorito = useSelector(state => {
    return state.personagens?.favoritos;
  });

  // const personagensFavoritos = useSelector(state => {
  //   return state.personagens?.personagemFavoritosById?.personagem;
  // });

  const dispatch = useDispatch();
  
  const filtrarPersonagensPorId = (arrayPersonagens, arrayFavoritos) => {
    let results = [];
    for(let i = 0; i < arrayPersonagens.length; i++){
      if(arrayFavoritos.includes((arrayPersonagens[i].id))){
        results.push(arrayPersonagens[i])
      }
    }
    // dispatch(addFavoritePersonagem(results));
    return results;
  }
  
  const personagensFiltrados = filtrarPersonagensPorId(personagem, favorito);   

  return (
    <div className="container">     
         {console.log(state)}
      <div className="actions">
        <h3>Personagens Favoritos</h3>        
      </div>
      <GradePersonagens personagem={personagensFiltrados}/>
    </div>
  );
};

export default PaginaFavoritos;
