# Software Requirement Specification

## 1. Introduction

### 1.1 Purpose
The purpose of this Software Requirement Specification document is to define and describe the functional and non-functional requirements of the News Aggregator application. This document serves as a basis for agreement between stakeholders and developers, guiding the design, development, and testing of the application.  
**Note:** As the project is under active development, this document may be revised with stakeholder approval to reflect evolving requirements.

### 1.2 Scope
The News Aggregator application includes:
- Harvester module for scraping and collecting news from external sources.
- REST API module to enable data access and interaction.
- Mobile and web clients to access and interact with news content.
- Administrative web interface for managing Harvester operations.

### 1.3 Definitions, Acronyms, and Abbreviations
- **API** – Application Programming Interface
- **CQRS** – Command Query Responsibility Segregation
- **REST** – Representational State Transfer
- **Symfony** – PHP web application framework
- **Flutter** – Framework for mobile application development
- **Ports and Adapters** – Architectural pattern also known as Hexagonal Architecture
- **ORM** – Object-Relational Mapping

### 1.4 References
- [Symfony Official Documentation](https://symfony.com/doc/current/index.html)
- [Doctrine ORM Documentation](https://www.doctrine-project.org/projects/doctrine-orm/en/current/index.html)
- [Flutter Official Documentation](https://flutter.dev/docs)

### 1.5 Overview
The rest of the document provides a general description of the product, detailed functional and non-functional requirements, user characteristics, and other important attributes and constraints.

## 2. General Description

### 2.1 Product Perspective
The News Aggregator is developed using Ports and Adapters architecture, ensuring modularity and independent scalability of its components (Harvester, REST API, Comments, Translation, Authorization).

### 2.2 Product Functions
- Collection and aggregation of news from various external sources.
- Access to news through RESTful API endpoints.
- User management and interaction (registration, login, commenting, bookmarking).
- Translation of news articles.
- Administrative functions for the Harvester module.

### 2.3 User Characteristics
- **End Users:** Regular users accessing news through mobile and web clients.
- **Administrators:** Users responsible for configuring and managing the Harvester module.

### 2.4 General Constraints
- Development restricted to Symfony and Doctrine for backend.
- Mobile client must use Flutter framework.
- Architecture must support modularity and minimal coupling between modules.

### 2.5 Assumptions and Dependencies
- Reliable network connectivity for scraping news.
- Availability and reliability of third-party translation services.
- Future integration possibilities with search technologies (ElasticSearch, Solr) and message brokers (Kafka, RabbitMQ).

## 3. Specific Requirements

### 3.1 Functional Requirements

#### 3.1.1 Harvester Module
- Automatically collect news from specified external websites.
- Allow administrators to manage sources and scraping schedules.

#### 3.1.2 REST API Module
- Provide endpoints for retrieving news with filtering, sorting, and pagination.
- Manage user authentication, registration, and profiles.
- Support user interactions like comments and favorites.
- Facilitate requests for news translation.

#### 3.1.3 Mobile and Web Clients
- Consume REST API for accessing news.
- Enable user interactions including authentication, commenting, and bookmarking.

#### 3.1.4 Translation and Comment Modules
- Modular and independently deployable.
- Clear interfaces defined for REST API integration.

### 3.2 External Interface Requirements
- RESTful API communication via JSON.
- Administrative web interface.
- Mobile application developed using Flutter.

### 3.3 Performance Requirements
- API response time should typically be under 500 milliseconds.
- Scalable horizontally to manage increased demand.
- Efficient handling of high concurrency.

### 3.4 Design Constraints
- Adherence to Ports and Adapters architectural pattern.
- Each module must be independently scalable and deployable.

### 3.5 Attributes
- **Testability:** Automated testing at multiple levels (unit and behavior-driven testing) with PHPUnit and Behat; integrated via GitLab CI/CD.
- **Reliability:** High availability, minimal downtime.
- **Scalability:** Horizontal scalability of modules.
- **Security:** Secure user authentication and data protection mechanisms.
- **Maintainability:** Clear code structure following best practices (SOLID, DRY).
- **Portability:** Easy deployment across diverse environments.

## 4. Appendices

### 4.1 Diagrams
- System Architecture
- API Endpoint Structures
- Data Flow Diagrams

### 4.2 Glossary
- Definitions and explanations of specific terms and acronyms used throughout this document.

