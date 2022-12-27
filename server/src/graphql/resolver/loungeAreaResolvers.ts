import { mapKeys } from "lodash"

import getLoungeArerList from "../../services/loungeAreaService"
import {dateScalar} from "./typeResolvers"

const loungeAreaResolvers = {
    Date: dateScalar,
    //QUERY
    Query: {
        getLoungeArerList: (_: any, args: any) => getLoungeArerList(args),

    }
}

export default loungeAreaResolvers