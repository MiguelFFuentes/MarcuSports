import {Prisma, PrismaClient} from "@prisma/client";

let prismaClient: PrismaClient

export function getPrismaClient(): PrismaClient {
    if (!prismaClient) prismaClient = new PrismaClient()
    return prismaClient
}

export function runAsPrismaTransaction<T>(fn: (transaction: Prisma.TransactionClient) => Promise<T>): Promise<T> {
    return getPrismaClient().$transaction((prismaClient) => fn(prismaClient))
}