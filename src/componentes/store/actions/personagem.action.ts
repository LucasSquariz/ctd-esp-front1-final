import { Personagem } from "../../types/types";

export const FETCH_PERSONAGEM_INICIAL = 'FETCH_PERSONAGENS';
export const FETCH_PERSONAGENS_SUCCESS = 'FETCH_PERSONAGENS_SUCCESS';
export const FETCH_PERSONAGENS_ERROR = 'FETCH_PERSONAGENS_ERROR';
export const FAVORITE_PERSONAGEM = 'FAVORITE_PERSONAGEM';
export const ADD_FAVORITE_PERSONAGEM = 'ADD_FAVORITE_PERSONAGEM';
export const SEARCH_BY_NAME = 'SEARCH_BY_NAME';
export const FETCH_PERSONAGENS_BY_NAME_SUCCESS = 'FETCH_PERSONAGENS_BY_NAME_SUCCESS';
export const FETCH_PERSONAGENS_BY_ID_SUCCESS = 'FETCH_PERSONAGENS_BY_ID_SUCCESS';
export const FETCH_PERSONAGENS_EPISODES_SUCCESS = 'FETCH_PERSONAGENS_EPISODES_SUCCESS';

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

export const fetchPersonagemByNameSuccess = (personagens: Personagem[]) => {    
    return {
        type: FETCH_PERSONAGENS_BY_NAME_SUCCESS,
        payload: { personagens },
    }
}

export const fetchPersonagemByIdSuccess = (personagens: Personagem[]) => {    
    return {
        type: FETCH_PERSONAGENS_BY_ID_SUCCESS,
        payload: { personagens },
    }
}

export const fetchPersonagemEpisodes = (personagens: Personagem[]) => {    
    return {
        type: FETCH_PERSONAGENS_EPISODES_SUCCESS,
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

export const searchByName = (validator: boolean, name: string) => {
    return {
        type: SEARCH_BY_NAME,
        payload: {validator, name}               
    }
}

export const addFavoritePersonagem = (personagem: Personagem[]) => {
    return {
        type: ADD_FAVORITE_PERSONAGEM,  
        payload: {personagem}      
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

export const fetchPersonagemByName = (name: string) => {    
    return async function (dispatch: any) {                
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
            const json = await response.json()                      
            dispatch(fetchPersonagemByNameSuccess(json))            
        } catch (e:any) {
            dispatch(fetchPersonagemError(e.message));
        }
    }
}

export const fetchPersonagemById = (id: number) => {    
    return async function (dispatch: any) {                
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
            const json = await response.json()                      
            dispatch(fetchPersonagemByIdSuccess(json))            
        } catch (e:any) {
            dispatch(fetchPersonagemError(e.message));
        }
    }
}

export const fetchEpisodesPersonagem = (url: string) => {    
    return async function (dispatch: any) {                
        try {
            const response = await fetch(url)
            const json = await response.json()                      
            dispatch(fetchPersonagemByIdSuccess(json))            
        } catch (e:any) {
            dispatch(fetchPersonagemError(e.message));
        }
    }
}
