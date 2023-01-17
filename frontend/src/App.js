import { createBrowserRouter, RouterProvider } from "react-router-dom"
import EditEventPage from "./pages/EditEventPage"
import ErrorPage from "./pages/ErrorPage"
import EventDetailPage, {
	deleteAction,
	detailLoader,
} from "./pages/EventDetailPage"
import EventRoot from "./pages/EventRoot"
import EventsPage, { loader as eventLoader } from "./pages/EventsPage"
import HomePage from "./pages/HomePage"
import NewEventPage, { newEventAction } from "./pages/NewEventPage"
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
							},
							{ path: "edit", element: <EditEventPage /> },
						],
					},
					{
						path: "new",
						element: <NewEventPage />,
						action: newEventAction,
					},
				],
			},
		],
	},
])

function App() {
	return <RouterProvider router={router} />
}

export default App
