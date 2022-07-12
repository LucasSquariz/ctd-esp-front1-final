import { FETCH_PERSONAGEM_INICIAL, FETCH_PERSONAGENS_SUCCESS, FAVORITE_PERSONAGEM } from "../actions/personagem.action";


type Action = {
    type: string;
    payload?: any;
}

const initialState = {
    personagensAPI: [],
    isFetching: true,
    personagemById: [],
    favoritos: []
}

export const personagens = (state = initialState, action: Action) => {    
    switch (action.type) {
        case FETCH_PERSONAGEM_INICIAL:
            return {
                ...state,
                isFetching: false,
            }

        case FETCH_PERSONAGENS_SUCCESS:
            return {
                ...state,
                personagensAPI: action.payload,
            }
        case FAVORITE_PERSONAGEM:                              
            return {
                ...state,                         
                favoritos: action.payload.add
                //@ts-ignore 
                    ? state.favoritos.concat([action.payload.id])
                    : state.favoritos.filter((e) => e !== action.payload.id) 
            }

        default:
            return state;
    }
}