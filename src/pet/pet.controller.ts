import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PetType } from 'src/pet/pet.type';
import { CreatePetDTO } from './pet.dto';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { PetService } from './pet.service';

@Controller('pet')
export class PetController {
  constructor(private PetService: PetService) {}

  // Get all pet
  @Get()
  async getPets(@Query() query: PetType): Promise<PetType[]> {
    const queryArray = Object.keys(query);
    console.log(query);
    if (queryArray.length === 0) return await this.PetService.getPets();
    else return await this.PetService.filterPet(query);
  }

  // Get a pet
  @Get(':petID')
  async getPet(@Param('petID') petID: string): Promise<PetType> {
    console.log(petID);
    const pet = await this.PetService.getPet(petID);
    return pet;
  }

  // Create pet
  @Post()
  @UsePipes(ValidationPipe)
  async addPet(@Body() createPet: CreatePetDTO): Promise<PetType> {
    const pet = await this.PetService.addPet(createPet);
    return pet;
  }

  // Update pet
  @Put(':petID')
  async updatePet(
    @Param() petID: { petID: string },
    @Body() updatePet: PetType,
  ): Promise<PetType> {
    const updatedPet = await this.PetService.updatePet(petID.petID, updatePet);
    return updatedPet;
  }

  // Delete pet
  @Delete(':petID')
  async deletePet(@Param('petID') petID: string): Promise<PetType[]> {
    const pet = await this.PetService.deletePet(petID);
    return pet;
  }
}
