import express, { Request, Response } from 'express';
import GestorController from '../controllers/gestorController';

const router = express.Router();

// Get all gestores
router.get('/', async (req: Request, res: Response) => {
    await GestorController.getAllGestores(req, res);
});

// Get gestor by ID
router.get('/:id', async (req: Request, res: Response) => {
    await GestorController.getGestorById(req, res);
});

// Get gestor by CPF
router.get('/cpf/:cpf', async (req: Request, res: Response) => {
    await GestorController.getGestorByCpf(req, res);
});

// Get gestor by nome
router.get('/nome/:nome', async (req: Request, res: Response) => {
    await GestorController.getGestorByNome(req, res);
});

// Get gestor by escola
router.get('/escola/:escola', async (req: Request, res: Response) => {
    await GestorController.getGestorByEscola(req, res);
});

// Create new gestor
router.post('/', async (req: Request, res: Response) => {
    await GestorController.createGestor(req, res);
});

// Update gestor by ID
router.put('/:id', async (req: Request, res: Response) => {
    await GestorController.updateGestor(req, res);
});

// Delete gestor by ID
router.delete('/:id', async (req: Request, res: Response) => {
    await GestorController.deleteGestor(req, res);
});

export default router;
