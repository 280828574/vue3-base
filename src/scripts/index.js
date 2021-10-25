const files = require.context('.', false, /\.js$/);
const modules = {};
files.keys().forEach(key => {
  if (key === './index.js') return;
  for (const key1 in files(key).default) {
    if (!modules[key1]) {
      modules[key1] = files(key).default[key1];
    } else {
      console.error(`scripts文件夹内存在重复方法名:${key1}`);
    }
  }
});

export default modules;
