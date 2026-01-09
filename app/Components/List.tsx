import type { VFC_Data } from '~/customTypes/Page';
import Title from './Title';
import Paragraph from './Paragraph';

export default function List(item: VFC_Data) {
  return (
    <>
      {item?.label && <Title {...item} />}
      <ul className={item?.css ? item.css : ''}>
        {item?.values?.map((listItem, index) => (
          <li key={index}>
            <Paragraph {...listItem} />
          </li>
        ))}
      </ul>
    </>
  );
}
