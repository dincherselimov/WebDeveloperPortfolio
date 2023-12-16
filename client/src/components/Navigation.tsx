import React, { ReactNode } from "react";
import { useRouter } from "next/router";

const LINKS = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'About',
        path: '/about'
    }
]
/**
 *  Declare types, avoid type:any
 */
type NavAnchorProps = {
    path: string;
    children: ReactNode;
};

/**
 * 
 * @param param0 
 * @returns 
 * 
 */
function NavAnchor({ path, children }: NavAnchorProps) {
    const { pathname, push } = useRouter();

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        push(path);
    };

    return (
        <a href={path} onClick={handleClick} className={path === pathname ? "active" : ""}>
            {children}
        </a>
    );
}

export default function Navigation() {
    return (
        <nav>
            <ul>
                {LINKS.map(({ name, path }) => (
                    <li key={path}>
                        <NavAnchor path={path}>{name}</NavAnchor>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
