const files = import.meta.globEager('./*.js');
let modules = {};
for (const path in files) {
  let arr = ['./request.js'];
  if (!arr.includes(path)) {
    const moduleName = path.replace(/(.*\/)*([^.]+).*/gi, '$2');
    modules[moduleName] = files[path];
  }
}
export default modules;
