"use client"
import { formIndex } from "./form";
import Image from "next/image";
import SoftcomLogo from "../imgs/softcom.png";
import { useRef } from "react";
import axios from "axios";

export default function FormArea() {
  const inputSearch = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(inputSearch.current?.value) {
      if( inputSearch.current?.value.length < 8 || inputSearch.current?.value.length > 8 ) {
        console.log("Maior ou menor que 8")
      }
      else {
        axios.get(`https://ncm-nine.vercel.app/api/${inputSearch.current.value}`).then(response => {
          console.log(response.data)
        })
        .catch(error => console.log(error))
      }
    }
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
        <formIndex.ButtonForm Texto="Pesquisar" />
      </formIndex.formWrapper>
    </div>
  );
}
