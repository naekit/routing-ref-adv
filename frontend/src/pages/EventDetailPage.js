import React, { Suspense } from "react"
import {
	Await,
	json,
	redirect,
	useLoaderData,
	useRouteLoaderData,
} from "react-router-dom"
import EventItem from "../components/EventItem"
import EventsList from "../components/EventsList"

const EventDetailPage = () => {
	const eventDetails = useRouteLoaderData("detail")
	const { events } = useLoaderData()

	return (
		<div>
			<EventItem event={eventDetails.event} />
			<Suspense
				fallback={<p style={{ textAlign: "center" }}>Loading...</p>}
			>
				<Await resolve={events}>
					{(fetchedEvents) => <EventsList events={fetchedEvents} />}
				</Await>
			</Suspense>
		</div>
	)
}

export default EventDetailPage

export async function detailLoader({ req, params }) {
	const id = params.id

	const res = await fetch(`http://localhost:8080/events/${id}`)
	if (!res.ok) {
		throw json(
			{ message: "Could not fetch event details!" },
			{ status: 500 }
		)
	} else {
		return res
	}
}

export async function deleteAction({ req, params }) {
	const id = params.id

	const res = await fetch(`http://localhost:8080/events/${id}`, {
		method: "DELETE",
	})

	if (!res.ok) {
		throw json({ message: "Could not delete event." }, { status: 500 })
	}

	return redirect("/events")
}
