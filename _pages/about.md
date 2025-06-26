---
permalink: /
title: ""
excerpt: ""
author_profile: false
layout: modern
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<!-- About Section -->
<section id="about" class="section fade-in">
  <div class="container">
    <h2 class="section-title">About Me</h2>
    <div class="about-content">
      <div class="about-text">
        <p class="lead">
          I am currently a Research Intern at the <a href="https://opendrivelab.com/" target="_blank">OpenDriveLab</a>, working under the supervision of Prof. <a href="https://lihongyang.info/" target="_blank">Hongyang Li</a>. Previously, I was a Research Assistant at <a href="https://4dvlab.github.io/" target="_blank">4DVLab</a>, supervised by Prof. <a href="https://yuexinma.me/" target="_blank">Yuexin Ma</a>, where I also collaborated closely with Dr. <a href="https://xingezhu.me/" target="_blank">Xinge Zhu</a>.
        </p>
        <p>
          I earned my BSc with first-class honours from the dual-degree program between <a href="https://www.bupt.edu.cn/" target="_blank">Beijing University of Posts and Telecommunications</a> and <a href="https://www.qmul.ac.uk/" target="_blank">Queen Mary University of London</a>.
        </p>
        <p>
          My work focuses on enabling AI to perceive the 3D world like humans by developing <strong>highly generalizable</strong>, <strong>interpretable</strong>, and <strong>evolvable</strong> 3D understanding algorithms.
        </p>
        <div class="cv-download">
          <a href="files/YuhangLu_resume.pdf" class="btn-primary" target="_blank">
            <i class="bi bi-download"></i>
            Download CV
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Research Interests -->
<section id="research" class="section fade-in">
  <div class="container">
    <h2 class="section-title">Research Interests</h2>
    <div class="research-grid">
             <div class="research-card fade-in">
         <div class="research-icon">
           <i class="fas fa-cube"></i>
         </div>
         <h3>3D Computer Vision</h3>
         <p>Developing advanced algorithms for 3D scene understanding, point cloud processing, and multi-modal perception.</p>
       </div>
       <div class="research-card fade-in">
         <div class="research-icon">
           <i class="fas fa-car"></i>
         </div>
         <h3>Autonomous Driving</h3>
         <p>Designing highly adaptive autonomous driving algorithms capable of autonomous self-evolution from driving
            experience for diverse scenarios.</p>
       </div>
       <div class="research-card fade-in">
         <div class="research-icon">
           <i class="fas fa-brain"></i>
         </div>
         <h3>Machine Learning</h3>
         <p>Advancing deep learning methodologies with focus on generalization, interpretability, and efficiency.</p>
       </div>
    </div>
  </div>
</section>

