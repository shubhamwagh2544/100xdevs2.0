import { useRecoilValue } from 'recoil'
import { messagingAtom, jobsAtom, networkAtom, notificationsAtom } from './store/atoms/atoms'
import { totalNotificationsCountSelector } from './store/selectors/selectors'

export function TopBar() {
    const networkAtomCount = useRecoilValue(networkAtom)
    const jobsAtomCount = useRecoilValue(jobsAtom)
    const messagingAtomCount = useRecoilValue(messagingAtom)
    const notificationsAtomCount = useRecoilValue(notificationsAtom)
    const totalNotificationsCount = useRecoilValue(totalNotificationsCountSelector)


    return (
        <div>
            <button>Home</button>
            <button>My Network ({networkAtomCount > 99 ? "99+" : networkAtomCount})</button>
            <button>Jobs ({jobsAtomCount > 99 ? "99+" : jobsAtomCount})</button>
            <button>Messaging ({messagingAtomCount > 99 ? "99+" : messagingAtomCount})</button>
            <button>Notifications ({notificationsAtomCount > 99 ? "99+" : notificationsAtomCount})</button>
            <button>Me ({totalNotificationsCount})</button>
        </div>
    )
}