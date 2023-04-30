const initialState = {
    openModal: false,
    adminData: [],
    clientData: [],
    loading: false,
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
        case 'CREATE_ADMIN_SUCCESS':
            return {
                ...state,
                adminData: action.payload,
                error: null,
            };
        case 'CREATE_ADMIN_ERROR':
            return {
                ...state,
                adminData: null,
                error: action.payload,
            };

        case 'UPDATE_ADMIN_SUCCESS':
            const updatedData = state.adminData.map(item => {
                if (item.id === action.payload.id) {
                    return action.payload;
                }
                return item;
            });
            return {
                ...state,
                adminData: updatedData,
                loading: false,
                error: null,
            };
        case 'UPDATE_ADMIN_ERROR':
            return {
                ...state,
                loading: false,
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
        case 'UPDATE_ADMIN_SUCCESS':
            const updatedCData = state.clientData.map(item => {
                if (item.id === action.payload.id) {
                    return action.payload;
                }
                return item;
            });
            return {
                ...state,
                clientData: updatedCData,
                loading: false,
                error: null,
            };
        case 'UPDATE_ADMIN_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
}