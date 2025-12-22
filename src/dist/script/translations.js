// Translations object containing all text content in both languages
const translations = {
  en: {
    // Header & About
    "whoami": "whoami",
    "developer_title": "Full-Stack Developer",
    "about_text": "Committed and forward-looking developer, driven by strong technical curiosity and a genuine desire for continuous improvement. Comfortable with both backend and frontend, with a marked preference for robust architectures and well-designed systems, I rely on solid foundations in computer science, systems, and intelligent technologies to design reliable and scalable solutions. I approach each project as an opportunity to learn, question the existing, and bring concrete value, with the constant goal of improving my skills and aiming for long-term technical excellence.",
    "contact_sh": "./contact.sh",
    
    // Navigation
    "nav_about": "About",
    "nav_skills": "Skills",
    "nav_projects": "Projects",
    "nav_experience": "Experience",
    "nav_contact": "Contact",
    "nav_game": "Game",
    
    // Skills section
    "skills_cmd": "ls skills/",
    "skills_title": "Technical Skills",
    "skills_languages": "Programming Languages",
    "skills_frameworks": "Frameworks",
    "skills_databases": "Databases",
    "skills_tools": "Tools & Technologies",
    
    // Projects section
    "projects_cmd": "cd projects/ && ls -l",
    "projects_title": "Projects",
    "project_type_professional": "Professional Project",
    "project_type_academic": "Academic",
    "project_type_personal": "Personal",
    "view_source": "Source code",
    "view_demo": "View demo",
    
    // Guard project
    "guard_title": "GUARD - Final Year Project",
    "guard_desc": "The project, named Guard: Global Unified Automated Defense, consists of developing an innovative web application for real-time security agent management (using Mercure). The application aims to offer clients the ability to order services, define areas to secure, communicate, track their agents in the field, and perform analysis through dashboards and reports. The project also includes a dedicated interface for agents to track their tasks, send and receive messages, view notifications, track their movements and co-workers' in real-time on a map, and send alerts. On the administrator side, the ability to manage all resources such as payments, agents, packages, and more. It also has a dashboard to streamline control.",
    
    // MVC Framework project
    "mvc_framework_title": "Custom Java MVC Mini-Framework",
    "mvc_framework_desc": "Design of a Java library (Framework) intended to simplify the development of dynamic web applications, allowing developers to automatically map URLs to Java methods via a custom annotation system. Development focused on MVC architecture (Model-View-Controller) with Servlet configuration, offering smooth controller management without complex XML configuration for each route.",
    
    // Crypto project
    "crypto_title": "Cryptocurrency Transaction Simulation Platform",
    "crypto_desc": "Development of a complete web application dedicated to simulating cryptocurrency exchanges and transactions. The system allows managing virtual financial flows and interacting with external services (identity API). The architecture relies on Symfony for robust business logic and Twig for dynamic rendering, all connected to a PostgreSQL database and containerized to facilitate deployment.",
    
    // BoulanG project
    "boulaG_title": "Bakery Management System 'BoulanG'",
    "boulaG_desc": "Development of a complete web application for bakery management, centralizing production, orders, and inventory. Solution built on Spring Boot for a robust architecture, using JSP/JSTL pages for the user interface and connected to a PostgreSQL database. Integration of a custom 'MyBase' library for specific persistence needs.",
    
    // Scolaire project
    "scolaire_title": "School Management System (API) - Andoharanofotsy School",
    "scolaire_desc": "Development of a backend API for computerized management of Andoharanofotsy school. The project is built on the .NET (C#) stack and structures school data through a RESTful API architecture. It likely includes student, class, or administration management features, exposed via controllers to be consumed by a client interface.",
    
  
    // Experience section
    "exp_cmd": "cat experience.txt",
    "exp_title": "Professional Experience",
    "exp_etech_dev": "Full-Stack Developer - Internship",
    "exp_etech_desc": "Full-Stack development internship at a technology company. Participation in the development of modern web applications and practical application of advanced technologies.",
    "exp_competitions": "Competitions",
    "exp_place": "place",
    "exp_a_project": "A 48h project for each weekend",
    
    // Dates
    "date_etech": "June 2025 - September 2025",
    
    // Education section
    "edu_cmd": "cat formation.txt",
    "edu_title": "Education",
    "edu_php_title": "Advanced PHP Training",
    "date_php_training": "May 2025",
    "edu_php_desc": "Intensive training in PHP development with the Symfony framework. Learning best practices, MVC architecture, security and performance of web applications.",
    "edu_php_skills": "Skills acquired:",
    "edu_php_skill1": "Web application development with Symfony",
    "edu_php_skill2": "RESTful API design",
    "edu_php_skill3": "Performance optimization",
    "edu_php_skill4": "Web application security",
    "edu_php_skill5": "Unit and functional testing",
    "edu_licence_title": "Bachelor's Degree in Computer Science",
    "date_licence": "2022 - 2025",
    "edu_licence_desc": "Comprehensive training in computer science with specialization in software development and intelligent systems. Acquisition of skills in programming, databases, and artificial intelligence.",
    
    // Certifications
    "cert_cmd": "ls certifications/",
    "cert_title": "Certifications",
    "view_on_accredible": "View on Accredible",
    
    // Contact form
    "contact_title": "Contact Me",
    "name_label": "Name",
    "email_label": "Email",
    "subject_label": "Subject",
    "message_label": "Message",
    "send_button": "Send",
    
    // Footer
    "footer_tagline": "Full-Stack Developer<br>Passionate about creating innovative solutions",
    "footer_copyright": "© 2025 RAMAMONJISOA Aina Aneliot. All rights reserved.",
    
    // Modal
    "close_cert": "Close certificate",
    "loading": "loading...",
    "loading_subtitle": "initializing terminal"
  },
  fr: {
    // Header & About
    "whoami": "whoami",
    "developer_title": "Développeur Full-Stack",
    "about_text": "Développeur engagé et orienté vers l’avenir, animé par une forte curiosité technique et une réelle envie de progresser en continu. À l’aise aussi bien sur le backend que sur le frontend, avec une appétence marquée pour les architectures robustes et les systèmes bien conçus, je m’appuie sur des bases solides en informatique, systèmes et technologies intelligentes pour concevoir des solutions fiables et évolutives. J’aborde chaque projet comme une opportunité d’apprendre, de remettre en question l’existant et d’apporter une valeur concrète, avec l’objectif constant de monter en compétence et de viser l’excellence technique sur le long terme.",
    "contact_sh": "./contact.sh",
    
    // Navigation
    "nav_about": "À propos",
    "nav_skills": "Compétences",
    "nav_projects": "Projets",
    "nav_experience": "Expérience",
    "nav_contact": "Contact",
    "nav_game": "Jeu",
    
    // Skills section
    "skills_cmd": "ls skills/",
    "skills_title": "Compétences Techniques",
    "skills_languages": "Langages de programmation",
    "skills_frameworks": "Frameworks",
    "skills_databases": "Base de données",
    "skills_tools": "Outils & Technologies",
    
    // Projects section
    "projects_cmd": "cd projects/ && ls -l",
    "projects_title": "Projets",
    "project_type_professional": "Projet Professionnel",
    "project_type_academic": "Académique",
    "project_type_personal": "Personnel",
    "view_source": "Code source",
    "view_demo": "Voir la démo",
    
    // Guard project
    "guard_title": "GUARD - Projet de fin d'études",
    "guard_desc": "Le projet, nommé Guard : Global Unified Automated Defense, consiste à développer une application web innovante permettant la gestion en temps réel des agents de sécurité (Utilisation de Mercure). L'application vise à offrir aux clients la possibilité de commander des services, de délimiter des zones à sécuriser, de communiquer, de suivre ses agents sur le terrain et de faire des analyses grâce au dashboard et aux rapports. Dans le projet, on peut aussi trouver une interface dédiée à l'agent pour lui permettre de suivre ses tâches, de recevoir et envoyer des messages, de voir ses notifications, de suivre en temps réel ses déplacements et ceux de ses co-worker sur une map et d'envoyer des alertes. Coté Administrateur, la possibilité de gérer toutes les ressources telles que les payements, les agents, les packs, et bien plus. Il dispose aussi d'un tableau de bord pour fluidifier le controle.",
    
    // MVC Framework project
    "mvc_framework_title": "Mini-Framework MVC Java Personnalisé",
    "mvc_framework_desc": "Conception d'une librairie Java (Framework) destinée à simplifier le développement d'applications web dynamiques, permettant aux développeurs de mapper automatiquement des URLs vers des méthodes Java via un système d'annotations personnalisées. Développement axé sur l'architecture MVC (Modèle-Vue-Contrôleur) avec configuration par Servlet, offrant une gestion fluide des contrôleurs sans configuration XML complexe pour chaque route.",
    
    // Crypto project
    "crypto_title": "Plateforme de Simulation de Transactions de Cryptomonnaies",
    "crypto_desc": "Développement d'une application web complète dédiée à la simulation d'échanges et de transactions de cryptomonnaies. Le système permet de gérer des flux financiers virtuels et d'interagir avec des services externes (API d'identité). L'architecture repose sur Symfony pour une logique métier robuste et Twig pour le rendu dynamique, le tout connecté à une base de données PostgreSQL et conteneurisé pour faciliter le déploiement.",
    
    // BoulanG project
    "boulaG_title": "Système de Gestion de Boulangerie \"BoulanG\"",
    "boulaG_desc": "Développement d'une application web complète pour la gestion d'une boulangerie, centralisant la production, les commandes et les stocks. Solution bâtie sur Spring Boot pour une architecture robuste, utilisant des pages JSP/JSTL pour l'interface utilisateur et connectée à une base de données PostgreSQL. Intégration d'une librairie personnalisée \"MyBase\" pour des besoins spécifiques de persistance.",
    
    // Scolaire project
    "scolaire_title": "Système de Gestion Scolaire (API) - École Andoharanofotsy",
    "scolaire_desc": "Développement d'une API backend pour la gestion informatisée de l'école Andoharanofotsy. Le projet est construit sur la stack .NET (C#) et structure les données scolaires à travers une architecture API RESTful. Il inclut probablement des fonctionnalités de gestion des élèves, des classes ou de l'administration, exposées via des contrôleurs pour être consommées par une interface client.",
    
    
    // Experience section
    "exp_cmd": "cat experience.txt",
    "exp_title": "Expériences Professionnelles",
    "exp_etech_dev": "Développeur Full-Stack - Stage",
    "exp_etech_desc": "Stage de développement Full-Stack dans une entreprise technologique. Participation au développement d'applications web modernes et mise en pratique des technologies avancées.",
    "exp_competitions": "Compétitions",
    "exp_place": "place",
    "exp_a_project": "Un projet de 48h pour chaque weekend",
    
    // Dates
    "date_etech": "Juin 2025 - Septembre 2025",
    
    // Education section
    "edu_cmd": "cat formation.txt",
    "edu_title": "Formations",
    "edu_php_title": "Formation PHP Avancé",
    "date_php_training": "Mai 2025",
    "edu_php_desc": "Formation intensive en développement PHP avec le framework Symfony. Apprentissage des bonnes pratiques, architecture MVC, sécurité et performance des applications web.",
    "edu_php_skills": "Compétences acquises:",
    "edu_php_skill1": "Développement d'applications web avec Symfony",
    "edu_php_skill2": "Conception d'API RESTful",
    "edu_php_skill3": "Optimisation des performances",
    "edu_php_skill4": "Sécurité des applications web",
    "edu_php_skill5": "Tests unitaires et fonctionnels",
    "edu_licence_title": "Licence en Informatique",
    "date_licence": "2022 - 2025",
    "edu_licence_desc": "Formation complète en informatique avec spécialisation en développement logiciel et systèmes intelligents. Acquisition de compétences en programmation, bases de données et intelligence artificielle.",
    
    // Certifications
    "cert_cmd": "ls certifications/",
    "cert_title": "Certifications",
    "view_on_accredible": "Voir sur Accredible",
    
    // Contact form
    "contact_title": "Me contacter",
    "name_label": "Nom",
    "email_label": "Email",
    "subject_label": "Sujet",
    "message_label": "Message",
    "send_button": "Envoyer",
    
    // Footer
    "footer_tagline": "Développeur Full-Stack<br>Passionné par la création de solutions innovantes",
    "footer_copyright": "© 2025 RAMAMONJISOA Aina Aneliot. Tous droits réservés.",
    
    // Modal
    "close_cert": "Fermer le certificat",
    "loading": "chargement...",
    "loading_subtitle": "initialisation du terminal"
  }
};