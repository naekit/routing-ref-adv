import React from "react"
import EventsList from "../components/EventsList"

const EVENTS = [
	{
		id: "e1",
		title: "A dummy event",
		date: "2023-02-22",
		image: "https://blog.hubspot.de/hubfs/Germany/Blog_images/Optimize_Marketing%20Events%20DACH%202021.jpg",
		description:
			"Join this amazing event and connect with fellow developers.",
	},
	{
		id: "e2",
		title: "Smarty event",
		date: "2023-02-22",
		image: "https://blog.hubspot.de/hubfs/Germany/Blog_images/Optimize_Marketing%20Events%20DACH%202021.jpg",
		description:
			"Join this amazing event and connect with fellow developers.",
	},
	{
		id: "e3",
		title: "Hardy event",
		date: "2023-02-22",
		image: "https://blog.hubspot.de/hubfs/Germany/Blog_images/Optimize_Marketing%20Events%20DACH%202021.jpg",
		description:
			"Join this amazing event and connect with fellow developers.",
	},
]

const EventsPage = () => {
	return (
		<>
			<EventsList events={EVENTS} />
		</>
	)
}

export default EventsPage
