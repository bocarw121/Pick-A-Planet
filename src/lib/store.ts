import { User } from "'@/types'";
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
