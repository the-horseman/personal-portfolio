/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Aryan Rishi Lamba",
  title: "Hi all, I'm Aryan",
  subTitle: emoji(
    "Software Engineer with 2+ years of experience building scalable systems and AI-powered solutions. Led development of multi-agent workflows for automated investigation and response, fine-tuned LLMs, and built RAG pipelines for enterprise use cases. Spearheaded prompt engineering tools across 5+ releases. Skilled in Python, Java, CI/CD, microservices, and cloud (AWS, GCP)."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1HAAmFMbsITagIHZ_EY9QkDpyZ8ttgHvY/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/the-horseman",
  linkedin: "https://www.linkedin.com/in/aryan-rishi-lamba/",
  gmail: "aryanrishi20@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ AI and Workflow Automation: Develop and architect AI-driven systems to automate SOC workflows and threat triage, leveraging multi-agent setups and fine-tuning generative AI models."),
      emoji("⚡ Software Development: Build and optimize in-house tools, including a prompt engineering system, microservices, and middleware services, improving workflow efficiency and reducing costs."),
      emoji("⚡ Data Handling and Knowledge Accessibility: Develop systems for high-volume data retrieval and create solutions like an offline RAG chatbot to enhance internal knowledge access."),
      emoji("⚡ Log Analysis and Performance Monitoring: Design custom log parsers for efficient debugging and create metric servers for real-time application performance tracking."),
      emoji("⚡ DevOps Integration: Integrate microservices into existing CI/CD workflows using Kubernetes and Helm, ensuring smooth deployment and continuous delivery.")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "Python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "Java",
    fontAwesomeClassname: "fab fa-java"
  },
  {
    skillName: "Go",
    fontAwesomeClassname: "fas fa-code"
  },
  {
    skillName: "C++",
    fontAwesomeClassname: "fas fa-code"
  },
  {
    skillName: "C",
    fontAwesomeClassname: "fas fa-code"
  },
  {
    skillName: "Html-5",
    fontAwesomeClassname: "fab fa-html5"
  },
  {
    skillName: "Css3",
    fontAwesomeClassname: "fab fa-css3-alt"
  },
  {
    skillName: "Sass",
    fontAwesomeClassname: "fab fa-sass"
  },
  {
    skillName: "JavaScript",
    fontAwesomeClassname: "fab fa-js"
  },
  {
    skillName: "Kotlin",
    fontAwesomeClassname: "fas fa-code"
  },
  {
    skillName: "Reactjs",
    fontAwesomeClassname: "fab fa-react"
  },
  {
    skillName: "Springboot",
    fontAwesomeClassname: "fas fa-code"
  },
  {
    skillName: "Pytorch",
    fontAwesomeClassname: "fas fa-code"
  },
  {
    skillName: "Langchain",
    fontAwesomeClassname: "fas fa-code"
  },
  {
    skillName: "Langgraph",
    fontAwesomeClassname: "fas fa-code"
  },
  {
    skillName: "Nodejs",
    fontAwesomeClassname: "fab fa-node"
  },
  {
    skillName: "Angular",
    fontAwesomeClassname: "fab fa-angular"
  },
  {
    skillName: "sql-database",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "AWS",
    fontAwesomeClassname: "fab fa-aws"
  },
  {
    skillName: "GCP",
    fontAwesomeClassname: "fas fa-code"
  },
  {
    skillName: "Kubernetes",
    fontAwesomeClassname: "fas fa-code"
  },
  {
    skillName: "Docker",
    fontAwesomeClassname: "fab fa-docker"
  },
  {
    skillName: "Kafka",
    fontAwesomeClassname: "fas fa-code"
  },
  {
    skillName: "Elasticsearch",
    fontAwesomeClassname: "fas fa-code"
  },
  {
    skillName: "Snowflake",
    fontAwesomeClassname: "fas fa-code"
  }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Graphic Era (Deemed to be University)",
      logo: require("./assets/images/graphicEra.png"),
      subHeader: "B.Tech in Computer Science",
      duration: "July 2019 - June 2023",
      desc: "Studied Computer Sceince as major and developed multiple AI projects. ",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Trellix (Google Could Partner)",
      companylogo: require("./assets/images/trellixLogo.png"),
      date: "June 2023 - Present",
      desc: "At Trellix (Google Cloud Partner), led AI and backend development for cybersecurity workflows. Built multi-agent systems to automate threat triage, fine-tuned LLMs, and saved $40K/month by developing an in-house prompt engineering tool. Created scalable microservices, offline RAG chatbot, log parsers, and real-time metric systems. Integrated services with CI/CD using Kubernetes and Helm, ensuring fault-tolerant architecture.",
      descBullets: [
        "Designed and developed multi-agent AI workflows to automate SOC alert triage, translating complex security operations into functional systems. Fine-tuned Mistral models on synthetic data to improve response quality",
        "Built scalable tools and services including an in-house prompt engineering platform that saved $40K/month, a microservice for orchestrating AI workflows, and a high-volume middleware search service.",
        "Implemented an offline RAG chatbot for internal knowledge access, a log parser reducing debugging time by 50%, and a Prometheus-based metric server for real-time performance monitoring.",
        "Integrated microservices into CI/CD pipelines using Kubernetes and Helm, and ensured fault-tolerant architecture through robust testing and deployment practices"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Awards that I have received!",

  achievementsCards: [
    {
      title: "Breakthrough Mindset",
      subtitle:
        "Recognized as the first employee to win a company-wide award within a year, this achievement reflects my drive to innovate and deliver impact fast. I’ve contributed across core areas like Java, Spring, Python, and DevOps, while also pioneering AI initiatives—including LLM and Prompt Engineering—used in Trellix WISE. Grateful to be growing in a fast-paced environment, and excited to keep pushing boundaries in emerging tech.",
      image: require("./assets/images/award.png"),
      imageAlt: "Breakthrough Mindset",
      footerLink: [
        {
          name: "Quarterly Award",
          url: "https://www.linkedin.com/posts/aryan-rishi-lamba_trellix-breakthroughmindset-softwareengineer-activity-7208078057784446976-ietu?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC8brmgBqiX0kjbsAqa_fVjCfPsmckC2TrA"
        },
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7895535025",
  email_address: "aryanrishi20@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
