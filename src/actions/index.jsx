import { getAdminData, getClientData } from '../api';

export const fetchAdminData = () => {
  return async (dispatch) => {
    try {
      const response = await getAdminData();
      dispatch({
        type: 'FETCH_ADMIN_SUCCESS',
        payload: response
      });
    } catch (error) {
      dispatch({
        type: 'FETCH_ADMIN_ERROR',
        payload: error.message
      });
    }
  };
};


export const fetchClientData = () => {
  return async (dispatch) => {
    try {
      const response = await getClientData();
      dispatch({
        type: 'FETCH_CLIENT_SUCCESS',
        payload: response
      });
    } catch (error) {
      dispatch({
        type: 'FETCH_CLIENT_ERROR',
        payload: error.message
      });
    }
  };
};

export const isOpenModal = (open) => {
  return (dispatch) => {
    dispatch({ type: 'MODAL_OPEN', payload: open });
  }
}