// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';



// Education Section Logo's
import itmlogo from './assets/education_logo/ITMlogo.jpg';
import JubileeSchool from './assets/education_logo/Jubilee-School.png';


// Project Section Logo's
import blogapp from './assets/work_logo/blogapp.png';
import errorlogix from './assets/work_logo/errorlogix.png';
import pulsechat from './assets/work_logo/pulsechat.png';




export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },

    ],
  },
  {
    title: 'Backend',
    skills: [

      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

  
  export const education = [
    {
      id: 0,
      img: itmlogo,
      school: "ITM Gida,Gkp",
      date: " 2022 -  2026 (Expected)",
      grade: "7.4 CGPA (Up to 6th Sem)",
      desc: "I am currently pursuing my Bachelor of Technology (BTech) in Computer Science and Engineering from ITM GIDA, Gorakhpur, and I am in my final year. Over the course of my degree, I have developed a strong foundation in computer science and software development. My studies have included core subjects such as Data Structures and Algorithms, Operating Systems, Computer Networks, Database Management Systems, Artificial Intelligence, and Web Development. In addition to academics, I have actively participated in coding challenges, workshops, and technical events, which have enhanced my problem-solving skills and technical knowledge. My experience at ITM GIDA has played a key role in shaping both my technical abilities and professional growth, preparing me to contribute effectively in the field of technology.  ",
        degree: "Bachelor of Technology - CSE (Computer Science Engineering)",
    },
    {
      id: 1,
      img: JubileeSchool,
      school: "Govt. Jubilee Inter College, Gorakhpur",
      date: " 2018 - 2022",

      desc: "I completed my 10th and 12th standard from Government Jubilee Inter College, Gorakhpur, a reputed government institution known for its academic discipline and value-based education. During my schooling, I focused on building a strong academic foundation, developing logical thinking, and enhancing my problem-solving skills. The supportive learning environment and dedicated faculty at the school played an important role in shaping my educational journey and preparing me for higher studies in the field of technology.",
      degree: "High School (10th) and Intermediate (12th, Science Stream)",
    } 
  ];
  
  export const projects = [
    {
      id: 0,
      title: "ErrorLogix",
      description:
        "ErrorLogix AI is an intelligent code review platform powered by Gemini API with custom prompts to provide detailed, human-like feedback on code. It goes beyond error detection by offering fix suggestions along with relevant Stack Overflow references, making it a practical learning tool for developers. To keep users updated with the latest industry trends, the platform integrates the Dev.to API to fetch and display 20+ trending blogs directly within the dashboard.",
      image: errorlogix,
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "REST APIs"],
      github: "https://github.com/Shivam8887/Errorlogix",
      webapp: "https://errorlogix2-frontend.onrender.com/",
    },
    {
      id: 1,
      title: "PulseChat",
      description:
        "PulseChat is a real-time messaging application that supports both private and group chats using Socket.io WebSockets. It includes essential features like live typing indicators, online/offline status, and persistent chat history, ensuring a seamless communication experience. With optimized WebSocket handling and MongoDB integration, the platform provides stable and scalable performance for real-time interactions.",
      image: pulsechat,
      tags: ["React.js", "Node.js", "Express.js", "Socket.io", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/Shivam8887/PulseChat",
      webapp: "https://pulsechat-3.onrender.com/",
    },
    {
      id: 2,
      title: "BlogApp",
      description:
        "A feature-rich blogging platform that allows users to write, edit, delete, and interact with blogs through likes and comments. The app ensures data security with JWT authentication, Bcrypt encryption, and cookies, while maintaining a smooth user experience across devices. The interface is fully responsive and mobile-friendly, designed with Tailwind CSS for a modern look and feel.",
      image: blogapp,
      tags: ["React.js", "Node.js", "Express.js"," MongoDB", "Tailwind CSS"],
      github: "https://github.com/Shivam8887/BlogApp",
      webapp: "https://blogapp-cit3.onrender.com/",
    }
   
  ];  