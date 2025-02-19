/*
  Warnings:

  - A unique constraint covering the columns `[shoppingCartId,productId]` on the table `ShoppingCartProduct` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `ShoppingCartProduct_shoppingCartId_productId_key` ON `ShoppingCartProduct`(`shoppingCartId`, `productId`);
