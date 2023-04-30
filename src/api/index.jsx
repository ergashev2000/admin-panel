import axios from 'axios';

// USERS API
export const getAdminData = async () => {
    try {
        const response = await axios.get('https://6420342c82bea25f6dfc0e94.mockapi.io/rc/users');
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const createAdminData = async (data) => {
    try {
        console.log(data);
        const response = await axios.post('https://6420342c82bea25f6dfc0e94.mockapi.io/rc/users', data);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const updateAdminData = async (id, data) => {
    try {
        const response = await axios.put(`https://6420342c82bea25f6dfc0e94.mockapi.io/rc/users/${id}`, data);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const deleteAdminData = async (id) => {
    try {
        const response = await axios.delete(`https://6420342c82bea25f6dfc0e94.mockapi.io/rc/users/${id}`);
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 404) {
            console.error('User data not found');
        } else {
            console.error('Error deleting User data:', error);
        }
        throw error;
    }
};



// CLIENTS API
export const getClientData = async () => {
    try {
        const response = await axios.get('https://6420342c82bea25f6dfc0e94.mockapi.io/rc/clients');
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const createClientData = async (data) => {
    try {
        console.log(data);
        const response = await axios.post('https://6420342c82bea25f6dfc0e94.mockapi.io/rc/clients', data);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const updateClientData = async (id, data) => {
    try {
        const response = await axios.put(`https://6420342c82bea25f6dfc0e94.mockapi.io/rc/clients/${id}`, data);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const deleteClientData = async (id) => {
    try {
        const response = await axios.delete(`https://6420342c82bea25f6dfc0e94.mockapi.io/rc/clients/${id}`);
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 404) {
            console.error('Client data not found');
        } else {
            console.error('Error deleting client data:', error);
        }
        throw error;
    }
};

