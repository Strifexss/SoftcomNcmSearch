"use client"
import Image from 'next/image'
import WrapperMain from './components/wrapperMain'
import BackgroundImage from "./imgs/backgroundImage.png"
import ImageArea from './components/imageArea'
import FormArea from './components/formArea'
import { useState } from 'react'
import INcmSearch from './lib/INcmSearch'
import NcmDados from './components/NcmDados'

export default function Home() {

  const [data, setData] = useState<INcmSearch | null>(null);
  const [showNcmModal, setShowNcmModal] = useState(false)
  return(
    <div className='w-screen h-screen bg-zinc-950 flex justify-center items-center rounded-md'>
      <WrapperMain>
          <ImageArea/>
          <FormArea
            setNcmData={setData}
            showData={setShowNcmModal}
          />
          <h1 className='absolute right-0 text-[0.6rem] m-2 text-gray-500 bottom-0'>
            Desenvolvido por Lins e Killberty
          </h1>
          { showNcmModal &&
            <NcmDados
              handleClose={setShowNcmModal}
            />
          }
      </WrapperMain>
    </div>
  )
}
