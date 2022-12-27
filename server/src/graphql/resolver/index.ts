import { merge } from "lodash";
import { userResolver } from "./user.resolver";

export const resolvers = merge(userResolver)