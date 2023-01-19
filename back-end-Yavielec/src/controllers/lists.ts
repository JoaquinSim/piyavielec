import { Request, Response } from 'express';
import { List } from '../models/lists';

export const getLists = async (req: Request, res: Response) => {
    const listList= await List.findAll();

    res.json(listList)
}
