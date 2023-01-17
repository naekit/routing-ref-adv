import React from "react"
import { json, useRouteLoaderData } from "react-router-dom"
import EventItem from "../components/EventItem"

const EventDetailPage = () => {
	const eventDetails = useRouteLoaderData("detail")

	return (
		<div>
			<EventItem event={eventDetails.event} />
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
