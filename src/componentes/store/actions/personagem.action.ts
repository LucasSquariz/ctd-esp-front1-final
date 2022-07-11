export const FETCH_PERSONAGEM_INICIAL = 'FETCH_PERSONAGENS';
export const FETCH_PERSONAGENS_SUCCESS = 'FETCH_PERSONAGENS_SUCCESS';
export const FETCH_PERSONAGENS_ERROR = 'FETCH_PERSONAGENS_ERROR';
export const FETCH_PERSONAGENS_NEXT_PAGE = 'FETCH_PERSONAGENS_NEXT_PAGE';

export interface Personagem {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: object;
    location: object;
    image: string;
    episode: string;
}

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