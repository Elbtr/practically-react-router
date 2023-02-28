// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// done
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// done
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// done
// 4. Add properly working links to the MainNavigation
// done
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// done
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// done
// 7. Output the ID of the selected event on the EventDetailPage
// done
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import EditEvent from "./pages/EditEvent";
import ErrorPage from "./pages/Error";
import EventDetail, {
  loader as detailEventLoader,
  action as deteletEventAction,
} from "./pages/EventDetail";
import EventRootLayout from "./pages/EventRootLayout";
import Events, { loader as eventsLoader } from "./pages/Events";
import Home from "./pages/Home";
import NewEvent from "./pages/NewEvent";
import RootLayout from "./pages/RootLayout";
import { action as manipulateEventAction } from "./components/EventForm";
import Newsletter, { action as newsletterAction } from "./pages/Newsletter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, path: "", element: <Home /> },
      {
        path: "events",
        element: <EventRootLayout />,
        children: [
          {
            index: true,
            element: <Events />,
            loader: eventsLoader,
          },
          {
            path: ":eventId",
            id: "event-detail",
            loader: detailEventLoader,
            children: [
              {
                index: true,
                element: <EventDetail />,
                action: deteletEventAction,
              },
              {
                path: "edit",
                element: <EditEvent />,
                action: manipulateEventAction,
              },
            ],
          },
          { path: "new", element: <NewEvent />, action: manipulateEventAction },
        ],
      },
      {
        path: "newsletter",
        element: <Newsletter />,
        action: newsletterAction,
      },
    ],
  },
]);
// events di render ketika kita mengklik request events nya sebagai contoh di dalam backend events.js di router.get("/ ") saya menambahakan setTimeOut

function App() {
  return <RouterProvider router={router} />;
}

export default App;
