export interface IPortfolio {
  name: string;
  story: string;
  experience: IExperience[];
  topSkills: ISkill[];
  skills: string[];
  socialProfile: ISocialProfiles;
  blogPosts: IBlogPost[];
  achievements: IAchievement[];
}

export interface IExperience {
  jobTitle: string;
  employmentType: string;
  company: string;
  location: string;
  current: boolean;
  startDate: Date;
  endDate?: Date | null;
  description: string;
}

export interface ISkill {
  name: string;
  level: number;
}

export interface ISocialProfiles {
  github?: string;
  linkedIn?: string;
  twitter?: string;
  instagram?: string;
}

export interface IBlogPost {
  title: string;
  date: Date;
  url: string;
  description: string;
  source: string;
}

export interface IAchievement {
  title: string;
  icon: string;
  issuer: string;
  issueData: Date;
  expiryDate: Date | null;
}