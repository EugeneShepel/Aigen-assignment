import axios from 'axios';

const defaultUrl = 'https://jsonplaceholder.typicode.com/posts/';

export const loadDocuments = (documents) => ({
  type: 'LOAD_DOCUMENTS',
  payload: documents,
});

export const fetchDocuments = (id) => async (dispatch) => {
  const response = await axios.get(`${defaultUrl}${id}`);
  if (response.status === 200) {
    dispatch(loadDocuments(response.data));
  }
  console.log(response.data);
};
