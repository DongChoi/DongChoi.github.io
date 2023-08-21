"use client";

import Image from "next/image";
import React from "react";
import LinkButton from "./LinkButton";

const projects: Record<string, Project> = {
  theCoreLoop: {
    title: "The Core Loop",
    imagePath: "/projects/pic10.png",
    description:
      "Level up your gaming dreams! This application unites developers, designers, and players on a platform inspired by Product Hunt,empowering enthusiasts to unveil, explore, and elevate gaming projectswhile staying ahead of industry trends.",
    github: "https://github.com/0xfrian/thecoreloop",
    websiteUrl: "https://thoecoreloop.gg/",
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
      "An app with registration, login, and job application features, focusing on test-driven development to attain a high 99.95% test coverage. GitHub repository showcases the project's details, including building, running, and testing instructions.",
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
  const populateProjects = () => {
    const projectKeys = Object.keys(projects);

    const projectsJSX = projectKeys.map((projectName, idx) => {
      const image = (
        <div className="md:w-1/2 mb-4 md:mx-5">
          <Image
            className="rounded-md"
            src={projects[projectName].imagePath}
            width={1000}
            height={1000}
            alt={projects[projectName].title}
            layout="responsive"
          />
        </div>
      );
      /* TODO: get ready for mobile responsive design */
      const description = (
        <div className="md:w-1/2 mb-4 md:mx-5 px-6 text-2xl rounded-md bg-slate-400 flex flex-col">
          <span className="mt-5  text-2xl">{projects[projectName].title}</span>
          <br />
          <p className="relative  text-xl">
            {projects[projectName].description}
          </p>
          <div className="flex mt-5 justify-center space-x-5">
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
          className="bg-slate-500 z-10 md:py-20 w-full flex flex-col md:flex-row"
        >
          {idx % 2 === 0 ? (
            <>
              {image} {description}
            </>
          ) : (
            <>
              {description} {image}
            </>
          )}
        </div>
      );
    });
    return projectsJSX;
  };
  const projectsJSX = populateProjects();

  return <div className="">{projectsJSX}</div>;
}

export default Projects;
