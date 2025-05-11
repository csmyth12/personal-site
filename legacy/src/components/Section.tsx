import { FunctionComponent, ReactNode } from "react"

export interface SectionProps {
    children: ReactNode,
    color?: string,
    id: string
}

export const Section: FunctionComponent<SectionProps> = ({children, color, id}) => (
    <section className={`h-full w-full ${color} snap-center snap-always`} id={id}>
        {children}
    </section>
)