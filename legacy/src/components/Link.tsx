import { FunctionComponent, ReactElement } from 'react'

export interface LinkProps {
    href: string,
    children: ReactElement | string
    target?: string
}

export const Link: FunctionComponent<LinkProps> = ({href, children, target}) => (
    <a href={href} target={target} className='text-indigo-700 hover:text-indigo-950'>{children}</a>
)