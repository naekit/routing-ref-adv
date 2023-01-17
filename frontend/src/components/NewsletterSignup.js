import classes from "./NewsletterSignup.module.css"
import { useFetcher } from "react-router-dom"
import { useRef } from "react"

function NewsletterSignup() {
	const fetcher = useFetcher()
	const formRef = useRef()

	if (fetcher.state === "loading") {
		formRef.current.reset()
	}

	return (
		<fetcher.Form
			method="post"
			action="/newsletter"
			className={classes.newsletter}
			ref={formRef}
		>
			<input
				type="email"
				name="email"
				placeholder="Sign up for newsletter..."
				aria-label="Sign up for newsletter"
			/>
			<button>Sign up</button>
		</fetcher.Form>
	)
}

export default NewsletterSignup
