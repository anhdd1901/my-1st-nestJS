import { OwnerType, PetType, PetTypeType } from './petList.type';

export const PET_LIST: PetType[] = [
  {
    id: '1',
    type: '1',
    name: 'Cerbie',
    description: 'Loyalty',
    owner: '1',
    url: 'https://preview.redd.it/49dcdrfevdb41.jpg?auto=webp&s=3a19fe11b40fa6dd389ba9adf3e21be9bdc37568',
  },
  {
    id: '2',
    type: '1',
    name: 'Goffy',
    description: 'Angry',
    owner: '2',
    url: 'https://static.wikia.nocookie.net/disney/images/7/7b/Pluto.PNG/revision/latest?cb=20170628205507',
  },
  {
    id: '3',
    type: '2',
    name: 'Tom',
    description: 'Pussy Cat',
    owner: '3',
    url: 'https://www.tomandjerrychaseasia.com/m/zt/20200522142810/img/characters/pic/tom_be2af94.png',
  },
  {
    id: '4',
    type: '3',
    name: 'Jerry',
    description: 'Smart',
    owner: '3',
    url: 'https://upload.wikimedia.org/wikipedia/vi/2/2f/Jerry_Mouse.png',
  },
];

export const OWNER_LIST: OwnerType[] = [
  {
    id: '1',
    name: 'Hardes',
  },
  {
    id: '2',
    name: 'Mickey',
  },
  {
    id: '3',
    name: 'Mammy',
  },
];

export const PET_TYPE_LIST: PetTypeType[] = [
  {
    id: '1',
    name: 'Dog',
  },
  {
    id: '2',
    name: 'Cat',
  },
  {
    id: '3',
    name: 'Mouse',
  },
];
