import { useEffect } from "react"

const useTitle = title => {
    useEffect( () => {
        document.title =   `Toy marketplace | ${title}`;
    } , [title])
}

export default useTitle;