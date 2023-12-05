
import axios from 'axios';
import { config } from '../config/config';


const generateToken = () => {
  const tokenLength = 16; // You can adjust the length as needed
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let token = '';
  
  for (let i = 0; i < tokenLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    token += characters.charAt(randomIndex);
  }

  return token;
};

export const login = async (email, password) => {
    try {
      const response = await axios.get(`${config.usersApi}/registered-users`);
      const registeredUsers = response.data;
      const user = registeredUsers.find(user => user.email === email);
      if (user && user.password === password) { 
        localStorage.setItem('token', generateToken());
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
