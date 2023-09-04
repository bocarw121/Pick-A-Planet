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
  setError: (error: FormError) => void;
  handleErrorChange: (type: string) => void;
}

export const useFormErrorStore = create<FormErrorStore>((set) => ({
  error: {
    message: '',
    type: '',
  },
  setError: (error) =>
    set((state) => ({
      ...state,
      error: {
        message: error.message,
        type: error.type,
      },
    })),
  handleErrorChange(type: string) {
    return set((state) => {
      if (state.error.type !== type) return { ...state };

      return {
        ...state,
        error: {
          message: '',
          type: '',
        },
      };
    });
  },
}));
