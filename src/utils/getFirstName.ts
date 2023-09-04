export function getFirstName(name: string | undefined | null) {
  return name ? name.split(' ')[0] : undefined;
}
