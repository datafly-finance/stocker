import path from 'path';
import {WsServer} from 'tsrpc'
import { serviceProto } from './shared/protocols/codegen/serviceProto'
import { initClient } from './db/client'

export const server = new WsServer(serviceProto,{
    port: 3006,
})

export async function init(){
    // connect to db
    initClient()

    await server.autoImplementApi(path.join(__dirname,'api'))
}

const main = async () => {
    await init()
    await server.start()
    console.log("server is start")
}

main()