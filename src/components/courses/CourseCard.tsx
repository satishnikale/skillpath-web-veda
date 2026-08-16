import type { Course } from "../../types/course"

interface CourseCardProps {
    course: Course
    price: string
}

export default function CourseCard({ course, price }: CourseCardProps) {
    return (
        <article className="skillpath-course-card">
            <p className="skillpath-course-category">{course.mainCategory || "General"}</p>
            <h3 className="skillpath-course-name">{course.courseName || "Untitled course"}</h3>
            <p className="skillpath-course-description">
                {course.description || "Course details will be available soon."}
            </p>
            <div className="skillpath-course-card-footer">
                <span className="skillpath-course-price">{price}</span>
                {course.refundable === true && (
                    <span className="skillpath-course-refund">✓ Refundable</span>
                )}
            </div>
        </article>
    )
}
