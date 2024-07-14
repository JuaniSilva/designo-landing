import Showcase, { ShowcaseProps } from './Showcase';

export default function ShowcaseContainer({
  showcaseItems,
}: {
  showcaseItems: ShowcaseProps[];
}) {
  return (
    <div className='gap my-24 grid gap-y-10 px-padding-body md:px-padding-body-tablet'>
      {showcaseItems.map((item, index) => (
        <Showcase key={index} {...item} />
      ))}
    </div>
  );
}
