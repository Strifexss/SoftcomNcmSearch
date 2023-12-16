interface Props {
    Texto: string
}
export default function ButtonForm({Texto}:Props) {
    return(
        <button className="w-full h-[2.5rem] md:h-[2rem] xl:h-[2.5rem]  text-white font-semibold rounded-md bg-orange-400 hover:bg-orange-500 transition-[0.2s]">
            {Texto}
        </button>
    )
}