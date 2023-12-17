"use client"
import { formIndex } from "./form";
import Image from "next/image";
import SoftcomLogo from "../imgs/softcom.png";
import { SetStateAction, useRef, useState } from "react";
import ValidateNcmSearch from "../hooks/validateNcmSearch";
import INcmSearch from "../lib/INcmSearch";

interface Props {
  setNcmData: React.Dispatch<SetStateAction<INcmSearch | null>>,
  showData: React.Dispatch<SetStateAction<boolean>>
}

export default function FormArea({setNcmData, showData}:Props) {
  const inputSearch = useRef<HTMLInputElement | null>(null);
  
  const [erroValidation, setErroValidation] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
   
      setLoading(true);
      const inputValue = inputSearch.current?.value || "";

      if (!/^\d+$/.test(inputValue)) {
        setErroValidation("O NCM deve conter apenas números");
        setTimeout(() => {
          setErroValidation(null);
          setLoading(false)
        }, 3000);
        return;
      }

      const respostaApi = await ValidateNcmSearch({ inputValue })
  
        if(respostaApi)
         if (respostaApi.Status === "4") {
          setErroValidation("Ncm inválido e não possui similares");
        } else {
          setNcmData(respostaApi);
          showData(true)

        }

    setTimeout(() => {
      setErroValidation(null);
      setLoading(false)
    }, 3000);
  };

  return (
    <div className="h-screen w-screen md:w-full md:h-full flex justify-center items-center">
      <formIndex.formWrapper onSubmit={handleSubmit}>
        <Image
          className="w-[15rem] h-[3rem] md:w-[12rem] md:h-[2.2rem] xl:w-[13rem] xl:h-[3rem]"
          src={SoftcomLogo}
          alt="Softcom"
        />
        <h1 className="text-white text-[1.5rem] md:text-[1.2rem] xl:text-[1.5rem] font-semibold m-4">
          Buscador de NCM
        </h1>
        <formIndex.inputForm
          PlaceHolder="Insira o NCM"
          type="text"
          inputRef={inputSearch}
        />
        {erroValidation && (
          <p className="text-red-500 text-[0.8rem] font-semibold">
            {erroValidation}
          </p>
        )}
        <formIndex.ButtonForm Texto={loading ? "Carregando..." : "Pesquisar"} />
      </formIndex.formWrapper>
    </div>
  );
}