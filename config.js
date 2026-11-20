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
	    heroBg: "#B91C1C",
	    heroText: "#FFFFFF",
	    pageBg: "#F8F8F8",
	    accent: "#EF4444"
	},
	dividers: {
	    dividerBg: "#991B1B",
	    dividerText: "#FFFFFF"
	},
	
	
  footer: {
    footerBg: "#111111",
    footerText: "#FFFFFF",
    footerBorder: "#B91C1C",

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
        title: "Module 1: Road Network Development (SUMO)",
        bullets: [
				  { text: "Model Finch Avenue East and Tapscott Road intersection in SUMO NetEdit." },
          { text: "Define road lanes, turning movements, and intersection connections." },
          { text: "Configure the road network and traffic signal control system." }
        ],
        image: "assets/img/image2.jpg"
      },
      {
        title: "Module 2: Traffic Simulation Setup",
        bullets: [
          { text: "Define vehicle routes, traffic demand, and turning movements." },
          { text: "Configure baseline traffic signals with a 27-second green phase." },
          { text: "Run the baseline simulation to evaluate existing traffic conditions." }
        ],
        image: "assets/img/image3.jpg"
      },
      {
        title: "Module 3: Traffic Scenario Development",
        bullets: [
				  { text: "Develop scenarios comparing conventional and autonomous vehicles." },
          { text: "Modify the traffic signal green phase from 27 to 18 seconds." },
          { text: "Run simulations to evaluate the effects of signal timing changes." }
        ],
        image: "assets/img/image4.jpg"
      },
      {
        title: "Module 4: Results & Performance Evaluation",
        bullets: [
          { text: "Compare baseline, autonomous vehicle, and modified signal scenarios." },
          { text: "Evaluate traffic performance using vehicle delays, queue lengths, and travel times." },
          { text: "Summarize results and identify potential improvements in intersection efficiency." }
        ],
        image: "assets/img/image5.jpg"
      }
    ]
  },

	results: {
			title: "Results & Potential Improvements",
			subtitle:
				 "SUMO traffic simulation results comparing baseline traffic, autonomous vehicles, and modified signal timing at Finch Avenue East and Tapscott Road.",

			charts: {
				left: {
					title: "Scenario 1 – Baseline Traffic Simulation",
					src: "assets/img/image6.jpg",
					alt: "Baseline traffic simulation results showing intersection performance."
				},
				right: {
					title: "Scenario 2 – Modified Traffic Signal Timing",
					src: "assets/img/image7.jpg",
					alt: "Traffic simulation results showing the effects of modified signal timing."
				}
			},

			discussionTitle: "Discussion",
			discussionBullets: [
				"The baseline scenario uses a 27-second green phase to evaluate existing traffic conditions.",
        		"The autonomous vehicle scenario produced results similar to the baseline.",
		        "Reducing the green phase from 27 to 18 seconds showed a small improvement in traffic performance.",
		        "The modified signal timing demonstrated the potential to improve intersection efficiency.",
		        "Further improvements could involve adjusting signal timing based on traffic demand and vehicle movement."
			]
		},

  team: {
    title: "Team & Acknowledgments",
    subtitle:
      "This section clarifies academic context, roles, tools, and sources. Clear attribution improves credibility and shows ethical data handling.",

    members: [
      { name: "Krista McGhie", role: "Traffic Simulation & Analysis" }
    ],

    acknowledgments: [
      "Workshop: Railway Engineering",
      "Institution: RoadwayVR University",
      "Instructor: Ahmad Mohammadi",
      "Tools: SUMO, Blender, Unity, Python"
    ],

    repoLabel: "Project Repository",
    repoUrl: "https://github.com/smartcity-projecta.github.io/"
  }
};
