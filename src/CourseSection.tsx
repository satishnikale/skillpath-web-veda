import { addPropertyControls, ControlType } from "framer"
import { useCallback, useEffect, useState } from "react"

const API_BASE_URL = "https://syncsphere-hiv6.onrender.com/assignment"

export interface Course {
    courseName?: string
    courseCode?: string
    description?: string
    mainCategory?: string
    shortCourse?: string
    courseType?: string
    pricePaise?: number
    priceUsdCents?: number
    mangoId?: string
    refundable?: boolean
}

type CountryCode = "IN" | "US"

interface CountryResponse {
    country_code?: string
}

export interface CourseSectionProps {
    sectionTitle: string
    cardGap: number
}

const styles = {
    section: {
        width: "100%",
        padding: "clamp(48px, 7vw, 96px) clamp(20px, 5vw, 72px)",
        boxSizing: "border-box" as const,
        containerType: "inline-size" as const,
        color: "#132c31",
        fontFamily: 'Inter, "Helvetica Neue", Arial, sans-serif',
    },
    eyebrow: {
        margin: "0 0 10px",
        color: "#637577",
        fontSize: 13,
        fontWeight: 700,
        letterSpacing: "0.1em",
        textTransform: "uppercase" as const,
    },
    title: {
        margin: 0,
        fontSize: "clamp(32px, 4vw, 52px)",
        lineHeight: 1.05,
        letterSpacing: "-0.045em",
    },
    intro: {
        maxWidth: 540,
        margin: "16px 0 36px",
        color: "#5c6d70",
        fontSize: 16,
        lineHeight: 1.55,
    },
    card: {
        minWidth: 0,
        minHeight: 262,
        display: "flex",
        flexDirection: "column" as const,
        padding: 26,
        border: "1px solid #d9e3df",
        borderRadius: 20,
        background: "#f7faf8",
        boxSizing: "border-box" as const,
        boxShadow: "0 3px 0 rgba(19, 44, 49, 0.03)",
    },
    category: {
        margin: "0 0 18px",
        color: "#25816f",
        fontSize: 12,
        fontWeight: 800,
        letterSpacing: "0.08em",
        textTransform: "uppercase" as const,
    },
    courseTitle: {
        margin: "0 0 12px",
        fontSize: 24,
        lineHeight: 1.15,
        letterSpacing: "-0.03em",
    },
    description: {
        display: "-webkit-box",
        margin: 0,
        overflow: "hidden",
        color: "#627276",
        fontSize: 14,
        lineHeight: 1.55,
        WebkitBoxOrient: "vertical" as const,
        WebkitLineClamp: 2,
    },
    footer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        marginTop: "auto",
        paddingTop: 26,
    },
    price: {
        fontSize: 20,
        fontWeight: 800,
        letterSpacing: "-0.025em",
    },
    badge: {
        flexShrink: 0,
        padding: "6px 9px",
        borderRadius: 999,
        background: "#e1f1e9",
        color: "#23725e",
        fontSize: 11,
        fontWeight: 800,
    },
    notice: {
        padding: 26,
        border: "1px solid #d9e3df",
        borderRadius: 20,
        background: "#f7faf8",
        color: "#526569",
        fontSize: 16,
    },
    error: {
        display: "flex",
        flexWrap: "wrap" as const,
        alignItems: "center",
        gap: 16,
        padding: 26,
        border: "1px solid #efd3cb",
        borderRadius: 20,
        background: "#fff8f5",
        color: "#793d30",
        fontSize: 16,
    },
    button: {
        padding: "10px 16px",
        border: "none",
        borderRadius: 999,
        background: "#132c31",
        color: "#ffffff",
        cursor: "pointer",
        font: "inherit",
        fontSize: 14,
        fontWeight: 700,
    },
    skeleton: {
        height: 262,
        borderRadius: 20,
        background:
            "linear-gradient(110deg, #edf2ef 25%, #f8fbf9 40%, #edf2ef 55%)",
        backgroundSize: "200% 100%",
        animation: "courseSectionShimmer 1.4s ease-in-out infinite",
    },
}

function getErrorMessage(response: Response): string {
    return response.status === 404
        ? "The course service is unavailable right now."
        : "We couldn't load courses right now. Please try again."
}

async function fetchCourses(signal?: AbortSignal): Promise<Course[]> {
    const response = await fetch(`${API_BASE_URL}/course-data`, { signal })
    if (!response.ok) throw new Error(getErrorMessage(response))

    const data: unknown = await response.json()
    if (!Array.isArray(data)) throw new Error("We couldn't load courses right now. Please try again.")
    return data.filter((item): item is Course => typeof item === "object" && item !== null)
}

async function fetchCountry(signal?: AbortSignal): Promise<CountryCode> {
    const response = await fetch(`${API_BASE_URL}/country-code`, { signal })
    if (!response.ok) throw new Error("Price information is unavailable.")

    const data: unknown = await response.json()
    const countryCode = isCountryResponse(data) ? data.country_code : undefined
    if (countryCode !== "IN" && countryCode !== "US") {
        throw new Error("Price information is unavailable.")
    }
    return countryCode
}

function isCountryResponse(value: unknown): value is CountryResponse {
    return typeof value === "object" && value !== null
}

