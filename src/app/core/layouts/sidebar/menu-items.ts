import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    {
        path: '/meter-connection',
        title: 'Armed Connection',
        icon: 'icon  icon-Menu-Meters',
        class: '',
        label: '',
        labelClass: 'label label-rouded label-themecolor pull-right',
        extralink: false,
        submenu: [],
        menuTopIthem: 'DeviceControl'
    },
    {
        path: '/meter-deconnection',
        title: 'Disconnection',
        icon: 'icon icon-Icon-Group-Dashboard-Group',
        class: '',
        label: '',
        labelClass: 'label label-rouded label-themecolor pull-right',
        extralink: false,
        submenu: [],
        menuTopIthem: 'DeviceControl'
    },
    {
        path: '/meter-message',
        title: 'Send Text Message',
        icon: 'icon icon-Menu-Firmware-Library',
        class: '',
        label: '',
        labelClass: 'label label-rouded label-themecolor pull-right',
        extralink: false,
        submenu: [],
        menuTopIthem: 'DeviceControl'
    },
    {
        path: '',
        title: 'Meter Add',
        icon: 'icon icon-Menu-Firmware-Library',
        class: '',
        label: '',
        labelClass: 'label label-rouded label-themecolor pull-right',
        extralink: false,
        submenu: [],
        menuTopIthem: 'Provisioning'
    },
    {
        path: '',
        title: 'Meter Update',
        icon: 'icon icon-Menu-Firmware-Library',
        class: '',
        label: '',
        labelClass: 'label label-rouded label-themecolor pull-right',
        extralink: false,
        submenu: [],
        menuTopIthem: 'Provisioning'
    },
    {
        path: '',
        title: 'Meter Delete',
        icon: 'icon icon-Menu-Firmware-Library',
        class: '',
        label: '',
        labelClass: 'label label-rouded label-themecolor pull-right',
        extralink: false,
        submenu: [],
        menuTopIthem: 'Provisioning'
    }
];

