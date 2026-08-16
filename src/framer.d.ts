declare module "framer" {
    import type { ComponentType } from "react"

    export const ControlType: {
        String: string
        Number: string
    }

    export function addPropertyControls<Props>(
        component: ComponentType<Props>,
        controls: Record<string, unknown>
    ): void
}
