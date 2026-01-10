export function Feedback({ message, error }: {message:string | null, error:string | null}) {
    if (message) return <div className="success-message">{message}</div>
    if (error) return <p className="error-message">{error}</p>
    return null
}