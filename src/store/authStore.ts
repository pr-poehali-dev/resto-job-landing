import { create } from 'zustand';

interface User {
  id: string;
  name: string;
  email: string;
  companyName: string;
  role: 'restaurant' | 'admin';
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (userData: Omit<User, 'id'> & { password: string }) => Promise<boolean>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  
  login: async (email: string, password: string) => {
    // Симуляция API запроса
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (email === 'admin@resto.uz' && password === 'admin123') {
      const user: User = {
        id: '1',
        name: 'Администратор',
        email: 'admin@resto.uz',
        companyName: 'RESTO_JOB',
        role: 'admin'
      };
      set({ user, isAuthenticated: true });
      return true;
    }
    
    if (email === 'restaurant@test.uz' && password === 'test123') {
      const user: User = {
        id: '2',
        name: 'Ресторан "Узбекистан"',
        email: 'restaurant@test.uz',
        companyName: 'Ресторан "Узбекистан"',
        role: 'restaurant'
      };
      set({ user, isAuthenticated: true });
      return true;
    }
    
    return false;
  },
  
  logout: () => {
    set({ user: null, isAuthenticated: false });
  },
  
  register: async (userData) => {
    // Симуляция API запроса
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const user: User = {
      id: Date.now().toString(),
      name: userData.name,
      email: userData.email,
      companyName: userData.companyName,
      role: userData.role
    };
    
    set({ user, isAuthenticated: true });
    return true;
  }
}));