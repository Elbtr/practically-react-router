import { Suspense } from "react";
import { defer, json, useLoaderData, Await } from "react-router-dom";

import EventsList from "../components/EventsList";

// function EventsPage() {
//   const data = useLoaderData();

//   // if (data.isError) {
//   //   return <p>{data.message}</p>;
//   // }

//   const events = data.events;

//   return (
//     <>
//       <EventsList events={events} />
//     </>
//   );
// }
// // useLoaderData bisa juga digunakan di children parent nya atau di bawah parent nya sebagain contoh bisa di lihat di dalam eventList
// // dan useLoaderdata tidak bisa digunakan di dalam router yang lebih tinggi
// export default EventsPage;

// export const loader = async () => {
//   const response = await fetch("http://localhost:8080/events/");

//   if (!response.ok) {
//     // return { isError: true, message: "there was a problem at the event!" };
//     // throw new Response(JSON.stringify({ message: "cold not fetch events" }), {
//     //   status: 500,
//     // });
//     return json(
//       { message: "there was a problem at the event!" },
//       {
//         status: 500,
//       }
//     );
//   } else {
//     const resData = await response.json();
//     return resData;
//   }
// };

// fetching data with defer()omething went wrong

function EventsPage() {
  const { events } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}
// useLoaderData bisa juga digunakan di children parent nya atau di bawah parent nya sebagain contoh bisa di lihat di dalam eventList
// dan useLoaderdata tidak bisa digunakan di dalam router yang lebih tinggi
export default EventsPage;

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: "there was a problem at the event!" };
    // throw new Response(JSON.stringify({ message: "cold not fetch events" }), {
    //   status: 500,
    // });
    return json(
      { message: "could not fetch events" },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

export function loader() {
  return defer({
    events: loadEvents(),
  });
}
