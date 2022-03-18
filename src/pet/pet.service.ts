import { HttpException, Injectable } from '@nestjs/common';
import { PET_LIST } from 'src/data/petList';
import { PetType } from 'src/data/petList.type';

@Injectable()
export class PetService {
  petList = PET_LIST;

  //   Get all pet
  getPets(): Promise<PetType[]> {
    return new Promise((resolve) => {
      resolve(this.petList);
    });
  }

  //   Get pet by ID
  getPet(petID: string): Promise<PetType> {
    return new Promise((resolve) => {
      const pet = this.petList.find((pet) => pet.id === petID);
      if (!pet) {
        throw new HttpException('Pet does not exist', 404);
      }
      resolve(pet);
    });
  }

  //   Add pet
  addPet(newPet: PetType): Promise<PetType[]> {
    return new Promise((resolve) => {
      this.petList.push(newPet);
      resolve(this.petList);
    });
  }

  //   Delete pet
  deletePet(petID: string): Promise<any> {
    return new Promise((resolve) => {
      let index = this.petList.findIndex((pet) => pet.id === petID);
      if (index === -1) {
        throw new HttpException('Pet does not exist', 404);
      }
      this.petList.splice(index, 1);
      resolve(this.petList);
    });
  }
}
