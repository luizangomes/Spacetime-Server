// console.log("Oi oi oi oi oi ")

// const nome: string = "Luiza muito top"

// console.log(nome)

import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = fastify()
const prisma = new PrismaClient()

app.get('/users', async () => {
    const users = await prisma.user.findMany()

    return users
})

app
    .listen({
        port: 3333,
    })
    .then(() => {
        console.log('HTTP server running on http://localhost:3333')
    })
