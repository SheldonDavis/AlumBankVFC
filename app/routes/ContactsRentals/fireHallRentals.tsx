//* IMPORTS
import type { Route } from './+types/fireHallRentals';
import { type Key } from 'react';
// import { db } from '~/config/firebaseConfig';
// import { collection, getDocs, query, where, limit, documentId } from 'firebase/firestore';
import type { VFC_Block } from '~/customTypes/Page';
import Article from '~/Components/Article';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Alum Bank Community Volunteer Fire Company' }, { name: 'description', content: 'Welcome to React Router!' }];
}

export async function clientLoader({ params }: Route.LoaderArgs) {
  // const q = query(collection(db, 'Pages'), where(documentId(), '==', `Fire Hall Rental`), limit(1));
  // const querySnapshot = await getDocs(q);
  // const tempData = querySnapshot.docs[0].data().elements;
  // return await { elements: tempData };
}

export default function FireHallRentals({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <h1>Fire Hall Rentals</h1>
      <p>body content - fire hall rental form</p>
      {/* {loaderData.elements.map((block: VFC_Block, i: Key | null | undefined) => (
        <Article key={i} data={block} />
      ))} */}
    </>
  );
}
