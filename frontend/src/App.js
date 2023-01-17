import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { sendEventAction } from "./components/EventForm"
import EditEventPage from "./pages/EditEventPage"
import ErrorPage from "./pages/ErrorPage"
import EventDetailPage, {
	deleteAction,
	detailLoader,
} from "./pages/EventDetailPage"
import EventRoot from "./pages/EventRoot"
import EventsPage, { loader as eventLoader } from "./pages/EventsPage"
import HomePage from "./pages/HomePage"
import NewEventPage from "./pages/NewEventPage"
import NewsletterPage, { newsletterAction } from "./pages/NewsletterPage"
import RootLayout from "./pages/RootLayout"

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <HomePage /> },
			{
				path: "events",
				element: <EventRoot />,
				children: [
					{
						index: true,
						element: <EventsPage />,
						loader: eventLoader,
					},
					{
						path: ":id",
						loader: detailLoader,
						id: "detail",
						children: [
							{
								index: true,
								element: <EventDetailPage />,
								action: deleteAction,
								loader: eventLoader,
							},
							{
								path: "edit",
								element: <EditEventPage />,
								action: sendEventAction,
							},
						],
					},
					{
						path: "new",
						element: <NewEventPage />,
						action: sendEventAction,
					},
				],
			},
			{
				path: "newsletter",
				element: <NewsletterPage />,
				action: newsletterAction,
			},
		],
	},
])

function App() {
	return <RouterProvider router={router} />
}

export default App
