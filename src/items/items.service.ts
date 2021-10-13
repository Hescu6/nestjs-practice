import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface'

@Injectable()
export class ItemsService {

    private readonly items: Item[] = [
        {
            id: "343432",
            name: "Item one",
            qty: 100,
            description: "This is the numba oan"
        },
        {
            id: "3sdf2",
            name: "Item dos",
            qty: 200,
            description: "This is the numba dos"
        },
        {
            id: "34redff432",
            name: "Item tres",
            qty: 300,
            description: "This is the numba tessn"
        },
    ];

    findAll(): Item[] {
        return this.items;
    }

    findOne(id: string): Item {
        return this.items.find( item => item.id === id)
    }
}
