const isLogin = (payload: string): Boolean => {
  const regExp = /^:/;
  return regExp.test(payload);
};

const isMac = (payload: string): Boolean => {
  const regExp = /^([0-9A-Fa-f]{2}[:-]){2}/g;
  return regExp.test(payload);
};

export { isLogin, isMac };
