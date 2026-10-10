const projects = [
  {
    title: "OWASP Juice Shop Penetration Testing",
    category: "Pen Testing",
    categoryBadge: "Web Penetration Testing • OWASP Top 10",
    summary: "A hands-on assessment focused on evaluating the security posture of a modern web application through structured probing, vulnerability identification, and remediation documentation.",
    problem: "To examine a web application for critical flaws including broken access control, injection vulnerabilities, and security misconfigurations that threaten confidentiality, integrity, or availability.",
    objective: "To systematically discover vulnerabilities using offensive security methodologies, validate exploit reachability in a controlled environment, and document actionable defensive recommendations.",
    contribution: "Executed systematic black-box and grey-box security assessments across authentication, authorization, and client-side validation logic. Identified high-risk flaws and authored structured remediation reports aligned with OWASP Top 10 standards.",
    technologies: ["OWASP Juice Shop", "Burp Suite", "Browser DevTools", "Web Security Testing", "Input Sanitization Analysis"],
    workflow: ["Reconnaissance & Scope Mapping", "Attack Surface Probing", "Vulnerability Exploitation & Verification", "Risk Severity Scoring", "Remediation Documentation"],
    features: [
      "Authentication and session bypass analysis",
      "Injection vulnerability validation across search and login inputs",
      "Broken object level authorization (BOLA) review",
      "Sensitive data exposure assessment in client-side storage",
      "Comprehensive vulnerability documentation with remediation guidelines"
    ],
    challenges: "Distinguishing valid exploitation vectors from benign client-side mockups while maintaining structured evidence logs without crashing application states.",
    learnings: "Deepened practical understanding of modern web application weaknesses, input sanitization principles, and the necessity of defense-in-depth architecture.",
    results: "Successfully identified and verified high-risk weaknesses in web application logic, delivering recruiter-ready security findings documentation.",
    improvements: "Incorporate automated dynamic testing (DAST) pipeline scripts to re-test identified endpoints continuously."
  },
  {
    title: "SQL Injection Analysis using DVWA",
    category: "Web Security",
    categoryBadge: "Application Security • Database Defense",
    summary: "A practical study focused on understanding how SQL injection can be tested, analyzed, and remediated across progressive security difficulty levels.",
    problem: "To evaluate how unsanitized user inputs allow unauthorized database queries, leading to data exfiltration, authentication bypass, or data tampering.",
    objective: "To analyze the underlying query mechanics of SQL injection vulnerabilities and evaluate defensive coding practices such as parameterized queries and prepared statements.",
    contribution: "Tested error-based, blind, and union-based SQL injection payloads across Low, Medium, and High security levels. Analyzed back-end source code to document exact remediation patterns.",
    technologies: ["DVWA (Damn Vulnerable Web App)", "MySQL", "PHP", "SQL Payload Crafting", "Secure Query Architecture"],
    workflow: ["Target Parameter Identification", "Heuristic Error Probing", "Payload Formulation & Execution", "Source Code Flaw Review", "Remediation via Prepared Statements"],
    features: [
      "Exploration of Union-based and Boolean-blind SQL injection attack paths",
      "Analysis of server error messages leaking database schema details",
      "Source code review contrasting vulnerable PHP queries with PDO prepared statements",
      "Impact assessment regarding confidentiality and unauthorized record extraction",
      "Defensive implementation blueprint for input sanitization and parameterized queries"
    ],
    challenges: "Analyzing blind SQL injection scenarios where database responses provide no direct error output, requiring timing and boolean true/false inferencing.",
    learnings: "Demonstrated that client-side sanitization is completely ineffective without back-end parameterization, highlighting secure query handling as an absolute requirement.",
    results: "Formulated a comprehensive technical reference for preventing database manipulation through secure query practices.",
    improvements: "Extend the analysis to NoSQL injection vectors and stored procedure auditing."
  },
  {
    title: "Network Vulnerability Assessment using OpenVAS",
    category: "Network Security",
    categoryBadge: "Network Security • Vulnerability Management",
    summary: "A network-focused security assessment designed to identify misconfigurations, outdated services, and unpatched vulnerabilities across network hosts.",
    problem: "To identify exposed network attack surfaces and vulnerable services before threat actors can exploit unpatched infrastructure weaknesses.",
    objective: "To execute structured automated network scans, interpret Common Vulnerabilities and Exposures (CVE) metrics, and formulate prioritized remediation roadmaps.",
    contribution: "Configured target scan scopes, managed OpenVAS feeds, executed credentialed and non-credentialed network audits, and parsed vulnerability severity tiers to isolate high-risk hosts.",
    technologies: ["OpenVAS / Greenbone Vulnerability Management", "Linux", "CVSS v3 Scoring", "CVE Database", "Network Auditing"],
    workflow: ["Network Asset Discovery", "Port & Service Enumeration", "Automated Vulnerability Probing", "CVSS Triage & False Positive Filtering", "Executive Remediation Roadmap"],
    features: [
      "Automated vulnerability detection across network daemons and operating system services",
      "CVSS v3 severity ranking to prioritize critical patch remediation",
      "Evaluation of SSL/TLS certificate validity and deprecated cipher suites",
      "Identification of default credentials and misconfigured daemon services",
      "Technical assessment reporting for system administrators and engineering teams"
    ],
    challenges: "Filtering scan noise and false positives generated by legacy banners to ensure remediation resources focus on reachable vulnerabilities.",
    learnings: "Solidified understanding of network defense lifecycles, patch management urgency, and the necessity of continuous vulnerability scanning.",
    results: "Delivered an actionable vulnerability assessment report highlighting high-priority host vulnerabilities and patch recommendations.",
    improvements: "Automate recurring scheduled scan jobs integrated with central alerting mechanisms."
  },
  {
    title: "Network Scanning & Traffic Analysis using Nmap and Wireshark",
    category: "Network Security",
    categoryBadge: "Network Reconnaissance • Packet Inspection",
    summary: "A practical networking investigation combining port discovery and deep packet-level inspection to analyze communication flows and protocol behaviors.",
    problem: "To evaluate network perimeter visibility, discover unauthorized active services, and detect anomalous packet patterns in transmission data.",
    objective: "To perform network reconnaissance and inspect transport-layer packet exchanges to verify protocol compliance and identify security exposures.",
    contribution: "Executed multi-vector Nmap scans (SYN stealth, service version detection, OS fingerprinting) and captured live packet traces in Wireshark to dissect TCP three-way handshakes and plain-text protocol risks.",
    technologies: ["Nmap", "Wireshark", "TCP/IP Protocol Suite", "Packet Analysis", "Firewall Probing"],
    workflow: ["Host Discovery (ARP/ICMP Ping)", "Port & Service Scanning", "Live Packet Capture", "Protocol & Stream Reconstruction", "Security Exposure Reporting"],
    features: [
      "Service and OS fingerprinting to determine exposed system versions",
      "TCP handshake packet dissection and connection state analysis",
      "Inspection of unencrypted protocols (HTTP, FTP, Telnet) demonstrating credential sniffing risks",
      "Analysis of firewall response behavior under stealth SYN scan conditions",
      "Documentation of hardening measures for unnecessary ports and services"
    ],
    challenges: "Accurately diagnosing packet drops, retransmissions, and firewall packet-filtering rules during non-standard TCP flag scans.",
    learnings: "Gained hands-on mastery over low-level packet structures, network reconnaissance techniques, and the importance of encrypting all network communications.",
    results: "Built a detailed reconnaissance and packet analysis portfolio piece demonstrating end-to-end network awareness.",
    improvements: "Explore custom Wireshark display filters and automated pcap analysis scripts in Python."
  },
  {
    title: "Smart Door Access System",
    category: "IoT",
    categoryBadge: "IoT Security • Embedded Access Control",
    summary: "A research-driven project centered on designing an automated, connected access system highlighting the intersection between IoT sensors and secure access management.",
    problem: "To address security vulnerabilities in physical access points by designing a connected verification system that prevents unauthorized physical entry.",
    objective: "To design and implement a concept-driven microcontroller access architecture incorporating multi-factor authentication concepts and real-time physical monitoring.",
    contribution: "Contributed to hardware circuit design, access verification logic, sensor integration, and documentation of security considerations for physical IoT deployments.",
    technologies: ["IoT Systems", "ESP32 / Microcontrollers", "RFID / Access Sensors", "Embedded C++", "Hardware Interfacing"],
    workflow: ["Hardware Circuit Modeling", "Sensor & Actuator Calibration", "Authentication Logic Implementation", "Tamper Detection & Status Feedback", "Research Documentation"],
    features: [
      "Hardware circuit integration uniting microcontrollers, sensors, and electronic locks",
      "Credential verification logic designed to restrict entry to authorized tags",
      "Fail-secure electronic actuator state management preventing unauthorized manual override",
      "System status feedback via visual indicators and audible confirmation",
      "Formal research publication highlighting IoT security design principles"
    ],
    challenges: "Ensuring power stability and fail-safe hardware behavior during edge cases such as sudden power loss or sensor signal noise.",
    learnings: "Understood the critical importance of physical-layer security, hardware tamper resistance, and reliable fail-secure default states.",
    results: "Co-authored research presentation and functional system demonstration exemplifying security-conscious IoT architecture.",
    improvements: "Implement encrypted wireless telemetry (MQTT over TLS) and mobile verification hooks."
  }
];

