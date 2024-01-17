import { MainPlanetDisplay } from '@/components/MainPlanetDisplay';
import { lato } from '@/lib/fonts';

export default function Home() {
  return (
    <main className="bg-gradient-main pb-20">
      <h1 className="text-center text-5xl pt-20">Welcome to Pick a Planet</h1>
      <p
        className={`text-xl mx-auto  mt-10 w-[60%]  text-center ${lato.className}`}
      >
        Pick a planet was created to make it easy for everyone to learn about
        our planets. Click on a planet and let the journey begin. You'll know
        all about the planets that surround us in no time! If you'd like a
        personalized experience register to join Pick a Planet.
      </p>

      <MainPlanetDisplay />
    </main>
  );
}
