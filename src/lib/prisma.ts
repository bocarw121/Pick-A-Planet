import { PrismaClient } from '@prisma/client';

// Create an alias 'globalPrisma' which refers to the global object.
const globalPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Export a constant 'prisma' which holds the PrismaClient instance.
export const prisma =
  globalPrisma.prisma ?? // Check if 'prisma' already exists in 'globalPrisma'.
  new PrismaClient({
    // If not, create a new PrismaClient instance.
    log: ['query'], // configure PrismaClient to log queries.
  });

// In non-production environments, store the 'prisma' instance in 'globalPrisma'.
if (process.env.NODE_ENV !== 'production') globalPrisma.prisma = prisma;
