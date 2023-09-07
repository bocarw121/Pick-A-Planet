import { Divider } from "'@/components/Divider'";
import { PlanetMainTitle } from '../components/PlanetMainTitle';
import { PlanetSectionParagraph } from '../components/PlanetSectionParaph';
import { PlanetSectionTitle } from '../components/PlanetSectionTitle';
import { PlanetsFacts } from '../components/PlanetsFacts';
import { PlanetsFactsImage } from '../components/PlanetsFacts/FactsImage';
import { PlanetsFactsText } from '../components/PlanetsFacts/FactsText';
import { ResponsivePlanetImage } from '../components/ResponsivePlanetImage';

export default function Neptune() {
  return (
    <>
      <article>
        <section>
          <PlanetMainTitle planet="Neptune" />

          <ResponsivePlanetImage
            source="/planet-pages/neptune/neptune-main.png"
            alt="Neptune's main"
          />

          <PlanetSectionParagraph>
            Dark, cold and whipped by supersonic winds, ice giant Neptune is the
            eighth and most distant planet in our solar system. More than 30
            times as far from the Sun as Earth, Neptune is the only planet in
            our solar system not visible to the naked eye. In 2011 Neptune
            completed its first 165-year orbit since its discovery in 1846.
            Neptune is so far from the Sun that high noon on the big blue planet
            would seem like dim twilight to us. The warm light we see here on
            our home planet is roughly 900 times as bright as sunlight on
            Neptune.
          </PlanetSectionParagraph>
        </section>
        <Divider />
        <section>
          <PlanetSectionTitle title="Size and Distance" />
          <PlanetSectionParagraph>
            With a radius of 15,299.4 miles (24,622 kilometers), Neptune is
            about four times wider than Earth. If Earth were the size of a
            nickel, Neptune would be about as big as a baseball. From an average
            distance of 2.8 billion miles (4.5 billion kilometers), Neptune is
            30 astronomical units away from the Sun. One astronomical unit
            (abbreviated as AU), is the distance from the Sun to Earth. From
            this distance, it takes sunlight 4 hours to travel from the Sun to
            Neptune.
          </PlanetSectionParagraph>

          <ResponsivePlanetImage
            source="/planet-pages/neptune/neptune-earth-size-comparison.png"
            alt="Neptune's size"
          />
        </section>
        <Divider />
        <section>
          <PlanetSectionTitle title="Orbit and Rotation" />
          <PlanetSectionParagraph>
            One day on Neptune takes about 16 hours (the time it takes for
            Neptune to rotate or spin once). And Neptune makes a complete orbit
            around the Sun (a year in Neptunian time) in about 165 Earth years
            (60,190 Earth days). Sometimes Neptune is even farther from the Sun
            than dwarf planet Pluto. Pluto's highly eccentric, oval-shaped orbit
            brings it inside Neptune's orbit for a 20-year period every 248
            Earth years. This switch, in which Pluto is closer to the Sun than
            Neptune, happened most recently from 1979 to 1999. Pluto can never
            crash into Neptune, though, because for every three laps Neptune
            takes around the Sun, Pluto makes two. This repeating pattern
            prevents close approaches of the two bodies. Neptune’s axis of
            rotation is tilted 28 degrees with respect to the plane of its orbit
            around the Sun, which is similar to the axial tilts of Mars and
            Earth. This means that Neptune experiences seasons just like we do
            on Earth; however, since its year is so long, each of the four
            seasons lasts for over 40 years.
          </PlanetSectionParagraph>
        </section>
        <Divider />
        <section>
          <PlanetSectionTitle title="Structure" />
          <PlanetSectionParagraph>
            Neptune is one of two ice giants in the outer solar system (the
            other is Uranus). Most (80 percent or more) of the planet's mass is
            made up of a hot dense fluid of "icy" materials—water, methane and
            ammonia—above a small, rocky core. Of the giant planets, Neptune is
            the densest. Scientists think there might be an ocean of super-hot
            water under Neptune's cold clouds. It does not boil away because
            incredibly high pressure keeps it locked inside.
          </PlanetSectionParagraph>
        </section>
        <Divider />
        <section>
          <PlanetSectionTitle title="Formation" />
          <PlanetSectionParagraph>
            Neptune took shape when the rest of the solar system formed about
            4.5 billion years ago, when gravity pulled swirling gas and dust in
            to become this ice giant. Like its neighbor Uranus, Neptune likely
            formed closer to the Sun and moved to the outer solar system about 4
            billion years ago.
          </PlanetSectionParagraph>
        </section>
        <Divider />
        <section>
          <PlanetSectionTitle title="Surface" />
          <PlanetSectionParagraph>
            Neptune does not have a solid surface. Its atmosphere (made up
            mostly of hydrogen, helium and methane) extends to great depths,
            gradually merging into water and other melted ices over a heavier,
            solid core with about the same mass as Earth.
          </PlanetSectionParagraph>

          <ResponsivePlanetImage
            source="/planet-pages/neptune/neptune-surface.png"
            alt="Neptune's surface"
          />
        </section>
        <Divider />
        <section>
          <PlanetSectionTitle title="Atmosphere" />
          <PlanetSectionParagraph>
            Neptune's atmosphere is made up mostly of hydrogen and helium with
            just a little bit of methane. Neptune's neighbor Uranus is a
            blue-green color due to such atmospheric methane, but Neptune is a
            more vivid, brighter blue, so there must be an unknown component
            that causes the more intense color. Neptune is our solar system's
            windiest world. Despite its great distance and low energy input from
            the Sun, Neptune's winds can be three times stronger than Jupiter's
            and nine times stronger than Earth's. These winds whip clouds of
            frozen methane across the planet at speeds of more than 1,200 miles
            per hour (2,000 kilometers per hour). Even Earth's most powerful
            winds hit only about 250 miles per hour (400 kilometers per hour).
            In 1989 a large, oval-shaped storm in Neptune's southern hemisphere
            dubbed the "Great Dark Spot" was large enough to contain the entire
            Earth. That storm has since disappeared, but new ones have appeared
            on different parts of the planet.
          </PlanetSectionParagraph>
        </section>
        <Divider />
        <section>
          <PlanetSectionTitle title="Magnetosphere" />
          <PlanetSectionParagraph>
            The main axis of Neptune's magnetic field is tipped over by about 47
            degrees compared with the planet's rotation axis. Like Uranus, whose
            magnetic axis is tilted about 60 degrees from the axis of rotation,
            Neptune's magnetosphere undergoes wild variations during each
            rotation because of this misalignment. The magnetic field of Neptune
            is about 27 times more powerful than that of Earth.
          </PlanetSectionParagraph>
        </section>
        <Divider />
        <section>
          <PlanetSectionTitle title="Moons" />
          <PlanetSectionParagraph>
            Triton is the only large moon in the solar system that circles its
            planet in a direction opposite to the planet's rotation (a
            retrograde orbit), which suggests that it may once have been an
            independent object that Neptune captured. Triton is extremely cold,
            with surface temperatures around minus 391 degrees Fahrenheit (minus
            235 degrees Celsius). And yet, despite this deep freeze at Triton,
            Voyager 2 discovered geysers spewing icy material upward more than 5
            miles (8 kilometers). Triton's thin atmosphere, also discovered by
            Voyager, has been detected from Earth several times since, and is
            growing warmer, but scientists do not yet know why.
          </PlanetSectionParagraph>
        </section>
        <Divider />
        <section>
          <PlanetSectionTitle title="Potential for Life" />
          <PlanetSectionParagraph>
            Neptune's environment is not conducive to life as we know it. The
            temperatures, pressures and materials that characterize this planet
            are most likely too extreme and volatile for organisms to adapt to.
          </PlanetSectionParagraph>
        </section>
      </article>
      <PlanetsFacts planet="Neptune">
        <PlanetsFactsImage source="/main/neptune.png" planet="Neptune" />
        <PlanetsFactsText>
          Neptune is the most distant planet from the Sun.
        </PlanetsFactsText>
        <PlanetsFactsText>Neptune is the smallest gas giant</PlanetsFactsText>
        <PlanetsFactsText>
          A year on Neptune lasts 165 Earth years.
        </PlanetsFactsText>
        <PlanetsFactsText>Neptune has 6 faint rings.</PlanetsFactsText>
      </PlanetsFacts>
    </>
  );
}
