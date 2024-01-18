import bcrypt from 'bcryptjs';

export async function encryptPassword(password: string) {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    return hashedPassword;
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
