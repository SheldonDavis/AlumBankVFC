import React, { Fragment } from 'react';

import type { VFC_Data, VFC_List } from '~/customTypes/Page';

export default function Paragraph(item: VFC_Data | VFC_List) {
  //regex for finding [link url='']''[/link] in text
  const regex_richText = /(<strong>(.*?)<\/strong>|<b>(.*?)<\/b>|<i>(.*?)<\/i>|<a href=['"](.*?)['"]>(.*?)<\/a>|<br\s*\/?>)/g;

  function renderRichText(text: string) {
    let returnElements: React.ReactNode[] = [];
    let lastIndex = 0;
    let match;

    while ((match = regex_richText.exec(text)) !== null) {
      const fullMatch = match[0];
      // prepend anything that existed before the tag
      if (match.index > lastIndex) {
        returnElements.push(<Fragment key={`text-${lastIndex}`}>{text.substring(lastIndex, match.index)}</Fragment>);
      }

      // check if tag type is part of our handled tag types
      if (fullMatch.startsWith(`<strong>`)) {
        const content = match[2];
        returnElements.push(<strong key={match.index}>{content}</strong>);
      } else if (fullMatch.startsWith(`<b>`)) {
        const content = match[3];
        returnElements.push(<b key={match.index}>{content}</b>);
      } else if (fullMatch.startsWith(`<i>`)) {
        const content = match[4];
        returnElements.push(<i key={match.index}>{content}</i>);
      } else if (fullMatch.startsWith(`<a`)) {
        const url = match[5];
        const linkText = match[6];
        returnElements.push(
          <a key={match.index} href={url} target={`_blank`}>
            {linkText}
          </a>
        );
      } else if (fullMatch.startsWith(`<br`)) {
        // Handle the <br> tag.
        returnElements.push(<br key={match.index} />);
      }

      // Update the last index to the end of the current match.
      lastIndex = match.index + fullMatch.length;
    }

    // add remaining text
    if (lastIndex < text.length) {
      returnElements.push(<Fragment key={`text-${lastIndex}`}>{text.substring(lastIndex)}</Fragment>);
    }

    return returnElements;
  }

  return (
    <p className={'css' in item && item?.css ? item.css : ``}>
      {item?.label && (
        <>
          <strong>{item?.label}: </strong>
        </>
      )}
      {item?.link ? (
        <a href={item.link} target={item?.target ? item.target : ``}>
          {item.value}
        </a>
      ) : item?.RichText && item.value ? (
        renderRichText(item.value)
      ) : (
        item.value
      )}
    </p>
  );
}