const featuredProjects = [
  {
    title: "ScanX — AI-Based Vulnerability Assessment System",
    category: "Web Security",
    categoryBadge: "Flagship Cybersecurity • Dual-AI Verification",
    summary: "An autonomous AI-assisted vulnerability assessment system designed to identify potential security weaknesses, validate threats through dual-AI consensus, and help users understand and prioritize findings.",
    github: "https://github.com/kavyasrinivas29/ScanX-AI-Vulnerability-Assessment",
    pdfReport: "assets/scanx-security-report-sample.pdf",
    problem: "Traditional vulnerability scanners suffer from high false positive rates, isolated domain alerts, and a critical lack of empirical validation to confirm reachability under live execution conditions. Security teams spend valuable hours triaging phantom warnings rather than fixing genuine vulnerabilities.",
    objective: "To design and implement an end-to-end automated scanning and verification engine that safely probes web targets across 8 security modules, leverages dual-AI verification to eliminate false positives, and synthesizes explainable risk scores with exportable audit reports.",
    contribution: "Architected and built the full-stack web vulnerability scanner application. Integrated 8 active and passive security testing modules (Security Headers, SSL/TLS Ciphers, CORS, XSS reflection heuristics, SQLi payloads, Endpoint enumeration, Secret exposure, robots.txt). Developed the dual-AI verification consensus engine (Threat Modeler Agent 1 vs. Skeptical Auditor Agent 2) to eliminate false positives, designed the explainable 0–100% confidence scoring algorithm, and built the automated ReportLab vector PDF export service.",
    technologies: [
      "Python 3.8+",
      "React 18",
      "Vite 5 / Vite 6",
      "SQLite3",
      "REST API",
      "ReportLab (Vector PDF)",
      "Lucide Icons",
      "OWASP & CWE Standards"
    ],
    workflow: [
      "Target URL & Audit Profile Intake",
      "8-Module Active & Passive Probing",
      "Empirical Evidence & Canary Reflection Logging",
      "Dual-AI Consensus Verification (Threat Modeler vs. Auditor)",
      "Weighted Security Score & CVSS/CWE Mapping",
      "Executive Vector PDF Security Report Generation"
    ],
    features: [
      "Multi-module vulnerability scanning — 8 active & passive checking modules (Headers, SSL/TLS, CORS, XSS, SQLi, sensitive endpoints, secrets, robots.txt)",
      "Dual-AI threat verification — Role separation between Agent 1 (Threat Modeler) and Agent 2 (Skeptical Auditor) to eliminate false positives",
      "Vulnerability severity classification & security scoring — Explainable 0–100% confidence score mathematically weighted across execution, response deltas, and consensus",
      "Persistent scan history & audit records — SQLite repository tracking scans, findings, response telemetry, and audit timestamps",
      "Detailed findings & empirical evidence — Real-time canary reflection analysis, HTTP status deltas, and diagnostic logs",
      "Automated vector PDF security report generation — Executive audit summaries with hacker attack paths, CWE mappings, and verified remediation steps"
    ],
    screenshots: [
      {
        src: "assets/scanx-dashboard.png",
        title: "ScanX Dashboard & Audit Profiles",
        alt: "ScanX live dashboard showing target input, scanning profiles, and 8 active security modules",
        caption: "Configurable audit depth (Fast Recon, Standard OWASP, Deep Surface Audit) and CFAA compliance consent."
      },
      {
        src: "assets/scanx-results.png",
        title: "Threat Audit & Severity Breakdown",
        alt: "ScanX results interface displaying health score 58/100, severity breakdown, and technical evidence",
        caption: "Synthesized security health ring (58/100 Medium Risk), severity breakdown cards, and inspectable HTTP evidence payloads."
      },
      {
        src: "assets/scanx-report.png",
        title: "Dual-AI Verification & Evidence Report",
        alt: "Sanitized PDF vulnerability report page 5 showing dual-AI auditor verdict, hacker path, and CWE-693",
        caption: "Official generated ReportLab vector report highlighting 97% confidence verdict by Agent 2 (Independent Auditor) and verified remediation guidance."
      }
    ],
    hasPdfShowcase: true,
    challenges: "Safely probing web applications without causing Denial of Service or destructive database state mutations, while calibrating the dual-AI consensus to reliably distinguish true positives from benign honeypots.",
    learnings: "Deepened expertise in OWASP Top 10 vulnerabilities, secure automated orchestration, SSRF mitigation, and multi-agent AI verification pipelines for cybersecurity workflows.",
    results: "Successfully built and validated a fully working vulnerability assessment platform with zero false positives on benchmark targets and instant printable audit reporting.",
    improvements: "Integrate automated remediation patch suggestion generation and distributed asynchronous scanning workers."
  },
  {
    title: "UniFinds — AI-Based Lost and Found System",
    category: "Web Security",
    categoryBadge: "Flagship Multi-Modal AI • Campus Platform",
    summary: "An intelligent lost-and-found application designed to help users report lost or found belongings, match items using multi-modal AI embeddings, and verify ownership before safe return.",
    github: "https://github.com/kavyasrinivas29/unifinds",
    problem: "Campus lost-and-found workflows are typically manual, fragmented across notice boards and chat groups, and struggle to accurately connect unstructured lost item descriptions with physical found articles. Furthermore, verifying authentic ownership without compromising student privacy remains a major challenge.",
    objective: "To create an automated, secure platform that matches lost and found reports using computer vision and natural language processing while protecting user privacy and preventing fraudulent claims.",
    contribution: "Designed and implemented the complete application interface and data pipeline. Engineered responsive reporting intake forms supporting item photos, categorizations, timestamps, and campus location tracking. Built the multi-modal similarity ranking architecture combining visual CLIP embeddings, semantic text embeddings, and spatio-temporal distance metrics. Implemented privacy-preserving ownership verification questions before item return.",
    technologies: [
      "Python 3.8+",
      "PyTorch",
      "OpenAI CLIP (clip-vit-base-patch32)",
      "Sentence-Transformers (all-MiniLM-L6-v2)",
      "SQLite3",
      "HTML5",
      "CSS3",
      "Vanilla JavaScript ES6+"
    ],
    workflow: [
      "Lost / Found Item Intake & Photo Upload",
      "Visual & Semantic Feature Extraction (CLIP + MiniLM)",
      "Weighted Multi-Modal Distance & Spatio-Temporal Calculation",
      "Candidate Ranking & Confidence Matching Engine",
      "Two-Way Privacy-Preserving Ownership Verification",
      "Authorized Physical Handover & Safe Return Audit"
    ],
    features: [
      "Lost and found item reporting — Intuitive intake forms supporting item photos, categorizations, timestamps, and locations",
      "Item listings and search — Centralized filterable ledgers for lost, found, and matched belongings",
      "Matching lost and found items — Automated candidate pairing between active lost reports and newly found articles",
      "AI-assisted item matching — Multi-modal scoring pipeline combining CLIP visual embeddings, MiniLM text semantics, & spatio-temporal distance",
      "User authentication and item management — Account registration, sign-in, status tracking (Active, Matched, Closed), and ownership verification"
    ],
    screenshots: [
      {
        src: "assets/unifinds-home.png",
        title: "UniFinds Secure Portal & Sign-In",
        alt: "UniFinds modern dark glassmorphic welcome and user authentication interface",
        caption: "Clean access control portal for campus members to sign in or register to file item reports."
      },
      {
        src: "assets/unifinds-listings.png",
        title: "Match Ranking Engine & Candidate Pool",
        alt: "UniFinds matching engine screen showing candidate pool selection and automated similarity ranking",
        caption: "Automated similarity ranking engine connecting open lost reports against registered found candidate pools."
      },
      {
        src: "assets/unifinds-details.png",
        title: "Centralized Dashboard & Intake Metrics",
        alt: "UniFinds dashboard displaying metrics counters and quick report creation action cards",
        caption: "Overview metrics (Reports, Lost, Found, Potential Matches, Verified Returns) and quick intake flows."
      }
    ],
    challenges: "Handling sparse or missing attributes (e.g., reports without photos or exact timestamps) and calibrating cosine similarity thresholds to avoid cross-category false matches.",
    learnings: "Mastered multi-modal feature fusion, vector similarity calculations, privacy-preserving ownership verification questions, and full-stack system architecture.",
    results: "Built a high-accuracy matching pipeline that ranks plausible item matches with transparent scoring and smooth web interface.",
    improvements: "Add push notification alerts for newly registered matches and QR code asset tagging for campus gear."
  }
];