<!-- News Section -->
<section class="section fade-in">
  <div class="container">
    <h2 class="section-title">🔥 Latest News</h2>
    <div class="news-timeline">
    <div class="news-item fade-in">
        <div class="news-date">2025.06</div>
        <div class="news-content">
          <strong>Paper Accepted:</strong> ReAL-AD accepted by ICCV 2025!
        </div>
      </div>
      <div class="news-item fade-in">
        <div class="news-date">2025.06</div>
        <div class="news-content">
          <strong>New Position:</strong> Joined OpenDriveLab as Research Intern
        </div>
      </div>
      <div class="news-item fade-in">
        <div class="news-date">2024.12</div>
        <div class="news-content">
          <strong>Paper Accepted:</strong> IDKB accepted by AAAI 2025!
        </div>
      </div>
      <div class="news-item fade-in">
        <div class="news-date">2024.09</div>
        <div class="news-content">
          <strong>Paper Accepted:</strong> OctreeOcc accepted by NeurIPS 2024!
        </div>
      </div>
      <div class="news-item fade-in">
        <div class="news-date">2024.09</div>
        <div class="news-content">
          <strong>Paper Release:</strong> Introduced <a href="https://arxiv.org/pdf/2409.02914" target="_blank">IDKB</a>, the first large-scale vision-language dataset for professional driving knowledge
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Publications Section -->
<section id="publications" class="section fade-in">
  <div class="container">
    <h2 class="section-title">📝 Publications</h2>
    <p class="publications-note"><em>* indicates equal contributions</em></p>
    
    <div class="paper-grid">
     <!-- ReAL-AD Paper -->
      <div class="paper-card fade-in">
        <img src="images/papers/ReAL-AD.png" alt="ReAL-AD" class="paper-image">
        <div class="paper-content">
          <div class="paper-venue">ICCV 2025</div>
          <h3 class="paper-title">ReAL-AD: Towards Human-Like Reasoning in End-to-End Autonomous Driving</h3>
          <p class="paper-authors"><strong>Yuhang Lu</strong>, Jiadong Tu, Xinge Zhu, Yuexin Ma</p>
          <div class="paper-links">
            <a href="" class="paper-link" target="_blank">
              <i class="bi bi-file-earmark-pdf"></i> Paper
            </a>
          </div>
        </div>
      </div>

      <!-- RenderWorld Paper -->
      <div class="paper-card fade-in">
        <img src="images/papers/RenderWorld.png" alt="RenderWorld" class="paper-image">
        <div class="paper-content">
          <div class="paper-venue">ICRA 2025</div>
          <h3 class="paper-title">RenderWorld: World Model with Self-Supervised 3D Label</h3>
          <p class="paper-authors">Ziyang Yan, Wenzhen Dong, Yihua Shao, <strong>Yuhang Lu</strong>, Liu Haiyang, Jingwen Liu, Haozhe Wang, Zhe Wang, Yan Wang, Fabio Remondino, Yuexin Ma</p>
          <div class="paper-links">
            <a href="https://arxiv.org/pdf/2409.11356" class="paper-link" target="_blank">
              <i class="bi bi-file-earmark-pdf"></i> Paper
            </a>
          </div>
        </div>
      </div>

      <!-- IDKB Paper -->
      <div class="paper-card fade-in">
        <img src="images/papers/IDKB.png" alt="IDKB" class="paper-image">
        <div class="paper-content">
          <div class="paper-venue">AAAI 2025</div>
          <h3 class="paper-title">Can LVLMs Obtain a Driver's License? A Benchmark Towards Reliable AGI for Autonomous Driving</h3>
          <p class="paper-authors"><strong>Yuhang Lu*</strong>, Yichen Yao*, Jiadong Tu*, Jiangnan Shao*, Yuexin Ma, Xinge Zhu</p>
          <div class="paper-links">
            <a href="https://4dvlab.github.io/project_page/idkb.html" class="paper-link" target="_blank">
              <i class="bi bi-globe"></i> Project Page
            </a>
            <a href="https://arxiv.org/pdf/2409.02914" class="paper-link secondary" target="_blank">
              <i class="bi bi-file-earmark-pdf"></i> Paper
            </a>
          </div>
        </div>
      </div>

      <!-- OctreeOcc Paper -->
      <div class="paper-card fade-in">
        <img src="images/papers/OctreeOcc.png" alt="OctreeOcc" class="paper-image">
        <div class="paper-content">
          <div class="paper-venue">NeurIPS 2024</div>
          <h3 class="paper-title">OctreeOcc: Efficient and Multi-Granularity Occupancy Prediction Using Octree Queries</h3>
          <p class="paper-authors"><strong>Yuhang Lu</strong>, Xinge Zhu, Tai Wang, Yuexin Ma</p>
          <div class="paper-links">
            <a href="https://arxiv.org/pdf/2312.03774.pdf" class="paper-link" target="_blank">
              <i class="bi bi-file-earmark-pdf"></i> Paper
            </a>
            <a href="https://github.com/4DVLab/OctreeOcc" class="paper-link secondary" target="_blank">
              <i class="bi bi-github"></i> Code
            </a>
          </div>
        </div>
      </div>

      <!-- SeeMore Paper -->
      <div class="paper-card fade-in">
        <img src="images/papers/SeeMoreKnowMore.png" alt="SeeMore" class="paper-image">
        <div class="paper-content">
          <div class="paper-venue">ICCV 2023</div>
          <h3 class="paper-title">See More and Know More: Zero-shot Point Cloud Segmentation via Multi-modal Visual Data</h3>
          <p class="paper-authors"><strong>Yuhang Lu*</strong>, Qi Jiang*, Runnan Chen, Yuenan Hou, Xinge Zhu, Yuexin Ma</p>
          <div class="paper-links">
            <a href="https://openaccess.thecvf.com/content/ICCV2023/papers/Lu_See_More_and_Know_More_Zero-shot_Point_Cloud_Segmentation_via_ICCV_2023_paper.pdf" class="paper-link" target="_blank">
              <i class="bi bi-file-earmark-pdf"></i> Paper
            </a>
            <a href="https://github.com/4DVLab/SeeMoreKnowMore" class="paper-link secondary" target="_blank">
              <i class="bi bi-github"></i> Code
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Experience Section -->
<section id="experience" class="section fade-in">
  <div class="container">
    <h2 class="section-title">💻 Experience</h2>
    <div class="timeline">
      <div class="timeline-item fade-in">
        <div class="timeline-content">
          <h3 class="timeline-title">Research Intern</h3>
          <div class="timeline-company">OpenDriveLab, Shanghai AI Lab</div>
          <div class="timeline-date">June 2025 - Present</div>
          <div class="timeline-description">
            Working on cutting-edge autonomous driving research under the supervision of Prof. Hongyang Li. Focus on developing advanced autonomous driving system.
          </div>
        </div>
      </div>
      
      <div class="timeline-item fade-in">
        <div class="timeline-content">
          <h3 class="timeline-title">Research Assistant</h3>
          <div class="timeline-company">4DVLab, ShanghaiTech University</div>
          <div class="timeline-date">August 2022 - April 2025</div>
          <div class="timeline-description">
            Conducted research in 3D computer vision and autonomous driving under Prof. Yuexin Ma. Published multiple papers at top-tier conferences including NeurIPS, AAAI, and ICCV.
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Education Section -->
<section class="section fade-in">
  <div class="container">
    <h2 class="section-title">📖 Education</h2>
    <div class="timeline">
      <div class="timeline-item fade-in">
        <div class="timeline-content">
          <h3 class="timeline-title">B.E. in Internet of Things Engineering</h3>
          <div class="timeline-company">Beijing University of Posts and Telecommunications (BUPT)</div>
          <div class="timeline-date">September 2018 - July 2022</div>
          <div class="timeline-description">
            Dual-degree program with QMUL. Graduated with first-class honours.
          </div>
        </div>
      </div>
      
      <div class="timeline-item fade-in">
        <div class="timeline-content">
          <h3 class="timeline-title">B.E. in Internet of Things Engineering</h3>
          <div class="timeline-company">Queen Mary University of London (QMUL)</div>
          <div class="timeline-date">September 2018 - July 2022</div>
          <div class="timeline-description">
            First-class degree in joint program with BUPT. Strong foundation in computer science and engineering.
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Contact Section -->
<section id="contact" class="section fade-in">
  <div class="container">
    <h2 class="section-title">📬 Get In Touch</h2>
    <div class="contact-grid">
      <div class="contact-card fade-in">
        <div class="contact-icon">
          <i class="bi bi-envelope"></i>
        </div>
        <h3 class="contact-title">Email</h3>
        <p class="contact-info">luyuhang@opendrivelab.com</p>
      </div>
      
      <div class="contact-card fade-in">
        <div class="contact-icon">
          <i class="bi bi-mortarboard"></i>
        </div>
        <h3 class="contact-title">Google Scholar</h3>
        <p class="contact-info">
          <a href="https://scholar.google.com/citations?user=HiwDOksAAAAJ" target="_blank">View Profile</a>
        </p>
      </div>
      
      <div class="contact-card fade-in">
        <div class="contact-icon">
          <i class="bi bi-github"></i>
        </div>
        <h3 class="contact-title">GitHub</h3>
        <p class="contact-info">
          <a href="https://github.com/yuhanglu2000" target="_blank">@yuhanglu2000</a>
        </p>
      </div>
    </div>
  </div>
