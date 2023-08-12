import Image from "next/image";
import React from "react";

const projects: Record<string, Project> = {
  theCoreLoop: {
    title: "The Core Loop",
    imagePath: "/projects/pic10.png",
    description:
      "Level up your gaming dreams! This application unites developers, designers, and players on a platform inspired by Product Hunt,empowering enthusiasts to unveil, explore, and elevate gaming projectswhile staying ahead of industry trends.",
  },
  productiver: {
    description: "muahahah",
    imagePath: "/projects/pic13.png",
    title: "Productiver",
  },
  investmentTracker: {
    description: "Track your investment!",
    imagePath: "/projects/pic12.png",
    title: "Investment Tracker",
  },
  sfFoodieCrawl: {
    title: "SF Foodie Crawl",
    imagePath: "/projects/pic11.png",
    description:
      "Checkout your local food trucks and carts to support small business owners all the while eating delicious food!",
  },
  picturePantry: {
    description: "Save photos you like",
    imagePath: "/projects/pic02.png",
    title: "Picture Pantry",
  },
  imageTimecapsule: {
    description:
      "Someone broke your heart? Can't stop looking at pictures of you two together? Can't bear to delete them? We'll hold onto them for you until you are ready",
    imagePath: "/projects/pic03.png",
    title: "Image Time Capsule",
  },
  Jobly: {
    description: "We took their jyobs~!",
    imagePath: "/projects/pic01.png",
    title: "Jobly",
  },
  Warbler: {
    description: "Twitter is now X?! how about just warbler!",
    imagePath: "/projects/pic06.png",
    title: "Warbler",
  },
};

interface Project {
  title: string;
  description: string;
  imagePath: string;
}

function Projects() {
  const populateProjects = () => {
    const projectKeys = Object.keys(projects);

    const projectsJSX = projectKeys.map((projectName, idx) => {
      const image = (
        <Image
          className="w-1/2 rounded"
          src={projects[projectName].imagePath}
          width={500}
          height={500}
          alt={projects[projectName].title}
        />
      );
      const description = (
        <div className="w-1/2 text-2xl">
          <span>{projects[projectName].title}</span>

          <p>{projects[projectName].description}</p>
        </div>
      );
      return (
        <div className="bg-slate-500 w-full space-x-10 flex row h-4/5">
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
