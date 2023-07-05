import type {SanityHeroHome} from '~/lib/sanity';

type Props = {
  hero: SanityHeroHome;
};

export default function AboutHero({hero}: Props) {
  return (
    <div className={'flex flex-col items-center p-5'}>
      {/* Title */}
      <h1 className="text-3xl">About</h1>

      {/* About section */}
      {hero.content && <p className="p-3 text-xl">{hero.content.about}</p>}
    </div>
  );
}
