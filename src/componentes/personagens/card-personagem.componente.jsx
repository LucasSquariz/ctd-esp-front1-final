import BotaoFavorito from "../botoes/botao-favorito.componente";
import "./card-personagem.css";
import { useDispatch, useSelector } from 'react-redux';
import { favoritePersonagem } from "../store/actions/personagem.action";

/**
 * Card para cada personagem dentro da grade de personagem.
 *
 * Você precisará adicionar as propriedades necessárias para exibir os dados dos personagens
 *
 *
 * @returns Elemento JSX
 */
const CardPersonagem = ({personagem}) => {
  const dispatch = useDispatch();  
  const isFav = useSelector(state => {
    return state.personagens.favoritos.includes(personagem.id);
  });  
  
  const favoritarPersonagem = (idPersonagem) =>{
    dispatch(favoritePersonagem(idPersonagem, !isFav))   
  }   

  return (
    <div className="card-personagem">                
      <img
        src={personagem.image}
        alt={personagem.name}
      />
      <div className="card-personagem-body">
        <span>{personagem.name}</span>
        <BotaoFavorito handlerOnCLick={() => favoritarPersonagem(personagem.id)} isFavorito={isFav}/>
      </div>
    </div>
  );
};

export default CardPersonagem;
