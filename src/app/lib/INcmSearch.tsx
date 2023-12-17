export default interface INcmSearch {
    NCM: string,
    Status: string,
    Descricao: string,
    uTrib: string,
    Concatenado: string,
    Error?: string,
    Descricao_Similares: string[],
    Similares: string[]
}