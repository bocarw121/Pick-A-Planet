import argon2 from 'argon2';

export async function encryptPassword(password: string) {
  try {
    const hash = await argon2.hash(password);

    return hash;
  } catch (error) {
    throw new Error('Unable to hash password');
  }
}

export async function verifyPassword(hashedPassword: string, password: string) {
  try {
    const isVerified = await argon2.verify(hashedPassword, password);

    return isVerified;
  } catch (error) {
    return false;
  }
}
