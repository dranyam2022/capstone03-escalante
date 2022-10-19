import { Link } from 'react-router-dom'

export default function ErrorPage() {
    return (
        <>
            <h1>Oops</h1>
            <p>Thage page is not found</p>
            <Link to="/">Go Back to Home</Link>
        </>
    )
}