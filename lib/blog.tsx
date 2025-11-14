export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  readTime: number
  category: 'backend' | 'frontend' | 'devops' | 'learning' | 'data'
  tags: string[]
  featured: boolean
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'spring-boot-rest-api',
    title: 'Building Scalable REST APIs with Spring Boot',
    excerpt: 'Learn how to design and implement production-ready REST APIs using Spring Boot, including best practices for error handling, validation, and performance optimization.',
    content: `# Building Scalable REST APIs with Spring Boot

REST APIs are the backbone of modern applications. In this guide, I'll walk you through building a scalable REST API using Spring Boot that follows industry best practices.

## Why Spring Boot?

Spring Boot simplifies Spring application development by providing sensible defaults and requiring minimal configuration. It's perfect for:
- Rapid API development
- Microservices architecture
- Cloud-native applications
- Enterprise-grade systems

## Key Principles

### 1. Layered Architecture
Separate your application into distinct layers:
- **Controller Layer**: Handles HTTP requests
- **Service Layer**: Contains business logic
- **Repository Layer**: Manages data access
- **Model Layer**: Defines data structures

### 2. Proper Exception Handling
Implement global exception handling to provide consistent error responses across your API. Use custom exceptions for domain-specific errors.

### 3. Validation & Security
- Use Bean Validation annotations (@Valid, @NotNull, etc.)
- Implement JWT authentication for secure endpoints
- Add CORS configuration for web applications

### 4. Performance Optimization
- Use database indexes strategically
- Implement caching where appropriate
- Monitor and profile your endpoints
- Use pagination for large datasets

## Best Practices

- Follow REST conventions and HTTP semantics
- Use proper HTTP status codes
- Document your API with Swagger/OpenAPI
- Implement comprehensive logging
- Write unit and integration tests

Building APIs with Spring Boot is a rewarding experience. Start simple, add features incrementally, and always prioritize code quality over speed.`,
    author: 'Thamsanqa Timothy Nyezi',
    date: '2025-03-15',
    readTime: 8,
    category: 'backend',
    tags: ['Java', 'Spring Boot', 'REST API', 'Backend'],
    featured: true
  },
  {
    id: 'docker-containerization-guide',
    title: 'Docker Containerization: From Development to Production',
    excerpt: 'A comprehensive guide on containerizing applications with Docker, managing containers with docker-compose, and deploying to production environments.',
    content: `# Docker Containerization: From Development to Production

Docker revolutionized application deployment by enabling consistent environments across development, testing, and production. Let me share what I've learned about containerization.

## Understanding Docker Basics

Docker containers are lightweight, portable units that package your application and its dependencies. Unlike virtual machines, containers share the host OS kernel, making them efficient.

### Key Concepts
- **Image**: A blueprint for creating containers (immutable)
- **Container**: A running instance of an image (isolated environment)
- **Registry**: Repository for storing images (Docker Hub, private registries)

## Building Docker Images

Create a Dockerfile with instructions to build your image:

\`\`\`dockerfile
FROM openjdk:17
WORKDIR /app
COPY target/app.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]
\`\`\`

## Managing Multiple Containers

Use docker-compose for local development and testing:

\`\`\`yaml
version: '3.9'
services:
  api:
    build: .
    ports:
      - "8080:8080"
    environment:
      - DB_URL=jdbc:postgresql://db:5432/app
  db:
    image: postgres:15
    environment:
      - POSTGRES_PASSWORD=secret
\`\`\`

## Production Deployment

For production, consider:
- Using container orchestration (Kubernetes, Docker Swarm)
- Implementing health checks
- Managing logs and monitoring
- Using private registries for security

## Best Practices

- Keep images small and focused
- Use official base images
- Tag images meaningfully
- Implement proper logging
- Test containers thoroughly

Docker is essential knowledge for modern software engineers. Master it early, and it'll serve you throughout your career.`,
    author: 'Thamsanqa Timothy Nyezi',
    date: '2025-03-10',
    readTime: 10,
    category: 'devops',
    tags: ['Docker', 'DevOps', 'Containerization', 'Production'],
    featured: true
  },
  {
    id: 'data-pipelines-etl',
    title: 'Designing Efficient Data Pipelines with Python and SQL',
    excerpt: 'Explore ETL concepts, data validation strategies, and optimization techniques for building robust data pipelines that scale efficiently.',
    content: `# Designing Efficient Data Pipelines with Python and SQL

Data Engineering is about moving, transforming, and storing data reliably. Here's what I've learned about designing efficient pipelines.

## ETL Pipeline Architecture

ETL stands for Extract, Transform, Load:

### Extract
Retrieve data from various sources:
- Databases (SQL, NoSQL)
- APIs (REST, GraphQL)
- Files (CSV, JSON, Parquet)
- Streams (Kafka, message queues)

### Transform
Clean, validate, and shape data:
- Handle missing values
- Remove duplicates
- Normalize formats
- Join multiple sources
- Aggregate and summarize

### Load
Store processed data:
- Data warehouses
- Data lakes
- Analytical databases
- Real-time systems

## Performance Optimization

1. **Batch Processing**: Process data in optimal chunk sizes
2. **Parallelization**: Use multiple workers for I/O operations
3. **Caching**: Store frequently accessed data in memory
4. **Indexing**: Create database indexes for faster queries
5. **Monitoring**: Track pipeline metrics and failures

## Error Handling

- Implement retry logic with exponential backoff
- Log failures with context for debugging
- Use data validation to catch issues early
- Set up alerts for pipeline failures

## Tools & Technologies

- **Python**: pandas, PySpark for data processing
- **SQL**: PostgreSQL, BigQuery for data storage
- **Workflow**: Airflow, dbt for orchestration
- **Monitoring**: Logs, metrics, dashboards

Building reliable data pipelines requires attention to detail and a systems-thinking mindset.`,
    author: 'Thamsanqa Timothy Nyezi',
    date: '2025-03-05',
    readTime: 9,
    category: 'data',
    tags: ['Data Engineering', 'Python', 'SQL', 'ETL', 'Pipeline'],
    featured: true
  },
  {
    id: 'angular-performance-tips',
    title: 'Angular Performance Optimization Tips',
    excerpt: 'Master Angular performance optimization techniques including change detection, lazy loading, and memory management strategies.',
    content: `# Angular Performance Optimization Tips

Building fast Angular applications requires understanding how the framework works internally. Here are practical optimization techniques.

## Change Detection Strategy

Angular's change detection runs frequently. Optimize it:

\`\`\`typescript
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-list',
  template: '<div>...</div>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  // Only updates when @Input changes
}
\`\`\`

## Lazy Loading Routes

Load modules only when needed:

\`\`\`typescript
const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module')
      .then(m => m.DashboardModule)
  }
];
\`\`\`

## Memory Management

- Unsubscribe from observables in ngOnDestroy
- Use the async pipe for automatic subscription management
- Avoid creating new arrays/objects in templates
- Use trackBy in *ngFor loops

## Bundle Size

- Use Angular's production build mode
- Enable tree-shaking
- Analyze bundle sizes with webpack-bundle-analyzer
- Remove unused dependencies

## Monitoring Performance

Use Angular DevTools to:
- Detect slow change detection
- Analyze component performance
- Profile memory usage

Performance is a feature. Invest in it from the start.`,
    author: 'Thamsanqa Timothy Nyezi',
    date: '2025-02-28',
    readTime: 7,
    category: 'frontend',
    tags: ['Angular', 'Performance', 'Frontend', 'TypeScript'],
    featured: false
  },
  {
    id: 'learning-journey-software-engineer',
    title: 'My Learning Journey: From Beginner to Software Engineer',
    excerpt: 'Reflections on my path to becoming a software engineer, lessons learned, and advice for aspiring developers starting their journey.',
    content: `# My Learning Journey: From Beginner to Software Engineer

My path to software engineering wasn't traditional. I started with curiosity and determination, and I want to share what I've learned.

## The Beginning

I didn't grow up dreaming of coding. My interest started in university, where I discovered the power of programming to solve real problems. I made the decision to pursue it seriously.

## Challenges I Faced

### Imposter Syndrome
Every developer feels this. Remember: expertise comes with time and persistence. Everyone started as a beginner.

### Information Overload
There's too much to learn. I learned to focus on fundamentals first:
- Core language concepts
- Data structures and algorithms
- System design principles
- Then specialized technologies

### Practical Experience Gap
Theory alone isn't enough. I participated in:
- Hands-on projects
- Collaborative work
- Code reviews
- Real-world problem-solving

## Key Lessons

1. **Consistency Beats Intensity**: Regular practice is better than sporadic marathons
2. **Read Good Code**: Learn from open-source projects and senior developers
3. **Build Projects**: Apply knowledge by building things
4. **Embrace Failure**: Errors are learning opportunities
5. **Community Matters**: Connect with other developers, share, and learn together

## Current Focus

At WeThinkCode_, I'm deepening my expertise in:
- Backend systems and scalability
- Data Engineering concepts
- DevOps and containerization
- Software architecture

## Advice for Aspiring Engineers

- **Start with fundamentals**: Don't chase trends immediately
- **Build real projects**: Create something meaningful
- **Document your learning**: Helps solidify understanding and helps others
- **Stay curious**: The tech landscape evolves; keep learning
- **Be patient**: Expertise takes time

I'm still learning every day. The journey never ends, and that's what makes this field exciting.`,
    author: 'Thamsanqa Timothy Nyezi',
    date: '2025-02-20',
    readTime: 11,
    category: 'learning',
    tags: ['Career', 'Learning', 'Reflection', 'Personal Growth'],
    featured: false
  }
]

export const BLOG_CATEGORIES = [
  { id: 'all', label: 'All Articles' },
  { id: 'backend', label: 'Backend' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'devops', label: 'DevOps' },
  { id: 'data', label: 'Data Engineering' },
  { id: 'learning', label: 'Learning' }
]
