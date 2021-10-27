//自定义指令集
export default app => {
  /***
   * 防抖 单位时间只触发最后一次
   *  @param {?Number|1000} time - 间隔时间
   *  @param {Function} fun - 执行事件
   *  @param {object} obj - 执行事件传参
   *  @param {Array} binding.value - {fun:fun, time:1000, obj:{}}
   *  例：<el-button v-throttle="{fun:fun, time:1000, obj:{}}">刷新</el-button>
   */
  const handleClick = (fun, time, obj, el) => {
    let flag = el.getAttribute('data-click');
    if (flag === '2') {
      return;
    }
    el.setAttribute('data-click', '2');
    if (obj) {
      fun(obj);
    } else {
      fun();
    }
    setTimeout(() => {
      el.setAttribute('data-click', '1');
    }, time);
  };
  app.directive('throttle', {
    mounted: function(el, binding) {
      let { fun, time = 1000, obj = '' } = binding.value;
      if (!fun) {
        console.error('请输入自定义指令: throttle 的回调方法!');
        return;
      }
      el.setAttribute('data-click', '1');
      el.addEventListener('click', e => handleClick(fun, time, obj, el));
    },
    unmounted(el) {
      el.removeEventListener('click', handleClick);
    },
  });

  /***
   *  节流 每单位时间可触发一次
   *  第一次瞬间触发，最后一次不管是否达到间隔时间依然触发
   * 【考虑到input的change事件】
   *  @param {?Number|500} time - 间隔时间
   *  @param {Function} fn - 执行事件
   *  @param {Array} binding.value - [fn,event,time]
   *  例：<el-button v-debounce="{fun:fun,time:500}">刷新</el-button>
   */
  let cbFun = '';
  const inputChange = (fun, time) => {
    clearTimeout(cbFun);
    cbFun = setTimeout(() => {
      cbFun = null;
      fun();
    }, time);
  };
  app.directive('debounce', {
    mounted: function(el, binding) {
      let { fun, time = 500 } = binding.value;
      if (!fun) {
        console.error('请输入自定义指令: debounce 的回调方法!');
        return;
      }
      el.addEventListener('input', e => inputChange(fun, time));
    },
    unmounted(el) {
      el.removeEventListener('input', inputChange);
    },
  });
};
