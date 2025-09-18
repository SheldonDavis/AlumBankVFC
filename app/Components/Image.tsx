import type { VFC_Data } from '~/customTypes/Page';

export default function Image(item: VFC_Data) {
  return (
    <p>
      {item?.link ? (
        <a href={item.link} target={item?.target ? item.target : ``}>
          <img src={item.value} alt={item?.alt ? `${item.alt}` : `${item.value}`} title={item?.alt ? `${item.alt}` : `${item.value}`} />
        </a>
      ) : (
        <img src={item.value} alt={item?.alt ? `${item.alt}` : `${item.value}`} title={item?.alt ? `${item.alt}` : `${item.value}`} />
      )}
    </p>
  );
}
