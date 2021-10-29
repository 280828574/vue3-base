// 根据数组递归查找数据
// arrInit 需要递归的数组
// codeInit 条件判断的字段数值
// keyInit 条件判断字段key
// subKeyInit 子数据的key
const findItemByCode = (arrInit, codeInit, keyInit, subKeyInit) => {
  if (!arrInit || !codeInit || !keyInit || !subKeyInit) {
    console.log('缺少必填字段 :');
    return undefined;
  }
  let returnItem;
  let findCode = function(arr, code, key, subKey) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i][key] === code) {
        returnItem = arr[i];
        return returnItem;
      } else if (arr[i][subKey]?.length > 0) {
        findCode(arr[i][subKey], code, key, subKey);
      }
    }
  };
  findCode(arrInit, codeInit, keyInit, subKeyInit);
  return returnItem;
};
export { findItemByCode };
