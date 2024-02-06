export const MainRevenueCard = ({
    title,
    showWarning,
    orderCount,
    amount
}) => {
    return (
        <div className="bg-blue-800 text-white rounded-lg flex-grow min-w-[300px]">
            <div className="p-3">
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
                                <div className="text-white">
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
            <div className="flex justify-between bg-blue-850 p-2 rounded-b-lg">
                <div>Next Payment Date:</div>
                <div>Today 4:00 PM</div>
            </div>
        </div>
    )
}