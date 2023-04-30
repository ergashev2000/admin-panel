const initialState = {
    data: null,
    openModal: false
};

export default function (state = initialState, action) {
    switch (action.type) {

        case 'FETCH_AUDIO_SUCCESS':
            return {
                ...state,
                data: action.payload,
                error: null,
            };
        case 'FETCH_AUDIO_ERROR':
            return {
                ...state,
                data: null,
                error: action.payload,
            };
        
        case 'FETCH_BOOK_SUCCESS':
            return {
                ...state,
                bookData: action.payload,
                error: null,
            };
        case 'MODAL_OPEN':
            return {
                ...state,
                openModal: action.payload,
            };

        default:
            return state;
    }
}