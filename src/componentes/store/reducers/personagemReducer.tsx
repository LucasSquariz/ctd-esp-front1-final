import { FETCH_PERSONAGEM_INICIAL, FETCH_PERSONAGENS_SUCCESS } from "../actions/personagem.action"

type Action = {
    type: string;
    payload?: any;
}

const initialState = {
    personagensAPI: [],
    isFetching: true,           
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
        
        default:
            return state;
    }
}