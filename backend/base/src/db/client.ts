import { PrismaClient } from '@prisma/client'

export let client : PrismaClient;

export function initClient(){
    client = new PrismaClient();
}