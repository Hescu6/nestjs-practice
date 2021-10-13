import { Controller, Get, Post, Put, Delete, Body, Req, Res, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { Request, Response } from 'express';
import { identity } from 'rxjs';

@Controller('items')    //name of route
export class ItemsController {


    @Get()              //decorator for get, post, delete, put functions
    /* YOU CAN USE HE req/res as in express but it's not the nestjs way */
    findAll(@Req() req: Request, @Res() res:Response):Response {  //name of the function 

        console.log(req.url);
        return res.send('Hellow Works');
        // return 'Get All Items'; //response
    }

    @Get(':id')
    findOne(@Param() param): string {
        return `Item - ${param.id}`
    }



    /*  Create a DTO(data transfer object) schema
        defines how the data will be send over the network
    */
    @Post()
    create(@Body() createItemDto: CreateItemDto):string {
        return `Name: ${createItemDto.name}
                Description: ${createItemDto.description}
                `;
    }

    @Delete(':id')
    delete(@Param('id') id:string){
        return `Delete ${id}`;
    }

    @Put(':id')
    update(@Body() updateItemDto: CreateItemDto, @Param('id') id): string {
        return `Update ${id} - Name: ${updateItemDto.name}`;
    }

}
