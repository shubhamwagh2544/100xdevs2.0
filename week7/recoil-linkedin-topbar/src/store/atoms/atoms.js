import { atom } from 'recoil'

const networkAtom = atom({
    key: 'networkAtom',
    default: 104
})

const jobsAtom = atom({
    key: 'jobsAtom',
    default: 12
})

const messagingAtom = atom({
    key: 'messagingAtom',
    default: 0
})

const notificationsAtom = atom({
    key: 'notificationAtom',
    default: 45
})

export {
    networkAtom,
    jobsAtom,
    messagingAtom,
    notificationsAtom
}