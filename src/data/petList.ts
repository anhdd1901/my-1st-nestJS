import { OwnerType, PetType, PetTypeType, StatusType } from '../pet/pet.type';

export const PET_LIST: PetType[] = [
  {
    type: '3',
    name: 'Mickey',
    description: 'Fancy',
    owner: '2',
    url: 'https://anhdep123.com/wp-content/uploads/2021/03/anh-chuot-mickey.png',
    id: '8ec0667d-079b-4330-86a1-97e7380735fb',
    status: StatusType.PLAYING,
  },
  {
    type: '3',
    name: 'Minnie',
    description: 'Cute',
    owner: '2',
    url: 'https://static.wikia.nocookie.net/disney/images/3/36/Minnie_Mouse_pose_.jpg/revision/latest?cb=20170709133603',
    id: '058d0adb-73a4-458a-9f37-1a4abbd0b8b2',
    status: StatusType.PLAYING,
  },
  {
    type: '1',
    name: 'Goofy',
    description: 'Navi',
    owner: '2',
    url: 'https://static.wikia.nocookie.net/disney/images/2/27/Goofy_transparent.png/revision/latest?cb=20200308081711',
    id: '7b88b694-7f51-4691-b415-10de3a463120',
    status: StatusType.PLAYING,
  },
];

export const OWNER_LIST: OwnerType[] = [
  {
    id: '1',
    name: 'Hardes',
  },
  {
    id: '2',
    name: 'Disney',
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
