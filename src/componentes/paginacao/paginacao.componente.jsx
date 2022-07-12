import "./paginacao.css";
import { useDispatch, useSelector } from 'react-redux';
import { fetchPersonagemThunkChangePage } from "../store/actions/personagem.action";

/**
 * Componente que contém os botões para paginar
 *
 * Você deve adicionar as propriedades necessárias para que funcione corretamente
 *
 *
 * @returns Elemento JSX
 */
const Paginacao = () => {

  const page = useSelector(state => {
    return state.personagens?.personagensAPI?.personagens?.info;
  });  

  const dispatch = useDispatch();

  const handlerNextPage = () => {
    if(page.next){
      dispatch(fetchPersonagemThunkChangePage(page.next))
    }
  }

  const handlerPrevPage = () => {
    if(page.prev){
      dispatch(fetchPersonagemThunkChangePage(page.prev))
    }
  }

  return (
    <div className="paginacao">      
      <button onClick={handlerPrevPage} className={"primary"}>
        Anterior
      </button>
      <button onClick={handlerNextPage} className={"primary"}>
        Próximo
      </button>
    </div>
  );
};

export default Paginacao;
