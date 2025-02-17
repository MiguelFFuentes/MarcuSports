-- CreateTable
CREATE TABLE `_IncompatibleOptions` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_IncompatibleOptions_AB_unique`(`A`, `B`),
    INDEX `_IncompatibleOptions_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_IncompatibleOptions` ADD CONSTRAINT `_IncompatibleOptions_A_fkey` FOREIGN KEY (`A`) REFERENCES `ProductPartOption`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_IncompatibleOptions` ADD CONSTRAINT `_IncompatibleOptions_B_fkey` FOREIGN KEY (`B`) REFERENCES `ProductPartOption`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
