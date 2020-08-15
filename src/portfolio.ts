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
        "Writing code for assigned modules within defined time frame" +
        "Designing views using XAML, Visual Studio or Expression Blend" +
        "Developing Windows Services" +
        "Developing WCF Services" +
        "Optimize the code as per FxCop rules" +
        "Writing unit test cases for MS Unit" +
        "Review the code as per company/industry coding standards & code optimizations" +
        "Guiding team mates on completing their modules" +
        "Delivery of modules within defined timelines" +
        "Exploring new technologies",
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
        "Primary Responsibilities" +
        "Writing code for assigned modules within defined timeframe." +
        "Review the code against company/industry coding standards & code optimisations." +
        "Preparing deployment packages & update releases using InstallShield and/or Microsoft .Net Setup Project" +
        "Writing technical documentations & release notes.",
    },
  ],
};

export default portfolio;
