import { Personagem } from "../../types/types";

export const FETCH_PERSONAGEM_INICIAL = 'FETCH_PERSONAGENS';
export const FETCH_PERSONAGENS_SUCCESS = 'FETCH_PERSONAGENS_SUCCESS';
export const FETCH_PERSONAGENS_ERROR = 'FETCH_PERSONAGENS_ERROR';
export const FAVORITE_PERSONAGEM = 'FAVORITE_PERSONAGEM';

export const fetchPersonagemIniciais = () => {
    return {
        type: FETCH_PERSONAGEM_INICIAL,
    }
}

export const fetchPersonagemSuccess = (personagens: Personagem[]) => {
    return {
        type: FETCH_PERSONAGENS_SUCCESS,
        payload: { personagens },
    }
}

export const fetchPersonagemError = (errorMessage: string) => {
    return {
        type: FETCH_PERSONAGENS_ERROR,
        payload: { errorMessage },
    }
}

export const favoritePersonagem = (id: number, add: boolean) => {
    return {
        type: FAVORITE_PERSONAGEM,  
        payload: {id, add}      
    }
}

export const fetchPersonagemThunk = (page: number) => {
    return async function (dispatch: any) {
        dispatch(fetchPersonagemIniciais());        
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
            const json = await response.json()                      
            dispatch(fetchPersonagemSuccess(json))            
        } catch (e:any) {
            dispatch(fetchPersonagemError(e.message));
        }
    }
}

export const fetchPersonagemThunkChangePage = (page: string) => {
    return async function (dispatch: any) {                
        try {
            const response = await fetch(page);
            const json = await response.json()                      
            dispatch(fetchPersonagemSuccess(json))            
        } catch (e:any) {
            dispatch(fetchPersonagemError(e.message));
        }
    }
}

