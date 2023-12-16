import Image from "next/image"
import BackgroundImage from "../imgs/backgroundImage.png"

export default function ImageArea() {
    return(
        <div className='w-[80%] h-full'>
        <Image className='w-full h-full'
          src={BackgroundImage}
          width={1000}
          height={1000}
          alt='Softcom'
          />
        </div>
    )
}