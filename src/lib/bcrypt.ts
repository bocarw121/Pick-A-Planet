import bcrypt from 'bcryptjs';

export async function encryptPassword(password: string) {
  try {
    const hash = await bcrypt.hash(password, 10);

    return hash;
  } catch (error) {
    throw new Error('Unable to hash password');
  }
}

export async function verifyPassword(hashedPassword: string, password: string) {
  try {
    const isVerified = await bcrypt.compare(password, hashedPassword);

    return isVerified;
  } catch (error) {
    return false;
  }
}
