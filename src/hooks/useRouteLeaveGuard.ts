import { useCallback, useEffect, useRef } from "react"
import { UNSAFE_NavigationContext as NavigationContext } from "react-router-dom"
import { useContext } from "react"

type UseRouteLeaveGuardProps = {
    shouldBlock: boolean
    onBlockedNavigation: (nextPath: string) => void
}

function useRouteLeaveGuard({
    shouldBlock,
    onBlockedNavigation,
}: UseRouteLeaveGuardProps) {
    const { navigator } = useContext(NavigationContext)
    const unblockRef = useRef<null | (() => void)>(null)

    const allowNavigation = useCallback(() => {
        unblockRef.current?.()
        unblockRef.current = null
    }, [])

    useEffect(() => {
        if (!shouldBlock) return

        // @ts-expect-error React Router internal blocker
        unblockRef.current = navigator.block((tx) => {
        onBlockedNavigation(tx.location.pathname)
        })

        return () => {
            unblockRef.current?.()
            unblockRef.current = null
        }
    }, [navigator, onBlockedNavigation, shouldBlock])

    return allowNavigation
}

export default useRouteLeaveGuard
