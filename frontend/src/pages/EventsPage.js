import { json, useLoaderData } from "react-router-dom"
import EventsList from "../components/EventsList"

function EventsPage() {
	const data = useLoaderData()
	if (data.hasError) {
		return <p>{data.message}</p>
	}
	const fetchedEvents = data.events

	return (
		<>
			<EventsList events={fetchedEvents} />
		</>
	)
}

export default EventsPage

export async function loader() {
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
		return response
	}
}
