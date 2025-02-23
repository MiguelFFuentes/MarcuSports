import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient()

async function main() {

    await prisma.productPart.create({
        data: {
            id: 1,
            name: 'Frame type',
            options: {
                createMany: {
                    data: [
                        {
                            id: 1,
                            name: 'Full-suspension',
                            stock: 20
                        },
                        {
                            id: 2,
                            name: 'Diamond',
                            stock: 1,
                        },
                        {
                            id: 3,
                            name: 'Step-through',
                            stock: 25,
                        }
                    ]
                }
            }
        }
    })

    await prisma.productPart.create({
        data: {
            id: 2,
            name: 'Frame finish',
            options: {
                createMany: {
                    data: [
                        {
                            id: 4,
                            name: 'Matte',
                            stock: 40
                        },
                        {
                            id: 5,
                            name: 'Shiny',
                            stock: 50,
                        }
                    ]
                }
            }
        }
    })

    await prisma.productPart.create({
        data: {
            id: 3,
            name: 'Wheels',
            options: {
                createMany: {
                    data: [
                        {
                            id: 6,
                            name: 'Road wheels',
                            stock: 8
                        },
                        {
                            id: 7,
                            name: 'Mountain wheels',
                            stock: 80,
                        },
                        {
                            id: 8,
                            name: 'Fat bike wheels',
                            stock: 20,
                        }
                    ]
                }
            }
        }
    })

    await prisma.productPart.create({
        data: {
            id: 4,
            name: 'Rim color',
            options: {
                createMany: {
                    data: [
                        {
                            id: 9,
                            name: 'Red',
                            stock: 10
                        },
                        {
                            id: 10,
                            name: 'Black',
                            stock: 0,
                        },
                        {
                            id: 11,
                            name: 'Blue',
                            stock: 15,
                        }
                    ]
                }
            }
        }
    })

    await prisma.productPart.create({
        data: {
            id: 5,
            name: 'Chain',
            options: {
                createMany: {
                    data: [
                        {
                            id: 12,
                            name: 'Single-speed chain',
                            stock: 40
                        },
                        {
                            id: 13,
                            name: '8-speed chain',
                            stock: 60,
                        }
                    ]
                }
            }
        }
    })

    await prisma.product.create({
        data: {
            id: 1,
            name: 'Super bicycle',
            description: 'This is probably the best bicycle ever',
            price: 19.99,
            image: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Left_side_of_Flying_Pigeon.jpg',
            parts: {
                connect: [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}]
            }
        }
    })

    await prisma.product.create({
        data: {
            id: 2,
            name: 'Platinum bicycle',
            description: 'Very limited edition',
            price: 29.99,
            image: 'https://stryderbikes.com/cdn/shop/files/VolticX27BlkRed.jpg?v=1723894321',
            parts: {
                connect: [{id: 1}, {id: 2}, {id: 3}, {id: 5}]
            }
        }
    })

    await prisma.product.create({
        data: {
            id: 3,
            name: 'Very expensive bicycle',
            description: 'Can you afford it?',
            price: 99.99,
            image: 'https://media.istockphoto.com/id/1023889236/photo/golden-mountain-bike-3d-rendering.jpg?s=612x612&w=0&k=20&c=aqL_zzm5E1sTBX872H0M_mLlx5IVGmdDSwrf0UAR3wQ=',
            parts: {
                connect: [{id: 1}]
            }
        }
    })

    await prisma.product.create({
        data: {
            id: 4,
            name: 'Very cheap bicycle',
            description: 'Less than a coffee',
            price: 0.99,
            image: 'https://thecabe.com/forum/attachments/image-jpg.906581/',
            parts: {
                connect: [{id: 1}, {id: 3}, {id: 5}]
            }
        }
    })

    await prisma.product.create({
        data: {
            id: 5,
            name: 'Your childhood bicycle',
            description: 'Can you feel the nostalgia?',
            price: 15.99,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbKIU8VAs4axLcUUkbXnTWFdZS3u3BUQMUZw&s',
            parts: {
                connect: [{id: 2}, {id: 4}]
            }
        }
    })

    await prisma.product.create({
        data: {
            id: 6,
            name: 'Circus bicycle',
            description: 'Can you feel the nostalgia?',
            price: 15.99,
            image: 'https://cdn5.vectorstock.com/i/1000x1000/41/54/circus-bicycle-isolated-on-white-background-vector-20864154.jpg',
            parts: {
                connect: [{id: 2}, {id: 3}, {id: 4}, {id: 5}]
            }
        }
    })

    await prisma.product.create({
        data: {
            id: 7,
            name: 'Mystery bicycle',
            description: 'This bicycle has no image. It is a mystery',
            price: 15.99,
            parts: {
                connect: [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}]
            }
        }
    })

    await prisma.product.create({
        data: {
            id: 8,
            name: 'Configured bicycle',
            description: 'I don\'t like to select parts either',
            image: 'https://hips.hearstapps.com/hmg-prod/images/bbw-01-192-copy-1641588763.jpg?crop=0.551xw:0.982xh;0.219xw,0&resize=640:*',
            price: 25.99
        }
    })

    await prisma.productPartOption.update({
        where: {id: 8}, // Fat bike wheels
        data: {
            incompatibleOptions: {
                connect: [{id: 9}] // Red rim color
            }
        }
    })
    await prisma.productPartOption.update({
        where: {id: 7}, // Mountain wheels
        data: {
            incompatibleOptions: {
                connect: [{id: 2}, {id: 3}] // Only full suspension available
            }
        }
    })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })

