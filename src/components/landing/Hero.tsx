import { ArrowRightIcon } from "lucide-react";

export default function Hero() {
    return (
        <section className="skillpath-hero" aria-labelledby="skillpath-hero-title">
            <p className="skillpath-section-eyebrow">LEARN. BUILD. GROW.</p>

            <h1 id="skillpath-hero-title" className="skillpath-hero-title">
                Build skills that move
                <br />
                your career forward.
            </h1>

            <p className="skillpath-hero-description">
                Practical courses designed to help you learn faster,
                build real projects, and grow with confidence.
            </p>

            <a href="#courses" className="skillpath-hero-link">
                Explore Courses
                <ArrowRightIcon size={18} />
            </a>
        </section>
    )
}