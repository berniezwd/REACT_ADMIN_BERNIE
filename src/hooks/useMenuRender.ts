import routes from '../routes'

export function useMenuRender() {
  const MenuItems = [] as any
  routes.forEach((item: any) => {
    if (item.needAuth) {
      MenuItems.push({
        key: item.path,
        label: item.label,
        icon: item.icon,
        children:
          item.children &&
          item.needAuth &&
          item.children.map((child: any) => {
            return {
              key: item.path + '/' + child.path,
              label: child.label,
              icon: child.icon,
              children:
                child.children &&
                child.needAuth &&
                child.children.map((sun: any) => {
                  return {
                    key: item.path + '/' + child.path + '/' + sun.path,
                    label: sun.label,
                    icon: sun.icon,
                  }
                }),
            }
          }),
      })
    }
  })

  return {
    MenuItems,
  }
}
