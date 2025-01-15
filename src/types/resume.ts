// src/types/resume.ts
export interface PersonalInfo {
    name: string;
    email: string;
    phone: string;
    location: string;
    summary: string;
  }
  
  export interface Experience {
    id: string;
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
  }
  
  export interface Education {
    id: string;
    institution: string;
    degree: string;
    graduationDate: string;
    gpa: string;
  }
  
  export interface ResumeData {
    personalInfo: PersonalInfo;
    experience: Experience[];
    education: Education[];
    skills: string[];
  }