const initialState = {
    openModal: false,
    adminData: [],
    clientData: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'MODAL_OPEN':
            return {
                ...state,
                openModal: action.payload,
            };

        case 'FETCH_ADMIN_SUCCESS':
            return {
                ...state,
                adminData: action.payload,
                error: null,
            };
        case 'FETCH_ADMIN_ERROR':
            return {
                ...state,
                adminData: null,
                error: action.payload,
            };

        case 'FETCH_CLIENT_SUCCESS':
            return {
                ...state,
                clientData: action.payload,
                error: null,
            };
        case 'FETCH_CLIENT_ERROR':
            return {
                ...state,
                clientData: null,
                error: action.payload,
            };

        default:
            return state;
    }
}