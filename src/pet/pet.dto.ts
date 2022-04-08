import { IsNotEmpty } from 'class-validator';

export class CreatePetDTO {
  @IsNotEmpty() readonly type: string;

  @IsNotEmpty() readonly name: string;

  @IsNotEmpty() readonly description: string;

  @IsNotEmpty() readonly owner: string;

  @IsNotEmpty() readonly url: string;
}
