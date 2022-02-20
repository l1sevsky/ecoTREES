import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../base-components/general/Header';
import SubHeader from '../base-components/general/SubHeader';
import Navbar from '../base-components/general/Navbar';
import NavbarElement from '../base-components/general/NavbarElement';
import Menu from '../base-components/general/Menu';
import Main from '../base-components/general/Main';

import useWindowResize from '../hooks/useWindowResize';


function PageLayout () {
    const [breakPointNavbar] = useWindowResize(800);
    const [breakPointSubheader] = useWindowResize(1000);

    return (
        <>
            <Header tel={'+79200085202'} telMask={'+7(920)008-5202'}>
                {breakPointSubheader && 
                    <SubHeader position='header' /> 
                }
                {breakPointNavbar && 
                    <Navbar position='header'>
                        <NavbarElement title='Главная' icon='home' path='/'/>
                        <NavbarElement title='Каталог' icon='catalog' path='/catalog'/>
                        <NavbarElement title='Корзина' icon='basket'path='/basket' />
                        <NavbarElement title='Кабинет' icon='user' path='/user'/>
                    </Navbar>
                }
            </Header>
                {!breakPointSubheader && 
                    <SubHeader /> 
                }
                {!breakPointNavbar &&
                    <Menu>
                        <Navbar>
                            <NavbarElement title='Главная' icon='home' path='/'/>
                            <NavbarElement title='Каталог' icon='catalog' path='/catalog'/>
                            <NavbarElement title='Корзина' icon='basket'path='/basket' />
                            <NavbarElement title='Кабинет' icon='user' path='/user'/>
                        </Navbar>
                    </Menu>
                }

            <Main>
                <Outlet /> 
            </Main>
        </>
    );
}

export default PageLayout;