---
permalink: /
title: ""
excerpt: ""
author_profile: true
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

<span class='anchor' id='about-me'></span>

# About me
I am currently an Research Intern at the [OpenDriveLab](https://opendrivelab.com/), working under the supervision of Professor [Hongyang Li](https://lihongyang.info/). Previously, I was a Research Assistant at ShanghaiTech University's [4DVLab](https://4dvlab.github.io/), supervised by Professor [Yuexin Ma](https://yuexinma.me/), where I also collaborated closely with Dr. [Xinge Zhu](https://xingezhu.me/).

I earned my BSc with ​first-class honours​ from the dual-degree program between [Beijing University of Posts and Telecommunications](https://www.bupt.edu.cn/) and [Queen Mary University of London](https://www.qmul.ac.uk/).

My work focuses on enabling AI to perceive the 3D world like humans by developing ​**highly generalizable**, ​**interpretable**, and ​**evolvable**​ 3D understanding algorithms.

You can find my CV here: [Yuhang Lu's Curriculum Vitae](files/YuhangLu_resume.pdf)


# 🔥 News
- *2025.06*: Join OpenDriveLab as Intern. 
- *2024.12*: IDKB is accepted by AAAI 2025!
- *2024.09*: OctreeOcc is accepted by NeurIPS 2024!
- *2024.09*: We introduce [IDKB](https://arxiv.org/pdf/2409.02914), the first large-scale vision-language dataset dedicated to professional driving knowledge and experience.
- *2024.05*: We propose [OctreeOcc](https://arxiv.org/pdf/2312.03774.pdf), a highly efficient, multi-granularity method for occupancy prediction.
- *2023.07*: Excited to share that my first paper [SeeMore](https://openaccess.thecvf.com/content/ICCV2023/papers/Lu_See_More_and_Know_More_Zero-shot_Point_Cloud_Segmentation_via_ICCV_2023_paper.pdf), has been accepted by ICCV 2023!



# 📝 Publications 
*\* indicates equal contributions* 

<style>
/* 强制统一论文图片尺寸 */
div.paper-box div.paper-box-image div img,
.paper-box .paper-box-image img,
.paper-box-image img {
    width: 100% !important;
    height: 180px !important;
    max-width: none !important;
    min-width: 100% !important;
    object-fit: fill !important;
    display: block !important;
    box-sizing: border-box !important;
    flex-shrink: 0 !important;
}

.work-education-box {
    display: flex;
    align-items: center;
    padding: 1.5em 0;
    border-bottom: 1px #efefef solid;
}

.work-education-box .logo {
    width: 80px;
    height: 80px;
    margin-right: 2em;
    flex-shrink: 0;
}

.work-education-box .logo img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 8px;
    background-color: transparent;
}

.work-education-box .content {
    flex: 1;
}

@media (max-width: 768px) {
    .work-education-box {
        flex-direction: column;
        text-align: center;
    }
    .work-education-box .logo {
        margin-right: 0;
        margin-bottom: 1em;
    }
}
</style>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICRA 2025</div><img src='images/papers/RenderWorld.png' alt="sym"></div></div>
<div class='paper-box-text' markdown="1">

<span style="font-size:18px;">**RenderWorld: World Model with Self-Supervised 3D Label**</span>

Ziyang Yan, Wenzhen Dong, Yihua Shao, **Yuhang Lu\***, Liu Haiyang, Jingwen Liu, Haozhe Wang, Zhe Wang, Yan Wang, Fabio Remondino, Yuexin Ma

2025 IEEE International Conference on Robotics and Automation (ICRA 2025)

[[Paper]](https://arxiv.org/pdf/2409.11356)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AAAI 2025</div><img src='images/papers/IDKB.png' alt="sym"></div></div>
<div class='paper-box-text' markdown="1">

<span style="font-size:18px;">**Can LVLMs Obtain a Driver's License? A Benchmark Towards Reliable AGI for Autonomous Driving**</span>

**Yuhang Lu\***, Yichen Yao\*, Jiadong Tu\*, Jiangnan Shao\*, Yuexin Ma, Xinge Zhu

Thirty-Ninth AAAI Conference on Artificial Intelligence (AAAI-25)

[[Project Page]](https://4dvlab.github.io/project_page/idkb.html) [[Paper]](https://arxiv.org/pdf/2409.02914)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NeurIPS 2024</div><img src='images/papers/OctreeOcc.png' alt="sym"></div></div>
<div class='paper-box-text' markdown="1">

<span style="font-size:18px;">**OctreeOcc: Efficient and Multi-Granularity Occupancy Prediction Using Octree Queries**</span>

**Yuhang Lu**, Xinge Zhu, Tai Wang, Yuexin Ma

Conference on Neural Information Processing Systems (NeurIPS), 2024

[[Paper]](https://arxiv.org/pdf/2312.03774.pdf) [[Code]]()

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICCV 2023</div><img src='images/papers/SeeMoreKnowMore.png' alt="sym"></div></div>
<div class='paper-box-text' markdown="1">

<span style="font-size:18px;">**See More and Know More: Zero-shot Point Cloud Segmentation via Multi-modal Visual Data**</span>

**Yuhang Lu\***, Qi Jiang\*, Runnan Chen, Yuenan Hou, Xinge Zhu, Yuexin Ma

Proceedings of the IEEE/CVF International Conference on Computer Vision (ICCV), 2023

[[Paper]](https://openaccess.thecvf.com/content/ICCV2023/papers/Lu_See_More_and_Know_More_Zero-shot_Point_Cloud_Segmentation_via_ICCV_2023_paper.pdf) [[Code]]()

</div>
</div>

# 💻 Work Experience

<div class='work-education-box'>
<div class='logo'><img src='images/OpenDriveLab_logo.png' alt="OpenDriveLab"></div>
<div class='content' markdown="1">

<span style="font-size:18px;">**OpenDriveLab, Shanghai AI Lab**</span>

June 2025 - Present

Position: Research Intern (Supervisor: Hongyang Li)

Location: Shanghai, China

</div>
</div>

<div class='work-education-box'>
<div class='logo'><img src='images/ShanghaiTech_logo.png' alt="ShanghaiTech"></div>
<div class='content' markdown="1">

<span style="font-size:18px;">**ShanghaiTech University**</span>

August 2022 - April 2025

Position: Research Assistant (Supervisor: Yuexin Ma)

Location: Shanghai, China

</div>
</div>

# 📖 Educations

<div class='work-education-box'>
<div class='logo'><img src='images/BUPT_logo.jpeg' alt="BUPT"></div>
<div class='content' markdown="1">

<span style="font-size:18px;">**Beijing University of Posts and Telecommunications (BUPT)**</span>

September 2018 - July 2022

Major: B.E. in Internet of Things Engineering

</div>
</div>

<div class='work-education-box'>
<div class='logo'><img src='images/QMUL_logo.png' alt="QMUL"></div>
<div class='content' markdown="1">

<span style="font-size:18px;">**Queen Mary University of London (QMUL)**</span>

September 2018 - July 2022

Major: B.E. in Internet of Things Engineering (first-class degree)

</div>
</div>

# Miscellaneous
## Academic Services
I served as a reviewer for top-tier conference such as ICCV, NeurIPS ...

## Hobbies
Love: 🎱Billiards (Chinese 8 ball and Snooker), 🏀basketball and 🏃jogging

<!-- # 💬 Invited Talks -->
<!-- # 📝 Publications  -->
<!-- # 💻 Internships -->
<!-- # 🔥 News  -->
<!-- &nbsp;🎉🎉 -->
<!-- # 🎖 Honors and Awards -->
<!-- # 📖 Educations -->