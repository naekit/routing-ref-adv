import React from "react"
import { useRouteLoaderData } from "react-router-dom"
import EventForm from "../components/EventForm"

const EditEventPage = () => {
	const data = useRouteLoaderData("detail")

	return (
		<div>
			<EventForm event={data.event} method="patch" />
		</div>
	)
}

export default EditEventPage
