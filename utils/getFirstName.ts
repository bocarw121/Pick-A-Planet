export function getFirstName(name: string | undefined | null) {
  if (!name) return '';
  const firstName = name.split(' ')[0];

  const [firstLetter, ...rest] = firstName.split('');

  const firstNameCapitalized = `${firstLetter.toUpperCase()}${rest.join('')}`;

  return firstNameCapitalized;
}
