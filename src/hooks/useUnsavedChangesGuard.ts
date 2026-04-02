import { useEffect } from "react"

type UseUnsavedChangesGuardProps = {
    shouldBlock: boolean
    message?: string
}

function useUnsavedChangesGuard({
    shouldBlock,
    message = "Perubahan belum dipublikasikan. Yakin ingin keluar?",
}: UseUnsavedChangesGuardProps) {
    useEffect(() => {
        const handleBeforeUnload = (event: BeforeUnloadEvent) => {
        if (!shouldBlock) return

        event.preventDefault()
        event.returnValue = message
        }

        window.addEventListener("beforeunload", handleBeforeUnload)

        return () => {
        window.removeEventListener("beforeunload", handleBeforeUnload)
        }
    }, [shouldBlock, message])
}

export default useUnsavedChangesGuard