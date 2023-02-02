import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    const user_Audit= await prisma.user_Audit.findMany()
        
     console.log(user_Audit)}
  main()
  .catch(e =>{
    console.error(e.message)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })