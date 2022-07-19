import "./card-episodio.css";
import { useSelector } from 'react-redux';

/**
 * Card para cada episódio na visualização do personagem.
 *
 * Você precisará adicionar as propriedades necessárias para exibir os dados dos episódios
 *
 *
 * @returns Elemento JSX
 */
const CardEpisodio = ({episodes}) => {  
  const episodiosState = useSelector((state) => {
    return state.personagens?.personagemEpisodesDetalhe?.episodes?.results
  })
  
  let numberEpisodes = episodes.split('/');
  const filteredEpisode = episodiosState.filter((a)=> a.id === parseInt(numberEpisodes[numberEpisodes.length - 1]))
  
  return (       
    <div className="card-episodio">          
      <h4>{filteredEpisode[0]?.name || ''}</h4>
      <div>
        <span>{filteredEpisode[0]?.episode || ''}</span>
        <span>{filteredEpisode[0]?.air_date || ''}</span>
      </div>
    </div>
  );
};

export default CardEpisodio;
