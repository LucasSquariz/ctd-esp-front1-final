import "./Detalhe.css";
import BotaoFavorito from "../componentes/botoes/botao-favorito.componente";
import CardEpisodio from "../componentes/episodios/card-episodio.componente";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchEpisodesPersonagem } from "../componentes/store/actions/personagem.action";

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

  const dispatch = useDispatch();
  const personagemDetalhe = useSelector((state) => {
    return state?.personagens?.personagemByIdDetalhe?.personagens;
  })

  const episodios = useSelector((state) => {
    return state?.personagens?.personagemByIdDetalhe?.personagens?.episode
  })

  const episodiosFetch = useSelector((state) => {
    return state?.personagens?.personagemEpisodesDetalhe;
  })
  const episodiosState = useSelector((state) => {
    return state.personagens?.personagemEpisodesDetalhe?.episodes?.results
  })
  
  let numberEpisodes = episodios?.split('/');
  const filteredEpisode = episodiosState.filter((a)=> a.id === parseInt(numberEpisodes[numberEpisodes.length - 1]))

  useEffect(() => {
    if (episodiosFetch.lenght < 0) {
      filteredEpisode.map((a) => {
        dispatch(fetchEpisodesPersonagem(a))
      })
    }
  }) 

  return (
    <div className="container"> 
    {console.log(episodios)}     
      <h3>{personagemDetalhe?.name}</h3>
      <div className={"detalhe"}>
        <div className={"detalhe-header"}>
          <img
            src={personagemDetalhe?.image}
            alt={personagemDetalhe?.name}
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
      {episodios.map((a)=>{
        return(
          <CardEpisodio episodes={a}/>
        )
      })}     
                           
      </div>
    </div>
  );
};

export default PaginaDetalhe;
