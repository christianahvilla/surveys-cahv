import { NavbarContent, NavbarMenuToggle } from '@nextui-org/react';

interface INavbarToggle {
  isMenuOpen: boolean;
}

export const NavbarToggle = ({ isMenuOpen }: INavbarToggle) => {
  return (
    <NavbarContent className='sm:hidden' justify='start'>
      <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} />
    </NavbarContent>
  );
};
