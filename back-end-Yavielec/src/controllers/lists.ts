import { Request, Response } from 'express';
import { List } from '../models/lists';

export const newList = async (req: Request, res: Response) => {
    const {name, description, imagen} = req.body;

    try {
        await List.create({
            name:name,
            description:description,
            imagen:imagen
        })

        res.json({
            mgs: `Lista ${name} creada exitosamente` 
        })
    } catch (error) {
          res.status(400).json({
            msg: 'Upps ocurrio un error',
            error
        })
    }
}

export const getLists = async (req: Request, res: Response) => {
    const listList= await List.findAll();

    res.json(listList)
}
