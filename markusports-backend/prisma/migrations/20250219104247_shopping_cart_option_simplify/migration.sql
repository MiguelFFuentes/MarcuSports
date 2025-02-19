/*
  Warnings:

  - You are about to drop the `ShoppingCartProductOption` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `ShoppingCartProductOption` DROP FOREIGN KEY `ShoppingCartProductOption_optionId_fkey`;

-- DropForeignKey
ALTER TABLE `ShoppingCartProductOption` DROP FOREIGN KEY `ShoppingCartProductOption_shoppingCartProductId_fkey`;

-- DropTable
DROP TABLE `ShoppingCartProductOption`;

-- CreateTable
CREATE TABLE `_ProductPartOptionToShoppingCartProduct` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ProductPartOptionToShoppingCartProduct_AB_unique`(`A`, `B`),
    INDEX `_ProductPartOptionToShoppingCartProduct_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_ProductPartOptionToShoppingCartProduct` ADD CONSTRAINT `_ProductPartOptionToShoppingCartProduct_A_fkey` FOREIGN KEY (`A`) REFERENCES `ProductPartOption`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ProductPartOptionToShoppingCartProduct` ADD CONSTRAINT `_ProductPartOptionToShoppingCartProduct_B_fkey` FOREIGN KEY (`B`) REFERENCES `ShoppingCartProduct`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
