import path from 'path'
const files = import.meta.globEager('./**/*.js')

export const useAllDirective = (app) => {
  let modules = {}
  Object.keys(files).forEach(key => {
    const name = path.basename(key, ".js")
    modules[name] = files[key].default || files[key]
  });

  for(let [key, item] of Object.entries(modules)) {
    app.directive(`${key}`, item)
  }
}