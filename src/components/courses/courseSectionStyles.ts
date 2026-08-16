export const courseSectionStyles = `
@keyframes skillpath-course-shimmer {
    to {
        background-position: -200% 0;
    }
}

.skillpath-course-section {
    box-sizing: border-box;
    width: 100%;
    padding: clamp(18px, 4vw, 48px) 0 0;
    color: #172033;
    font-family: Inter, "Helvetica Neue", Arial, sans-serif;
    container-type: inline-size;
}

.skillpath-course-header {
    margin-bottom: 24px;
}

.skillpath-course-eyebrow,
.skillpath-section-eyebrow {
    margin: 0 0 12px;
    color: #5d6671;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
}

.skillpath-course-heading {
    max-width: 760px;
    margin: 0;
    color: #172033;
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 700;
    letter-spacing: -0.06em;
    line-height: 1.02;
}

.skillpath-course-intro {
    max-width: 760px;
    margin: 18px 0 32px;
    color: #5f6873;
    font-size: 1.04rem;
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
    border: 1px solid #e7e9e7;
    border-radius: 18px;
    background: #ffffff;
}

.skillpath-course-card {
    display: flex;
    min-width: 0;
    flex-direction: column;
    padding: 22px 20px 18px;
    transition: border-color 180ms ease, transform 180ms ease;
}

.skillpath-course-card:hover {
    border-color: #dfe4e3;
    transform: translateY(-1px);
}

.skillpath-course-category {
    margin: 0 0 16px;
    color: #5d6671;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
}

.skillpath-course-name {
    min-width: 0;
    margin: 0 0 12px;
    color: #172033;
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.28;
    letter-spacing: -0.04em;
    overflow-wrap: anywhere;
}

.skillpath-course-description {
    min-width: 0;
    display: -webkit-box;
    overflow: hidden;
    margin: 0;
    color: #5f6873;
    font-size: 0.96rem;
    line-height: 1.6;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow-wrap: anywhere;
}

.skillpath-course-card-footer {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-top: auto;
    padding-top: 18px;
    border-top: 1px solid #ebeeed;
}

.skillpath-course-price {
    min-width: 0;
    color: #172033;
    font-size: 1.15rem;
    font-weight: 700;
    letter-spacing: -0.03em;
    overflow-wrap: anywhere;
}

.skillpath-course-refund {
    flex-shrink: 0;
    color: #61707c;
    font-size: 12px;
    font-weight: 500;
}

.skillpath-course-skeleton {
    min-height: 220px;
    border: 1px solid #e7e9e7;
    background: linear-gradient(110deg, #f3f4f5 25%, #fbfbfb 40%, #f3f4f5 55%);
    background-size: 200% 100%;
    animation: skillpath-course-shimmer 1.4s ease-in-out infinite;
}

.skillpath-course-state,
.skillpath-course-error {
    margin: 0;
    padding: 20px 22px;
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
