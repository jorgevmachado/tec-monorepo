import React, { useState } from 'react';

import { User } from '@tec/business';

import { TContext } from '@tec/ds/utils';

import { Fade } from '../../animations';

import { Header, Sidebar } from '../../components';

import { Logo, Menu } from '../../utils';

import './Page.scss';

interface PageProps {
    user?: User;
    logo?: Logo;
    menu?: Array<Menu>;
    logout?: Menu['items'][number];
    context?: TContext;
    children: React.ReactNode;
}

export default function Page({
    user,
    logo,
    menu,
    logout,
    context,
    children,
}: PageProps) {

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const handleToggleMenu = () => setShowMobileMenu(!showMobileMenu);

    
    const navbar = menu?.find((group) => group.key === 'navbar')?.items;
    
    return (
        <Fade enter={true}>
            <Header logo={logo} navbar={navbar} context={context} handleToggleMenu={handleToggleMenu}/>
            <main className="page">
                <Sidebar
                    user={user}
                    menu={menu}
                    context={context}
                    logout={logout}
                    showMobileMenu={showMobileMenu}
                    handleToggleMenu={handleToggleMenu}
                />
                {children}
            </main>
        </Fade>
    );
};
