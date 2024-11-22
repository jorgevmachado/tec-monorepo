import React from 'react';

import { Button, Dropdown, Link } from '@tec/ds/components';
import { Image } from '@tec/ds/elements';
import { type TContext } from '@tec/ds/utils';

import { Logo, Menu } from '../../utils';

import './Header.scss';


export interface HeaderProps {
    logo?: Logo;
    navbar?: Menu['items'];
    context?: TContext
    handleToggleMenu?: () => void;
}

export default function Header({
    logo,
    navbar,
    context = 'neutral',
    handleToggleMenu
}: HeaderProps) {
    return (
        <header className="header">
            <div className="header__brand">
                <Button
                    icon="hamburger"
                    onClick={handleToggleMenu}
                    context={context}
                    className="header__brand--button"
                    aria-label="sidebar"
                    appearance="iconButton"/>
                { logo && (
                    <div className="header__brand--logo" onClick={logo.onClick}>
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            title={logo.title}
                            width={logo.width}
                            height={logo.height}
                        />
                    </div>
                )}

            </div>
            <nav className="header__nav">
                <ul className="header__nav--list">
                    {navbar?.map((item) => (
                        <li
                            key={item.key}
                            className={`header__nav--list-item ${item.items?.length ? 'header__nav--list-dropdown' : ''}`}>
                            {!item.items?.length ? (
                                <Link type="link" context={context} appearance="menu" onClick={item?.onRedirect}>
                                    {item.label}
                                </Link>
                            ) : (
                                <Dropdown label={item.label} type="link" context={context} appearance="navbar">
                                    {item?.items?.map((subItem) => (
                                        <Link
                                            key={subItem.key}
                                            type="link"
                                            context={context}
                                            iconColor={`${context}-100`}
                                            onClick={subItem?.onRedirect}
                                            appearance="menu">
                                            {subItem.label}
                                        </Link>
                                    ))}
                                </Dropdown>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};
