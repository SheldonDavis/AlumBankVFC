//* IMPORTS
import type { Route } from './+types/contactUs';
import Article from '~/Components/Article';
import PageBreakWrapper from '~/Components/PageBreakWrapper';
import RequestForm from '~/Components/RequestForm';

//import page data
import { ContactUs_Data } from '~/database/ContactsRentals/ContactUs_Data';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Alum Bank Community Volunteer Fire Company' }, { name: 'description', content: 'Welcome to React Router!' }];
}

export async function clientLoader({ params }: Route.LoaderArgs) {}

export default function ContactUs({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <h1>Contact Us</h1>
      {ContactUs_Data.elements.map((block, index) => {
        return <Article key={index} data={block} />;
      })}
      <PageBreakWrapper>
        <p>OR</p>
      </PageBreakWrapper>

      <RequestForm submitBtnText='Submit Contact form' txtAreaLBL='Your Message' formName='Contact' formFriendlyName='Contact Us' />
      {/* {loaderData.elements.map((block: VFC_Block, i: Key | null | undefined) => (
        <Article key={i} data={block} />
      ))} */}
    </>
  );
}
