// eslint-disable-next-line default-param-last
const documentsReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case 'LOAD_DOCUMENTS':
      return payload;

    case 'ASC_SORT':
      return state.slice().sort((a, b) => a[payload].localeCompare(b[payload]));

    case 'DESC_SORT':
      return state.slice().sort((a, b) => b[payload].localeCompare(a[payload]));

    default:
      return state;
  }
};

export default documentsReducer;
