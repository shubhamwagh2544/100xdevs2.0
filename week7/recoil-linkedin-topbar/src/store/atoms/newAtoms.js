import axios from 'axios'
import { atom, selector } from 'recoil'

export const notifications = atom({
    key: 'notifications',
    // default: {                   // cannot have default values [values should be fetched from backend] 
    //     network: 12,
    //     jobs: 12,
    //     notifications: 12,
    //     messaging: 12
    // }

    // default: async () => {       // cannot have async functions here
    //     axios.get('https://sum-server.100xdevs.com/notifications')
    //         .then((res) => {
    //             return res.data
    //         })
    // }

    // only way to get async data here is through selector (asynchronous data queries in recoil)
    default: selector({
        key: 'asyncNotificationsSelector',
        get: async () => {
            const res = await axios.get('https://sum-server.100xdevs.com/notifications')
            return res.data
        }
    })
})

export const notificationsSelector = selector({
    key: 'notificationsSelector',
    get: ({ get }) => {
        const totalNotifications = get(notifications)
        return (
            totalNotifications.network +
            totalNotifications.jobs +
            totalNotifications.notifications +
            totalNotifications.messaging
        )
    }
})