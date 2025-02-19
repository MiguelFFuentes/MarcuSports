import {Prisma} from "@prisma/client";

export const PrismaProductQuery: Prisma.ProductSelect = {
    parts: {
        include: {
            options: {
                include: {
                    incompatibleOptions: true,
                    symmetricIncompatibleOptions: true
                }
            }
        }
    },
}