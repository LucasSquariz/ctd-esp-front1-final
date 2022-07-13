import { FETCH_PERSONAGEM_INICIAL, FETCH_PERSONAGENS_SUCCESS, FAVORITE_PERSONAGEM, ADD_FAVORITE_PERSONAGEM, FETCH_PERSONAGENS_BY_NAME_SUCCESS, SEARCH_BY_NAME } from "../actions/personagem.action";

type Action = {
    type: string;
    payload?: any;
}

const initialState = {
    personagensAPI: [],
    isFetching: true,
    personagemFavoritosById: [],
    personagemByName: [],
    favoritos: [],
    searchByName: {enabled: false , name: ''},
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
        case FETCH_PERSONAGENS_BY_NAME_SUCCESS:
            return {
                ...state,
                personagemByName: action.payload,
                searchByName:{
                    enabled: false,
                    name: ''
                }
            }
        case SEARCH_BY_NAME:            
            return {
                ...state,
                personagemByName: action.payload.validator 
                ? state.personagemByName 
                : [],
                searchByName: {
                    enabled: action.payload.validator,
                    name: action.payload.name
                }                
            }
        case FAVORITE_PERSONAGEM:
            return {
                ...state,
                favoritos: action.payload.add
                    //@ts-ignore 
                    ? state.favoritos.concat([action.payload.id])
                    : state.favoritos.filter((e) => e !== action.payload.id)
            }
        case ADD_FAVORITE_PERSONAGEM:
            return {
                ...state,
                personagemFavoritosById: action.payload,
            }

        default:
            return state;
    }
}