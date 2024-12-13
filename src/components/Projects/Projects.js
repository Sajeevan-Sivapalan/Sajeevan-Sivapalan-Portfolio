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
      githubLink:
        "https://github.com/Sajeevan-Sivapalan/AGV-Management-and-Real-Time-Package-Tracking-System",
      image: "https://cdn.prod.website-files.com/6504b546bf98b084e1574f7e/65710cb2efe9cca290aa36d8_page-hero_solutions_amr-agv-fleet-management%402x.jpg",
    },
    {
      title: "Auto Parts",
      description:
        "AutoPart is a feature-rich Android application for an automobile parts e-commerce platform, developed using Android Studio. The app includes all essential e-commerce pages, such as product listings, detailed product views, and a shopping cart. It incorporates advanced filter and search functionalities, allowing users to quickly locate specific parts.",
      skills: ["Android Studio", "Java", "Front-End Development", "Front-End Design"],
      githubLink: "https://github.com/Sajeevan-Sivapalan/Auto-Parts",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7SriUAthwCOIeJz24TlTz-NXBI6bz-mtIcw&s",
    },
    {
      title: "Build Zone - Web and Mobile Applications for the Construction Industry",
      associated: "Associated with SLIIT",
      description:
        "This project features a web application and a mobile application, both powered by a unified backend. This app enables users in the procurement industry to manage their purchase orders.",
      skills: ["MERN Stack", "Flutter", "Tailwind CSS", "Version Control", "Git"],
      githubLink: "https://github.com/Sajeevan-Sivapalan/Build-Zone",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjP47_S3JKehtbDD9I7Kqc8nRKyFwRSkYX2Q&s",
    },
    {
      title: "Educational Platform for Online Learning",
      associated: "Associated with SLIIT",
      description:
        "A Web application with Express.js and MongoDB backend, and Vite React + Tailwind CSS frontend. Docker Compose manages containers. Features include course management, payment integration, SMS/email notifications. Focus on scalability, security, and microservices architecture.",
      skills: ["MERN Stack", "Docker", "Microservices", "Tailwind CSS"],
      githubLink:
        "https://github.com/Sajeevan-Sivapalan/Educational-Platform-for-Online-Learning",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmIF7SBsPeL3zG45kpz5yDE22YSHkyv-AEsA&s",
    },
    {
      title: "Exam-Result-Management-System",
      description:
        "Admin can add students' marks and the exam result management system will calculate and store them in the database. Students can view their results using the index number. If there are any issues with the result students can report them to admin.",
      skills: ["Web Development"],
      githubLink:
        "https://github.com/Sajeevan-Sivapalan/Exam-Result-Management-System",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLLdlMrkUST5DGA46KXrBLP-q6oFVQLbDa-g&s",
    },
    {
      title: "Exception Logger Library",
      description:
        "This library for Spring Boot applications captures and logs any exceptions thrown within the application. It stores these logs in a database and provides an API to retrieve the logs in a structured JSON format. Each log entry includes detailed information such as the type of exception, the error message, the stack trace, and the source class and method where the exception occurred.",
      skills: ["Spring Boot", "Error Analysis"],
      githubLink:
        "https://github.com/Sajeevan-Sivapalan/Exception-Logger-Library",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5KOJXPZfryrfSdIkzjEXs_A1J2ScNGQLptA&s",
    },
    {
      title: "Farm Connect - Mobile Application for Farmers and Customers",
      associated: "Associated with SLIIT",
      description:
        "A mobile application that connects farmers and customers directly. The vision for this app was to create a more transparent platform with fair prices for farmers and fresh, high-quality products for customers, while reducing middlemen commissions.",
      skills: ["Flutter", "Node.js", "MongoDB", "Git", "Version Control"],
      githubLink: "https://github.com/Sajeevan-Sivapalan/Farm-Connect",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLUa-ZRKO7w4xwD70vbLeBa3S0s39vnhpJWg&s",
    },
    {
      title: "Human-Resource-Management-System",
      associated: "Associated with SLIIT",
      description:
        "The system contains modules for employee management, payroll management, training and development management, job vacancy management, transport management, leave and attendance management, and resource management as a project for Information Technology Project (ITP).",
      skills: ["Web Development", "MERN Stack", "Version Control", "Git"],
      githubLink:
        "https://github.com/Sajeevan-Sivapalan/Human-Resource-Management-System",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXCYouyDvDa8_YPLb9QXzPp8Q6M4baweElrw&s",
    },
    {
      title: "Integrated Superbowl and Cruise System Management",
      associated: "Independent Project",
      description: "This project integrates two systems into a Java-based console application. The NFL Superbowl Information System provides data on Superbowls (1967–2024), allowing users to view results, detailed year info, and search by team or state. The Cruise Ship Administration System manages cruise operations, including ships, cabins, passengers, and excursions, enabling dynamic bookings and real-time updates. It showcases Java's ability to handle complex data and deliver interactive solutions.",
      skills: ["Java"],
      githubLink: "https://github.com/Sajeevan-Sivapalan/Integrated-Superbowl-and-Cruise-System-Management",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5PeSZ4hXF729cbX55r1BmiNt8xgTrxU3Rfw&s",
    }, 
    {
      title: "Inventory-Management-System",
      description:
        "This is a basic inventory management system that updates and maintains stock details in inventory.",
      skills: ["Web Development", "HTML5", "CSS", "JavaScript", "PHP", "MySQL"],
      githubLink:
        "https://github.com/Sajeevan-Sivapalan/Inventory-Management-System",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwZWrKlHXJ8sK0B-0ZWVoPdr3aoRwz--Pzig&s",
    },
    {
      title: "LuxuryX Vulnerability Fixed Repository",
      associated: "Associated with SLIIT",
      description:
        "This repository details vulnerabilities fixed in the LuxuryX e-commerce platform, including sensitive data exposure, XSS, CSRF, NoSQL injection, CORS misconfigurations, insecure dependencies, and more. It outlines their impact and resolutions, improving security, reliability, and resilience across the platform.",
      skills: ["XSS", "MERN Stack", "CORS", "NoSQL", "Security"],
      githubLink:
        "https://github.com/Sajeevan-Sivapalan/LuxuryX-Vulnerability-Fixed-Repository",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5i4v_H1Gajo5yd5JDEj71dfKkxdBAIHkEIg&s",
    },
    {
      title: "Mongo Backup Service Library",
      description:
        "This is a Spring Boot-based library that provides tools for backing up and restoring MongoDB databases. It includes features such as compression, scheduling, and selective collection backups.",
      skills: ["Spring Boot", "MongoDB"],
      githubLink:
        "https://github.com/Sajeevan-Sivapalan/Mongo-Backup-Service-Library",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJnpRF09PKwOH2GVd4T826EXoUr_4tyyzWDQ&s",
    },
    {
      title: "Online-Examination-Management-System",
      associated: "Associated with SLIIT",
      description:
        "The system is a Web-based examination management system developed using pure Java, as a project for the Object Oriented Programming Module. Using MySQL as the database management system.",
      skills: ["Java", "Web Development", "MySQL"],
      githubLink:
        "https://github.com/Sajeevan-Sivapalan/Online-Examination-Management-System",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtU51vr1rKQW3eAXzbv0O7Ozw8PxIBzFdnPg&s",
    },
    {
      title: "Personal Portfolio Website",
      description:
        "Developed a responsive portfolio website using React, showcasing modern design principles and optimized for seamless user experience across devices.",
      skills: ["React.js", "Front-End Development", "Front-End Design"],
      githubLink: "https://github.com/Sajeevan-Sivapalan/Sajeevan-Sivapalan-Portfolio",
      image: "https://cdn.prod.website-files.com/6504b546bf98b084e1574f7e/65710cb2efe9cca290aa36d8_page-hero_solutions_amr-agv-fleet-management%402x.jpg",
    },
    {
      title: "React Frontend Application Using NASA APIs",
      associated: "Associated with SLIIT",
      description:
        "A React frontend application that consumes data from NASA's public APIs. Developed using functional components, Tailwind CSS for styling, and a Node.js backend for user management, the application provides dynamic and interactive astronomy-related data. The application is deployed on Vercel.",
      skills: ["React.js", "Git", "Version Control", "Software Development"],
      githubLink:
        "https://github.com/Sajeevan-Sivapalan/React-Frontend-Application-Using-NASA-APIs",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV_hZTBrdRrk1dsu5m_yZGZWXJn295-pW64Q&s",
    },
    {
      title: "Real-Time Event Ticketing System",
      associated: "Independent Project",
      description: "Developed a Real-Time Event Ticketing System with advanced producer-consumer implementation. This project focused on mastering object-oriented programming, multi-threading, and synchronization. It incorporated a dynamic ticketing environment to simulate concurrent ticket releases and purchases, showcasing expertise in system design and high-performance applications.",
      skills: ["React", "Angular", "Spring Boot", "Object-Oriented Programming (OOP)", "WebSocket", "Multi-threading", "Producer-Consumer Pattern"],
      githubLink: "https://github.com/Sajeevan-Sivapalan/Real-Time-Ticketing-System",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSIZ1r6QAtNHc2JnkCkyRhnZqBZ_XhEaNFAQ&s",
    }, 
    {
      title: "Skin-Consultation-Center",
      description:
        "This is an application for a skin consultation center. This application has console and GUI interfaces. The console is used to manage doctor and doctor consultations. GUI is used to view doctor lists and allow patients to book a consultation and view booked consultations.",
      skills: ["Java", "Software Development"],
      githubLink:
        "https://github.com/Sajeevan-Sivapalan/Skin-Consultation-Center",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYcmZEg7B6MVeIMMF83FziuSLxUiBkPviUwA&s",
    },
    {
      title: "Solar Flare - Web Application for an Optical Store",
      associated: "Associated with SLIIT",
      description:
        "This web application provides an advanced virtual try-on experience. Users can browse glasses and use their device's camera to see how different styles look on them, offering a personalized experience.",
      skills: ["MERN Stack", "Tailwind CSS", "Version Control", "Git"],
      githubLink:
        "https://github.com/Sajeevan-Sivapalan/Enhanced-virtual-fitting-room",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5i4v_H1Gajo5yd5JDEj71dfKkxdBAIHkEIg&s",
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
      githubLink:
        "https://github.com/Sajeevan-Sivapalan/University-Timetable-Management-System",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm4PXC7UkZd-uww3nmEKNxvFcpRc7xPZE90w&s",
    },
    {
      title: "Wallet-App",
      associated: "Associated with SLIIT",
      description:
        "Financial planning app for the Mobile Application Development module project. Developed in Android Studio using Kotlin, and Firebase as the database.",
      skills: ["Software Development", "Android Studio", "Version Control", "Git", "Kotlin"],
      githubLink: "https://github.com/Sajeevan-Sivapalan/Wallet-App",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqQQZOqJ7ajy7EboP-h_RsqHxfQ5_kJ5INyw&s",
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
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5i4v_H1Gajo5yd5JDEj71dfKkxdBAIHkEIg&s",
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
        <Row className="justify-content-center d-flex align-items-stretch">
          {projects.map((project, index) => (
            <Col
              key={index}
              md={4}
              className="d-flex justify-content-center"
              style={{ marginBottom: "20px" }}
              data-aos="zoom-in"
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                skills={project.skills}
                githubLink={project.githubLink}
                image={project.image}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
