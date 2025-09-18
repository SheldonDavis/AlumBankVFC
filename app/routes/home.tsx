//* IMPORTS
import type { Route } from './+types/home';
import { type Key } from 'react';
// import { db } from '~/config/firebaseConfig';
// import { collection, getDocs, query, where, limit, documentId } from 'firebase/firestore';
import type { VFC_Block } from '~/customTypes/Page';
import Article from '~/Components/Article';

//import page data
import { Home_Data } from '~/database/Home_Data';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Alum Bank Community Volunteer Fire Company' }, { name: 'description', content: 'Welcome to React Router!' }];
}

export async function clientLoader({ params }: Route.LoaderArgs) {
  // const q = query(collection(db, 'Pages'), where(documentId(), '==', `Home`), limit(1));
  // const querySnapshot = await getDocs(q);
  // const tempData = querySnapshot.docs[0].data().elements;
  // return await { elements: tempData };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  // const [data, setData] = useState<VFC_Page>({ elements: [{ content: [{ type: null, value: `` }] }] });

  // async function fetchData() {
  //   const q = query(collection(db, 'Pages'), where(documentId(), '==', `Home`), limit(1));
  //   const querySnapshot = await getDocs(q);
  //   const tempData = querySnapshot.docs[0].data().elements;
  //   setData({ elements: tempData });
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <>
      <h1>Home</h1>
      {Home_Data.elements.map((block, index) => {
        return <Article key={index} data={block} />;
      })}
      {/*
      <ul>
        <li>create pages that use general formatting.</li>
        <li>create pages that use unique formatting.</li>
        <li>create form to write to : ContactSubmissions document.</li>
        <li>create form to write to : FireHallRentalRequests document.</li>
      </ul> 
      */}

      {/* {loaderData.elements.map((block: VFC_Block, i: Key | null | undefined) => (
        <Article key={i} data={block} />
      ))} */}
    </>
  );
}
