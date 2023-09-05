import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface MainPlanetDisplayProps {}

export function MainPlanetDisplay({}: MainPlanetDisplayProps) {
  return (
    <main className="grid grid-cols-main gap-x-20 gap-y-10 mt-20 mx-auto w-[80%] h-screen">
      <div className="border-2 rounded-xl border-white  items-center justify-center flex flex-col ">
        <h2 className="text-center text-2xl">Title</h2>
        <Image src="/main/mercury.png" alt="" width={230} height={72} />
        <Link href="/planets/mercury">Discover</Link>
      </div>
      <div className="border-2 rounded-xl border-white flex flex-col items-center justify-center ">
        <h2 className="text-center text-2xl">Title</h2>
        <Image src="/main/venus.png" alt="" width={230} height={72} />
        <Link href="/planets/">Discover</Link>
      </div>
      <div className="border-2 rounded-xl border-white flex flex-col items-center justify-center ">
        <h2 className="text-center text-2xl">Title</h2>
        <Image src="/main/earth.png" alt="" width={230} height={72} />
        <Link href="/planets/">Discover</Link>
      </div>
      <div className="border-2 rounded-xl border-white flex flex-col items-center justify-center ">
        <h2 className="text-center text-2xl">Title</h2>
        <Image src="/main/mars.png" alt="" width={230} height={72} />
        <Link href="/planets/">Discover</Link>
      </div>
      <div className="border-2 rounded-xl border-white flex flex-col items-center justify-center ">
        <h2 className="text-center text-2xl">Title</h2>
        <Image src="/main/jupiter.png" alt="" width={230} height={72} />
        <Link href="/planets/">Discover</Link>
      </div>
      <div className="border-2 rounded-xl border-white flex flex-col items-center justify-center ">
        <h2 className="text-center text-2xl">Title</h2>
        <Image src="/main/saturn.png" alt="" width={230} height={72} />
        <Link href="/planets/">Discover</Link>
      </div>
      <div className="border-2 rounded-xl border-white flex flex-col items-center justify-center ">
        <h2 className="text-center text-2xl">Title</h2>
        <Image src="/main/uranus.png" alt="" width={230} height={72} />
        <Link href="/planets/">Discover</Link>
      </div>
      <div className="border-2 rounded-xl border-white flex flex-col items-center justify-center">
        <h2 className="text-center text-2xl">Title</h2>
        <Image src="/main/neptune.png" alt="" width={230} height={170} />
        <Link href="/planets/">Discover</Link>
      </div>
    </main>
  );
}
