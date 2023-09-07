interface FooterProps {}

export function Footer({}: FooterProps) {
  const year = new Date().getFullYear();
  return (
    <footer className="flex justify-center items-center flex-row w-full bg-primary text-light h-24  mt-auto">
      <p className="pr-4">© {year} Pick a Planet</p>
    </footer>
  );
}
