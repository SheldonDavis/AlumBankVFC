import type { VFC_Data } from '~/customTypes/Page';

export default function Title(item: VFC_Data) {
  return (
    <h3 className={item?.css ? item.css : ``}>
      {item.type === `t` ||
        (item.type === `title` &&
          (item.link ? (
            <a href={item.link} target={item?.target ? item.target : ``}>
              {item.value}
            </a>
          ) : (
            item.value
          )))}

      {item.type === `l` || (item.type === `list` && item.label)}
    </h3>
  );
}
