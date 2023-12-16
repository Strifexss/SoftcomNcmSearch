import Image from 'next/image'
import WrapperMain from './components/wrapperMain'
import BackgroundImage from "./imgs/backgroundImage.png"
import ImageArea from './components/imageArea'
import FormArea from './components/formArea'
export default function Home() {
  return(
    <div className='w-screen h-screen bg-zinc-950 flex justify-center items-center rounded-md'>
      <WrapperMain>
          <ImageArea/>
          <FormArea/>
          <h1 className='absolute right-0 text-[0.6rem] m-2 text-gray-500 bottom-0'>
            Desenvolvido por Lins e Killberty
          </h1>
      </WrapperMain>
    </div>
  )
}
