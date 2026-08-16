import type { ComponentType } from "react"

// Framer supplies these exports in its Code Component runtime. This no-op shim
// lets the same component render in the local Vite preview.
export const ControlType = {
    String: "string",
    Number: "number",
}

export function addPropertyControls<Props>(
    component: ComponentType<Props>,
    controls: Record<string, unknown>
): void {
    void component
    void controls
}
