import { NavbarBrand } from '@nextui-org/react';
import { FocusIcon } from '../../../Icons/FocusIcon';
import { APP_NAME } from 'src/constants';

export const AppNavBarBrand = () => (
  <NavbarBrand>
    <FocusIcon />
    <p className='font-bold text-inherit'>{APP_NAME}</p>
  </NavbarBrand>
);
