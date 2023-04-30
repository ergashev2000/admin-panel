// import axios from 'axios';

// export const fetchAudioData = () => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.get("http://localhost:3000/api/channel/audios");
//       dispatch({
//         type: 'FETCH_AUDIO_SUCCESS',
//         payload: response.data
//       });
//     } catch (error) {
//       dispatch({
//         type: 'FETCH_AUDIO_ERROR',
//         payload: error.message
//       });
//     }
//   };
// };

export const isOpenModal = (open) => {
  return (dispatch) => {
    dispatch({ type: 'MODAL_OPEN', payload: open });
  }
}
