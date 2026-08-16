import { addPropertyControls, ControlType } from "framer"
import { useCallback, useEffect, useState, type CSSProperties } from "react"
import { fetchCountry, fetchCourses } from "../../services/courseService"
import type { CountryCode, Course } from "../../types/course"
import CourseEmpty from "./CourseEmpty"
import CourseError from "./CourseError"
import CourseGrid from "./CourseGrid"
import CourseSkeleton from "./CourseSkeleton"
import { courseSectionStyles } from "./courseSectionStyles"

export interface CourseSectionProps {
    sectionTitle: string
    cardGap: number
}

const COURSE_ERROR_MESSAGE = "Something went wrong while fetching the courses."
const COUNTRY_ERROR_MESSAGE = "Courses are still available, but price information could not be loaded."

export default function CourseSection({ sectionTitle, cardGap }: CourseSectionProps) {
    const [courses, setCourses] = useState<Course[]>([])
    const [coursesLoading, setCoursesLoading] = useState(true)
    const [coursesError, setCoursesError] = useState(false)
    const [countryCode, setCountryCode] = useState<CountryCode | null>(null)
    const [countryLoading, setCountryLoading] = useState(true)
    const [countryError, setCountryError] = useState(false)

    const loadCourses = useCallback(async (signal?: AbortSignal) => {
        setCoursesLoading(true)
        setCoursesError(false)
        try {
            setCourses(await fetchCourses(signal))
        } catch (error: unknown) {
            if (error instanceof DOMException && error.name === "AbortError") return
            setCoursesError(true)
        } finally {
            if (!signal?.aborted) setCoursesLoading(false)
        }
    }, [])

    const loadCountry = useCallback(async (signal?: AbortSignal) => {
        setCountryLoading(true)
        setCountryError(false)
        try {
            setCountryCode(await fetchCountry(signal))
        } catch (error: unknown) {
            if (error instanceof DOMException && error.name === "AbortError") return
            setCountryCode(null)
            setCountryError(true)
        } finally {
            if (!signal?.aborted) setCountryLoading(false)
        }
    }, [])

    useEffect(() => {
        const controller = new AbortController()

        void loadCourses(controller.signal)

        return () => controller.abort()
    }, [loadCourses])

    useEffect(() => {
        const controller = new AbortController()

        void loadCountry(controller.signal)

        return () => controller.abort()
    }, [loadCountry])

    const sectionStyle = {
        "--skillpath-course-gap": `${Math.max(0, cardGap)}px`,
    } as CSSProperties

    return (
        <section id="courses" className="skillpath-course-section" style={sectionStyle} aria-label={sectionTitle}>
            <style>{courseSectionStyles}</style>
            <header>
                <p className="skillpath-course-eyebrow">Skillpath</p>
                <h2 className="skillpath-course-heading">{sectionTitle}</h2>
                <p className="skillpath-course-intro">
                    Learn practical skills through focused courses built for real-world application.
                </p>
            </header>

            {coursesLoading && <CourseSkeleton />}
            {!coursesLoading && coursesError && (
                <CourseError
                    title="Unable to load courses"
                    message={COURSE_ERROR_MESSAGE}
                    retryLabel="Retry courses"
                    onRetry={() => void loadCourses()}
                />
            )}
            {!coursesLoading && !coursesError && courses.length === 0 && <CourseEmpty />}
            {!coursesLoading && !coursesError && courses.length > 0 && (
                <>
                    <CourseGrid courses={courses} countryCode={countryLoading ? null : countryCode} />
                    {countryError && (
                        <div className="skillpath-course-country-error">
                            <CourseError
                                title="Price unavailable"
                                message={COUNTRY_ERROR_MESSAGE}
                                retryLabel="Retry prices"
                                onRetry={() => void loadCountry()}
                            />
                        </div>
                    )}
                </>
            )}
        </section>
    )
}

CourseSection.defaultProps = {
    sectionTitle: "Explore Courses",
    cardGap: 20,
}

addPropertyControls(CourseSection, {
    sectionTitle: {
        type: ControlType.String,
        title: "Section Title",
        defaultValue: "Explore Courses",
    },
    cardGap: {
        type: ControlType.Number,
        title: "Card Gap",
        defaultValue: 20,
        min: 0,
        max: 80,
        step: 1,
    },
})
