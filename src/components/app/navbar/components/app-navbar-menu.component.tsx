import { NavbarContent, NavbarMenu } from '@nextui-org/react';
import { getNavMenuItems } from '../helpers';

interface INavBarMenu {
  path: string;
}

export const NavBarMenu = ({ path }: INavBarMenu) => {
  return (
    <NavbarContent>
      <NavbarMenu>{getNavMenuItems(path)}</NavbarMenu>
    </NavbarContent>
  );
};
