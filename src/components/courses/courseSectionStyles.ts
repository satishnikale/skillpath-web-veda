export const courseSectionStyles = `
@keyframes skillpath-course-shimmer {
    to { background-position: -200% 0; }
}

.skillpath-course-section {
    box-sizing: border-box;
    width: 100%;
    padding: clamp(48px, 7vw, 96px) clamp(20px, 5vw, 72px);
    color: #132c31;
    font-family: Inter, "Helvetica Neue", Arial, sans-serif;
    container-type: inline-size;
}

.skillpath-course-eyebrow {
    margin: 0 0 10px;
    color: #637577;
    font-size: 12px;
    font-weight: 750;
    letter-spacing: .1em;
    text-transform: uppercase;
}

.skillpath-course-heading {
    max-width: 650px;
    margin: 0;
    font-size: clamp(34px, 4vw, 52px);
    font-weight: 750;
    letter-spacing: -.045em;
    line-height: 1.05;
}

.skillpath-course-intro {
    max-width: 540px;
    margin: 16px 0 36px;
    color: #5c6d70;
    font-size: 16px;
    line-height: 1.55;
}

.skillpath-course-grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: var(--skillpath-course-gap, 20px);
}

.skillpath-course-card,
.skillpath-course-skeleton,
.skillpath-course-state,
.skillpath-course-error {
    box-sizing: border-box;
    border: 1px solid #d9e3df;
    border-radius: 20px;
    background: #f8faf8;
}

.skillpath-course-card {
    display: flex;
    min-width: 0;
    min-height: 270px;
    flex-direction: column;
    padding: 26px;
    box-shadow: 0 3px 0 rgba(19, 44, 49, .03);
    transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
}

.skillpath-course-card:hover {
    transform: translateY(-3px);
    border-color: #c8d7d1;
    box-shadow: 0 12px 24px rgba(19, 44, 49, .07);
}

.skillpath-course-category {
    margin: 0 0 18px;
    color: #25816f;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: .08em;
    text-transform: uppercase;
}

.skillpath-course-name {
    margin: 0 0 12px;
    color: #132c31;
    font-size: 24px;
    letter-spacing: -.03em;
    line-height: 1.15;
}

.skillpath-course-description {
    display: -webkit-box;
    overflow: hidden;
    margin: 0;
    color: #627276;
    font-size: 14px;
    line-height: 1.55;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}

.skillpath-course-card-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin-top: auto;
    padding-top: 22px;
    border-top: 1px solid #e0e8e4;
}

.skillpath-course-price {
    color: #132c31;
    font-size: 20px;
    font-weight: 800;
    letter-spacing: -.025em;
}

.skillpath-course-refund {
    flex-shrink: 0;
    padding: 6px 9px;
    border-radius: 999px;
    background: #e1f1e9;
    color: #23725e;
    font-size: 11px;
    font-weight: 800;
}

.skillpath-course-skeleton {
    min-height: 270px;
    border: 0;
    background: linear-gradient(110deg, #edf2ef 25%, #f8fbf9 40%, #edf2ef 55%);
    background-size: 200% 100%;
    animation: skillpath-course-shimmer 1.4s ease-in-out infinite;
}

.skillpath-course-state,
.skillpath-course-error {
    margin: 0;
    padding: 26px;
    color: #526569;
    font-size: 16px;
    line-height: 1.5;
}

.skillpath-course-error {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
    border-color: #efd3cb;
    background: #fff8f5;
    color: #793d30;
}

.skillpath-course-error h3,
.skillpath-course-error p { margin: 0; }
.skillpath-course-error p { margin-top: 4px; }

.skillpath-course-retry {
    border: 0;
    border-radius: 999px;
    padding: 10px 16px;
    background: #132c31;
    color: #fff;
    cursor: pointer;
    font: inherit;
    font-size: 14px;
    font-weight: 700;
}

.skillpath-course-retry:focus-visible {
    outline: 3px solid #83b8aa;
    outline-offset: 3px;
}

.skillpath-course-country-error { margin-top: 18px; }

@container (min-width: 620px) {
    .skillpath-course-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@container (min-width: 980px) {
    .skillpath-course-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}

@media (prefers-reduced-motion: reduce) {
    .skillpath-course-card, .skillpath-course-skeleton { transition: none; animation: none; }
}
`
