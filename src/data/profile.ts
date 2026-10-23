export const profile = {
	name: 'Suraj Kumar',
	title: 'Energy Systems Engineer | Electrical Design, BESS & Workflow Automation',
	location: 'Barcelona, Spain · Bengaluru, India',
	email: 'career26@surajkumar.in',
	summary:
		'I design solar PV, battery storage and microgrid systems and carry them through to delivery: sizing and costing, tenders, procurement and commissioning on site. Four years of experience from India and Spain, mostly on off-grid and commercial projects across Africa and India. Along the way, I turn repetitive engineering work into software tools.',
	focusAreas: [
		'Solar PV, battery storage and hybrid microgrid design, from sizing to commissioning',
		'International EPC tenders for UN agencies and development donors',
		'Project delivery: procurement, multi-origin shipping and remote installation support',
		'Engineering software and automation with Python, QGIS and AutoCAD',
	],
	highlights: [
		{ value: '4+ yrs', label: 'Solar PV, BESS and microgrid engineering' },
		{ value: '20+', label: 'International EPC tenders as technical lead or co-lead' },
		{ value: '50+', label: 'PV systems designed, residential to C&I, up to 250 kWp' },
	],
	experience: [
		{
			role: 'Engineer, International EPC',
			company: 'Azimut 360 SCCL',
			period: 'Sep 2025 – Present',
			location: 'Barcelona',
		},
		{
			role: "Technical Intern, incl. master's thesis",
			company: 'Azimut 360 SCCL',
			period: 'May 2024 – Sep 2025',
			location: 'Barcelona',
		},
		{
			role: 'Technical Executive (joined as intern, promoted within two months)',
			company: 'EcoSoch Solar',
			period: 'Mar 2022 – Sep 2023',
			location: 'Bengaluru',
		},
	],
	workIntro: 'Project work in The Gambia, Nigeria, Mauritania, Burundi, Liberia, Uganda and India.',
	work: [
		{
			title: 'Tenders for UN agencies',
			body: 'Technical lead on 6 major international EPC tenders and co-lead on 15 more, plus commercial offers for private clients. The work spans remote off-grid minigrids with diesel backup and multi-site PV + BESS programmes: system design, bill of quantities, commercial strategy and sourcing from China and Europe.',
		},
		{
			title: 'Turnkey solar, storage and EV charging',
			body: 'Won a turnkey tender from an international development agency for a solar carport with battery storage and EV charging. Now running it as project manager and sole designer, through procurement and shipping from several countries.',
		},
		{
			title: 'Field engineering and commissioning',
			body: 'Control and protection fixes built to hold up on site: battery state-of-charge based load control over Modbus TCP, a relay scheme that stops genset back-feed on a zero-export system without extra cabling, and industrial isolation for a long serial link that kept failing in the rain. Bench-tested before shipping, then commissioned with remote support and a written commissioning manual.',
		},
		{
			title: 'Engineering software',
			body: 'A minigrid feasibility web application covering NPV, IRR, payback, LCOE and DSCR, with tariff, loan and subsidy modelling. A drawing generator that turns spreadsheet inputs into AutoCAD drawings in under a minute instead of 15+. Monitoring tools that pull inverter and battery data over APIs for faster diagnostics. I use AI as a tool to build tools, and the engineering checks stay with me.',
		},
		{
			title: 'AI for engineering documents',
			body: "Wrote the architecture and business case for an internal AI assistant that searches and answers from a company's engineering documents.",
		},
		{
			title: 'Design at volume in India',
			body: 'Designed 50+ residential to C&I systems up to 250 kWp (hybrid, off-grid, on-grid and EV charging) and prepared 160+ proposals. Built a linked costing and BoM workbook that cut quotation time by about 70% and is still in daily use, and handled complex battery commissioning and O&M cases.',
		},
	],
	publication: {
		title:
			'Transformer Inrush Mitigation Using a Pre-Insertion Resistor in Hybrid PV BESS Genset Systems: A Field Case Study',
		meta: 'Co-author · Presented at IEEE IAS Annual Meeting 2026 · In press, not yet indexed in IEEE Xplore',
		summary:
			'In a hybrid PV + BESS + genset microgrid, transfer-switch events kept re-energising an isolation transformer, and the inrush tripped breakers and stalled the diesel genset. We co-designed a pre-insertion resistor sized with transient simulation (ATP) and switched by a PLC state machine. Built, tested and commissioned on site, it cut inrush current by up to ten times in field measurements.',
	},
	education: [
		{
			institution: 'Universitat Politècnica de Catalunya',
			degree: "Master's in Energy Engineering, Electrical Specialisation",
			note: "Master's thesis graded 10/10: a GIS and Python microgrid planning workflow.",
			period: 'Sep 2023 - Aug 2025',
		},
		{
			institution: 'Ramaiah Institute Of Technology',
			degree: 'Bachelor of Engineering, Electronics and Instrumentation',
			period: 'Aug 2017 - Aug 2021',
		},
	],
	skills: [
		'BESS design',
		'Electrical design',
		'Distributed solar systems',
		'AutoCAD',
		'QGIS',
		'Python',
		'PVsyst',
		'HOMER',
		'Tender development',
		'Workflow automation',
		'Geospatial analysis',
		'Supplier coordination',
		'Microgrid planning',
		'DC power systems',
		'EasyEDA',
		'Internet of Things',
		'Techno-economic modelling',
		'Procurement & logistics',
		'Commissioning',
		'Project management',
		'Modbus TCP',
		'PLC control logic',
		'Transient studies (ATP)',
		'SketchUp',
		'AI-assisted tooling',
	],
	languages: [
		{ name: 'English', level: 'Full Professional (IELTS 7.5)' },
		{ name: 'Hindi', level: 'Basic Professional' },
		{ name: 'Kannada', level: 'Native or Bilingual' },
		{ name: 'Spanish', level: 'Elementary' },
		{ name: 'Catalan', level: 'Elementary' },
	],
	links: [
		{
			label: 'Email',
			value: 'career26@surajkumar.in',
			href: 'mailto:career26@surajkumar.in',
			external: false,
		},
		{
			label: 'LinkedIn',
			value: 'linkedin.com/in/surajkumarofficial',
			href: 'https://www.linkedin.com/in/surajkumarofficial',
			external: true,
		},
		{
			label: 'GitHub',
			value: 'github.com/sxraj',
			href: 'https://github.com/sxraj',
			external: true,
		},
	],
} as const;
