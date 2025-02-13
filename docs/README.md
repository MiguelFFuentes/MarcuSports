# Challenges and decisions

This folder contains the technical decisions and challenges faced during the development of the project.

Even though I considered using an ADR template and creating a document for each decision, I decided to keep it simple 
and write everything in this folder as a journal in this file.

## Choosing the stack
 
Since I am familiar with Express.js I decided to use it for this project as it meets the requirements.
For the frontend, I chose Vue as it is a framework I am familiar with and it is easy to use.
For testing, I chose Jest as it is a popular testing framework.

## Monorepo
I've decided to use a monorepo structure because it is easier to manage the project and I can share this docs on a
common folder, so it's easier for you as well.

## DDD & ports and adapters
I used a DDD approach on this project and use hex architecture because it helps to understand the business rules related
with this online shop and the code is more maintainable.
This architecture might help in the future to split this project into microservices if it gets bigger and makes sense to
have each part with its own lifecycle.

So far, I've decided to use the following subdomains:
- **Shopping Cart**
- **Product Catalog**

## Using Product instead of Bicycle

For this domain, I've decided to use Product instead of Bicycle because there are no specific rules about bicycles 
which makes then different from a generic customizable product and making them generic adds no complexity.
Markus already stated that in the future he is planning to sell other products. If there would be specific rules for a 
product, inheritance is the solution.

## Testing strategy

I used the mirror test folder structure to organize better the code in the backend make things more intuitive to be 
found.

I used TDD as much as possible to drive my development focusing in the minimal functionality needed. Most things have 
been tested on this project with unit tests, there are also some feature tests for the main flows.

## SQL vs NoSQL
I've decided to use SQL because of how strong and defined are the relations between the different entities. Also, since
we have some challenges like stock,it's a better idea to handle concurrency with this approach.

So the database will be MySQL.

## Prisma
Since MySQL is the chosen database, I decided to use Prisma as an ORM because it is a modern and powerful tool that
allows all the relationships we need, and it is easy to use.

## Docker
I've prepared a docker-compose.yml file in order to have a local PostgreSQL database.
