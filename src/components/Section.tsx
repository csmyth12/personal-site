import { FunctionComponent, ReactNode } from "react"

export interface SectionProps {
    children: ReactNode,
    color?: string
}

export const Section: FunctionComponent<SectionProps> = ({children, color}) => (
    <section className={`h-full w-full ${color} snap-center snap-always`}>
        {children}
    </section>
)