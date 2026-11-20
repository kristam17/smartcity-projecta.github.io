// config.js (Students edit only this file)
window.SITE_CONFIG = {
  pageTitle: "Academic Digital Twin Case Study | Student Showcase",
  homeUrl: "https://roadwayvr.com",

  hero: {
    profileImage: "assets/img/image1.jpg",

    // NEW: course code tag shown above the course project pill
    courseTag: "SMRTTECH 4SC3",

    // updated tagline text (big pill)
    tagline: "Course Project: Smart Cities and Communities",

    studentName: "Krista McGhie",
    program: "Bachelor of Technology / Engineering",
    university: "McMaster University, Canada",
    email: "mcghiek@mcmaster.ca"
  },

  disclaimer: {
    short:
      "Academic project for a university course. Educational purposes only. Not an official city analysis, consultation, or endorsement.",
    long:
      "This website presents a student academic project created for coursework. Any analyses, results, and potential improvements are simulation-based and provided for educational purposes only. They do not represent official work, endorsement, or consultation for any city or agency.",
    videoOverlaySuggestion:
      "Academic Project · Educational Use Only · Not Official City Work"
  },

  theme: {
    heroBg: "#111111",
    heroText: "#ffffff",
    pageBg: "#f8fafc",
    accent: "#7c3aed"
  },

  dividers: {
    dividerBg: "#f9f9f9",
    dividerText: "#ffffff"
  },

  footer: {
	  footerBg: "#111111",
	  footerText: "#ffffff",
	  footerBorder: "#222222",
	
	  homeLinkText: "RoadwayVR",
	
	  templateCredit:
	    "This academic showcase template was developed by RoadwayVR.",
	
	  templateCreditLinkText:
	    "Learn more at RoadwayVR.com",
	
	  templateCreditUrl:
	    "https://roadwayvr.com"
  },

  intro: {
    projectTitleLabel: "Project Title",
    projectTitle: "Development of the Urban Traffic Intersection Using SUMO Traffic Simulation",
    heroVideo: "assets/video/video.mp4",
    heroVideoPoster: "",
    heroVideoAlt: "Autoplay preview video (academic project)",
    videoCaption:
      "Autoplay preview (≈20 seconds): Traffic Simulation → Results"
  },

  caseStudy: {
    title: "Introduction",

    backgroundTitle: "Background",
    backgroundBullets: [
		    "Traffic congestion is a major challenge in urban transportation.",
		    "Intersections play an important role in traffic flow and delays.",
		    "SUMO allows traffic conditions to be simulated and analyzed.",
		    "Traffic signal optimization can improve intersection efficiency."
    ],

    problemTitle: "Problem Statement",
    problemBullets: [
		    "Traffic congestion causes delays at busy intersections.",
		    "Inefficient signal timing can increase vehicle queues.",
		    "Traffic performance varies under different vehicle conditions.",
		    "Evaluating signal changes in real traffic is challenging."
    ],

    objectivesTitle: "Project Objectives",
    objectivesBullets: [
		    "Model Finch Avenue East and Tapscott Road using SUMO.",
		    "Compare baseline traffic with autonomous vehicle scenarios.",
		    "Evaluate traffic signal timing changes from 27 s to 18 s.",
		    "Analyze traffic performance using delays, queues, and travel times."
    ]
  },

  overview: {
    title: "Methodology",
    steps: [
      {
        title: "Step 1: Road Network Development (SUMO)",
				text: "Create the Finch Avenue East and Tapscott Road intersection using SUMO NetEdit.",
        image: "assets/img/image2.jpg"
      },
      {
				title: "Step 2: Traffic Simulation Setup",
				text: "Define vehicle routes, traffic flows, and signal timings for the baseline scenario.",
        image: "assets/img/image3.jpg"
      },
      {
				title: "Step 3: Scenario Development",
				text: "Simulate baseline traffic, autonomous vehicles, and an optimized 18-second signal timing.",
        image: "assets/img/image4.jpg"
      },
      {
				title: "Step 4: Performance Evaluation",
				text:  "Compare traffic scenarios using vehicle delays, queue lengths, and travel times.",
        image: "assets/img/image5.jpg"
      }
    ]
  },

  implementation: {
    title: "Methodology Steps (Demo Modules)",
    modules: [
      {
        title: "Module 1: Train Scheduling & Signaling (SUMO)",
        bullets: [
				  { text: "Build a simulated rail network in SUMO with train routing and maximum operating speed." },
          { text: "Design fixed-block rail signals and define station stops along the corridor." },
          { text: "Configure timetable, scheduled departures, running time, dwell time, and headway." }
        ],
        image: "assets/img/image2.jpg"
      },
      {
        title: "Module 2: Digital Twin Assets Developement (Blender)",
        bullets: [
          { text: "Generative AI: use Meshy.ai tool to develop different assets." },
          { text: "From generative AI to belnder." },
          { text: "Preprocessing assets in Blender ." }
        ],
        image: "assets/img/image3.jpg"
      },
      {
        title: "Module 3: Immersive VR Visualization (Unity)",
        bullets: [
				  { text: "Develop a 3D railway environment including stations, buildings, trees, and rolling stock." },
          { text: "Configure visualization fundamentals: lighting, camera position, time of day, and scene composition." },
          { text: "Produce a VR 360-degree video output for immersive presentation and portfolio use." }
        ],
        image: "assets/img/image4.jpg"
      },
      {
        title: "Module 4: Results & Communication",
        bullets: [
          { text: "Dashboard or plot set: KPI cards, bar charts, and/or time series." },
          { text: "Scenario story: what changed, what improved, and what tradeoffs appeared." },
          { text: "Limitations + next steps: what data would strengthen confidence." }
        ],
        image: "assets/img/image5.jpg"
      }
    ]
  },

	results: {
			title: "Results & Potential Improvements",
			subtitle:
				"Train schedule simulation outputs across two scenarios showing arrivals, departures, and dwell time across four stations. Results are for educational purposes only.",

			charts: {
				left: {
					title: "Scenario 1 — Train Schedule: Arrivals, Departures & Dwell Time",
					src: "assets/img/image6.jpg",
					alt: "Scenario 1 train schedule chart showing arrivals and departures across S1 to S4"
				},
				right: {
					title: "Scenario 2 — Train Schedule: Arrivals, Departures & Dwell Time",
					src: "assets/img/image7.jpg",
					alt: "Scenario 2 train schedule chart showing arrivals and departures across S1 to S4"
				}
			},

			discussionTitle: "Discussion",
			discussionBullets: [
				"Scenario 1 provides a stable baseline timetable with consistent station dwell and smooth train progression.",
				"Scenario 2 applies a delay at S2, which then propagates to downstream stations.",
				"Delay effects grow across frequency levels, with major increases in arrival and departure times at S3 and S4.",
				"S1 is only slightly affected, while downstream stations absorb most of the disruption.",
				"This demonstrates the importance of recovery time, dwell management, and operational control in rail scheduling."
			]
		},

  team: {
    title: "Team & Acknowledgments",
    subtitle:
      "This section clarifies academic context, roles, tools, and sources. Clear attribution improves credibility and shows ethical data handling.",

    members: [
      { name: "Your Name", role: "Rail Scheduling & Signaling + Digital Twin I, Immersive VR Visualization + Results & Communication" }
    ],

    acknowledgments: [
      "Workshop: Railway Engineering",
      "Institution: RoadwayVR University",
      "Instructor: Ahmad Mohammadi",
      "Tools: SUMO, Blender, Unity, Python"
    ],

    repoLabel: "Project Repository",
    repoUrl: "https://github.com/USERNAME/REPO"
  }
};
