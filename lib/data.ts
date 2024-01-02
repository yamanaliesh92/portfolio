import Img1 from "@/public/corpcomment.png";
import Img2 from "@/public/rmtdev.png";
import Img3 from "@/public/wordanalytics.png";
import { IProjectsData } from "@/types";

export const links = [
  {
    id: 1,
    name: "Home",
    hash: "#home",
  },
  {
    id: 2,
    name: "About",
    hash: "#about",
  },
  {
    id: 3,
    name: "Projects",
    hash: "#projects",
  },
  {
    id: 4,
    name: "Skills",
    hash: "#skills",
  },
] as const;

export const projectsData: IProjectsData[] = [
  {
    id: 1,
    title: "Foody",

    description: "food restaurant using nest and react ",
    tags: [
      "React",
      "Nest.js",
      "axios",
      "PostgresSql",
      "CQRS",
      "docker",
      "microservice",
      "Gateway",
      "Tailwind",
      "typeOrm",
      "TypeScript",
      "redux toolkit",
      "rest api",
    ],
    imageUrl: Img1,
    link: "https://github.com/yamanaliesh92/ResturantsFood",
  },
  {
    id: 2,
    title: "Resume Creator",
    description: " nest and next with graphQl",
    tags: [
      "next js",
      "TypeScript",
      "Nest.js",
      "CQRS",
      "docker",
      "Tailwind",
      "prisma",
      "Graphql",
      "apolloClient",
      "apolloServer",
    ],
    imageUrl: Img2,
    link: "https://github.com/yamanaliesh92/resume-in-graphaql",
  },
  {
    id: 3,
    title: "Car Shop",
    description: "car shop using nextjs and nestjs",
    tags: [
      "nest js",
      "Next.js",
      "Tailwind",
      "react-query",
      "kafka",
      "typeScript",
      "CQRS",
      "darkMode",
      "microservice",
      "docker",
      "unit test",
      "e2e test",
      "axios",
      "typeOrm",
    ],

    imageUrl: Img3,
    link: "https://github.com/yamanaliesh92/Car-Shop",
  },

  {
    id: 4,
    title: "Task Manager",
    description: "task mangers using nextjs and express",
    tags: [
      "express",
      "Next.js",
      "Tailwind",
      "react-query",
      "next-auth",
      "e2e test",
      "typescript",
      "mongoose",
      "mongodb",
      "docker",
      "unit test",
      "e2e test",
      "axios",
    ],

    imageUrl: Img3,
    link: "https://github.com/yamanaliesh92/Car-Shop",
  },

  {
    id: 5,
    title: "Facebook Clone",
    description: "facebook using react and nest js",
    tags: [
      "react",
      "Nest.js",
      "migration",
      "swaggerUI",
      "css",
      "react-query",
      "e2e test",
      "postgresQql",
      "typescript",
      "integration test",
      "react-query",
      "unit test",
      "axios",
      "typeOrm",
    ],

    imageUrl: Img3,
    link: "https://github.com/yamanaliesh92/facebookInReactt",
  },

  {
    id: 6,
    title: "Portfolio",
    description: "A portfolio using next js",
    tags: ["Next.js", "tailwind", "typescript", "Framer Motion"],

    imageUrl: Img3,
    link: "https://github.com/yamanaliesh92/portfolio",
  },
];

export const LibrariesData = [
  "Jwt",
  "Migration",
  "Jest",
  "Cypress",
  "Styled Components",
  "React-Query",
  "Tailwind",
  "Prisma",
  "Mongoose",
  "Redux",
  "ApolloClient",
  "Axios",
  "Framer Motion",
] as const;

export const skillsData = [
  {
    id: 1,
    name: "NextJS:",
    title:
      "Employed Next.js to create dynamic and performant web applications, capitalizing on its server-side rendering capabilities and seamless integration with React for a streamlined development process",
  },
  {
    id: 2,
    name: "React & Fronted stack:",
    title:
      "Expertly incorporated React, along with Redux Toolkit for state management, Tailwind CSS for responsive and stylish designs, Framer Motion for smooth animations, React Query for efficient data fetching, and Axios for seamless API integration, ensuring a robust and modern frontend development stack",
  },
  {
    id: 3,
    name: "NestJS Framework: ",
    title:
      "I use nestjs for building both microservices and monolothic services for its clear and structured approach with Dependency injection and modeling system ",
  },
  {
    id: 4,
    name: "Express:",
    title:
      "Utilized the simplicity of express to build simple and performant nodejs applications",
  },
  {
    id: 5,
    name: "Graphql & Apploa Server:",
    title:
      "Implemented GraphQL in conjunction with Apollo Server to efficiently query and manage data, leveraging the power of a flexible schema and optimizing data fetching for enhanced performance in web applications.",
  },
  {
    id: 6,
    name: "ORMs (Prisma & TypeORM):",
    title:
      " Applied Prisma and TypeORM as ORMs to streamline database interactions in projects, simplifying data modeling, query execution, and database management for enhanced efficiency and maintainability.",
  },
  {
    id: 7,
    name: "Monoithic & Microservices:",
    title:
      "Developed both monolithic and microservices architectures, employing monolithic designs for cohesive and streamlined applications, and microservices for scalable and modular systems, optimizing flexib",
  },
  {
    id: 8,
    name: "Krakend:",
    title:
      "used krakend to build high performant web services gateway, utilizing its validation, security measures and data manipulation capabilities",
  },
  {
    id: 9,
    name: "CQRS:",
    title:
      "Implemented Command Query Responsibility Segregation (CQRS) to enhance system scalability and separation of concerns, allowing distinct handling of commands and queries for optimized performance in complex application architectures.",
  },

  {
    id: 10,
    name: "Kafka:",

    title:
      " I use kafka mainly as broker between multiple microservices for streaming message/data and events, I am familiar with kafka setup as well as integration ",
  },
  {
    id: 11,
    name: "Docker and docker compose:",
    title:
      "Utilized Docker for containerization, enabling seamless deployment and isolation of applications, and Docker Compose to orchestrate multi-container environments, streamlining development, testing, and deployment workflows for increased efficiency in project management.",
  },
  {
    id: 12,
    name: "Git/Github/Gitlab:",
    title:
      "Proficient in Git for version control, employing branching, merging, and collaboration workflows, and experienced with GitHub for efficient code hosting, collaboration, and managing repositories, ensuring organized and collaborative development processes",
  },

  {
    id: 13,
    name: "SQL (postgresql TypeORM/prisma) : ",

    title:
      "I used mainly postgresSQL via TypeORM and prisma but i am also comfortable executing raw queries when needed.",
  },
  {
    id: 14,
    name: "No SQL (mongodb via mongoose/TypeORM):",

    title:
      "I am familiar with mongodb and mongoose and have used them in multiple express projects",
  },
];
