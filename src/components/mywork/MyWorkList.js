import React from "react";
import WorkCard from "./WorkCard";
import berbagi from "../../imgs/berbagi.png";
import myToys from "../../imgs/myToys.png";
import netflix from "../../imgs/netflix_clone.png";

const works = [
  {
    title: "My Toys",
    thumbnail: myToys,
    description: "Full stack e-commerce for Toys",
    technologies: [
      "React ",
      "Bootstrap ",
      "Redux ",
      "NodeJS ",
      "MongoDB ",
      "Express ",
      "Stripe ",
    ],
    link: "https://frontend-client-lwop5hcgf-nicwirnt.vercel.app",
    linkAdmin: "https://ecommerce-frontend-admin-five.vercel.app/",
  },
  {
    title: "Netflix Clone",
    thumbnail: netflix,
    description: "Netflix Clone",
    technologies: [
      "NextJS ",
      "Tailwind ",
      "MongoAtlas ",
      "PrismaDB ",
      "NextAuth",
    ],
    link: "https://netflix-clone-nextjs-tailwind.vercel.app/",
  },
  {
    title: "Berbagi",
    thumbnail: berbagi,
    description: "A social media photo sharing",
    technologies: ["ReactJS ", "Tailwind ", "Sanity "],
    link: "https://berbagi-frontend.vercel.app/",
  },
];

const MyWorkList = () => {
  return (
    <>
      <div className="mt-10 px-4 md:px-12 space-y-8 min-h-[25vw]">
        <div className="text-neutral-300 text-xl lg:text-2xl md:px-40 font-semibold mb-4">
          My Work
        </div>
        <div className="grid grid-cols-3 gap-2">
          <WorkCard works={works} />
        </div>
      </div>
    </>
  );
};

export default MyWorkList;
