-- CreateTable
CREATE TABLE `ShoppingCart` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `status` VARCHAR(191) NOT NULL DEFAULT 'open',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ShoppingCartProduct` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `productId` INTEGER NOT NULL,
    `shoppingCartId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ShoppingCartProductOption` (
    `optionId` INTEGER NOT NULL,
    `shoppingCartProductId` INTEGER NOT NULL,

    PRIMARY KEY (`optionId`, `shoppingCartProductId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ShoppingCartProduct` ADD CONSTRAINT `ShoppingCartProduct_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ShoppingCartProduct` ADD CONSTRAINT `ShoppingCartProduct_shoppingCartId_fkey` FOREIGN KEY (`shoppingCartId`) REFERENCES `ShoppingCart`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ShoppingCartProductOption` ADD CONSTRAINT `ShoppingCartProductOption_optionId_fkey` FOREIGN KEY (`optionId`) REFERENCES `ProductPartOption`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ShoppingCartProductOption` ADD CONSTRAINT `ShoppingCartProductOption_shoppingCartProductId_fkey` FOREIGN KEY (`shoppingCartProductId`) REFERENCES `ShoppingCartProduct`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
