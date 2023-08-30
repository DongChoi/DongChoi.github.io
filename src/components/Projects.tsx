"use client";

import Image from "next/image";
import React, { useState } from "react";
import LinkButton from "./LinkButton";

const projects: Record<string, Project> = {
  theCoreLoop: {
    title: "The Core Loop",
    imagePath: "/projects/pic10.png",
    description:
      " This app brings devs, designers, and players together, like a gaming-inspired Product Hunt. Elevate projects, explore, and stay ahead in gaming trends.",
    github: "https://github.com/0xfrian/thecoreloop",
    websiteUrl: "https://thecoreloop.gg/",
  },
  productiver: {
    description:
      "This application tracks your tasks and shows diagnostics on your productivity! Sign up and log in with a click of a button using AuthO!",
    imagePath: "/projects/pic13.png",
    title: "Productiver",
    github: "https://github.com/DongChoi/learn-tailwind",
    websiteUrl: "https://productiver.andrewchoi.dev/",
  },
  investmentTracker: {
    description:
      "Seamlessly monitor portfolios, calculate gains, and make informed decisions with real-time updates and intuitive visualizations. Simplify portfolio management and enhance financial choices.",
    imagePath: "/projects/pic12.png",
    title: "Investment Tracker",
    github: "https://github.com/DongChoi/portfolio-tracker",
    websiteUrl: "https://ait-investments.herokuapp.com/",
  },
  sfFoodieCrawl: {
    title: "SF Foodie Crawl",
    imagePath: "/projects/pic11.png",
    description:
      "Checkout your local food trucks and carts to support small business owners, all the while discovering delicious cuisine!",
    github: "https://github.com/dongchoi/lighthall-foodtruck",
    websiteUrl: "https://sf-foodie-crawl.andrewchoi.dev/",
  },
  picturePantry: {
    description:
      "An app to browse images and favorite them for later viewing. No sign up required!",
    imagePath: "/projects/pic02.png",
    title: "Picture Pantry",
    github: "https://github.com/DongChoi/Quackathon-save-your-fav-image",
    websiteUrl: "https://picturepantry.andrewchoi.dev/",
  },
  imageTimecapsule: {
    description:
      "Heart broken? Can't stop looking at pictures of you two together? Can't bear to delete them? We'll hold onto them for you until you are ready!",
    imagePath: "/projects/pic03.png",
    title: "Image Time Capsule",
    github: "https://github.com/DongChoi/image-time-capsule-react",
    websiteUrl: "https://github.com/DongChoi/image-time-capsule-flask",
  },
  Jobly: {
    description:
      "An app with registration, login, and job application features, using test-driven development to attain a high 99.95% test coverage.",
    imagePath: "/projects/pic01.png",
    title: "Jobly",
    github: "https://github.com/DongChoi/jobly",
    websiteUrl: "https://github.com/DongChoi/express-jobly",
  },
  Warbler: {
    description:
      "Unleash your thoughts with this app. A dynamic platform that lets you share your ideas, connect with others, and stay up-to-date with trending conversations. ",
    imagePath: "/projects/pic06.png",
    title: "Warbler",
    github: "https://github.com/DongChoi/warbler",
    websiteUrl: "",
  },
};

interface Project {
  title: string;
  description: string;
  imagePath: string;
  github: string;
  websiteUrl: string;
}

function Projects() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const handleMouseOver = (projectName: string) => {
    setHoveredProject(projectName);
  };

  const handleMouseOut = () => {
    setHoveredProject(null);
  };

  const populateProjects = () => {
    const projectKeys = Object.keys(projects);

    const projectsJSX = projectKeys.map((projectName, idx) => {
      const image = (
        <div className="">
          <Image
            className="rounded-md"
            src={projects[projectName].imagePath}
            width={2500}
            height={2500}
            alt={projects[projectName].title}
            // layout="responsive"
          />
        </div>
      );
      /* TODO: get ready for mobile responsive design
          - 2560 x 1440 
      */
      const description = (
        <div
          className={`absolute w-full h-full lg:mt-0 px-5 rounded-md 
          bg-slate-700 flex flex-col items-center justify-center 
          ${
            projectName == hoveredProject ? "opacity-95 " : "opacity-0"
          } transition-opacity duration-300 ease-in-out`}
        >
          {" "}
          <span
            className="text-center bg-clip-text text-transparent  
          bg-gradient-to-r from-amber-700 to-blue-700 font-semibold text-4xl"
          >
            {projects[projectName].title}
          </span>
          <br />
          <p className="px-2 md:text-lg xl:text-xl">
            {projects[projectName].description}
          </p>
          <div className="flex space-x-10 mt-10 justify-center">
            <LinkButton
              buttonText={"Github"}
              url={projects[projectName].github}
            />
            {projects[projectName].websiteUrl && (
              <LinkButton
                buttonText="Website"
                url={projects[projectName].websiteUrl}
              />
            )}
          </div>
        </div>
      );
      return (
        <div
          key={idx}
          className={`my-5 lg:my-10 
          relative flex lg:m-28 `}
          onMouseEnter={() => handleMouseOver(projectName)}
          onMouseLeave={handleMouseOut}
        >
          {image}
          {description}
        </div>
      );
    });
    return projectsJSX;
  };
  const projectsJSX = populateProjects();

  return (
    <div id="projects-section" className="lg:px-5 pb-10 flex flex-col">
      <span className="mt-4 pb-5 pt-20 font-bold text-4xl">Projects</span>
      {projectsJSX}
    </div>
  );
}

export default Projects;
