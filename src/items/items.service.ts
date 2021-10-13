import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ItemsService {

    // private readonly items: Item[] = [
    //     {
    //         id: "343432",
    //         name: "Item one",
    //         qty: 100,
    //         description: "This is the numba oan"
    //     },
    //     {
    //         id: "3sdf2",
    //         name: "Item dos",
    //         qty: 200,
    //         description: "This is the numba dos"
    //     },
    //     {
    //         id: "34redff432",
    //         name: "Item tres",
    //         qty: 300,
    //         description: "This is the numba tessn"
    //     },
    // ];

    constructor (@InjectModel('Item') private readonly itemModel:Model<Item>){

    }

    async findAll(): Promise<Item[]> {
        return await this.itemModel.find();
    }

    async findOne(id: string): Promise<Item> {
        return await this.itemModel.findOne({_id: id});
    }
}
