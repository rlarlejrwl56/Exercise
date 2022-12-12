import client from './client';

export const login = () =>
    client.get('/users');

export const check = () => client.get('/api/auth/check');