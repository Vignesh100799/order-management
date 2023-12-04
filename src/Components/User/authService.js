
import axios from 'axios';
import { config } from '../config/config';

export const login = async (email, password) => {
    try {
      const response = await axios.get(`${config.usersApi}/registered-users`);
      const registeredUsers = response.data;
      const user = registeredUsers.find(user => user.email === email);
      if (user && user.password === password) { 
        localStorage.setItem('token', user.token);
        return true;
      } else {   
        throw new Error('Invalid username or password');
      }
    } catch (error) {
      console.error('Login failed:', error.message);
      throw new Error('Login failed');
    }
  };

export const logout = () => {
  localStorage.removeItem('token');
};

export const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};
