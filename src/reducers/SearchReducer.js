const INITIAL_STATE = {
  movie: '',
  data: [],
};

export default (state = INITIAL_STATE, action) => {
  // console.log(action);
  console.log(action.type);
  switch (action.type) {
    case 'SEARCH_CHANGE':
      return {
        ...state,
        movie: action.payload,
      };
    // case 'MOVIES_FETCHED':
    //   return {
    //     ...state,
    //     data: action.payload,
    //   };
    // case 'MOVIES_FAILED':
    //   return {
    //     ...state,
    //   };
    default:
      return state;
  }
};
