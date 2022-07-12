import "./botao-favorito.css";
import { BlackStar, YellowStar } from "../../imagens/favoriteStar";
import { useDispatch, useSelector } from 'react-redux';
import { favoritePersonagem } from "../store/actions/personagem.action";

/**
 * Botão que indica se um elemento é favorito ou não, e dá a possibilidade de marcá-lo/desmarcá-lo
 *
 * Terá que tipar as propriedades se utilizar este componente
 *
 *
 * @returns Elemento JSX
 */
const BotaoFavorito = ({ handlerOnCLick, isFavorito }) => {

  // const dispatch = useDispatch();
  
  // const isFav = useSelector(state => {
  //   return state.personagens.favoritos.includes(personagem.id);
  // });
  
  // const favoritarPersonagem = (idPersonagem) =>{
  //   dispatch(favoritePersonagem(idPersonagem, isFav))
  //   isFavorite = true
    
  // } 
  


  // const src = isFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png";

  return (
    <div className="botao-favorito">      
      {isFavorito
        ? <button onClick={handlerOnCLick}><YellowStar /></button>
        : <button onClick={handlerOnCLick}><BlackStar /></button>}
    </div>
  );
};

export default BotaoFavorito;
