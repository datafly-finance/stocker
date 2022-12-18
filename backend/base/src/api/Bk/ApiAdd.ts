import { ApiCall } from "tsrpc";
import { ReqAdd, ResAdd } from "../../shared/protocols/Bk/PtlAdd";
import { client } from '../../db/client';

export default async function (call: ApiCall<ReqAdd, ResAdd>) {
    let { name, code } = call.req;
    let result = await client.bk.create({
        data: {
            name,
            code
        }
    })
    call.succ({
        code: 0,
        message: 'ok',
        id: result.id
    })
}