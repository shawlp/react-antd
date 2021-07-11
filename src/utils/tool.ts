/** 是否测试环境 */
export function isEnvDevelop() {
  return process.env.NODE_ENV === 'development'
}
