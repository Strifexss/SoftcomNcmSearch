import axios from "axios";
import INcmSearch from "../lib/INcmSearch";

interface Props {
    inputValue: string,
}

export default async function useNcmSearch({inputValue}:Props):Promise<INcmSearch> {
    return await axios.get(`https://ncm-nine.vercel.app/api/${inputValue}`).then(response => {
        return response.data
      })
      .catch(error => console.log(error))
}