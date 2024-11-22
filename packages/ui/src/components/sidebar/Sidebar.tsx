import React from 'react';

import { TContext, joinClass } from '@tec/ds/utils';

import { Icon, Text } from '@tec/ds/elements';

import { Button } from '@tec/ds/components';


import { User } from '@tec/business';

import { Menu } from '../../utils';

import Profile from '../profile';

import SidebarAction from './sidebarAction';

import './Sidebar.scss';

interface SidebarProps {
    user?: User;
    menu?: Array<Menu>;
    logout?: Menu['items'][number];
    context?: TContext;
    showMobileMenu?: boolean;
    handleToggleMenu?: () => void;
}

export default function Sidebar({
    user,
    menu,
    logout,
    context = 'neutral',
    showMobileMenu,
    handleToggleMenu,
}: SidebarProps) {

    const navbar = menu?.find((group) => group.key === 'navbar')?.items;

    const sidebar = menu?.find((item) => item.key === 'sidebar')?.items;

    const groupProfile = sidebar?.find((item) => item.key === 'profile');

    const profileSidebar = groupProfile?.items?.find((item) => item.key === 'profile');

    const filteredSidebar = sidebar?.filter((item) => item.key !== 'profile' && item.key !== 'logout');

    const classNameList = joinClass([
        'sidebar',
        `${showMobileMenu ? 'sidebar__show' : ''}`
    ]);
    
    return (
        <aside className={classNameList}>
            <div className="sidebar__container">

                { user && (
                    <div className="sidebar__container--profile">
                        <Profile
                            name={user?.name}
                            email={user?.email}
                            picture={user?.picture}
                            context={context}
                            profileMenu={profileSidebar}>
                            <header className="sidebar__container--profile-header">
                                <div className="sidebar__container--profile-header__close">
                                    <Icon icon="close" size={30} onClick={handleToggleMenu} />
                                </div>
                            </header>
                        </Profile>
                    </div>
                )}

                <div className="sidebar__container--list">
                    { sidebar?.map((group) => (
                      <div key={group.key} className="sidebar__container--list-group">
                          {( group && group?.label !== '') && (
                              <Text
                                  tag="h4"
                                  color="neutral-90"
                                  variant="medium"
                                  className="sidebar__container--list-grouop__title">
                                  {group?.label}
                              </Text>
                          )}
                          {group?.items?.map((item) => (
                              <Button
                                     key={item?.key}
                                     icon={item?.icon || 'dashboard'}
                                     type="button"
                                     context={context}
                                     onClick={item?.onRedirect}
                                     appearance="sidebar"
                                     iconPosition="left"
                                     notificationCounter={item?.counter}>
                                  {item?.label}
                              </Button>
                          ))}
                      </div>
                    ))}
                </div>
                <div className="sidebar__container--filtered">
                    { filteredSidebar?.map((group) => (
                        <div className="sidebar__container--filtered-group">
                            <Text tag="h4" color="neutral-90" className="sidebar__container--filtered-group__title">
                                {group?.label}
                            </Text>
                            { group?.items?.map((item) => (
                                <SidebarAction
                                    key={item.key}
                                    icon={item.icon}
                                    label={item.label}
                                    counter={item.counter}
                                    onRedirect={item.onRedirect}
                                />
                            ))}
                        </div>
                    ))}
                </div>
                { logout && (
                    <div className="sidebar__container--logout">
                        <Button
                            icon="exit"
                            context={context}
                            onClick={logout.onRedirect}
                            appearance="sidebar"
                            iconPosition="left">
                            {logout.label}
                        </Button>
                    </div>
                )}

                <hr className="sidebar__container--divider"/>
                <ul className="sidebar__container--navbar">
                    { navbar?.map((item) => (
                        <SidebarAction
                            key={item.key}
                            label={item.label}
                            items={item.items}
                            onRedirect={item?.onRedirect}
                        />
                    ))}
                </ul>
            </div>
        </aside>
    );
};
