export function Header() {
    return (
        <header className="skillpath-header">
            <div className="skillpath-header-inner">
                <a href="/" className="skillpath-brand" aria-label="Skillpath home">
                    <span className="skillpath-brand-mark" aria-hidden="true">S</span>
                    <span>Skillpath</span>
                </a>

                <nav className="skillpath-header-nav" aria-label="Primary navigation">
                    <a href="#courses">Courses</a>
                </nav>
            </div>
        </header>
    )
}

export default Header
