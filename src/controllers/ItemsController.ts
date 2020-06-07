import { Request, Response } from "express";
import knex from "../database/connection";
import * as dotenv from "dotenv";
dotenv.config();

class ItemsController {
  async index(req: Request, res: Response) {
    const img_url = process.env.HOST;

    console.log(img_url);

    const items = await knex("items").select("*");

    const serializedItems = items.map((item) => {
      return {
        id: item.id,
        title: item.title,
        image_url: `${img_url}/${item.image}`,
      };
    });

    res.json(serializedItems);
  }
}

export default ItemsController;
