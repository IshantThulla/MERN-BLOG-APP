import { BlogContext } from "../context/BlogContext";

import { useContext} from "react";

export const useBlogsContext = () => {
    const context = useContext(BlogContext)

    if(!context) {
        throw Error('useblogcontex must be used in')
    }
    return context
}