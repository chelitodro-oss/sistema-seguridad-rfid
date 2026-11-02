
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700;800&display=swap');

:root {
    --bg: #060a14;
    --panel: #0e1728;
    --panel2: #121f35;
    --blue: #168cff;
    --cyan: #00e5ff;
    --white: #f4f8ff;
    --muted: #a6b5ca;
    --border: rgba(0, 229, 255, .18);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

body {
    background: var(--bg);
    color: var(--white);
    font-family: 'Inter', sans-serif;
    line-height: 1.7;
    overflow-x: hidden;
}

a {
    text-decoration: none;
    color: inherit;
}

/* NAVEGACIÓN */

.navbar {
    position: sticky;
    top: 0;
    z-index: 1000;
    min-height: 75px;
    padding: 15px 7%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(6, 10, 20, .92);
    backdrop-filter: blur(18px);
    border-bottom: 1px solid var(--border);
}

.logo {
    font-family: 'Orbitron', sans-serif;
    font-weight: 800;
    font-size: 1.25rem;
    letter-spacing: 1px;
}

.logo span {
    color: var(--cyan);
}

.nav-links {
    display: flex;
    align-items: center;
    gap: 25px;
    list-style: none;
}

.nav-links a {
    color: var(--muted);
    font-size: .82rem;
    font-weight: 600;
    transition: .3s;
}

.nav-links a:hover {
    color: var(--cyan);
}

.menu-toggle {
    display: none;
    background: transparent;
    color: var(--cyan);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 7px 12px;
    font-size: 1.4rem;
    cursor: pointer;
}

/* PORTADA */

.hero {
    min-height: 650px;
    padding: 100px 10%;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
    background:
        radial-gradient(ellipse at 75% 45%, rgba(0, 119, 255, .22), transparent 45%),
        linear-gradient(130deg, #080e1d, #101f39 65%, #071020);
    border-bottom: 1px solid var(--border);
}

.hero::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
        linear-gradient(rgba(0, 229, 255, .045) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 229, 255, .045) 1px, transparent 1px);
    background-size: 45px 45px;
    mask-image: linear-gradient(to right, black, transparent);
}

.hero-content {
    max-width: 750px;
    position: relative;
    z-index: 2;
    animation: appear 1s ease;
}

.eyebrow {
    display: inline-block;
    color: var(--cyan);
    font-size: .75rem;
    font-weight: 800;
    letter-spacing: 3px;
    margin-bottom: 18px;
}

.hero h1 {
    font-family: 'Orbitron', sans-serif;
    font-size: clamp(2.5rem, 6vw, 5rem);
    line-height: 1.15;
    letter-spacing: 2px;
}

.hero h1 span {
    color: var(--cyan);
    text-shadow: 0 0 30px rgba(0, 229, 255, .3);
}

.hero-content > p {
    max-width: 600px;
    margin: 25px 0 35px;
    color: var(--muted);
    font-size: 1.08rem;
}

.hero-decoration {
    position: absolute;
    right: 8%;
    top: 50%;
    transform: translateY(-50%);
    font-family: 'Orbitron', sans-serif;
    font-size: clamp(5rem, 15vw, 13rem);
    font-weight: 800;
    color: rgba(0, 229, 255, .045);
    pointer-events: none;
}

.btn-primary,
.btn-secondary {
    display: inline-block;
    border: 1px solid var(--blue);
    padding: 13px 25px;
    border-radius: 7px;
    font-weight: 700;
    font-size: .9rem;
    cursor: pointer;
    transition: .3s;
}

.btn-primary {
    color: white;
    background: linear-gradient(110deg, #0875ed, #00a9ff);
    box-shadow: 0 0 25px rgba(0, 140, 255, .2);
}

.btn-primary:hover {
    transform: translateY(-4px);
    box-shadow: 0 0 30px rgba(0, 140, 255, .45);
}

.btn-secondary {
    color: var(--cyan);
    background: transparent;
}

.btn-secondary:hover {
    background: rgba(0, 229, 255, .1);
    transform: translateY(-4px);
}

/* SECCIONES */

main {
    width: min(1150px, 90%);
    margin: auto;
}

.section {
    padding: 85px 0;
    scroll-margin-top: 80px;
    border-bottom: 1px solid rgba(255, 255, 255, .06);
}

.section-heading {
    margin-bottom: 35px;
}

.section-heading h2 {
    font-family: 'Orbitron', sans-serif;
    font-size: clamp(1.6rem, 4vw, 2.5rem);
    margin-bottom: 15px;
}

.section-heading > p,
.section > p {
    color: var(--muted);
    max-width: 850px;
    margin-bottom: 18px;
}

.subheading {
    font-family: 'Orbitron', sans-serif;
    margin: 35px 0 20px;
    color: var(--white);
}

/* TARJETAS */

.info-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 35px;
}

.info-card,
.phase-card,
.team-card {
    padding: 27px;
    border: 1px solid var(--border);
    background: linear-gradient(145deg, var(--panel2), var(--panel));
    border-radius: 13px;
    transition: .35s;
}

.info-card:hover,
.phase-card:hover,
.team-card:hover {
    transform: translateY(-7px);
    border-color: var(--cyan);
    box-shadow: 0 12px 35px rgba(0, 140, 255, .12);
}

