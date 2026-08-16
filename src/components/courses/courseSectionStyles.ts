export const courseSectionStyles = `
@keyframes skillpath-course-shimmer {
    to { background-position: -200% 0; }
}

.skillpath-course-section {
    box-sizing: border-box;
    width: 100%;
    padding: clamp(56px, 8vw, 112px) 0 0;
    color: #111827;
    font-family: Inter, "Helvetica Neue", Arial, sans-serif;
    container-type: inline-size;
}

.skillpath-course-header {
    margin-bottom: 24px;
}

.skillpath-course-eyebrow,
.skillpath-section-eyebrow {
    margin: 0 0 12px;
    color: #5e676d;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.11em;
    text-transform: uppercase;
}

.skillpath-course-heading {
    max-width: 720px;
    margin: 0;
    color: #111827;
    font-size: clamp(2.1rem, 4vw, 3.5rem);
    font-weight: 800;
    letter-spacing: -0.06em;
    line-height: 1.05;
}

.skillpath-course-intro {
    max-width: 620px;
    margin: 18px 0 0;
    color: #5f6970;
    font-size: 1rem;
    line-height: 1.6;
}

.skillpath-course-grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    column-gap: var(--skillpath-course-gap, 20px);
    row-gap: var(--skillpath-course-gap, 20px);
    width: 100%;
    min-width: 0;
}

.skillpath-course-card,
.skillpath-course-skeleton,
.skillpath-course-state,
.skillpath-course-error {
    box-sizing: border-box;
    border: 1px solid #e5e8e7;
    border-radius: 18px;
    background: #ffffff;
}

.skillpath-course-card {
    display: flex;
    min-width: 0;
    min-height: 260px;
    flex-direction: column;
    padding: 28px 24px 24px;
    transition: border-color 180ms ease, transform 180ms ease, box-shadow 180ms ease;
}

.skillpath-course-card:hover {
    border-color: #d9dfde;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(10, 21, 27, 0.04);
}

.skillpath-course-category {
    margin: 0 0 18px;
    color: #5f6970;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
}

.skillpath-course-name {
    min-width: 0;
    margin: 0 0 12px;
    color: #111827;
    font-size: clamp(1.15rem, 2vw, 1.5rem);
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: -0.04em;
    overflow-wrap: anywhere;
}

.skillpath-course-description {
    min-width: 0;
    display: -webkit-box;
    overflow: hidden;
    margin: 0;
    color: #606d72;
    font-size: 0.96rem;
    line-height: 1.58;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow-wrap: anywhere;
}

.skillpath-course-card-footer {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-top: auto;
    padding-top: 28px;
    border-top: 1px solid #ecefef;
}

.skillpath-course-price {
    min-width: 0;
    color: #111827;
    font-size: clamp(1.15rem, 2vw, 1.55rem);
    font-weight: 800;
    letter-spacing: -0.04em;
    overflow-wrap: anywhere;
}

.skillpath-course-refund {
    flex-shrink: 0;
    color: #5e676d;
    font-size: 12px;
    font-weight: 600;
}

.skillpath-course-skeleton {
    min-height: 260px;
    border: 1px solid #e5e8e7;
    background: linear-gradient(110deg, #f3f4f5 25%, #fbfbfb 40%, #f3f4f5 55%);
    background-size: 200% 100%;
    animation: skillpath-course-shimmer 1.4s ease-in-out infinite;
}

.skillpath-course-state,
.skillpath-course-error {
    margin: 0;
    padding: 24px;
    color: #4a5860;
    font-size: 1rem;
    line-height: 1.6;
}

.skillpath-course-error {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
    border-color: #e9d7d4;
    background: #fff9f8;
    color: #6a3d38;
}

.skillpath-course-error h3,
.skillpath-course-error p {
    margin: 0;
}

.skillpath-course-error p {
    margin-top: 4px;
}

.skillpath-course-retry {
    border: 0;
    border-radius: 999px;
    padding: 10px 16px;
    background: #101828;
    color: #ffffff;
    cursor: pointer;
    font: inherit;
    font-size: 0.9rem;
    font-weight: 700;
}

.skillpath-course-retry:focus-visible {
    outline: 3px solid #9bc5d7;
    outline-offset: 3px;
}

.skillpath-course-country-error {
    margin-top: 18px;
}

@container (min-width: 620px) {
    .skillpath-course-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@container (min-width: 980px) {
    .skillpath-course-grid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
}

@media (prefers-reduced-motion: reduce) {
    .skillpath-course-card,
    .skillpath-course-skeleton {
        transition: none;
        animation: none;
    }
}
`;
