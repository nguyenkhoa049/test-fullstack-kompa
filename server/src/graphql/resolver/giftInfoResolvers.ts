import * as giftInfoService from '../../services/giftInfoService'
import {dateScalar} from "./typeResolvers"

const giftInfoResolvers = {
    Date: dateScalar,
    Query: {
        getGiftInfoByCIF: (_: any, args: any) => giftInfoService.getGiftInfoByCIF(args),
        
        getDetailGiftInfo: (_: any, args: any) => giftInfoService.getDetailGiftInfo(args),

        getDataLog: (_: any, args: any) => giftInfoService.getDataLog(args),

        report: (_: any, args: any) => giftInfoService.report(args),
    },

    Mutation: {
        insert: (_: any, args: any) => giftInfoService.insert(args),

        update: (_: any, args: any) => giftInfoService.update(args),

        send: (_: any, args: any) => giftInfoService.send(args),

        approve: (_: any, args: any) => giftInfoService.approve(args),

        reject: (_: any, args: any) => giftInfoService.reject(args),

        cancel: (_: any, args: any) => giftInfoService.cancel(args),
    }
}

export default giftInfoResolvers