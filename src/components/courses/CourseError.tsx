interface CourseErrorProps {
    title: string
    message: string
    retryLabel: string
    onRetry: () => void
}

export default function CourseError({
    title,
    message,
    retryLabel,
    onRetry,
}: CourseErrorProps) {
    return (
        <section className="skillpath-course-error" role="alert">
            <div>
                <h3>{title}</h3>
                <p>{message}</p>
            </div>
            <button type="button" onClick={onRetry} className="skillpath-course-retry">
                {retryLabel}
            </button>
        </section>
    )
}
