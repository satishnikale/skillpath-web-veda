export default function Footer() {
    return (
        <footer className="skillpath-footer">
            <div className="skillpath-footer-inner">
                <div className="skillpath-footer-brand" aria-label="Skillpath brand">
                    <span className="skillpath-brand-mark" aria-hidden="true">S</span>
                    <span>Skillpath</span>
                </div>

                <p className="skillpath-footer-copy">Practical learning for ambitious builders.</p>

                <nav className="skillpath-footer-nav" aria-label="Footer navigation">
                    <a href="#courses">Courses</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </nav>
            </div>

            <p className="skillpath-footer-legal">© 2026 Skillpath. All rights reserved.</p>
        </footer>
    )
}