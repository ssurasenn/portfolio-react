import project1 from '../assets/img_project/project1.png'
import project2 from '../assets/img_project/project2.png'
import project3 from '../assets/img_project/project3.png'
import project4 from '../assets/img_project/project4.png'
import project5 from '../assets/img_project/project5.png'
import project6 from '../assets/img_project/project6.png'

export const EDUCATION = [
  {
    year: "2024 - Present",
    role: "Full-Stack Development",
    academy: "WeStride Institute of Technology", 
    GPA: "~"
  },
  {
    year: "2016 - 2020",
    role: "Marketing Program",
    academy: "Khonkaen University",
    GPA: "2.43",
  },
  {
    year: "2012 - 2015",
    role: "Student",
    academy: "Roi-et Wittayalai",
    GPA: "3.56"
  },  
];

export const myproject_data = [
  
  {
    title: "Task Management App",
    image: project1,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Javascript"],
  },
  {
    title: "SteakTime Template",
    image: project2,
    description:
      "Creating interface layout with HTML5 and decorating responsive user interface with CSS.",
    technologies: ["HTML", "CSS", "Javascript"],
  },
  {
    title: "Shin-Yokohama-Ramen",
    image: project3,
    description:
      "Design a website about Shin-Yokoyama Ramen Museum information and introduce the famous ramen menu in Japan, Using ReactLeaflet to display a map of this location",
    technologies: ["HTML", "React","TailwindCSS","ReactLeaflet"],
  },  
  {
    title: "E-Commerce Website",
    image: project4,
    description:
      "A fully functional e-commerce website with features like product , shopping cart, and user authentication, simulating payment via credit card or promptpay.",
    technologies: ["React", "Express.js", "mySQL","TailwindCSS"],
  },
  {
    title: "KohLarn Website",
    image: project5,
    description:
      "Using Clerk:Authentication to login via Gmail or Facebook and stores various landmarks in the Supabase database to Introducing various interesting landmarks on Koh Larn.",
    technologies: ["React","Next.js","Clerk","Supabase"],
  },
  {
    title: "Movies App",
    image: project6,
    description:
      "Create Movie Search App in React JS. It's API based project handle API and how to get data from API and display it inside the React Project",
    technologies: ["React","API", "TailwindCSS", ],
  }
];

export const CONTACT = {
  address: "nuemuang Sub-district, Roi Et,45000,Thailand",
  phoneNo: "+66 61-2624544",
  email: "surawutt.srn@gmail.com",
};
