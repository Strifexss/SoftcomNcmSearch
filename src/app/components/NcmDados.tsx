import { SetStateAction } from "react";
import INcmSearch from "../lib/INcmSearch";
import {motion} from "framer-motion"

interface Props {
    handleClose: React.Dispatch<SetStateAction<boolean>>,
    Data: INcmSearch | null
}

export default function NcmDados({handleClose, Data}:Props) {

    return(

        <motion.div 
        initial={{y: 60, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{duration: 0.5}}
        className="w-screen h-screen md:w-[75vw] md:h-[80vh] gap-6 bg-zinc-900 flex flex-col items-end absolute p-4 md:p-10 overflow-y-scroll xl:text-[0.8rem] 2xl:text-[0.9rem] no-scrollbar">
            
                <header className="w-full flex justify-end">
                    <button onClick={() => handleClose(false)}
                     className="text-white font-semibold bg-orange-400 hover:bg-orange-500 transition-[0.1s] p-2 px-6">
                        Voltar
                    </button>
                </header>
                <div className="w-full flex justify-center flex-col gap-8">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-orange-400 font-semibold">
                            Ncm:
                        </h1>
                        <h1 className="p-2 bg-zinc-700 border-b-gray-500 border-b-4 text-white font-semibold">
                         {Data?.NCM}
                        </h1>
                    </div>                
                    <div className="flex flex-col gap-2">
                        <h1 className="text-orange-400 font-semibold">
                            {
                                Data?.Status === "2" ? "Similares" : "Descrição"
                            }
                        </h1>
                       
                       { Data?.Status === "2" ? Data.Descricao_Similares.map((Descricoes, index) => {

                        const valorSimilar = Data.Similares[index];
                        const UnidadeTribSimilar = Data.uTrib[index];

                        return (
                            <h1 key={Descricoes} className="p-2 bg-zinc-700 border-b-gray-500 border-b-4 text-white font-semibold">
                              {valorSimilar} <span className="text-orange-400">|</span> {Descricoes} <span className="text-orange-400">|</span> {UnidadeTribSimilar} 
                            </h1>
                        )})
                         : 
                         <h1 className="p-2 bg-zinc-700 border-b-gray-500 border-b-4 text-white font-semibold">
                            {Data?.Descricao}
                        </h1>
                        }
                    </div>                
                    <div className="flex flex-col gap-2">
                        <h1 className="text-orange-400 font-semibold">
                            Status
                        </h1>
                        <h1 className="p-2 bg-zinc-700 border-b-gray-500 border-b-4 text-white font-semibold">
                            {Data?.Status === "1" ? "Válido" : "Inválido"}
                        </h1>
                    </div>                
                    { Data?.Status === "1" &&
                        <div className="flex flex-col gap-2">
                        <h1 className="text-orange-400 font-semibold">
                            Unidade Tributária
                        </h1>
                        <h1 className="p-2 bg-zinc-700 border-b-gray-500 border-b-4 text-white font-semibold">
                            {Data?.uTrib}
                        </h1>
                    </div>
                    }                
                    <div className="flex flex-col gap-2">
                        <h1 className="text-orange-400 font-semibold">
                            Descrição detalhada
                        </h1>
                        <h1 className="p-2 bg-zinc-700 border-b-gray-500 border-b-4 text-white font-semibold">
                            {Data?.Concatenado}
                        </h1>
                    </div>   
                </div>
        </motion.div>
    )
}