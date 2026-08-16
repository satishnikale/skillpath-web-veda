export default function Footer() {
    return (
        <footer className="skillpath-footer">
            <div className="skillpath-footer-inner">
                <div className="skillpath-footer-brand" aria-label="Skillpath brand">
                    <span className="skillpath-brand-mark" aria-hidden="true">S</span>
                    <span>Skillpath</span>
                </div>

                <p className="skillpath-footer-copy">
                    Learn practical skills that help you build, ship, and grow with confidence.
                </p>

                <nav className="skillpath-footer-nav" aria-label="Footer navigation">
                    <a href="#courses">Courses</a>
                </nav>
            </div>

            <p className="skillpath-footer-legal">© 2026 Skillpath</p>
        </footer>
    )
}