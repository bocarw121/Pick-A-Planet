import Link from 'next/link';
import React from 'react';

interface FooterProps {}

export function Footer({}: FooterProps) {
  const year = new Date().getFullYear();
  return (
    <footer className="flex justify-center items-center flex-row w-full bg-primary text-light h-24  mt-auto">
      <p className="pr-4">© {year} Pick a Planet</p>
      <Link href="/sources">Sources</Link>
    </footer>
  );
}

// footer {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: row;
//   width: 100%;
//   color: var(--color-light);
//   background-color: hsl(240, 74%, 18%);
//   height: 6rem;

// }

// footer a {
//   border-left: 1px solid white;
//   text-decoration: none;
//   color: var(--color-light);
//   padding: 10px 20px;
// }

// footer p {
//   padding-right: 20px;
// }

// footer a:hover {
//   color: var(--hover-blue);
// }
