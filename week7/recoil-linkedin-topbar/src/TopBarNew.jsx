import { useRecoilState, useRecoilValue } from 'recoil'
import { notifications, notificationsSelector } from './store/atoms/newAtoms'
import { useEffect } from 'react'
import axios from 'axios'

export function TopBarNew() {
    const [networkCount, setNetworkCount] = useRecoilState(notifications)
    const totalNotificationsCount = useRecoilValue(notificationsSelector)

    // useEffect(() => {
    //     axios.get('https://sum-server.100xdevs.com/notifications')
    //         .then((res) => {
    //             setNetworkCount(res.data)
    //         })
    // }, [])

    return (
        <div>
            <button>Home</button>

            <button>My Network ({networkCount.network > 99 ? "99+" : networkCount.network})</button>
            <button>Jobs ({networkCount.jobs})</button>
            <button>Messaging ({networkCount.messaging})</button>
            <button>Notifications ({networkCount.notifications})</button>

            <button>Me ({totalNotificationsCount})</button>
        </div>
    )
}