import {
  BadgeCheck,
  BrainCircuit,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Database,
  Headphones,
  Link2,
  Mail,
  Network,
  Store,
  ServerCog,
  ShieldCheck,
  TerminalSquare,
  Zap,
} from "lucide-react";

export const profile = {
  name: "Mohamed Aziz Kocht",
  role: "Customer Solution Representative | IT Support Specialist | Networking & Software Projects",
  email: "kochtaziz8@gmail.com",
  phone: "+216 58 785 649",
  location: "Bizerte, Tunisia",
  github: "https://github.com/kochtaziz",
  linkedin: "https://www.linkedin.com/in/mohamed-aziz-kocht-14650b411/",
  resumePath: "/resume.pdf",
  image: "/media/profile/aziz.png",
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Certifications", href: "/certifications" },
  { label: "Skills", href: "/skills" },
  { label: "Experience", href: "/experience" },
  { label: "Resume", href: "/resume" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const featuredProjects = [
  {
    slug: "ai-investment-research-platform",
    title: "AI Investment Research Platform",
    description:
      "A research workspace concept for screening market signals, summarizing filings, and organizing investment theses.",
    status: "Product concept",
    icon: BrainCircuit,
    tags: ["AI", "Research", "TypeScript"],
    image: "/media/projects/investment-architecture.png",
    screenshots: [
      "/media/projects/investment-architecture.png",
      "/media/projects/investment-signal.jpeg",
      "/media/projects/investment-simulation.jpeg",
      "/media/projects/investment-risks.jpeg",
      "/media/projects/investment-feedback.jpeg",
      "/media/projects/investment-desktop-1.png",
      "/media/projects/investment-desktop-2.png",
      "/media/projects/investment-desktop-3.png",
      "/media/projects/investment-chart.png",
      "/media/projects/investment-help.png",
    ],
    problem:
      "Investment research often lives across scattered tabs, notes, filings, and watchlists.",
    solution:
      "A single workspace concept that turns market inputs into organized research workflows and thesis records.",
    features: ["Signal dashboards", "Research summaries", "Thesis tracking"],
    architecture:
      "Next.js interface, typed content model, future AI and market-data service layer.",
    githubUrl: "https://github.com/kochtaziz/ai-trading-bots",
  },
  {
    slug: "smart-electricity-outage-notification-platform",
    title: "Smart Electricity Outage Notification Platform",
    description:
      "A notification system concept for outage reporting, location-aware alerts, and operational status updates.",
    status: "Architecture draft",
    icon: Zap,
    tags: ["Notifications", "Cloud", "Reliability"],
    image: "/media/projects/steg-admin-console.png",
    screenshots: [
      "/media/projects/steg-admin-live.png",
      "/media/projects/steg-admin-console.png",
      "/media/projects/steg-admin-form.png",
      "/media/projects/steg-resident-alerts.jpeg",
      "/media/projects/steg-resident-location.jpeg",
    ],
    problem:
      "Customers need fast, trustworthy updates when electricity outages happen.",
    solution:
      "A location-aware alert platform with status updates, subscriber management, and operational visibility.",
    features: ["Outage alerts", "Area subscriptions", "Status history"],
    architecture:
      "Event-driven notification service with future SMS, email, and admin integrations.",
    githubUrl: "https://github.com/kochtaziz/electricity-cut-alerts-mvp",
  },
  {
    slug: "smart-bus-passenger-analytics-system",
    title: "Smart Bus Passenger Analytics System",
    description:
      "A private freelance ESP32 IoT system for bus-door passenger counting, GPS context, local-server storage, and route revenue analysis.",
    status: "Private freelance build",
    icon: Network,
    tags: ["ESP32", "IoT", "GPS", "Sensors", "Local Server"],
    image: "/media/projects/smart-bus-passenger-counter-2.jpeg",
    screenshots: [
      "/media/projects/smart-bus-passenger-counter-2.jpeg",
      "/media/projects/smart-bus-passenger-counter-1.jpeg",
      "/media/projects/smart-bus-passenger-counter-display.jpeg",
      "/media/projects/smart-bus-passenger-counter-assembly.jpeg",
    ],
    problem:
      "Bus operators need reliable passenger entry and exit data tied to time and location so they can compare route activity with fuel usage and estimate operational gains or losses.",
    solution:
      "I built a private ESP32-based IoT prototype using two mounted sensor boxes near the bus door. The system combines laser, GPS, and sound-sensor inputs, shows online/offline status on a small display, and sends event data to a local server for storage and later analysis.",
    features: [
      "Door-mounted passenger entry and exit detection",
      "GPS location context for each activity window",
      "Laser sensor input for crossing detection",
      "Sound sensor input for additional event context",
      "Local display for online/offline status",
      "Local-server data storage",
      "Analytics concept for fuel usage and possible gain/loss prediction",
      "Private-client implementation with public portfolio credit",
    ],
    architecture:
      "Two ESP32-powered sensor boxes sit near the bus door and collect door activity signals. The embedded layer filters sensor readings into passenger events, attaches timestamp and GPS context, updates the local status display, and sends records to a local server where the data can be stored and used by future reporting and prediction workflows.",
    lessonsLearned:
      "This project strengthened practical IoT system design across embedded wiring, sensor placement, enclosure constraints, local networking, data capture, and the importance of protecting client-owned implementation details while still documenting professional contribution.",
    futureImprovements:
      "Future improvements can include calibrated two-direction counting logic, cleaner production enclosures, offline buffering, dashboard visualizations, fuel-consumption model refinement, alerting for disconnected devices, and a secure admin interface.",
    sourceCodeNote: "Private client code",
    docsUrl: "/projects/smart-bus-passenger-analytics/README.md",
  },
  {
    slug: "enterprise-it-infrastructure-lab",
    title: "Enterprise IT Infrastructure Lab",
    description:
      "A hands-on lab for networking, systems administration, monitoring, and secure enterprise infrastructure practice.",
    status: "In progress",
    icon: ServerCog,
    tags: ["Networking", "Linux", "Security"],
    image: "/media/project-infrastructure.png",
    screenshots: ["/media/project-infrastructure.png"],
    problem:
      "Real IT confidence requires hands-on practice with systems, networks, and troubleshooting.",
    solution:
      "A lab environment for documenting infrastructure experiments, diagrams, incidents, and lessons learned.",
    features: ["Network diagrams", "Server notes", "Monitoring practice"],
    architecture:
      "Modular lab documentation with future diagrams, scripts, and observability snapshots.",
    githubUrl: "https://github.com/kochtaziz/Enterprise-IT-Infrastructure-Lab",
  },
];

export const projectBacklog = [
  {
    slug: "onepark-reservation-system",
    title: "OnePark Reservation System",
    description:
      "A web-based parking reservation system that lets users register a vehicle, reserve a parking spot, and generate a costed reservation ticket.",
    status: "Completed web prototype",
    icon: BriefcaseBusiness,
    tags: ["HTML", "CSS", "JavaScript", "Reservations"],
    image: "/media/projects/onepark-registration.png",
    screenshots: [
      "/media/projects/onepark-registration.png",
      "/media/projects/onepark-reservation.png",
      "/media/projects/onepark-validation.png",
    ],
    problem:
      "Parking reservation workflows need clear vehicle registration, location selection, and cost calculation so users can understand what they booked before arriving.",
    solution:
      "OnePark implements a simple browser-based reservation flow using HTML, CSS, and vanilla JavaScript. The user enters vehicle details, chooses an available parking location, selects reservation timing, and receives a generated ticket with calculated cost.",
    features: [
      "Vehicle registration with validation",
      "Parking spot reservation by location",
      "Reservation ticket generation",
      "Cost calculation based on duration and place",
      "Multi-page web flow for registration, reservation, and validation",
    ],
    architecture:
      "The project is organized as a static front-end application with separate HTML pages for registration, reservation, and validation. JavaScript handles form validation and reservation logic, while CSS keeps the interface consistent across the workflow.",
    lessonsLearned:
      "This project strengthened practical front-end fundamentals: form validation, multi-page navigation, state handoff between screens, and translating a real-world service workflow into a usable interface.",
    futureImprovements:
      "Future improvements can add persistent storage, user accounts, an admin dashboard for parking availability, online payment simulation, responsive visual polish, and a live deployment.",
    githubUrl: "https://github.com/kochtaziz/OnePark-Reservation-System",
  },
  {
    slug: "arduino-rc-car",
    title: "Arduino RC Car",
    description:
      "A Bluetooth-controlled RC car rebuilt around an ESP32, Dabble mobile controls, an L298N motor driver, and a reused RC chassis.",
    status: "Completed prototype",
    icon: Zap,
    tags: ["ESP32", "Bluetooth", "L298N", "PWM", "Hardware"],
    image: "/media/projects/rc-car-photo.jpeg",
    screenshots: [
      "/media/projects/rc-car-photo.jpeg",
      "/media/projects/rc-car-documentation-1.png",
      "/media/projects/rc-car-documentation-2.png",
      "/media/projects/rc-car-documentation-3.png",
      "/media/projects/rc-car-documentation-4.png",
    ],
    problem:
      "The project started from an old RC car body that needed a new control system. The challenge was to reuse the existing wheels and structure while adding reliable Bluetooth control, motor direction handling, speed control, and safe stopping behavior.",
    solution:
      "The car was rebuilt with an ESP32 microcontroller connected to the Dabble mobile app over Bluetooth. An L298N motor driver controls two DC motors: one motor handles forward and backward movement, while the second handles steering. The software maps GamePad buttons to movement commands and uses PWM speed limits to keep the car controllable.",
    features: [
      "Bluetooth GamePad control through Dabble",
      "Forward and backward drive commands",
      "Left and right steering commands",
      "Emergency stop mapped to Triangle",
      "PWM speed limiting for safer motor control",
      "Reused RC chassis, wheels, and mechanical structure",
    ],
    architecture:
      "The ESP32 runs the Arduino control sketch and communicates with the Dabble app under the Bluetooth name MyBluetoothCar. The L298N driver receives ENA on GPIO 22, IN1 on GPIO 16, IN2 on GPIO 17, ENB on GPIO 23, IN3 on GPIO 18, and IN4 on GPIO 19. ESP32 GND and L298N GND are connected together, and the motor supply is powered from a 7V battery through the L298N +12V input.",
    lessonsLearned:
      "This build strengthened practical debugging skills across embedded wiring, motor driver behavior, Bluetooth control, and Arduino ESP32 compatibility. A major lesson was that older PWM code caused issues, so the project moved to ESP32 core 2.0.17 to use LEDC functions reliably.",
    futureImprovements:
      "Future work can add cleaner cable management, a rechargeable power module, smoother steering calibration, speed profiles, battery monitoring, and a documented wiring diagram that is easier to reproduce.",
    githubUrl: "https://github.com/kochtaziz/rc-car",
  },
  {
    slug: "wireless-packet-monitor",
    title: "Wireless Packet Monitor",
    description:
      "An nRF24L01 transmitter sketch that sends repeated RF packets to test wireless throughput, signal behavior, and packet-loss conditions.",
    status: "Completed hardware test",
    icon: Network,
    tags: ["C++", "Arduino", "nRF24L01", "RF Testing"],
    image: "/media/project-wireless-monitor.png",
    screenshots: ["/media/project-wireless-monitor.png"],
    problem:
      "Wireless module experiments need a predictable traffic source so receiver behavior, throughput, and packet-loss handling can be tested under repeatable conditions.",
    solution:
      "The transmitter sketch sends a constant stream of test packets over the nRF24L01 module. It is configured to match the receiver settings, including address JUNK1, channel 100, and 2MBPS data rate.",
    features: [
      "Constant RF packet transmission",
      "100 packets sent per loop",
      "20-character test payload",
      "Matching address, channel, and data-rate configuration",
      "Designed for receiver throughput testing",
    ],
    architecture:
      "The sketch runs on an Arduino-compatible board connected to an nRF24L01 module. It uses RF24 radio settings shared with the receiver so both devices communicate on the same address and channel.",
    lessonsLearned:
      "This project made radio configuration details more concrete: transmitter and receiver settings must match exactly, and repeatable payloads are useful for debugging live wireless behavior.",
    futureImprovements:
      "Future work can add serial controls for changing channel and data rate, packet counters on the transmitter side, configurable payload sizes, and clearer wiring documentation.",
    githubUrl:
      "https://github.com/kochtaziz/Wireless-Packet-Spam-Monitor-using-nRF24L01",
  },
  {
    slug: "wireless-packet-receiver",
    title: "Wireless Packet Receiver",
    description:
      "An Arduino nRF24L01 receiver that measures incoming packets per second and prints live throughput data to the Serial Monitor.",
    status: "Completed hardware test",
    icon: Network,
    tags: ["C++", "Arduino", "nRF24L01", "Diagnostics"],
    image: "/media/project-wireless-receiver.png",
    screenshots: ["/media/project-wireless-receiver.png"],
    problem:
      "When testing two RF modules, it is difficult to understand signal quality without a receiver that reports packet activity in real time.",
    solution:
      "The receiver listens for incoming nRF24L01 packets and counts how many arrive each second. The result is printed live in the Serial Monitor, making it useful for signal-strength testing, communication debugging, and throughput experiments.",
    features: [
      "Receives 2.4GHz wireless data",
      "Displays packets per second",
      "Works with a matching transmitter",
      "Optional payload printing for debugging",
      "Non-blocking millis-based timing",
      "Documented Arduino Uno wiring",
    ],
    architecture:
      "The Arduino reads from an nRF24L01+ module through SPI wiring. The receiver uses CE pin 9, CSN pin 10, SCK pin 13, MOSI pin 11, MISO pin 12, 3.3V power, and shared GND. RF24 settings must match the transmitter: channel 100, low power amplifier level, 2MBPS data rate, and address JUNK1.",
    lessonsLearned:
      "This build reinforced how sensitive RF modules are to correct wiring, stable 3.3V power, matching radio settings, and timing that does not block measurement.",
    futureImprovements:
      "Future improvements can add an OLED display, CSV logging, signal-quality charts, channel scanning, and side-by-side comparison with transmitter packet counts.",
    githubUrl:
      "https://github.com/kochtaziz/nRF24L01-Wireless-Packet-Receiver-with-Live-Throughput-Monitor",
  },
];

export const projects = [...featuredProjects, ...projectBacklog];

export const additionalProjects = [
  {
    title: "RFID Attendance and Pointing System",
    period: "Jan 2026 - May 2026",
    description:
      "Employee attendance prototype using MicroPython, RFID, and an LCD display to register pointing events.",
    tags: ["MicroPython", "RFID", "LCD"],
  },
  {
    title: "ESP32 WiFi Communication and Security Experiments",
    period: "2025 - Present",
    description:
      "Isolated lab experiments for ESP32 WiFi communication, device behavior, and security-oriented networking practice.",
    tags: ["ESP32", "WiFi", "Security Lab"],
  },
  {
    title: "Ubuntu-Based Game with Arduino Controller",
    period: "2024 - 2025",
    description:
      "C-based Ubuntu game paired with a custom Arduino controller and Python connectivity experiments.",
    tags: ["C", "Arduino", "Python"],
  },
  {
    title: "Wireless Robot Arm",
    period: "2023 - 2024",
    description:
      "Arduino and RF communication project focused on wireless control of a robotic arm.",
    tags: ["Arduino", "RF", "Robotics"],
  },
  {
    title: "Frontend Practice Collection",
    period: "2021 - Present",
    description:
      "Collection of HTML, CSS, JavaScript, Flexbox, image-resizing, and educational web-page exercises.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
];

export const certifications = [
  {
    issuer: "IBM",
    name: "Customer Engagement Fundamentals",
    date: "Issued Jul 2026",
    credentialId: "6781373c-e136-48f0-85a6-9cc8ebe7701d",
    skills: ["Customer Support", "Troubleshooting", "Customer Communication"],
    image: "/media/certifications/customer-engagement-fundamentals.png",
    credentialUrl: "/certificates/ibm-design.pdf",
    description:
      "Customer engagement credential focused on customer support, troubleshooting, and service communication fundamentals.",
  },
  {
    issuer: "Cisco",
    name: "Apply AI: Analyze Customer Reviews",
    date: "Issued Jul 2026",
    credentialId: "eeeb2a40-9938-4baa-8d63-a796a076ef6d",
    skills: ["Thematic Analysis", "Tabular Data"],
    image: "/media/certifications/apply-ai-analyze-customer-reviews.png",
    credentialUrl: "/certificates/apply-ai-analyze-customer-reviews.pdf",
    description:
      "Applied AI credential for analyzing customer reviews, identifying themes, and working with structured customer feedback.",
  },
  {
    issuer: "IBM",
    name: "Information Technology Fundamentals",
    date: "Issued Jul 2026",
    credentialId: "104d3035-98e6-4f32-b895-fe31054fb1d3",
    skills: ["Technical Support", "Support Basics", "IT Fundamentals"],
    image: "/media/certifications/information-technology-fundamentals.jpg",
    credentialUrl: "/certificates/ibm-certif.pdf",
    description:
      "Earned the IBM SkillsBuild Information Technology Fundamentals credential, covering core IT concepts including computer hardware, operating systems, networking fundamentals, troubleshooting, and essential technical support skills.",
  },
  {
    issuer: "Cisco Networking Academy",
    name: "Networking Basics",
    date: "Issued Jul 2026",
    credentialId: "191dc6d2-dbf2-4e12-b5d8-19a9075b715f",
    skills: ["Computer Networking"],
    image: "/media/certifications/networking-basics.png",
    credentialUrl: "/certificates/networking-basics.pdf",
    description:
      "Successfully completed Cisco Networking Academy's Networking Basics course, covering network communication, IPv4/IPv6 addressing, routing, switching, Ethernet, wireless networking, DNS, DHCP, NAT, and network troubleshooting.",
  },
  {
    issuer: "EF SET",
    name: "English Certificate - C2 Proficient",
    date: "Issued Jul 2026",
    skills: [
      "Customer Communication",
      "Communication",
      "English",
      "Professional Writing",
    ],
    image: "/media/certifications/ef-set-c2.png",
    credentialUrl: "/certificates/ef-set-c2.pdf",
    description:
      "Achieved a C2 Proficient level in English, demonstrating advanced proficiency in reading, listening, speaking, and writing according to the CEFR framework.",
  },
  {
    issuer: "OMEGA Ecole de Formation Professionnele",
    name: "FORMATEUR EN ROBOTIQUE",
    date: "Issued Jun 2023",
    skills: [
      "Electronics",
      "Computer Hardware",
      "Arduino",
      "Robotics",
      "Training",
      "Embedded Systems",
    ],
    image: "/media/certifications/formateur-robotique.png",
    credentialUrl: "/certificates/formateur-robotique.pdf",
    description:
      "Robotics trainer certification covering electronics, hardware, Arduino-based robotics, and practical training delivery.",
  },
  {
    issuer: "Semrush Academy Certificate",
    name: "SEO Essentials with Semrush",
    date: "Issued Jul 2025 - Expired Jul 2026",
    credentialId: "608026",
    skills: [
      "On-Page Optimization",
      "E-commerce SEO",
      "Keyword Research",
      "Technical SEO",
    ],
    image: "/media/certifications/semrush-academy.png",
    credentialUrl: "/certificates/semrush-academy.pdf",
    description:
      "Covered the basics of using Semrush for SEO and AI optimization, including keyword research, technical SEO, content optimization, backlink identification, and an intro to AI visibility.",
  },
  {
    issuer: "Cisco Networking Academy program",
    name: "IT Customer Support Basics",
    date: "Issued Jul 2025",
    credentialId: "58154373-051f-4438-b04e-7f10746da7a4/public_url",
    skills: [
      "Technical Support",
      "IT Service Management",
      "Troubleshooting",
      "Help Desk Support",
    ],
    image: "/media/certifications/cisco-it-badge.png",
    credentialUrl: "/certificates/cisco-it-badge.pdf",
    description:
      "Developed help desk and customer support skills for entry-level IT support positions, including managing and troubleshooting IT environments.",
  },
  {
    issuer: "Education",
    name: "Baccalaureat Diploma - Computer Science Track",
    date: "Bizerte, Tunisia",
    skills: ["Computer science", "Algorithms", "Foundations"],
    image: "",
    credentialUrl: "#",
    private: true,
    description:
      "Diploma verified for portfolio context. The document image and credential file are kept private.",
  },
  {
    issuer: "Event Participation",
    name: "Algorithm Event Participation",
    date: "Participated",
    skills: ["Algorithms", "Problem Solving", "Programming Practice"],
    image: "/media/certifications/certificat-algo.png",
    credentialUrl: "/certificates/certificat-algo.pdf",
    description:
      "Participation document for an algorithm-focused event. Listed separately from formal professional certifications.",
  },
];

export const skillGroups = [
  {
    name: "Programming",
    icon: Code2,
    skills: ["Python", "JavaScript", "TypeScript", "C", "C++", "HTML/CSS"],
  },
  {
    name: "Networking",
    icon: Network,
    skills: ["TCP/IP", "Routing", "Packet analysis", "RF/nRF24L01", "WiFi labs"],
  },
  {
    name: "Operating Systems",
    icon: TerminalSquare,
    skills: ["Linux", "Windows 10", "CLI workflows", "System configuration"],
  },
  {
    name: "IT Support",
    icon: Headphones,
    skills: [
      "Troubleshooting",
      "Help desk support",
      "Computer hardware",
      "Peripheral devices",
      "User support",
    ],
  },
  {
    name: "Databases",
    icon: Database,
    skills: ["SQL", "Data modeling", "Reporting", "Sales tracking"],
  },
  {
    name: "Cloud",
    icon: Cloud,
    skills: ["Deployments", "Monitoring", "Scalability", "Microsoft Azure basics"],
  },
];

export const timeline = [
  {
    title: "Freelance Creative and Tech Support Specialist",
    date: "Sep 2019 - Present",
    description:
      "Resolved hardware, software, printer, laptop, and network-service issues while building automation scripts and maintaining trusted customer relationships.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Store Manager, Night Shift - Oly Drugstore",
    date: "Sep 2025 - May 2026",
    description:
      "Operated the facility independently, supported customer service, handled operational issues, and troubleshot store hardware and software problems.",
    icon: Store,
  },
  {
    title: "Founder - Online Swimwear Shop",
    date: "Feb 2019 - May 2023",
    description:
      "Managed e-commerce operations and maintained a web-based database workflow for sales tracking, inventory, orders, and business controls.",
    icon: Database,
  },
  {
    title: "Junior IT Support Technician - PC-MANIA",
    date: "May 2020 - Sep 2020",
    description:
      "Repaired computers, printers, and peripheral devices while supporting Windows, Linux, and network-connectivity troubleshooting.",
    icon: Headphones,
  },
  {
    title: "Building a professional technical portfolio",
    date: "Now",
    description:
      "Creating a central place for projects, certifications, writing, and professional proof of work.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Deepening IT and networking foundations",
    date: "Current learning",
    description:
      "Practicing systems, networking, cloud deployment, and security-oriented infrastructure thinking.",
    icon: ShieldCheck,
  },
  {
    title: "Expanding software product skills",
    date: "Next",
    description:
      "Turning project ideas into polished, documented, deployable applications with clear business value.",
    icon: BadgeCheck,
  },
];

export const contactLinks = [
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
  { label: "GitHub", href: profile.github, icon: Code2 },
  { label: "LinkedIn", href: profile.linkedin, icon: Link2 },
];

export const metrics = [
  { label: "Project tracks", value: "8+" },
  { label: "Skill domains", value: "6" },
  { label: "Career hub", value: "1" },
];

export const radarItems = [
  "Project case studies",
  "Certifications",
  "Resume",
  "Technical writing",
  "Freelance proof",
  "Career timeline",
  "GitHub activity",
  "Contact flow",
  "Future dashboard",
  "Search-ready content",
  "Admin-ready data",
  "Analytics-ready events",
  "API-ready structure",
  "Vercel-ready app",
  "Accessible UI",
  "Dark mode",
];

export const socialPreviewHighlights = [
  "Modern SaaS-style personal portfolio",
  "Projects, certifications, skills, resume, blog, and contact",
  "Built with Next.js, TypeScript, Tailwind CSS, shadcn-style UI, Lucide, and Framer Motion",
];
