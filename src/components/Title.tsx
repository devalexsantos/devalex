interface TitleProps {
    text: string
}

export default function Title({ text }:TitleProps){
    return(
        <h1 className="text-4xl mt-7 font-bold leading-snug">{text}</h1>
    )
}