// eslint-disable-next-line default-param-last
const documentsReducer = (state = [], action) => {
  const { type, payload } = action;
  console.log(payload);
  switch (type) {
    case 'LOAD_DOCUMENTS':
      return payload;

    case 'asc':
      console.log(payload);
      return state.slice().sort((a, b) => a[payload].localeCompare(b[payload]));

    case 'desc':
      return state.slice().sort((a, b) => b[payload].localeCompare(a[payload]));

    default:
      return state;
  }
};

export default documentsReducer;
