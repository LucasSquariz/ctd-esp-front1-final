import "./botao-favorito.css";
import { BlackStar, YellowStar } from "../../imagens/favoriteStar";

/**
 * Botão que indica se um elemento é favorito ou não, e dá a possibilidade de marcá-lo/desmarcá-lo
 *
 * Terá que tipar as propriedades se utilizar este componente
 *
 *
 * @returns Elemento JSX
 */
const BotaoFavorito = ({ handlerOnCLick, isFavorito }) => {

  return (
    <div className="botao-favorito">      
      {isFavorito
        ? <button onClick={handlerOnCLick}><YellowStar /></button>
        : <button onClick={handlerOnCLick}><BlackStar /></button>}
    </div>
  );
};

export default BotaoFavorito;
