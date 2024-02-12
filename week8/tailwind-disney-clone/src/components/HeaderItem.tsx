export const HeaderItem = ({ name, Icon }: any) => {
    return (
        <div className="text-white text-[20px] font-medium cursor-pointer flex items-center gap-3 hover:underline underline-offset-8 mb-2 mt-2">
            <Icon />
            <h2 className="">{name}</h2>
        </div>
    )
}