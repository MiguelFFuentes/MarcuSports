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

## Backend error handling

I created a generic middleware to handle errors in the backend. As the project continues I may add some domain
exceptions or specific error handling. I'm aware that the error handling is not perfect yet, but it is a good start.

## Image url

I've decided to just store the image url since the complexity added from storing the image is not worth
it for the current requirements.

In the future, as the business grows, it might be a good idea to store the images in a cloud storage service, like S3.

## Vuetify challenge

Vitest and Vuetify usually play well together, however, a big challenge on this project was with the spinner component.
There is a known bug in the Vuetify library that makes the spinner not being declared correctly in the tests, even
though it works perfectly in the browser.

I did a workaround and rely more on skeletons rather than spinners for most actions.

## Vitest debugging with Webstorm challenge

In one of the recent versions, the --threads flag was changed and is no longer a param. Webstorm has not updated this
and the default configuration caused an error trying to debug the tests.

## Incompatible products approach

I've decided to use an approach where a `ProductPartOption` has a list of incompatible `ProductPartOption`. If this
item is selected in the cart with some of the incompatible items, there will be an error message and this action will
fail.

This approach has been coded in the `ShoppingCart` domain entity.

"If you select "fat bike wheels", then the red rim color is unavailable because the manufacturer doesn't provide it."

This last requirement is fulfilled with this approach easily. However, there is another requirement stated as an
example:

"If you select "mountain wheels", then the only frame available is the full suspension."

In order to keep the design simple for now, I've decided to implement this just making for the "mountain wheels" every
other frame unavailable except "full suspension". This is a simple approach that can be easily changed in the future, it
just takes more time configuring the incompatible items, but removes a lot of complexity.

# Price calculation

For this alpha version, price is only on the Product entity. That means that the different characteristics of the
bicycles don't affect the final price. This can be changed in the future by adding a new column to `ProductPartOption`
and a computed property on the Product entity.

## Prisma nested types issues

Although Prisma exports the types for the models, it doesn't export the nested types by default. In order to create
them, a type needs to be created manually based on Prisma.ProductGetPayload and passing down the query as an argument.

However, this is not working as expected. Types still give some issues so there I've decided to move forward for now and
use `any` type for mapping the nested ORM entity as `ProductParts`.

## Shopping cart validation

There are 4 validations that are being done on the shopping cart. A product is valid:

- If the options have stock
- If the options are compatible
- if the options are not duplicated or a part is selected twice
- If the product has every part selected

## Quantity

For this alpha version, products are not grouped on a shopping cart even if the options are exactly the same. This can
be changed with a migration in the `ShoppingCartProduct` schema adding a quantity column. This has not been included
since it adds extra complexity.

## Transactions shoppingcart

When a user creates or updates a shopping cart, there are a few operations that need to be done in a transaction,
otherwise, the database might end up in an inconsistent state.

In order to handle these operations, Prisma provides the `$transaction` API that allows to group operations. I've used
this with `runAsTransaction` variable to group the operations in the service.