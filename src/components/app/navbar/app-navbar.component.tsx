import { Navbar, NavbarContent } from '@nextui-org/react';
import { getNavItems } from './helpers';
import './style.css';
import { useState } from 'react';
import { NavbarToggle } from './components/app-navbar-toggle.component';
import { AppNavBarBrand } from './components/app-navbar-brand.component';
import { useLocation } from 'react-router-dom';
import { NavBarUser } from './components/app-navbar-user.component';
import { NavBarMenu } from './components/app-navbar-menu.component';

export const NavBarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const path = pathname.split('/')[1];

  return (
    <Navbar
      classNames={{
        item: [
          'flex',
          'relative',
          'h-full',
          'items-center',
          "data-[active=true]:after:content-['']",
          'data-[active=true]:after:absolute',
          'data-[active=true]:after:bottom-0',
          'data-[active=true]:after:left-0',
          'data-[active=true]:after:right-0',
          'data-[active=true]:after:h-[2px]',
          'data-[active=true]:after:rounded-[2px]',
          'data-[active=true]:after:bg-primary',
        ],
      }}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarToggle isMenuOpen={isMenuOpen} />
      <NavbarContent justify='start' className='navbar-brand  md:flex sm:hidden'>
        <AppNavBarBrand />
      </NavbarContent>

      <NavbarContent className='md:hidden pr-3' justify='center'>
        <AppNavBarBrand />
      </NavbarContent>

      <NavbarContent className='hidden md:flex xs:hidden gap-6' justify='center'>
        {getNavItems(path)}
      </NavbarContent>

      <NavBarUser />

      <NavBarMenu path={path} />
    </Navbar>
  );
};
