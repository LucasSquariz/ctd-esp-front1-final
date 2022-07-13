import "./Detalhe.css";
import BotaoFavorito from "../componentes/botoes/botao-favorito.componente";
import CardEpisodio from "../componentes/episodios/card-episodio.componente";
import { useSelector } from "react-redux";

/**
 * Esta é a página de detalhes. Aqui você pode mostrar a visão do personagem selecionado junto com a lista de episódios em que ele aparece
 *
 * TRABALHAR NESTE ARQUIVO É OPCIONAL E NÃO É NECESSÁRIO PARA APROVAÇÃO
 *
 *
 *
 * Uso:
 * ``` <PaginaDetalhe /> ```
 *
 * @returns Página de detalhe
 */
const PaginaDetalhe = () => {

  const personagemDetalhe = useSelector((state)=>{
    return state?.personagens?.personagemByIdDetalhe?.personagens;
  })

  return (
    <div className="container">
      <h3>{personagemDetalhe?.name}</h3> 
      {console.log(personagemDetalhe)}     
      <div className={"detalhe"}>
        <div className={"detalhe-header"}>
          <img
            src={personagemDetalhe?.image}
            alt="Rick Sanchez"
          />
          <div className={"detalhe-header-texto"}>
            <p>{personagemDetalhe?.name}</p>
            <p>Planeta: {personagemDetalhe?.origin?.name}</p>
            <p>Genero: {personagemDetalhe?.gender}</p>
          </div>
          <BotaoFavorito isFavorito={false} />
        </div>
      </div>
      <h4>Lista de episódios em que o personagem apareceu</h4>
      <div className={"episodios-grade"}>
        <CardEpisodio />
        <CardEpisodio />
        <CardEpisodio />
      </div>
    </div>
  );
};

export default PaginaDetalhe;
