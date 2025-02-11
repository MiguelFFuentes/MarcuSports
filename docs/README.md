# Challenges and decisions

This folder contains the technical decisions and challenges faced during the development of the project.

Even though I considered using an ADR template and creating a document for each decision, I decided to keep it simple and write everything in this folder as a journal in this file.

## 1. Choosing the stack
 
Since I am familiar with Express.js I decided to use it for this project as it meets the requirements. For the frontend, I chose Vue as it is a framework I am familiar with and it is easy to use.
For testing, I chose Jest as it is a popular testing framework.

## 2. Monorepo
I've decided to use a monorepo structure because it is easier to manage the project and I can share this docs on a common folder, so it's easier for you as well.

## 3. DDD & ports and adapters
I used a DDD approach on this project and use hex architecture because it helps to understand the business rules related with this online shop and the code is more maintainable.
This architecture might help in the future to split this project into microservices if it gets bigger and makes sense to have each part with it's own lifecycle.

So far, I've decided to use the following subdomains:
- **Shopping Cart**
- **Product Catalog**