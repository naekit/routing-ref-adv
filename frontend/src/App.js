import { createBrowserRouter, RouterProvider } from "react-router-dom"
import EditEventPage from "./pages/EditEventPage"
import EventDetailPage from "./pages/EventDetailPage"
import EventRoot from "./pages/EventRoot"
import EventsPage from "./pages/EventsPage"
import HomePage from "./pages/HomePage"
import NewEventPage from "./pages/NewEventPage"
import RootLayout from "./pages/RootLayout"

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{ index: true, element: <HomePage /> },
			{
				path: "events",
				element: <EventRoot />,
				children: [
					{
						index: true,
						element: <EventsPage />,
						loader: async () => {
							const response = await fetch(
								"http://localhost:8080/events"
							)

							if (!response.ok) {
								// error state
							} else {
								const resData = await response.json()
								return resData.events
							}
						},
					},
					{ path: ":id", element: <EventDetailPage /> },
					{ path: "new", element: <NewEventPage /> },
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
