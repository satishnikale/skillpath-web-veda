import type { CountryCode, Course } from "../types/course"

export function formatPrice(course: Course, countryCode: CountryCode | null): string {
    if (countryCode === "IN" && Number.isFinite(course.pricePaise)) {
        return new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
        }).format((course.pricePaise ?? 0) / 100)
    }

    if (countryCode === "US" && Number.isFinite(course.priceUsdCents)) {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format((course.priceUsdCents ?? 0) / 100)
    }

    return "Price unavailable"
}