function formatPrice(course: Course, countryCode: CountryCode | null): string {
    if (countryCode === "IN" && typeof course.pricePaise === "number") {
        return new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
        }).format(course.pricePaise / 100)
    }

    if (countryCode === "US" && typeof course.priceUsdCents === "number") {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(course.priceUsdCents / 100)
    }

    return "Price unavailable"
}

export default function CourseSection({
    sectionTitle,
    cardGap,
}: CourseSectionProps) {
    const [courses, setCourses] = useState<Course[]>([])
    const [coursesLoading, setCoursesLoading] = useState(true)
    const [coursesError, setCoursesError] = useState<string | null>(null)
    const [countryCode, setCountryCode] = useState<CountryCode | null>(null)
    const [countryLoading, setCountryLoading] = useState(true)
    const [countryError, setCountryError] = useState<string | null>(null)

    const loadCourses = useCallback(async (signal?: AbortSignal) => {
        setCoursesLoading(true)
        setCoursesError(null)
        try {
            setCourses(await fetchCourses(signal))
        } catch (error: unknown) {
            if (error instanceof DOMException && error.name === "AbortError") return
            setCoursesError("We couldn't load courses right now. Please try again.")
        } finally {
            if (!signal?.aborted) setCoursesLoading(false)
        }
    }, [])

    const loadCountry = useCallback(async (signal?: AbortSignal) => {
        setCountryLoading(true)
        setCountryError(null)
        try {
            setCountryCode(await fetchCountry(signal))
        } catch (error: unknown) {
            if (error instanceof DOMException && error.name === "AbortError") return
            setCountryCode(null)
            setCountryError("Price information is unavailable.")
        } finally {
            if (!signal?.aborted) setCountryLoading(false)
        }
    }, [])

    useEffect(() => {
        const controller = new AbortController()
        void fetchCourses(controller.signal)
            .then((nextCourses) => {
                if (!controller.signal.aborted) setCourses(nextCourses)
            })
            .catch(() => {
                if (!controller.signal.aborted) {
                    setCoursesError("We couldn't load courses right now. Please try again.")
                }
            })
            .finally(() => {
                if (!controller.signal.aborted) setCoursesLoading(false)
            })
        return () => controller.abort()
    }, [])

    useEffect(() => {
        const controller = new AbortController()
        void fetchCountry(controller.signal)
            .then((nextCountryCode) => {
                if (!controller.signal.aborted) setCountryCode(nextCountryCode)
            })
            .catch(() => {
                if (!controller.signal.aborted) {
                    setCountryError("Price information is unavailable.")
                }
            })
            .finally(() => {
                if (!controller.signal.aborted) setCountryLoading(false)
            })
        return () => controller.abort()
    }, [])

    const gridStyle = {
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: Math.max(0, cardGap),
    }

    return (
        <section style={styles.section} aria-label={sectionTitle}>
            <style>{`
                @keyframes courseSectionShimmer { to { background-position: -200% 0; } }
                @container (min-width: 620px) {
                    .skillpath-course-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
                }
                @container (min-width: 980px) {
                    .skillpath-course-grid { grid-template-columns: repeat(3, minmax(0, 1fr)) !important; }
                }
            `}</style>
            <p style={styles.eyebrow}>Skillpath</p>
            <h2 style={styles.title}>{sectionTitle}</h2>
            <p style={styles.intro}>
                Learn practical skills through focused courses built for real-world application.
            </p>

            {coursesLoading ? (
                <div className="skillpath-course-grid" style={gridStyle} aria-label="Loading courses" aria-busy="true">
                    {["one", "two", "three"].map((skeleton) => (
                        <div key={skeleton} style={styles.skeleton} />
                    ))}
                </div>
            ) : coursesError ? (
                <div style={styles.error} role="alert">
                    <span>{coursesError}</span>
                    <button type="button" style={styles.button} onClick={() => void loadCourses()}>
                        Retry
                    </button>
                </div>
            ) : courses.length === 0 ? (
                <div style={styles.notice}>No courses available right now.</div>
            ) : (
                <>
                    <div className="skillpath-course-grid" style={gridStyle}>
                        {courses.map((course) => {
                            const courseKey =
                                course.courseCode ??
                                course.mangoId ??
                                `${course.courseName ?? "untitled"}-${course.description ?? "course"}`
                            return (
                                <article key={courseKey} style={styles.card}>
                                    <p style={styles.category}>{course.mainCategory || "General"}</p>
                                    <h3 style={styles.courseTitle}>{course.courseName || "Untitled course"}</h3>
                                    <p style={styles.description}>
                                        {course.description || "Course details will be available soon."}
                                    </p>
                                    <div style={styles.footer}>
                                        <span style={styles.price}>
                                            {countryLoading || countryError
                                                ? "Price unavailable"
                                                : formatPrice(course, countryCode)}
                                        </span>
                                        {course.refundable === true && (
                                            <span style={styles.badge}>Refundable</span>
                                        )}
                                    </div>
                                </article>
                            )
                        })}
                    </div>
                    {countryError && (
                        <div style={{ ...styles.error, marginTop: 18 }} role="status">
                            <span>Price information is unavailable.</span>
                            <button type="button" style={styles.button} onClick={() => void loadCountry()}>
                                Retry prices
                            </button>
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
