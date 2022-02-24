const files = import.meta.globEager('./*.js');
let modules = {};
for (const path in files) {
  const moduleName = path.replace(/(.*\/)*([^.]+).*/gi, '$2');
  modules[moduleName] = files[path];
}
export default modules;
