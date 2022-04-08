import { HttpException, Injectable } from '@nestjs/common';
import { PET_LIST } from 'src/data/petList';
import { PetType, StatusType } from 'src/pet/pet.type';
import { v4 } from 'uuid';
import { CreatePetDTO } from './pet.dto';

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

  // Filter pet
  filterPet(query: PetType): Promise<PetType[]> {
    return new Promise((resolve) => {
      const attributeArray = Object.keys(query);
      resolve(
        this.petList.filter(
          (a) => !attributeArray.some((b) => !a[b].includes(query[b])),
        ),
      );
    });
  }

  //   Create pet
  addPet(newPet: CreatePetDTO): Promise<PetType> {
    return new Promise((resolve) => {
      const petID = v4();
      this.petList.push({ ...newPet, id: petID, status: StatusType.PLAYING });
      resolve({ ...newPet, id: petID, status: StatusType.PLAYING });
    });
  }

  // Update pet
  updatePet(petID: string, updatePet: PetType): Promise<PetType> {
    return new Promise((resolve) => {
      let currentPet = this.petList.find((a) => a.id === petID);
      const index = this.petList.findIndex((a) => a.id === petID);
      if (!currentPet || index === -1) {
        throw new HttpException('Pet does not exist', 404);
      }

      currentPet = { ...currentPet, ...updatePet };
      this.petList.splice(index, 1, currentPet);
      resolve(currentPet);
    });
  }

  //   Delete pet
  deletePet(petID: string): Promise<PetType[]> {
    return new Promise((resolve) => {
      const index = this.petList.findIndex((pet) => pet.id === petID);
      if (index === -1) {
        throw new HttpException('Pet does not exist', 404);
      }
      this.petList.splice(index, 1);
      resolve(this.petList);
    });
  }
}
