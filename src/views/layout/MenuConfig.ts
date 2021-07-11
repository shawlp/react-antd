import { MenuDataItem } from '@ant-design/pro-layout'

const data: MenuDataItem[] = [
  {
    path: '/home',
    name: 'home',
    icon: 'heart',
    children: [
      {
        path: '/home/list',
        name: 'home List',
        icon: 'smile'
      },
      {
        path: '/home/demo',
        name: 'Demo List',
        icon: 'smile'
      }
    ]
  },
  {
    path: '/demo',
    name: 'demo',
    icon: 'smile',
    children: [
      {
        path: '/demo/list',
        name: 'Demo List',
        icon: 'smile'
      }
    ]
  }
]

export default data
