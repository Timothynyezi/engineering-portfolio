export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  image: string
  links: {
    github?: string
    demo?: string
    article?: string
  }
  category: 'backend' | 'frontend' | 'fullstack' | 'data' | 'devops'
  featured: boolean
}

export const PROJECTS: Project[] = [
  {
    id: 'spring-ecommerce-api',
    title: 'E-Commerce REST API',
    description: 'Scalable backend system built with Spring Boot and PostgreSQL',
    longDescription: 'A production-ready REST API for an e-commerce platform demonstrating solid backend engineering practices. Features JWT authentication, comprehensive error handling, and optimized database queries.',
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'RESTful APIs', 'JWT', 'Docker'],
    image: '/spring-boot-api-dashboard.jpg',
    links: {
      github: 'https://github.com',
      demo: 'https://demo.example.com'
    },
    category: 'backend',
    featured: true
  },
  {
    id: 'angular-dashboard',
    title: 'Admin Dashboard UI',
    description: 'Responsive Angular dashboard with real-time data visualization',
    longDescription: 'Built with Angular and TypeScript, this dashboard showcases frontend mastery with interactive charts, responsive design, and seamless API integration. Includes user management and analytics.',
    technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'RxJS'],
    image: '/angular-admin-dashboard.jpg',
    links: {
      github: 'https://github.com',
      demo: 'https://demo.example.com'
    },
    category: 'frontend',
    featured: true
  },
  {
    id: 'docker-microservices',
    title: 'Microservices Architecture',
    description: 'Containerized application deployment using Docker and orchestration',
    longDescription: 'Demonstrates DevOps expertise by designing and deploying a multi-service application using Docker containers and docker-compose. Includes CI/CD pipeline integration and deployment automation.',
    technologies: ['Docker', 'docker-compose', 'Java', 'Spring Boot', 'Linux', 'GitLab CI'],
    image: '/docker-containers-architecture.jpg',
    links: {
      github: 'https://github.com',
      article: 'https://blog.example.com'
    },
    category: 'devops',
    featured: true
  },
  {
    id: 'data-pipeline',
    title: 'ETL Data Pipeline',
    description: 'End-to-end data pipeline with Python and SQL optimization',
    longDescription: 'Python-based ETL system demonstrating data engineering concepts. Extracts data from multiple sources, transforms using pandas, loads into PostgreSQL with data validation and quality checks.',
    technologies: ['Python', 'SQL', 'PostgreSQL', 'Pandas', 'Data Pipelines', 'ETL'],
    image: '/data-pipeline-visualization.jpg',
    links: {
      github: 'https://github.com',
      article: 'https://blog.example.com'
    },
    category: 'data',
    featured: true
  },
  {
    id: 'socket-chat',
    title: 'Real-Time Chat Application',
    description: 'Socket programming implementation with Java and Python',
    longDescription: 'Demonstrates network programming skills with a real-time chat system using socket programming. Built with Java for server and Python for client, showcasing bidirectional communication.',
    technologies: ['Java', 'Python', 'Socket Programming', 'Networking', 'Threading'],
    image: '/chat-application-interface.jpg',
    links: {
      github: 'https://github.com'
    },
    category: 'backend',
    featured: false
  },
  {
    id: 'task-tracker',
    title: 'Full-Stack Task Management App',
    description: 'Complete application from frontend to backend with database',
    longDescription: 'Full-stack project combining Angular frontend with Spring Boot backend and PostgreSQL database. Features task management, user authentication, and real-time updates.',
    technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'REST APIs', 'TypeScript', 'Java'],
    image: '/task-management-application.jpg',
    links: {
      github: 'https://github.com',
      demo: 'https://demo.example.com'
    },
    category: 'fullstack',
    featured: false
  }
]

export const PROJECT_CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'backend', label: 'Backend' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'data', label: 'Data Engineering' },
  { id: 'devops', label: 'DevOps' }
]
