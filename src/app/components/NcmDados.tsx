import { SetStateAction } from "react";
import { X } from "lucide";

interface Props {
    handleClose: React.Dispatch<SetStateAction<boolean>>
}

export default function NcmDados({handleClose}:Props) {

    return(

        <div className="w-screen h-screen md:w-[75vw] md:h-[80vh] gap-6 bg-zinc-900 flex flex-col items-end absolute p-4 md:p-10 overflow-y-scroll xl:text-[0.8rem] 2xl:text-[0.9rem]">
                <header className="w-full flex justify-end">
                    <button onClick={() => handleClose(false)}
                     className="text-white font-semibold bg-orange-400 hover:bg-orange-500 transition-[0.1s] p-2 px-6">
                        Voltar
                    </button>
                </header>
                <div className="w-full flex justify-center flex-col gap-8">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-white font-semibold">
                            Ncm:
                        </h1>
                        <h1 className="p-2 bg-zinc-700 border-b-gray-500 border-b-4 text-white font-semibold">
                            85176262
                        </h1>
                    </div>                
                    <div className="flex flex-col gap-2">
                        <h1 className="text-white font-semibold">
                            Descrição
                        </h1>
                        <h1 className="p-2 bg-zinc-700 border-b-gray-500 border-b-4 text-white font-semibold">
                            De tecnologia celular
                        </h1>
                    </div>                
                    <div className="flex flex-col gap-2">
                        <h1 className="text-white font-semibold">
                            Status
                        </h1>
                        <h1 className="p-2 bg-zinc-700 border-b-gray-500 border-b-4 text-white font-semibold">
                            Válido
                        </h1>
                    </div>                
                    <div className="flex flex-col gap-2">
                        <h1 className="text-white font-semibold">
                            Unidade Tributária
                        </h1>
                        <h1 className="p-2 bg-zinc-700 border-b-gray-500 border-b-4 text-white font-semibold">
                            Kg
                        </h1>
                    </div>                
                    <div className="flex flex-col gap-2">
                        <h1 className="text-white font-semibold">
                            Descrição detalhada
                        </h1>
                        <h1 className="p-2 bg-zinc-700 border-b-gray-500 border-b-4 text-white font-semibold">
                        85: Máquinas, aparelhos e materiais elétricos, e suas partes; aparelhos de gravação ou de reprodução de som, aparelhos de gravação ou de reprodução de imagens e de som em televisão, e suas partes e acessórios. \n85.17: Aparelhos telefônicos, incluindo os telefones inteligentes (smartphones) e outros telefones para redes celulares ou para outras redes sem fio; outros aparelhos para a transmissão ou recepção de voz, imagens ou outros dados, incluindo os aparelhos para comunicação em redes por fio ou redes sem fio (tal como uma rede local (LAN) ou uma rede de área estendida (longa distância) (WAN)), exceto os aparelhos das posições 84.43, 85.25, 85.27 ou 85.28. \n8517.6: - Outros aparelhos para a transmissão ou recepção de voz, imagens ou outros dados, incluindo os aparelhos para comunicação em redes por fio ou redes sem fio (tal como uma rede local (LAN) ou uma rede de área estendida (longa distância) (WAN)): \n8517.62: -- Aparelhos para recepção, conversão, transmissão ou regeneração de voz, imagens ou outros dados, incluindo os aparelhos de comutação e roteamento \n8517.62.6: Aparelhos emissores com receptor incorporado de tecnologia celular ou por satélite \n8517.62.62: De tecnologia celular 
                        </h1>
                    </div>                
                </div>
        </div>
    )
}