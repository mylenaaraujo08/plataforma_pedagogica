import express, { Request, Response } from "express";
import EscolaController from "../controllers/escolaController";

class EscolaController {
    static async getEscolaByCPF(req: Request, res: Response): Promise<void> {
        const escolaCPF = req.params.cpf;

        try {
            const escola = await EscolaModel.findByCPF(escolaCPF);

            if (escola) {
                res.status(200).json(escola);
            } else {
                res.status(404).json({ message: 'Escola not found' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    static async getAllEscolas(req: Request, res: Response): Promise<void> {
        try {
            const escolas = await EscolaModel.findAll();
            res.status(200).json(escolas);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    static async createEscola(req: Request, res: Response): Promise<void> {
        const escolaData = req.body;

        try {
            const novaEscola = new EscolaModel(escolaData);
            const escolaSalva = await EscolaModel.save(novaEscola);
            res.status(201).json(escolaSalva);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    static async updateEscolaByCPF(req: Request, res: Response): Promise<void> {
        const escolaCPF = req.params.cpf;
        const dadosAtualizadosEscola = req.body;

        try {
            const escolaExistente = await EscolaModel.findByCPF(escolaCPF);

            if (escolaExistente) {
                const escolaAtualizada = new EscolaModel({
                    ...escolaExistente,
                    ...dadosAtualizadosEscola,
                });

                await EscolaModel.update(escolaAtualizada);

                res.status(200).json(escolaAtualizada);
            } else {
                res.status(404).json({ message: 'Escola not found' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    static async deleteEscolaByCPF(req: Request, res: Response): Promise<void> {
        const escolaCPF = req.params.cpf;

        try {
            await EscolaModel.deleteByCPF(escolaCPF);
            res.status(204).send();
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}

export default EscolaController;
