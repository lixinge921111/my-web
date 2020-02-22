import React from "react";
import YepstrLogo from "../assets/yepstr.png";
import KILogo from "../assets/ki.jpg";
import SCLogo from "../assets/sc.jpeg";
import SinglePosition from "./SingleExperience";
import Fade from "react-reveal/Fade";

type ExperienceLink = {
  link: string;
  title: string;
  internal?: boolean;
};

export type Experience = {
  logo: string;
  company: string;
  location: string;
  title: string;
  startDate: string;
  endDate?: string;
  description?: string[];
  links?: ExperienceLink[];
  key: string;
};

const EXPERIENCES: Experience[] = [
  {
    logo: YepstrLogo,
    company: "Yepstr",
    location: "Stockholm, Sweden",
    title: "Developer",
    startDate: "August 2019",
    description: [
      "As a fullstack software developer, I contribute in developing our Yepstr app in React Native and TypeScript. I work as a second-line customer support, actively solving technical issues reported by customers. With interest in customer behavior analysis, I also contribute as a data analyst in the team, helping with analyzing customer data and find our optimal marketing target for development."
    ],
    links: [
      {
        link: "https://www.yepstr.com/",
        title: "Yepstr Homepage"
      }
    ],
    key: "yepstr"
  },
  {
    logo: SCLogo,
    company: "SmartCoding x NewbieGuide",
    location: "Stockholm, Sweden",
    title: "Junior Developer",
    startDate: "May 2019",
    endDate: "June 2019",
    description: [
      "Worked for Newbie Guide group to build a forum-based website involving users interaction. Tasks within the project include web design, registration form, token authetication, password reset, pagination, database management, classification and filtering, implement external APIs and packages, machine learning with tensorflow, responsive design of the web, tests with Jest/Enzyme/react-testing-library/django APITestCase etc.",
      "Programming mainly in Python and JavaScript. Backend development was done in Django and REST framework with database management in SQLite3, frontend development was done in React. Deployment was done on netlify and heroku."
    ],
    links: [
      {
        link: "http://www.smartcoding.se/",
        title: "Smartcoding Homepage"
      }
    ],
    key: "sc"
  },
  {
    logo: KILogo,
    company: "Karolinska Instiutet, Science for Life Laboratory",
    location: "Stockholm, Sweden",
    title: "Doctoral Student Researcher",
    startDate: "June 2016",
    endDate: "October 2018",
    description: [
      "Hands on experience in wet-lab and computational biology analysis using Python, R and Matlab",
      "Responsible for adapting and developing experimental and computational pipeline for DNA/RNA in situ hybridization probes generation",
      "Worked on several research projects in genome and chromosome organization using in situ hybridization/visualization and next-generation sequencing techniques; Rewarded Karolinska Institutet Travel Grant in 2018 to attend the EMBL conference"
    ],
    links: [
      {
        link: "https://www.scilifelab.se/",
        title: "SciLifeLab Website"
      }
    ],
    key: "ki"
  }
];

export const Experience = () => {
  return (
    <>
      <h3>Experience</h3>
      <Fade duration={1000}>
        {EXPERIENCES.map(experience => {
          return (
            <SinglePosition experience={experience} key={experience.key} />
          );
        })}
      </Fade>
    </>
  );
};
