import Showcase, { ShowcaseProps } from './Showcase';

export default function ShowcaseContainer({
  showcaseItems,
}: {
  showcaseItems: ShowcaseProps[];
}) {
  return (
    <div className='gap my-24 grid gap-y-10 px-mobile-horizontal-spacing md:my-30 md:px-0'>
      {showcaseItems.map((item, index) => (
        <Showcase key={index} {...item} />
      ))}
    </div>
  );
}
