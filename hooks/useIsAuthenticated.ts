import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

/**
 * If the user is authenticated redirect the user to the desired destination
 * @param path Destination path to push to
 */
export function useIsAuthenticated(path: string) {
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    if (status === 'authenticated') {
      router.push(path);
    }
  }, [router, status, path]);
}
