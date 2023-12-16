import useNcmSearch from "./NcmSearch"

interface Props {
    inputValue: string
}

export default function ValidateNcmSearch({inputValue}:Props) {
        if( inputValue.length === 8) {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            return useNcmSearch({inputValue})
        }
        else {
            return null
        }
}