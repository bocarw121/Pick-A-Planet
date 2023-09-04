export function getFirstName(name: string | undefined) {
  return name ? name.split(' ')[0] : undefined;
}
