import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { Icon } from '@iconify/react';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Day',
    path: '/day',
    icon: <Icon icon="ion:calendar-clear-sharp" />,
    cName: 'nav-text'
  },
  {
  title: 'Notes',
    path: '/notes',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },

  {
    title: 'Horkout Tracking',
    path: '/workout',
    icon: <Icon icon="ion:barbell-outline" />,
    cName: 'nav-text'
  },
  {
    title: 'Habit Tracking',
    path: '/habits',
    icon: <Icon icon="bx:brain" />,
    cName: 'nav-text'
  },


];