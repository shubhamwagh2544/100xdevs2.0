import React from "react"

export default function NotificationBar({ children }: {
    children: React.ReactNode
}) {
    return (
        <div>
            20% off on our top products
            {children}
        </div>
    )
}