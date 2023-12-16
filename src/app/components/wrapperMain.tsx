interface Props{
    children: React.ReactNode,
    
}

export default function WrapperMain({children}:Props) {
    return(
        <div 
        className="w-[75vw] h-[80vh] bg-zinc-900 flex justify-center items-center">
            {children}
        </div>
    )
}