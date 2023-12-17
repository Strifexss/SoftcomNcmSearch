import { Ref } from "react"
import { UseFormRegisterReturn } from "react-hook-form"

interface Props {
    type: "text" | "password",
    PlaceHolder: string,
    inputRef?: Ref<HTMLInputElement>;
}

export default function inputForm({PlaceHolder,type, inputRef}:Props) {
    return(
        <div className="w-full flex flex-col justify-center items-start gap-2">
            <input className="w-full h-[2.5rem] md:h-[2rem] xl:h-[2.5rem] px-4 text-white text-[0.8rem] rounded-md bg-zinc-900 outline-orange-600" 
            type={type}
            placeholder={PlaceHolder}
            ref={inputRef}
             />
        </div>
    )
}