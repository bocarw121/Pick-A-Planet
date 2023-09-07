import { usePathname } from 'next/navigation';

export function useActiveRoute(path: string) {
  const ACTIVE_ROUTE_CLASS = 'text-secondary';
  const currentPath = usePathname();

  const isActive = currentPath === path;

  return isActive ? ACTIVE_ROUTE_CLASS : '';
}
