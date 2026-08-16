export default function CourseSkeleton() {
    return (
        <div className="skillpath-course-grid" aria-label="Loading courses" aria-busy="true">
            {["skeleton-1", "skeleton-2", "skeleton-3"].map((skeleton) => (
                <div key={skeleton} className="skillpath-course-skeleton" />
            ))}
        </div>
    )
}
