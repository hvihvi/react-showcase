export const once = fn => {
  var returnValue,
    called = false;
  return () => {
    if (!called) {
      called = true;
      returnValue = fn();
    }
    return returnValue;
  };
};
