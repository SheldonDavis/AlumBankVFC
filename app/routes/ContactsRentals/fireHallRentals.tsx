//* IMPORTS

import type { Route } from './+types/fireHallRentals';
import RequestForm from '~/Components/RequestForm';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Alum Bank Community Volunteer Fire Company' }, { name: 'description', content: 'Welcome to React Router!' }];
}

export async function clientLoader({ params }: Route.LoaderArgs) {}

export default function FireHallRentals({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <h1>Fire Hall Rentals</h1>
      <RequestForm
        submitBtnText='Submit Rental Inquiry'
        txtAreaLBL='Please describe the occasion and the best time for us to contact you.'
        formName='FireHallRental'
        formFriendlyName='Fire Hall Rental'
        phoneRequired={true}
      />
    </>
  );
}