const filterRow = document.getElementById("filterRow");
const projectsGrid = document.getElementById("projectsGrid");
const modal = document.getElementById("projectModal");
const modalBody = document.getElementById("modalBody");
const scrollTopButton = document.getElementById("scrollTop");
const progressBar = document.getElementById("progressBar");
const loader = document.getElementById("loader");
const typingTarget = document.getElementById("typingTarget");

const filters = ["All", "Pen Testing", "Web Security", "Network Security", "IoT"];

function renderFilters() {
  if (!filterRow) return;
  filterRow.innerHTML = filters
    .map((filter) => `<button class="${filter === "All" ? "active" : ""}" data-filter="${filter}">${filter}</button>`)
    .join("");
}

function renderProjects(filter = "All") {
  if (!projectsGrid) return;
  const visibleProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter);

  projectsGrid.innerHTML = visibleProjects
    .map(
      (project, index) => `
        <article class="card">
          <div class="screenshot">${project.title}</div>
          <h3>${project.title}</h3>
          <p>${project.summary}</p>
          <div class="chip-row">
            ${project.technologies.map((tech) => `<span>${tech}</span>`).join("")}
          </div>
          <div class="card-actions">
            <button type="button" class="btn-lab-details" data-project-index="${index}">View Details</button>
          </div>
        </article>
      `
    )
    .join("");
}

