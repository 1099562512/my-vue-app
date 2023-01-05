
//为组件添加install方法，注册成为全局组件
export const withInstall = (component) => {
  component.install = function(app) {
    app.component(component.name, component)
  }
  return component
}