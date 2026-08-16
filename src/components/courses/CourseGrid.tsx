import type { CountryCode, Course } from "../../types/course"
import { formatPrice } from "../../utils/formatPrice"
import CourseCard from "./CourseCard"

interface CourseGridProps {
    courses: Course[]
    countryCode: CountryCode | null
}

function getCourseKey(course: Course): string {
    return (
        course.courseCode ??
        course.mangoId ??
        `${course.courseName ?? "untitled"}-${course.description ?? "course"}`
    )
}

export default function CourseGrid({ courses, countryCode }: CourseGridProps) {
    return (
        <div className="skillpath-course-grid">
            {courses.map((course) => (
                <CourseCard
                    key={getCourseKey(course)}
                    course={course}
                    price={formatPrice(course, countryCode)}
                />
            ))}
        </div>
    )
}
