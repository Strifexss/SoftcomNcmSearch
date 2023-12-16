import { FormEvent } from "react";

interface Props {
    children: React.ReactNode,
    onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
}

export default function formWrapper({children, onSubmit}:Props) {
    return(
        <form onSubmit={onSubmit} 
         className="h-screen w-screen md:w-[75%] md:h-auto xl:w-[60%] bg-zinc-950 md:bg-zinc-800 rounded-xl px-8 md:px-10 py-10 flex flex-col items-center gap-4 transition-[0.1s]">
            {children}
        </form>
    )
}