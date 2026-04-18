import { profile } from './data/profile';

const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Person',
	name: profile.name,
	jobTitle: profile.title,
	description: profile.summary,
	email: profile.email,
	url: profile.links.find((link) => link.label === 'LinkedIn')?.href,
	address: {
		'@type': 'PostalAddress',
		addressLocality: 'Barcelona',
		addressRegion: 'Catalonia',
		addressCountry: 'Spain',
	},
	sameAs: profile.links.map((link) => link.href),
	knowsAbout: profile.skills,
	alumniOf: profile.education.map((item) => item.institution),
};

const withBase = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

function App() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>

			<main className="page-shell">
				<section className="hero panel">
					<div className="eyebrow">Resume portfolio</div>
					<div className="hero-grid">
						<div>
							<p className="hero-kicker">{profile.location}</p>
							<h1>{profile.name}</h1>
							<p className="hero-title">{profile.title}</p>
							<p className="hero-summary">{profile.summary}</p>

							<div className="hero-actions">
								<a className="button button-primary" href={withBase('resume-suraj-kumar.pdf')} download>
									Download resume
								</a>
								<a className="button button-secondary" href={`mailto:${profile.email}`}>
									Email me
								</a>
							</div>
						</div>

						<aside className="hero-aside">
							<figure className="project-photo">
								<picture>
									<source
										type="image/avif"
										srcSet={`${withBase('solar-rooftop-640.avif')} 640w, ${withBase('solar-rooftop-960.avif')} 960w`}
										sizes="(max-width: 980px) 100vw, 34vw"
									/>
									<source
										type="image/webp"
										srcSet={`${withBase('solar-rooftop-640.webp')} 640w, ${withBase('solar-rooftop-960.webp')} 960w`}
										sizes="(max-width: 980px) 100vw, 34vw"
									/>
									<img
										src={withBase('solar-rooftop-960.jpg')}
										alt="Rooftop solar installation project"
										width={960}
										height={640}
										decoding="async"
										loading="eager"
										fetchPriority="high"
									/>
								</picture>
								<figcaption>Rooftop solar deployment and site integration</figcaption>
							</figure>

							<div className="spotlight-card">
								<p className="spotlight-label">Current focus</p>
								<ul className="spotlight-list">
									{profile.focusAreas.map((item) => (
										<li key={item}>{item}</li>
									))}
								</ul>
							</div>
						</aside>
					</div>
				</section>

				<section className="metrics-grid">
					{profile.highlights.map((item) => (
						<article className="metric panel" key={item.label}>
							<p className="metric-value">{item.value}</p>
							<p className="metric-label">{item.label}</p>
						</article>
					))}
				</section>

				<section className="content-grid">
					<div className="main-column">
						<section className="panel">
							<div className="section-heading">
								<p className="eyebrow">Selected experience</p>
								<h2>Engineering work across renewables, BESS, and automation</h2>
							</div>

							<div className="timeline">
								{profile.experience.map((role) => (
									<article className="timeline-item" key={`${role.company}-${role.period}`}>
										<div className="timeline-meta">
											<p>{role.period}</p>
											<span>{role.location}</span>
										</div>
										<div className="timeline-content">
											<h3>{role.role}</h3>
											<p className="timeline-company">{role.company}</p>
											<ul>
												{role.bullets.map((bullet) => (
													<li key={bullet}>{bullet}</li>
												))}
											</ul>
										</div>
									</article>
								))}
							</div>
						</section>

						<section className="panel">
							<div className="section-heading">
								<p className="eyebrow">Strengths</p>
								<h2>Tools and capabilities I use to turn design into delivery</h2>
							</div>

							<div className="tag-group">
								{profile.skills.map((skill) => (
									<span className="tag" key={skill}>
										{skill}
									</span>
								))}
							</div>
						</section>
					</div>

					<div className="side-column">
						<section className="panel">
							<div className="section-heading">
								<p className="eyebrow">Education</p>
								<h2>Academic foundation</h2>
							</div>

							<div className="stack-list">
								{profile.education.map((item) => (
									<article key={item.institution}>
										<h3>{item.institution}</h3>
										<p>{item.degree}</p>
										<span>{item.period}</span>
									</article>
								))}
							</div>
						</section>

						<section className="panel">
							<div className="section-heading">
								<p className="eyebrow">Languages</p>
								<h2>Working across teams and regions</h2>
							</div>

							<div className="stack-list compact">
								{profile.languages.map((item) => (
									<article key={item.name}>
										<h3>{item.name}</h3>
										<p>{item.level}</p>
									</article>
								))}
							</div>
						</section>

						<section className="panel contact-panel">
							<div className="section-heading">
								<p className="eyebrow">Connect</p>
								<h2>Open to conversations around energy systems and product-minded engineering</h2>
							</div>

							<div className="contact-list">
								{profile.links.map((link) => (
									<a
										href={link.label === 'Resume PDF' ? withBase('resume-suraj-kumar.pdf') : link.href}
										key={link.label}
										target={link.external ? '_blank' : undefined}
										rel={link.external ? 'noreferrer' : undefined}
									>
										<span>{link.label}</span>
										<strong>{link.value}</strong>
									</a>
								))}
							</div>
						</section>
					</div>
				</section>
			</main>
		</>
	);
}

export default App;
