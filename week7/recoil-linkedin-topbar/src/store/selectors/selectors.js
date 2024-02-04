import { selector } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom } from '../atoms/atoms'


// selector is derived from other atoms
export const totalNotificationsCountSelector = selector({
    key: 'totalNotificationsCount',
    get: ({ get }) => {
        const networkCount = get(networkAtom)
        const jobsCount = get(jobsAtom)
        const messagingCount = get(messagingAtom)
        const notificationsCount = get(notificationsAtom)

        return networkCount + jobsCount + messagingCount + notificationsCount
    }
})