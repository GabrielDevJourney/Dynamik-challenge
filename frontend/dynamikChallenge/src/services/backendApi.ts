import axios from 'axios';
import type { Developer, DeveloperRequest } from './types';

const api = axios.create({
    baseURL: 'http://localhost:8080',
});

export const getAllDevs = async (): Promise<Developer[] | null> => {
    try {
        const response = await api.get('/devs');
        if (response.status === 200) {
            return response.data;
        } else {
            return null;
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw error;
        } else {
            throw new Error('An unexpected error occurred.');
        }
    }
};

export const searchDevs = async (term: string): Promise<Developer[] | null> => {
    if (!term.trim()) {
        return null;
    }
    try {
        const response = await api.get(`/devs?terms=${term}`);
        if (response.status === 200) {
            return response.data;
        } else {
            return null;
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw error;
        } else {
            throw new Error('An unexpected error occurred.');
        }
    }
};

export const getDevById = async (id: string): Promise<Developer | null> => {
    try {
        const response = await api.get(`/devs/${id}`);
        if (response.status === 200) {
            return response.data;
        } else {
            return null;
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw error;
        } else {
            throw new Error('An unexpected error occurred.');
        }
    }
};

export const postDeveloper = async (formData: DeveloperRequest) => {
    try {
        const response = await api.post('/devs', formData);

        if (response.status === 201) {
            return response.headers.location || true;
        } else {
            return null;
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw error;
        } else {
            throw new Error('An unexpected error occurred.');
        }
    }
};
