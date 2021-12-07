export const DELETE_MOVIE = "DELETE_MOVIE";

export const deleteMovie = (id)=>{
    return({type: DELETE_MOVIE, payload:id});
}

export const ADD_MOVIE = "DELETE_MOVIE";

export const addMovie = ({id, title, director, genre, metascore, description})=>{
    return({type: ADD_MOVIE, payload: {id:7, title:title, director:director, genre:genre, metascore:metascore, description:description}});
}