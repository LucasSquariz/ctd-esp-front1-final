import BotaoFavorito from "../botoes/botao-favorito.componente";
import "./card-personagem.css";
import { useDispatch, useSelector } from 'react-redux';
import { favoritePersonagem, fetchPersonagemById } from "../store/actions/personagem.action";
import { Link } from "react-router-dom";

/**
 * Card para cada personagem dentro da grade de personagem.
 *
 * Você precisará adicionar as propriedades necessárias para exibir os dados dos personagens
 *
 *
 * @returns Elemento JSX
 */
const CardPersonagem = ({ personagem }) => {
  const dispatch = useDispatch();
  const isFav = useSelector(state => {
    return state.personagens.favoritos.includes(personagem.id);
  });

  const favoritarPersonagem = (idPersonagem) => {
    dispatch(favoritePersonagem(idPersonagem, !isFav))
  }  

  const personagemDetalhe = (idPersonagem) => {
    dispatch(fetchPersonagemById(idPersonagem))    
  }

  return (
    <div className="card-personagem">
      <Link onClick={() => personagemDetalhe(personagem.id)} to="/detalhe" >        
        <img
          src={personagem.image}
          alt={personagem.name}
        />
      </Link>
      <div className="card-personagem-body">
        <span>{personagem.name}</span>
        <BotaoFavorito handlerOnCLick={() => favoritarPersonagem(personagem.id)} isFavorito={isFav} />
      </div>

    </div>
  );
};

export default CardPersonagem;
