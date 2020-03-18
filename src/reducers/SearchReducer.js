const INITIAL_STATE = {
  movie: '',
  data: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SEARCH_CHANGE':
      return {
        ...state,
        movie: action.payload,
      };
    case 'MOVIES_FETCHED':
      return {
        ...state,
        data: action.payload,
      };
    case 'MOVIES_FAILED':
      // лучше обрабатовать ошибку
      return {
        ...state,
      };
    default:
      return state;
  }
};
