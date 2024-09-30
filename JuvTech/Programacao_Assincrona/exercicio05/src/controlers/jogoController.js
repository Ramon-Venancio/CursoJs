import { pegarImagens } from "../models/jogoModel.js"

export const pegaImagens = async (req, res) => {
    try {
        const imagens = await pegarImagens()
        res.json(imagens)
    } catch(error) {
        res.status(500).json({ error: 'Error ao carregar as imagens.' })
    }
}