import Container from './Container';
import Showcase, { ShowcaseProps } from './Showcase';

export default function ShowcaseContainer({
  showcaseItems,
}: {
  showcaseItems: ShowcaseProps[];
}) {
  return (
    <Container className='my-24 grid gap-y-10 px-mobile-horizontal-spacing md:my-30 md:px-0 lg:grid-cols-3 lg:gap-x-[30px] lg:gap-y-8'>
      {showcaseItems.map((item, index) => (
        <Showcase key={index} {...item} />
      ))}
    </Container>
  );
}
