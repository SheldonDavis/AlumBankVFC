import type { VFC_Block, VFC_Data } from '~/customTypes/Page';
import Title from './Title';
import Paragraph from './Paragraph';
import Image from './Image';
import List from './List';

export default function Article({ data }: { data: VFC_Block }) {
  function returnContent(item: VFC_Data, index: number) {
    switch (item.type) {
      case `title`:
      case `t`:
        return <Title key={index} {...item} />;
      case `paragraph`:
      case `p`:
        return <Paragraph key={index} {...item} />;
      case `image`:
      case `i`:
        return <Image key={index} {...item} />;
      case `list`:
      case `l`:
        return <List key={index} {...item} />;
      default:
        return null;
    }
  }

  return (
    <>
      {/* {data.content.map((item, index) => {
        return returnContent(item, index);
      })} */}
      <article>
        {data.content.map((item: VFC_Data, index: number) => {
          return returnContent(item, index);
        })}
      </article>
    </>
  );
}
