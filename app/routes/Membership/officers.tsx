//* IMPORTS
import type { Route } from './+types/officers';
import { type Key } from 'react';
// import { db } from '~/config/firebaseConfig';
// import { collection, getDocs, query, where, limit, documentId } from 'firebase/firestore';
import type { VFC_Block } from '~/customTypes/Page';
import Article from '~/Components/Article';

//import page data
import { Officers_Data } from '~/database/Membership/Officers_Data';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Alum Bank Community Volunteer Fire Company' }, { name: 'description', content: 'Welcome to React Router!' }];
}

export async function clientLoader({ params }: Route.LoaderArgs) {
  // const q = query(collection(db, 'Pages'), where(documentId(), '==', `Officers`), limit(1));
  // const querySnapshot = await getDocs(q);
  // const tempData = querySnapshot.docs[0].data().elements;
  // return await { elements: tempData };
}

export default function Officers({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <main>
        <h1>Officers</h1>
        <div className={`cardArticles`}>
          {Officers_Data.elements.map((block, index) => {
            return <Article key={index} data={block} />;
          })}
        </div>
        {/* {loaderData.elements.map((block: VFC_Block, i: Key | null | undefined) => (
        <Article key={i} data={block} />
      ))} */}
      </main>
    </>
  );
}
