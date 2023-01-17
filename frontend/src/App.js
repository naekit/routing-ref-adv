import { createBrowserRouter, RouterProvider } from "react-router-dom"
import EditEventPage from "./pages/EditEventPage"
import ErrorPage from "./pages/ErrorPage"
import EventDetailPage, { detailLoader } from "./pages/EventDetailPage"
import EventRoot from "./pages/EventRoot"
import EventsPage, { loader as eventLoader } from "./pages/EventsPage"
import HomePage from "./pages/HomePage"
import NewEventPage from "./pages/NewEventPage"
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
						element: <EventDetailPage />,
						loader: detailLoader,
					},
					{
						path: "new",
						element: <NewEventPage />,
					},
					{ path: ":id/edit", element: <EditEventPage /> },
				],
			},
		],
	},
])

function App() {
	return <RouterProvider router={router} />
}

export default App
