import React from 'react';
import EventForm from '../components/EventForm';
import { registEvent } from '../plugins/eventAxios';
import { json, redirect } from 'react-router-dom';

function NewEventPage() {
  return <EventForm />;
}

export default NewEventPage;

export async function action({ request, params }) {
  const data = await request.formData();

  const eventData = {
    title: data.get('title'),
    image: data.get('image'),
    date: data.get('date'),
    description: data.get('description'),
  };

  const result = await registEvent(eventData);

  if (result.result.status === 422) {
    return result.result.data;
  }

  if (result.status === 'FAIL') {
    throw json({ message: 'Could not save event.' }, { status: 500 });
  }

  return redirect('/events');
}
