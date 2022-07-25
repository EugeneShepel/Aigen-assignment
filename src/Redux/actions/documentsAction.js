import axios from 'axios';

const defaultUrl = 'https://jsonplaceholder.typicode.com/posts/';

export const loadDocuments = (documents) => ({
  type: 'LOAD_DOCUMENTS',
  payload: documents,
});

export const sortDocuments = (type, documents) => ({
  type,
  payload: documents,
});

export const fetchDocuments = (id = '') => async (dispatch) => {
  try {
    const response = await axios.get(`${defaultUrl}${id}`);
    if (response.status === 200) dispatch(loadDocuments(response.data));
  } catch (error) {
    dispatch(loadDocuments([]));
  }
};