function openModal(project) {
  if (!modalBody || !modal) return;

  const categoryBadge = project.categoryBadge || project.category || "Project Deep Dive";

  // Action Buttons Bar
  let actionsHtml = "";
  if (project.github) {
    actionsHtml += `
      <a href="${project.github}" class="modal-btn primary" target="_blank" rel="noopener noreferrer" aria-label="View source repository on GitHub">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
        <span>View on GitHub</span>
      </a>
    `;
  }
  if (project.pdfReport) {
    actionsHtml += `
      <a href="${project.pdfReport}" class="modal-btn pdf-btn" target="_blank" rel="noopener noreferrer">
        <span>📄 Preview PDF Report</span>
      </a>
      <a href="${project.pdfReport}" class="modal-btn secondary" download="scanx-security-report-sample.pdf">
        <span>⬇ Download Report (.pdf)</span>
      </a>
    `;
  }

  // Workflow HTML
  let workflowHtml = "";
  if (project.workflow && project.workflow.length > 0) {
    workflowHtml = `
      <div class="modal-section">
        <h4>System Architecture &amp; Workflow</h4>
        <div class="modal-workflow">
          ${project.workflow.map((step, i) => `
            <span class="workflow-step">${step}</span>
            ${i < project.workflow.length - 1 ? '<span class="workflow-arrow">→</span>' : ''}
          `).join("")}
        </div>
      </div>
    `;
  }

  // Screenshots Gallery HTML
  let galleryHtml = "";
  if (project.screenshots && project.screenshots.length > 0) {
    galleryHtml = `
      <div class="modal-section">
        <h4>Genuine Application Screenshots</h4>
        <div class="modal-gallery">
          ${project.screenshots.map((s) => `
            <figure class="gallery-item">
              <img src="${s.src}" alt="${s.alt}" loading="lazy" />
              <figcaption>
                <strong>${s.title}</strong>
                ${s.caption}
              </figcaption>
            </figure>
          `).join("")}
        </div>
      </div>
    `;
  }

  // Sanitized PDF Report Preview Card (for ScanX)
  let pdfCardHtml = "";
  if (project.hasPdfShowcase && project.pdfReport) {
    pdfCardHtml = `
      <div class="modal-section">
        <h4>Sanitized Vulnerability Audit Report</h4>
        <div class="pdf-showcase-card">
          <div class="pdf-thumb">
            <img src="assets/scanx-report.png" alt="Sanitized ScanX PDF Report Preview Page" loading="lazy" />
          </div>
          <div class="pdf-info">
            <h5>Executive Security Audit Report (SCAN-2B7DD8)</h5>
            <div class="pdf-badge-row">
              <span class="pdf-pill">ReportLab Vector PDF</span>
              <span class="pdf-pill">13 Pages</span>
              <span class="pdf-pill">Dual-AI Verified</span>
              <span class="pdf-pill">Sanitized DAST</span>
            </div>
            <p>
              Genuine executive security audit generated by the ScanX reporting pipeline. Features CWE vulnerability classifications, empirical HTTP evidence, hacker attack paths, and independent auditor consensus verification.
            </p>
            <div style="display: flex; gap: 0.6rem; flex-wrap: wrap;">
              <a href="${project.pdfReport}" class="modal-btn pdf-btn" target="_blank" rel="noopener noreferrer">
                <span>View Full PDF Report</span>
              </a>
              <a href="${project.pdfReport}" class="modal-btn secondary" download="scanx-security-report-sample.pdf">
                <span>Download Sample (.pdf)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // Contribution HTML
  let contributionHtml = "";
  if (project.contribution) {
    contributionHtml = `
      <div class="modal-section">
        <h4>My Contribution &amp; Implementation Details</h4>
        <p>${project.contribution}</p>
      </div>
    `;
  }

  modalBody.innerHTML = `
    <div class="modal-header">
      <span class="modal-badge">${categoryBadge}</span>
      <h3>${project.title}</h3>
      <p class="modal-summary">${project.summary}</p>
    </div>

    ${actionsHtml ? `<div class="modal-actions-bar">${actionsHtml}</div>` : ""}

    <div class="modal-grid-2">
      <div class="modal-section">
        <h4>Problem Statement</h4>
        <p>${project.problem}</p>
      </div>
      <div class="modal-section">
        <h4>Project Objective</h4>
        <p>${project.objective}</p>
      </div>
    </div>

    ${contributionHtml}

    <div class="modal-section">
      <h4>Verified Technology Stack</h4>
      <div class="chip-row">
        ${project.technologies.map((t) => `<span>${t}</span>`).join("")}
      </div>
    </div>

    ${workflowHtml}

    <div class="modal-section">
      <h4>Key Features &amp; Capabilities</h4>
      <ul class="modal-features-list">
        ${project.features.map((f) => `<li>${f}</li>`).join("")}
      </ul>
    </div>

    ${galleryHtml}

    ${pdfCardHtml}

    <div class="modal-grid-2">
      <div class="modal-section">
        <h4>Challenges &amp; Solutions</h4>
        <p>${project.challenges}</p>
      </div>
      <div class="modal-section">
        <h4>Learnings &amp; Impact</h4>
        <p><strong>Security Learnings:</strong> ${project.learnings}</p>
        <p style="margin-top: 0.5rem;"><strong>Results:</strong> ${project.results}</p>
      </div>
    </div>

    ${project.improvements ? `
      <div class="modal-section" style="margin-bottom: 0;">
        <h4>Future Enhancements</h4>
        <p>${project.improvements}</p>
      </div>
    ` : ""}
  `;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

// Initial renders
renderFilters();
renderProjects();

// Event Listeners for Featured Projects "View Details" buttons
document.querySelectorAll(".btn-details").forEach((btn) => {
  btn.addEventListener("click", () => {
    const idx = parseInt(btn.dataset.featuredIndex, 10);
    if (!isNaN(idx) && featuredProjects[idx]) {
      openModal(featuredProjects[idx]);
    }
  });
});

// Also make featured card previews clickable to open details modal
document.querySelectorAll(".featured-card .featured-preview").forEach((previewEl, idx) => {
  previewEl.style.cursor = "pointer";
  previewEl.setAttribute("title", "Click to view full technical showcase");
  previewEl.addEventListener("click", () => {
    if (featuredProjects[idx]) {
      openModal(featuredProjects[idx]);
    }
  });
});

// Event delegation for Security Labs "View Details" buttons
if (projectsGrid) {
  projectsGrid.addEventListener("click", (event) => {
    const button = event.target.closest(".btn-lab-details");
    if (!button) return;
    const projectIndex = parseInt(button.dataset.projectIndex, 10);
    if (!isNaN(projectIndex) && projects[projectIndex]) {
      openModal(projects[projectIndex]);
    }
  });
}

// Year auto-update
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Contact Form handling
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const button = event.currentTarget.querySelector("button");
    if (button) {
      button.textContent = "Message Sent";
      button.disabled = true;
    }
  });
}

// Filter handling
if (filterRow) {
  filterRow.addEventListener("click", (event) => {
    if (event.target.matches("button")) {
      const selectedFilter = event.target.dataset.filter;
      document.querySelectorAll("#filterRow button").forEach((button) => button.classList.toggle("active", button === event.target));
      renderProjects(selectedFilter);
    }
  });
}

// Modal closing
const closeModalBtn = document.getElementById("closeModal");
if (closeModalBtn) closeModalBtn.addEventListener("click", closeModal);
if (modal) {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
});

// Progress bar & scroll top
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
  if (progressBar) progressBar.style.width = `${progress}%`;
  if (scrollTopButton) scrollTopButton.style.display = scrollTop > 500 ? "flex" : "none";
});

if (scrollTopButton) {
  scrollTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Typing Roles Animation
const roles = [
  "Cybersecurity Specialist",
  "Java Developer",
  "Full Stack Developer",
  "UI/UX Designer",
  "Network Defender"
];

let roleIndex = 0;

function typeRole() {
  if (!typingTarget) return;
  typingTarget.textContent = roles[roleIndex];
  roleIndex = (roleIndex + 1) % roles.length;
}

if (typingTarget) {
  typeRole();
  setInterval(typeRole, 2500);
}

window.addEventListener("load", () => {
  if (loader) {
    loader.classList.add("hidden");
  }
  if (window.location.hash === "#details-scanx" && featuredProjects[0]) {
    setTimeout(() => openModal(featuredProjects[0]), 500);
  } else if (window.location.hash === "#details-unifinds" && featuredProjects[1]) {
    setTimeout(() => openModal(featuredProjects[1]), 500);
  } else if (window.location.hash === "#featured-projects") {
    const el = document.getElementById("featured-projects");
    if (el) el.scrollIntoView({ behavior: "instant" });
  }
});


