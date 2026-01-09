//* IMPORTS
import { useState, useEffect } from 'react';

// import { type Key } from 'react';
// import { db } from '~/config/firebaseConfig';
// import { collection, getDocs, query, where, limit, documentId } from 'firebase/firestore';
// import type { VFC_Block } from '~/customTypes/Page';

//*import types
import type { Route } from './+types/carShow';
import Article from '~/Components/Article';
type GoogleCalendarEvent = {
  summary: string;
  location: string;
  htmlLink: string;
  description: string;
  start: {
    date: string;
    dateTime: string;
    timeZone: string;
  };
  end: {
    dateTime: string;
    timeZone: string;
  };
};
const dateFormatOptions: Object = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit', // e.g., 10
  minute: '2-digit', // e.g., 30
  hour12: true, // Use AM/PM
};

//*import page data
import { CarShow_Data } from '~/database/Activities/CarShow_Data';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Alum Bank Community Volunteer Fire Company' }, { name: 'description', content: 'Welcome to React Router!' }];
}

export async function clientLoader({ params }: Route.LoaderArgs) {
  // const q = query(collection(db, 'Pages'), where(documentId(), '==', `Car Show`), limit(1));
  // const querySnapshot = await getDocs(q);
  // const tempData = querySnapshot.docs[0].data().elements;
  // return await { elements: tempData };
  const ENV = import.meta.env;
  const URL = `https://www.googleapis.com/calendar/v3/calendars/${ENV.VITE_G_CALENDAR_ID}/events?key=${ENV.VITE_G_CALENDAR_API_KEY}&singleEvents=true&orderBy=startTime`;
  const response = await fetch(URL);
  const data = await response.json();
  // console.log(data);
  return await { events: data.items };
}

export default function CarShow({ loaderData }: Route.ComponentProps) {
  const [events, setEvents] = useState<Array<GoogleCalendarEvent>>(loaderData.events);

  return (
    <>
      <h1>Car Show</h1>
      {CarShow_Data.elements.map((block, index) => {
        return <Article key={index} data={block} />;
      })}

      <div className={`CalendarEvents`}>
        {events.map((calEvent, index) => {
          return (
            <aside key={index}>
              <p>
                <a href={calEvent.htmlLink} target='_blank'>
                  {calEvent.summary}
                </a>
              </p>
              {calEvent.start.dateTime ? (
                <p>
                  {new Date(calEvent.start.dateTime).toLocaleDateString('en-US', dateFormatOptions)}{' '}
                  {calEvent.start.timeZone && ` (${calEvent.start.timeZone})`}
                  {calEvent.end.dateTime && (
                    <>
                      {` - `}
                      {new Date(calEvent.end.dateTime).toLocaleDateString('en-US', dateFormatOptions)}
                      {calEvent.end.timeZone && ` (${calEvent.end.timeZone})`}
                    </>
                  )}
                </p>
              ) : (
                calEvent.start.date && (
                  <p>
                    {` `}
                    {new Date(calEvent.start.date).toLocaleDateString('en-US', dateFormatOptions)}
                  </p>
                )
              )}
              {calEvent.description && (
                <>
                  <p>{calEvent.description}</p>
                </>
              )}
            </aside>
          );
        })}
      </div>
      {/* {loaderData.elements.map((block: VFC_Block, i: Key | null | undefined) => (
        <Article key={i} data={block} />
      ))} */}
    </>
  );
}
