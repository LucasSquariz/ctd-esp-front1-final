import "./grade-personagem.css";
import CardPersonagem from "./card-personagem.componente";
import { useSelector } from 'react-redux';



/**
 * Grade de personagens para a página inicial
 *
 * Você precisará adicionar as funções necessárias para exibir e paginar os personagens
 *
 *
 * @returns Elemento JSX
 */
const GradePersonagem = ({personagem}) => {  
  return (
    <div className="grade-personagens">            
      {personagem?.map((a) => {
        return <CardPersonagem key={a.id} personagem={a}/>
      })}      
    </div>
  );
};

export default GradePersonagem;
