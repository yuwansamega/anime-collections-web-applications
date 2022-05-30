export default (state, action) => {

  switch(action.type){
    case "ADD_ANIME_TO_COLLECTIONS" :
      return {
        ...state,
        collections: [action.payload, ...state.collections],
      };

    case "REMOVE_ANIME_FROM_COLLECTIONS" :
      return {
        ...state,
        collections: state.collections.filter(anime => anime.id !== action.payload)
      }
    default:
      return state;
  }
}