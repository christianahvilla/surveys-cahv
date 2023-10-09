import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  NavbarContent,
} from '@nextui-org/react';
import { LOGOUT, USER_SETTINGS, USER_WELCOME_NAVBAR } from '../constants';
import { INCOMING } from 'src/constants';
import { getFromLocalStorage } from '~utils/LocalStorage';
import { handleLogout } from '../helpers';

export const NavBarUser = () => {
  const user = getFromLocalStorage('authData');
  return (
    <NavbarContent as='div' justify='end' className='navbar-user'>
      <Dropdown placement='bottom-end'>
        <DropdownTrigger>
          <Avatar
            isBordered
            as='button'
            className='transition-transform'
            color='primary'
            name={user.name}
            size='sm'
            src='https://i.redd.it/coupmnvtixh61.png'
          />
        </DropdownTrigger>
        <DropdownMenu aria-label='Profile Actions' variant='flat'>
          <DropdownItem key='profile' className='h-14 gap-2'>
            <p className='font-semibold'>{USER_WELCOME_NAVBAR}</p>
            <p className='font-bold'>{user.name}</p>
          </DropdownItem>
          <DropdownItem key='settings'>
            <p className='font-semibold'>{INCOMING}</p>
            <p className='font-normal'>{USER_SETTINGS}</p>
          </DropdownItem>
          <DropdownItem key='logout' color='danger' onClick={handleLogout}>
            {LOGOUT}
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </NavbarContent>
  );
};
