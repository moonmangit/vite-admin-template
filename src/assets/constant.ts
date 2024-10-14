import { MenuProps } from 'primevue/menu'
import { RouteNames } from '../router.config'
import { useTheme } from '../composables/useTheme'

type NavItem = {
    groupLabel: string
    items: RouteNames[]
}
export const NAV_LINKS: NavItem[] = [
    {
        groupLabel: 'default',
        items: ['home']
    },
    {
        groupLabel: 'content',
        items: ['home', 'about', 'contact']
    },
    {
        groupLabel: 'settings',
        items: ['home', 'about', 'contact']
    }
]

export const NAV_PROFILE_MENUS: MenuProps['model'] = [
    {
        label: 'Menu',
        items: [
            {
                label: 'Dark / Light Mode',
                command: () => {
                    useTheme().toggleTheme()
                }
            },
            {
                label: 'Language & Region'
            },
            {
                label: 'Profile'
            },
            {
                label: 'Logout'
            }
        ]
    }
]
