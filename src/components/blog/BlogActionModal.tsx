type BlogActionModalProps = {
    isOpen: boolean
    title: string
    description: string
    confirmLabel: string
    cancelLabel?: string
    confirmVariant?: "default" | "danger" | "warning"
    onConfirm: () => void
    onCancel: () => void
}

function BlogActionModal({
    isOpen,
    title,
    description,
    confirmLabel,
    cancelLabel = "Batal",
    confirmVariant = "default",
    onConfirm,
    onCancel,
    }: BlogActionModalProps) {
    if (!isOpen) return null

    const confirmButtonStyle = {
        default: "bg-white text-black hover:bg-neutral-200",
        danger: "bg-red-500 text-white hover:bg-red-600",
        warning: "bg-amber-500 text-black hover:bg-amber-400",
    }

    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/70 px-4">
        <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#0B0B0B] p-6 shadow-2xl">
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/60">
            {description}
            </p>

            <div className="mt-6 flex justify-end gap-3">
            <button
                type="button"
                onClick={onCancel}
                className="rounded-full px-4 py-2 text-sm text-white/60 transition hover:text-white"
            >
                {cancelLabel}
            </button>

            <button
                type="button"
                onClick={onConfirm}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${confirmButtonStyle[confirmVariant]}`}
            >
                {confirmLabel}
            </button>
            </div>
        </div>
        </div>
    )
}

export default BlogActionModal