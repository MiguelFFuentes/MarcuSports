import {Prisma} from "@prisma/client";

export const PrismaCartProductQuery: Prisma.ProductSelect = {
    parts: {
        include: {
            options: {
                include: {
                    incompatibleOptions: true,
                    symmetricIncompatibleOptions: true
                }
            }
        }
    }
}