export function getCurrentAuthority() {
  return ["admin"];
}
export function isLogin() {
  let auths = getCurrentAuthority();
  return auths && auths[0] !== "guest";
}
export function checkAuth(auth) {
  let auths = getCurrentAuthority();
  return auths.some(item => auth.includes(item));
}