</section>

<style>
/* Additional styles for modern layout */
.research-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.research-card {
  background: var(--bg-primary);
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: var(--shadow);
  border: 1px solid var(--border-color);
  transition: var(--transition-normal);
}

.research-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.research-icon {
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.research-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.news-timeline {
  max-width: 800px;
  margin: 0 auto;
}

.news-item {
  display: flex;
  gap: 2rem;
  padding: 1.5rem 0;
  border-bottom: 1px solid var(--border-color);
}

.news-item:last-child {
  border-bottom: none;
}

.news-date {
  font-weight: 600;
  color: var(--primary-color);
  min-width: 80px;
  font-size: 0.9rem;
}

.news-content {
  flex: 1;
  color: var(--text-secondary);
}

.publications-note {
  text-align: center;
  color: var(--text-muted);
  margin-bottom: 2rem;
  font-style: italic;
}

.about-content {
  max-width: 800px;
  margin: 0 auto;
}

.about-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
}

.about-text .lead {
  font-size: 1.2rem;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
}

.cv-download {
  margin-top: 2rem;
  text-align: center;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: var(--primary-color);
  color: white;
  text-decoration: none;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: var(--transition-fast);
}

.btn-primary:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
  color: white;
}

@media (max-width: 768px) {
  .news-item {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>