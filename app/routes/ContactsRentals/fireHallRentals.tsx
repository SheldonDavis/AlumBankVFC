//* IMPORTS
import { useState } from 'react';
import type { Route } from './+types/fireHallRentals';
import { type Key } from 'react';
// import { db } from '~/config/firebaseConfig';
// import { collection, getDocs, query, where, limit, documentId } from 'firebase/firestore';
import type { VFC_Block } from '~/customTypes/Page';
import Article from '~/Components/Article';

type SubmissionStatusType = {
  message: string;
  type: 'success' | 'error' | '';
};

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
  const pageLoadDateTime = new Date();
  const ENV = import.meta.env;
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatusType>({
    message: '',
    type: '', // 'success' or 'error'
  });

  function timeSincePageLoad() {
    const diffInMs = Math.abs(pageLoadDateTime.getTime() - new Date().getTime());
    // console.log(diffInMs);
    return diffInMs;
  }

  async function handleRentalFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Clear previous status and set loading state
    setSubmissionStatus({ message: '', type: '' });
    setIsSubmitting(true);

    // Get the form element from the event
    const form = event.currentTarget;

    // gather all form elements by name attribute
    const formData = new FormData(form);

    //find time between page load and submission
    formData.append('timeOnPageMs', timeSincePageLoad().toString());
    formData.append('submittedFromPage', `FireHallRentals`);

    // serialize data for URL encoding
    const urlEncodedData = new URLSearchParams(formData as any).toString();

    try {
      const res = await fetch(ENV.VITE_GAS_FORM_HANDLER_URL, {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
          // set content type header for GAS
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        // Send the URL-encoded string as the body
        body: urlEncodedData,
      });

      // //check for ok response
      // if (!res.ok) {
      //   throw new Error(`HTTP error! Status: ${res.status}. Check your Apps Script logs.`);
      // }

      // Success case
      setSubmissionStatus({
        message: 'Fire Hall inquiry submitted! We will be in touch.',
        type: 'success',
      });
      // Clear the form after successful submission
      form.reset();
    } catch (err) {
      // Error case (network failure, API error, etc.)
      console.error('Submission Failed:', err);
      // Ensure error is treated as an Error object or string for message extraction
      const errorMessage = err instanceof Error ? err.message : String(err);
      setSubmissionStatus({
        message: `Submission failed. Please try again. (${errorMessage})`,
        type: 'error',
      });
    } finally {
      // Always re-enable the button
      setIsSubmitting(false);
    }
  }

  // Determine Tailwind classes for the status message box
  const statusClasses =
    submissionStatus.type === 'success' ? 'bg-green-100 border-green-400 text-green-700' : 'bg-red-100 border-red-400 text-red-700';

  return (
    <>
      <h1>Fire Hall Rentals</h1>
      {submissionStatus.message && (
        <aside role='alert' className={`p-3 border rounded-lg mb-4 text-sm ${statusClasses}`}>
          {submissionStatus.message}
        </aside>
      )}

      <form onSubmit={handleRentalFormSubmit}>
        <label htmlFor='name' className='block text-sm font-medium text-gray-700 mt-2 mb-1'>
          Name
        </label>
        <input
          id='name'
          type='text'
          name='name'
          placeholder='Name'
          required
          className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150'
          disabled={isSubmitting}
        />
        <label htmlFor='email' className='block text-sm font-medium text-gray-700 mt-4 mb-1'>
          Email
        </label>
        <input
          id='email'
          type='email'
          name='email'
          placeholder='Email'
          required
          className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150'
          disabled={isSubmitting}
        />
        <label htmlFor='phone' className='block text-sm font-medium text-gray-700 mt-4 mb-1'>
          Phone Number
        </label>
        <input
          id='phone'
          type='tel'
          name='phone'
          placeholder='(123) 456-7890'
          required
          className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150'
          disabled={isSubmitting}
        />
        <label htmlFor='email' className='block text-sm font-medium text-gray-700 mt-4 mb-1'>
          Please describe the occasion and the best time for us to contact you.
        </label>
        <textarea
          id='Message'
          name='message'
          placeholder='Tell us about your needs for the Fire Hall...'
          className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150'
          disabled={isSubmitting}
        ></textarea>
        <input type={`checkbox`} name={`honeypot`} style={{ display: `none` }} aria-hidden={`true`} />
        <button
          type='submit'
          disabled={isSubmitting}
          className={`w-full mt-6 py-3 px-4 rounded-lg shadow-md text-sm font-medium transition duration-200 ease-in-out transform 
            ${
              isSubmitting
                ? 'bg-blue-400 text-white cursor-not-allowed'
                : 'cursor-pointer bg-blue-600 text-white hover:bg-blue-700 hover:shadow-none hover:translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
            }`}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Rental Inquiry'}
        </button>
      </form>
      {/* {loaderData.elements.map((block: VFC_Block, i: Key | null | undefined) => (
        <Article key={i} data={block} />
      ))} */}
    </>
  );
}