.info-card h3,
.phase-card h3 {
    margin: 12px 0;
    font-size: 1.1rem;
}

.info-card p,
.phase-card p {
    color: var(--muted);
    font-size: .92rem;
}

.card-number {
    color: var(--cyan);
    font-family: 'Orbitron', sans-serif;
    font-size: .8rem;
    font-weight: 800;
}

.objective-card {
    background: linear-gradient(120deg, #10294b, #0d192c);
    border: 1px solid rgba(0, 140, 255, .4);
    border-left: 4px solid var(--cyan);
    border-radius: 10px;
    padding: 30px;
    margin: 25px 0;
}

.objective-card h3 {
    color: var(--cyan);
    margin-bottom: 10px;
}

.objective-card p {
    color: var(--muted);
}

.objective-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
}

/* FASES */

.timeline {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}

.phase-card > span {
    display: inline-block;
    color: var(--cyan);
    font-family: 'Orbitron', sans-serif;
    font-size: .75rem;
    letter-spacing: 2px;
    margin-bottom: 10px;
}

.phase-card:last-child {
    grid-column: 1 / -1;
}

/* SIMULADOR */

.simulator {
    padding: 40px 25px;
    background: radial-gradient(circle at top, #16345b, #0b1425 65%);
    border: 1px solid rgba(0, 229, 255, .3);
    border-radius: 17px;
    text-align: center;
}

.scanner-icon {
    font-size: 4rem;
    color: var(--cyan);
    text-shadow: 0 0 25px var(--blue);
    margin-bottom: 10px;
}

.scanner h3 {
    font-family: 'Orbitron', sans-serif;
    letter-spacing: 3px;
}

.scanner p {
    color: var(--muted);
    margin: 10px 0 25px;
}

.simulator-controls {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
}

.simulator-result {
    margin-top: 30px;
    padding: 20px;
    background: rgba(0, 0, 0, .25);
    border: 1px solid var(--border);
    border-radius: 10px;
}

.simulator-result span {
    color: var(--cyan);
    font-family: 'Orbitron', sans-serif;
    font-size: .8rem;
    font-weight: 700;
}

.simulator-result p {
    margin-top: 8px;
    color: var(--muted);
}

/* EQUIPO */

.team-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
}

.team-card span {
    color: var(--cyan);
    font-family: 'Orbitron', sans-serif;
    font-size: .75rem;
}

.team-card h3 {
    font-size: .95rem;
    margin-top: 12px;
}

.teacher {
    margin-top: 25px;
    padding: 25px;
    border: 1px solid var(--border);
    background: var(--panel);
    border-radius: 12px;
}

.teacher span {
    color: var(--cyan);
    font-size: .75rem;
    letter-spacing: 2px;
    font-weight: 800;
}

.teacher h3 {
    margin-top: 8px;
}

/* GALERÍA */

.gallery-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.gallery-grid figure {
    overflow: hidden;
    border: 1px solid var(--border);
    background: var(--panel);
    border-radius: 12px;
}

.gallery-grid img {
    width: 100%;
    height: 230px;
    object-fit: cover;
    display: block;
    transition: transform .5s;
}

.gallery-grid figure:hover img {
    transform: scale(1.06);
}

.gallery-grid figcaption {
    padding: 15px;
    color: var(--muted);
    font-size: .85rem;
}

/* PIE DE PÁGINA */

footer {
    text-align: center;
    padding: 50px 20px;
    background: #080e1b;
    border-top: 1px solid var(--border);
}

footer p {
    color: var(--muted);
    margin-top: 12px;
    font-size: .85rem;
}

.footer-small {
    font-size: .75rem;
}

/* ANIMACIÓN */

@keyframes appear {
    from {
        opacity: 0;
        transform: translateY(25px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* RESPONSIVE */

@media (max-width: 900px) {
    .nav-links {
        gap: 12px;
    }

    .nav-links a {
        font-size: .72rem;
    }

    .info-grid,
    .team-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .hero-decoration {
        right: 0;
    }
}

@media (max-width: 650px) {
    .navbar {
        padding: 14px 5%;
    }

    .menu-toggle {
        display: block;
    }

    .nav-links {
        display: none;
        position: absolute;
        top: 74px;
        left: 0;
        width: 100%;
        padding: 20px;
        flex-direction: column;
        align-items: flex-start;
        background: #0b1425;
        border-bottom: 1px solid var(--border);
    }

    .nav-links.active {
        display: flex;
    }

    .nav-links a {
        font-size: .9rem;
    }

    .hero {
        min-height: 520px;
        padding: 75px 7%;
    }

    .hero-decoration {
        top: 75%;
        font-size: 6rem;
    }

    .info-grid,
    .objective-list,
    .timeline,
    .team-grid,
    .gallery-grid {
        grid-template-columns: 1fr;
    }

    .phase-card:last-child {
        grid-column: auto;
    }

    .section {
        padding: 60px 0;
    }

    .simulator-controls {
        flex-direction: column;
    }

    .simulator-controls button {
        width: 100%;
    }
}

@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        scroll-behavior: auto !important;
        animation-duration: .01ms !important;
        transition-duration: .01ms !important;
    }
}
