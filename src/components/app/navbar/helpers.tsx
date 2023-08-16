import { Link as RouterLink } from 'react-router-dom';
import { Link, NavbarItem } from '@nextui-org/react';
import { APP_LINKS } from './constants';
import { removeFromLocalStorage } from '~utils/LocalStorage';

export const handleLogout = () => {
  removeFromLocalStorage('authData');

  window.location.reload();
};

export const getNavItems = (path: string) =>
  APP_LINKS.map(({ key, text, route }) => (
    <NavbarItem key={key} isActive={path === key}>
      <Link aria-current='page' color='primary'>
        <RouterLink to={route}>{text}</RouterLink>
      </Link>
    </NavbarItem>
  ));

export const getNavMenuItems = (path: string) =>
  APP_LINKS.map(({ key, text, route }) => (
    <NavbarItem key={key} isActive={path === key}>
      <Link aria-current='page' color='primary'>
        <RouterLink to={route}>{text}</RouterLink>
      </Link>
    </NavbarItem>
  ));
