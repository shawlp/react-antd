import { CurrentUser } from '@models/user'
import { useGetOne } from './request'

export const useGetCurrentUser = () => {
  return useGetOne<CurrentUser>('CurrentUser', '/current/user')
}
