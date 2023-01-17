import { Suspense } from "react"
import { Await, defer, json, useLoaderData } from "react-router-dom"
import EventsList from "../components/EventsList"

function EventsPage() {
	const { events } = useLoaderData()

	return (
		<Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
			<Await resolve={events}>
				{(fetchedEvents) => <EventsList events={fetchedEvents} />}
			</Await>
		</Suspense>
	)
}

export default EventsPage

export async function loadEvents() {
	const response = await fetch("http://localhost:8080/events")

	if (!response.ok) {
		// error state
		// return { hasError: true, message: "Failed fetching from filesystem." }
		// throw new Response(
		// 	JSON.stringify({ message: "Could not fetch events." }),
		// 	{ status: 500 }
		// )
		return json(
			{ message: "Failed fetching from filesystem." },
			{ status: 500 }
		)
	} else {
		const resData = await response.json()

		return resData.events
	}
}

export function loader() {
	return defer({
		events: loadEvents(),
	})
}
