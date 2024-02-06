export const RevenueCard = ({
    title,
    showWarning,
    orderCount,
    amount
}) => {
    return (
        <div className="bg-white rounded shadow-md p-5">
            <div className="flex">
                <div className="text-grey-700">
                    {title}
                </div>
                <div className="ml-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>
            </div>

            <div className="flex justify-between pt-2">
                <div className="font-medium text-3xl">
                    ₹{amount}
                </div>
                {orderCount ?
                    <div className="flex cursor-pointer underline font-medium flex-col justify-center">
                        <div className="flex">
                            <div className="text-blue-700">
                                {orderCount} Orders
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </div>
                        </div>
                    </div> : null}
            </div>
        </div>
    )
}