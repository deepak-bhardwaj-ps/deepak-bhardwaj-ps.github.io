import { IPortfolio } from "./portfolio.type";
const portfolio: IPortfolio = {
  name: "Deepak Bhardwaj",
  story:
    "I'm a Father, Husband, Cloud Architect, and Photographer. Currently I work at Publicis Sapient as a Cloud Architect",
  socialProfile: {
    github: "deepak-bhardwaj-ps",
    linkedIn: "deepdotnet",
    twitter: "deepdotnet",
    instagram: "deepsavi",
  },
  skills: [
    "Google Cloud Platform",
    "Microsoft Azure",
    "Microsoft .NET",
    ".NET Core",
    "Java",
    "C#",
    "DevOps",
    "DevSecOps",
    "Terraform",
    "Kubernetes",
    "Istio",
    "Azure Kubernetes Services (AKS)",
    "Google Kubernetes Engine (GKE)",
    "Azure DevOps",
    "Microservices",
    "Spring Boot",
    "Blockchain",
    "React",
    "SQL Server",
    "MongoDB",
    "REDIS",
    "Event Driven Architecture",
    "Evolutionary Architecture",
    "Vertical Slice Architecture",
    "Python",
    "Design Patterns",
    "Enterprise Integration",
    "Full-Stack Development",
    "Application Security",
    "Docker",
    "Adobe Photoshop CC",
    "Adobe Lightroom Classic",
    "Portrait Photography",
    "R3 Corda",
  ],
  topSkills: [
    {
      name: "googlecloud",
      level: 0.95,
    },
    {
      name: "microsoftazure",
      level: 0.95,
    },
    {
      name: "dot-net",
      level: 1.0,
    },
    {
      name: "kotlin",
      level: 0.8,
    },
    {
      name: "csharp",
      level: 1.0,
    },
  ],
  experience: [
    {
      jobTitle: "Cloud Architect",
      employmentType: "Permanent",
      company: "Publicis Sapient",
      location: "Bengaluru",
      current: true,
      startDate: new Date("2013-04-01"),
      endDate: null,
      description: "",
    },
    {
      jobTitle: "Platform specialist",
      employmentType: "Permanent",
      company: "Publicis Sapient",
      location: "Bengaluru",
      current: false,
      startDate: new Date("2016-07-21"),
      endDate: new Date("2018-03-31"),
      description: "",
    },
    {
      jobTitle: "Module Lead",
      employmentType: "Permanent",
      company: "InterGlobe Technologies",
      location: "Gurgaon",
      current: false,
      startDate: new Date("2014-07-01"),
      endDate: new Date("2016-05-30"),
      description:
        "At InterGlobe Technologies I led the development of an automation system for GDS systems like Galileo, Apollo & Worldspan",
    },
    {
      jobTitle: "Tech Lead",
      employmentType: "Permanent",
      company: "ANALEC InfoTech Private Limited",
      location: "Gurgaon",
      current: false,
      startDate: new Date("2010-05-01"),
      endDate: new Date("2014-07-14"),
      description:
        "At ANALEC I led the development of of Customer Relation Manager platform for on of the largest European bank",
    },
    {
      jobTitle: "Freelancer",
      employmentType: "Freelancer",
      company: "Acme Data Solution",
      location: "Gurgaon",
      current: false,
      startDate: new Date("2009-06-01"),
      endDate: new Date("2010-04-30"),
      description:
        "Website Designing, Softare Development, Project Management, Colleges ERP, Institutes ERP, Education Portals, Astrology Portal, etc.,",
    },
    {
      jobTitle: "Software Programmer",
      employmentType: "Permanent",
      company: "Interactive Education Limited",
      location: "Gurgaon",
      current: false,
      startDate: new Date("2009-06-01"),
      endDate: new Date("2010-04-30"),
      description:
        "I was responsible for writing code for an interactive education platform",
    },
  ],
  blogPosts: [
    {
      title: "Transforming our ways of working",
      date: new Date("2020-04-23"),
      url:
        "https://medium.com/engineered-publicis-sapient/transforming-our-ways-of-working-wow-300a62546717",
      source: "medium",
      description:
        "Prologue: It’s been a while: we haven’t met our friends, families, or even neighbors in-person for the last few weeks, and the credit goes to the COVID-19 pandemic. We are all going through such…",
    },
    {
      title: "Story of client empathy and technology adaptation",
      date: new Date("2019-10-11"),
      url:
        "https://www.linkedin.com/pulse/story-client-empathy-technology-adaptation-deepak-bhardwaj/",
      source: "linkedin",
      description:
        "During 2008 financial crisis, several investment banks, across countries, collapsed. To promote the financial stability of the country - many financial regulators emerged, and regulatory guidelines enforced...",
    },
    {
      title: "Digital Operations Assistant",
      date: new Date("2018-06-03"),
      url:
        "https://www.linkedin.com/pulse/digital-operations-assistant-deepak-bhardwaj/",
      source: "linkedin",
      description:
        "In an enterprise application, ops and support teams plays a critical role in success of the application. Supporting a 24 x 7 x 365 running enterprise application is not an easy job; it becomes even harder with number...",
    },
  ],
  achievements: [
    {
      title: "Associate Cloud Engineer",
      provider: "googlecloud",
      issueData: new Date("2020-05-01"),
      expiryDate: new Date("2022-05-31"),
    },
    {
      title: "Workshop Participation: Digital Photo Manipulation by Dheny Patungka",
      provider: "adobephotoshop",
      issueData: new Date("2018-01-26"),
      expiryDate: null,
    },
    {
      title: "Learning Terraform",
      provider: "linkedin",
      issueData: new Date("2020-05-01"),
      expiryDate: null,
    },
    {
      title: "Modernizing Data Lakes and Data Wharehouses with GCP",
      provider: "coursera",
      issueData: new Date("2020-05-01"),
      expiryDate: null,
    },
    {
      title: "DevSecOps: Continuous Application Security",
      provider: "linkedin",
      issueData: new Date("2020-05-01"),
      expiryDate: null,
    },
    {
      title: "Big Data and Machine Learning Fundamentals",
      provider: "coursera",
      issueData: new Date("2020-05-01"),
      expiryDate: null,
    },
  ],
};

export default portfolio;
