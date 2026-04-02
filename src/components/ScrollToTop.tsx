import { useEffect } from "react"
import { useLocation } from "react-router-dom"

function ScrollToTop() {
    const { pathname, state } = useLocation()

    useEffect(() => {
        if ((state as { skipScrollReset?: boolean } | null)?.skipScrollReset) {
            return
        }

        window.scrollTo(0, 0)
    }, [pathname, state])

    return null
}

export default ScrollToTop
