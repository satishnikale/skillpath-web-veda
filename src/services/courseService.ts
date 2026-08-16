import type { CountryCode, CountryResponse, Course } from "../types/course"

const API_BASE_URL = "https://syncsphere-hiv6.onrender.com/assignment"

function isRecord(value: unknown): value is Record<string, unknown> {
    return typeof value === "object" && value !== null
}

function isCourse(value: unknown): value is Course {
    return isRecord(value)
}

function isCountryResponse(value: unknown): value is CountryResponse {
    return isRecord(value)
}

export async function fetchCourses(signal?: AbortSignal): Promise<Course[]> {
    const response = await fetch(`${API_BASE_URL}/course-data`, { signal })
    if (!response.ok) throw new Error("Course request failed")

    const data: unknown = await response.json()
    if (!Array.isArray(data) || !data.every(isCourse)) {
        throw new Error("Course response was malformed")
    }

    return data
}

export async function fetchCountry(signal?: AbortSignal): Promise<CountryCode> {
    const response = await fetch(`${API_BASE_URL}/country-code`, { signal })
    if (!response.ok) throw new Error("Country request failed")

    const data: unknown = await response.json()
    if (!isCountryResponse(data)) throw new Error("Country response was malformed")

    if (data.country_code === "IN" || data.country_code === "US") {
        return data.country_code
    }

    throw new Error("Country response was malformed")
}
