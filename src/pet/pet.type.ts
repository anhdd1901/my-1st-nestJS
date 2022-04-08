export interface PetType {
  id: string;
  type: string;
  name: string;
  description: string;
  owner: string;
  url: string;
  status: StatusType;
}

export interface OwnerType {
  id: string;
  name: string;
}

export interface PetTypeType {
  id: string;
  name: string;
}

export enum StatusType {
  PLAYING = 'PLAYING',
  SLEEPING = 'SLEEPING',
  EATING = 'EATING',
  CARING = 'CARING',
}
