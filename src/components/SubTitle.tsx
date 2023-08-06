interface SubTitleProps{
    children: React.ReactNode
}

export default function SubTitle({ children }:SubTitleProps){
    return(
        <div className="text-base text-zinc-400 mt-6">{children}</div>
    )
}