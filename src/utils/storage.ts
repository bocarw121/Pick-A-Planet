import { User } from '@prisma/client';

export const storage = {
  setUser,
  removeUser,
  getUser,
};

function setUser(user: User) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }
}

function removeUser() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('currentUser');
  }
}

function getUser() {
  if (typeof window !== 'undefined') {
    const user = localStorage.getItem('currentUser');

    return user;
  }
}
