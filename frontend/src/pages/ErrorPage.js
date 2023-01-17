import React from "react"
import { useRouteError } from "react-router-dom"
import MainNavigation from "../components/MainNavigation"
import PageContent from "../components/PageContent"

const ErrorPage = () => {
	const err = useRouteError()

	let title = "An error occurred!"
	let message = "Something went wrong!"

	if (err.status === 500) {
		message = JSON.parse(err.data).message
	}

	if (err.status === 404) {
		title = "Not found!"
		message = "Could not find resource or page."
	}
	return (
		<>
			<MainNavigation />
			<PageContent title={title}>
				<p>{message}</p>
			</PageContent>
		</>
	)
}

export default ErrorPage
