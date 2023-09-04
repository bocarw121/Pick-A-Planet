import { FormError, User } from "'@/types'";
import { create } from 'zustand';

interface UserStore {
  user: User | null;
  setUser: (user: User) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser(user: User) {
    set(() => ({ user }));
  },
}));

interface FormErrorStore {
  error: FormError;
  setError: (error: { message: string; type: string }, type: string) => void;
  handleErrorChange: (
    type: 'email' | 'password' | 'confirmPassword' | 'all',
  ) => void;
  resetForm: () => void;
}

export const defaultErrorFormState = {
  email: {
    message: '',
    type: '',
  },
  password: {
    message: '',
    type: '',
  },
  confirmPassword: {
    message: '',
    type: '',
  },
  all: {
    message: '',
    type: '',
  },
};

export const useFormErrorStore = create<FormErrorStore>((set) => ({
  error: defaultErrorFormState,
  setError: (error, type) => {
    console.log(error, 'error', type, 'type');

    return set((state) => {
      return {
        ...state,
        error: {
          ...state.error,
          [type]: {
            message: error.message,
            type: error.type,
          },
        },
      };
    });
  },

  handleErrorChange(type) {
    set((state) => {
      return {
        ...state,
        error: {
          ...state.error,
          [type]: {
            message: '',
            type: '',
          },
        },
      };
    });
  },
  resetForm() {
    set((state) => ({
      ...state,
      error: {
        ...defaultErrorFormState,
      },
    }));
  },
}));
