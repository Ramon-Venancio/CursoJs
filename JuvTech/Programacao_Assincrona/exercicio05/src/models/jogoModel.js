import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const pegarImagens = async () => {
    try {
        const pastaImagens = path.join(__dirname, '..', 'public', 'images')
        const arquivos = await fs.promises.readdir(pastaImagens)
        const caminhosImagens = arquivos.map(imagem => imagem!== 'carta_costas.png'? path.join('images', imagem): null).filter(Boolean)

        return caminhosImagens
    } catch(error) {
        console.error(`Erro ao carregar as imagens: ${error}`)
        return []
    }
}