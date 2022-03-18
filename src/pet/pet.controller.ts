import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { PetType } from 'src/data/petList.type';
import { PetDto } from './pet.dto';
import { PetService } from './pet.service';

@Controller('pet')
export class PetController {
  constructor(private PetService: PetService) {}

  @Get()
  async getPets() {
    const pets = await this.PetService.getPets();
    return pets;
  }

  @Get(':petID')
  async getPet(@Param('petID') petID: string) {
    const pet = await this.PetService.getPet(petID);
    return pet;
  }

  @Post()
  async addPet(@Body() createPet: PetType) {
    const pets = await this.PetService.addPet(createPet);
    return pets;
  }

  @Delete()
  async deletePet(@Query() query: { petID: string }) {
    const pet = await this.PetService.deletePet(query.petID);
    return pet;
  }
}
