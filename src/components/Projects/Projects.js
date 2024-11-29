import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

function Projects() {
  const projects = [
    
    {
      title: "AGV-Management-and-Real-Time-Package-Tracking-System",
      description:
        "This repository contains a backend application for managing Automated Guided Vehicles (AGVs) and tracking package deliveries in real time.",
      skills: ["Node.js", "MongoDB", "API Development"],
      githubLink: "https://github.com/Sajeevan-Sivapalan/AGV-Management-and-Real-Time-Package-Tracking-System",
    },
    {
      title: "Auto Parts",
      description:
        "AutoPart is a feature-rich Android application for an automobile parts e-commerce platform, developed using Android Studio. The app includes all essential e-commerce pages, such as product listings, detailed product views, and a shopping cart. It incorporates advanced filter and search functionalities, allowing users to quickly locate specific parts.",
      skills: ["Android Studio", "Java", "Front-End Development", "Front-End Design"],
      githubLink: "https://github.com/Sajeevan-Sivapalan/Auto-Parts",
    },
    {
      title: "Build Zone - Web and Mobile Applications for the Construction Industry",
      associated: "Associated with SLIIT",
      description:
        "This project features a web application and a mobile application, both powered by a unified backend. This app enables users in the procurement industry to manage their purchase orders.",
      skills: ["MERN Stack", "Flutter", "Tailwind CSS", "Version Control", "Git"],
      githubLink: "https://github.com/Sajeevan-Sivapalan/Build-Zone",
    },
    {
      title: "Educational Platform for Online Learning",
      associated: "Associated with SLIIT",
      description:
        "A Web application with Express.js and MongoDB backend, and Vite React + Tailwind CSS frontend. Docker Compose manages containers. Features include course management, payment integration, SMS/email notifications. Focus on scalability, security, and microservices architecture.",
      skills: ["MERN Stack", "Docker", "Microservices", "Tailwind CSS"],
      githubLink: "https://github.com/Sajeevan-Sivapalan/Educational-Platform-for-Online-Learning",
    },
    {
      title: "Exam-Result-Management-System",
      description:
        "Admin can add students' marks and the exam result management system will calculate and store them in the database. Students can view their results using the index number. If there are any issues with the result students can report them to admin.",
      skills: ["Web Development"],
      githubLink: "https://github.com/Sajeevan-Sivapalan/Exam-Result-Management-System",
    },
    {
      title: "Exception Logger Library",
      description:
        "This library for Spring Boot applications captures and logs any exceptions thrown within the application. It stores these logs in a database and provides an API to retrieve the logs in a structured JSON format. Each log entry includes detailed information such as the type of exception, the error message, the stack trace, and the source class and method where the exception occurred.",
      skills: ["Spring Boot", "Error Analysis"],
      githubLink: "https://github.com/Sajeevan-Sivapalan/Exception-Logger-Library",
    },
    {
      title: "Farm Connect - Mobile Application for Farmers and Customers",
      associated: "Associated with SLIIT",
      description:
        "A mobile application that connects farmers and customers directly. The vision for this app was to create a more transparent platform with fair prices for farmers and fresh, high-quality products for customers, while reducing middlemen commissions.",
      skills: ["Flutter", "Node.js", "MongoDB", "Git", "Version Control"],
      githubLink: "https://github.com/Sajeevan-Sivapalan/Farm-Connect",
    },
    {
      title: "Human-Resource-Management-System",
      associated: "Associated with SLIIT",
      description:
        "The system contains modules for employee management, payroll management, training and development management, job vacancy management, transport management, leave and attendance management, and resource management as a project for Information Technology Project (ITP).",
      skills: ["Web Development", "MERN Stack", "Version Control", "Git"],
      githubLink: "https://github.com/Sajeevan-Sivapalan/Human-Resource-Management-System",
    },
    {
      title: "Inventory-Management-System",
      description:
        "This is a basic inventory management system that updates and maintains stock details in inventory.",
      skills: ["Web Development", "HTML5", "CSS", "JavaScript", "PHP", "MySQL"],
      githubLink: "https://github.com/Sajeevan-Sivapalan/Inventory-Management-System",
    },
    {
      title: "LuxuryX Vulnerability Fixed Repository",
      associated: "Associated with SLIIT",
      description:
        "This repository details vulnerabilities fixed in the LuxuryX e-commerce platform, including sensitive data exposure, XSS, CSRF, NoSQL injection, CORS misconfigurations, insecure dependencies, and more. It outlines their impact and resolutions, improving security, reliability, and resilience across the platform.",
      skills: ["XSS", "MERN Stack", "CORS", "NoSQL", "Security"],
      githubLink: "https://github.com/Sajeevan-Sivapalan/LuxuryX-Vulnerability-Fixed-Repository",
    },
    {
      title: "Mongo Backup Service Library",
      description:
        "This is a Spring Boot-based library that provides tools for backing up and restoring MongoDB databases. It includes features such as compression, scheduling, and selective collection backups.",
      skills: ["Spring Boot", "MongoDB"],
      githubLink: "https://github.com/Sajeevan-Sivapalan/Mongo-Backup-Service-Library",
    },
    {
      title: "Online-Examination-Management-System",
      associated: "Associated with SLIIT",
      description:
        "The system is a Web-based examination management system developed using pure Java, as a project for the Object Oriented Programming Module. Using MySQL as the database management system.",
      skills: ["Java", "Web Development", "MySQL"],
      githubLink: "https://github.com/Sajeevan-Sivapalan/Online-Examination-Management-System",
    },
    {
      title: "Personal Portfolio Website",
      description:
        "Developed a responsive portfolio website using React, showcasing modern design principles and optimized for seamless user experience across devices.",
      skills: ["React.js", "Front-End Development", "Front-End Design"],
      githubLink: "https://github.com/Sajeevan-Sivapalan/Sajeevan-Sivapalan-Portfolio",
    },
    {
      title: "React Frontend Application Using NASA APIs",
      associated: "Associated with SLIIT",
      description:
        "A React frontend application that consumes data from NASA's public APIs. Developed using functional components, Tailwind CSS for styling, and a Node.js backend for user management, the application provides dynamic and interactive astronomy-related data. The application is deployed on Vercel.",
      skills: ["React.js", "Git", "Version Control", "Software Development"],
      githubLink: "https://github.com/Sajeevan-Sivapalan/React-Frontend-Application-Using-NASA-APIs",
    },
    {
      title: "Skin-Consultation-Center",
      description:
        "This is an application for a skin consultation center. This application has console and GUI interfaces. The console is used to manage doctor and doctor consultations. GUI is used to view doctor lists and allow patients to book a consultation and view booked consultations.",
      skills: ["Java", "Software Development"],
      githubLink: "https://github.com/Sajeevan-Sivapalan/Skin-Consultation-Center",
    },
    {
      title: "Solar Flare - Web Application for an Optical Store",
      associated: "Associated with SLIIT",
      description:
        "This web application provides an advanced virtual try-on experience. Users can browse glasses and use their device's camera to see how different styles look on them, offering a personalized experience.",
      skills: ["MERN Stack", "Tailwind CSS", "Version Control", "Git"],
      githubLink: "https://github.com/Sajeevan-Sivapalan/Enhanced-virtual-fitting-room",
    },
    {
      title: "University Timetable Management System",
      associated: "Associated with SLIIT",
      description:
        "A RESTful API backend system for a University Timetable Management System. It includes features for managing courses, timetables, room bookings, student enrollments, and notifications. The API emphasizes security, scalability, and comprehensive documentation. This is built on Node.js, Express.js, and MongoDB.",
      skills: [
        "MERN Stack",
        "Unit Testing",
        "Integration Testing",
        "Security Testing",
        "Performance Testing",
        "Version Control",
        "Git",
      ],
      githubLink: "https://github.com/Sajeevan-Sivapalan/University-Timetable-Management-System",
    },
    {
      title: "Wallet-App",
      associated: "Associated with SLIIT",
      description:
        "Financial planning app for the Mobile Application Development module project. Developed in Android Studio using Kotlin, and Firebase as the database.",
      skills: ["Software Development", "Android Studio", "Version Control", "Git", "Kotlin"],
      githubLink: "https://github.com/Sajeevan-Sivapalan/Wallet-App",
    },
    {
      title: "iCorner-ECommerce-Suite",
      associated: "Associated with SLIIT",
      description:
        "This repository serves as the central hub for the iCorner eCommerce solution, encompassing a full-stack platform designed to offer seamless online shopping experiences for users, efficient administrative controls for business management, and a robust backend for data processing and API handling.",
      skills: [
        "C#",
        "ASP.NET MVC",
        "Android Studio",
        "Kotlin",
        "React.js",
        "MongoDB",
        "Back-End Web Development",
        "Mobile Application Development",
        "Front-End Development",
      ],
      githubLink: "https://github.com/Sajeevan-Sivapalan/iCorner-ECommerce-Suite",
    },
  ];
  
  return (
    <Container
      fluid
      className="project-section"
      style={{
        background: "#1a1a2e",
        color: "#ffffff",
        padding: "80px 0",
      }}
    >
      <Container>
        <h1
          className="project-heading text-center"
          style={{
            fontSize: "2.5em",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          My Recent <span className="purple">Works</span>
        </h1>
        <p
          style={{
            color: "#b8b8d1",
            textAlign: "center",
            fontSize: "1.2em",
            marginBottom: "40px",
          }}
        >
          Here are a few projects I've worked on recently.
        </p>
        <Row className="d-flex align-items-stretch">
          {projects.map((project, index) => (
            <Col
              key={index}
              md={4}
              className="d-flex"
              style={{ marginBottom: "20px" }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                skills={project.skills}
                githubLink={project.githubLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
