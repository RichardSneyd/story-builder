import Profile from './Profile';
import { Trait } from "./IProfile";
import Item from './Item';
import { IItem, ItemState } from "./IItem";
import { IMaterial } from "./IMaterial";
import ItemCategory from './ItemCategory';


// Mock data for Item constructor
const mockCategory: ItemCategory = { name: 'Toy', pre: 'a' };
const mockMaterial: IMaterial = { name: 'Plastic', hardness: 'hard', wetness: 'dry', temperature: 'cold' };
const mockState: ItemState[] = ['clean'];

// Creating mock items with the above data
const mockItem1 = new Item({
  name: 'Toy Car',
  position: { horizontal: 'center', vertical: 'top' },
  category: mockCategory,
  material: mockMaterial,
  state: mockState,
});

const mockItem2 = new Item({
  name: 'Doll',
  position: { horizontal: 'left', vertical: 'bottom' },
  category: mockCategory,
  material: mockMaterial,
  state: mockState,
});

describe('Profile', () => {
  const mockTraits = new Set<Trait>(['confident', 'smart']);
  const mockLikedItems = new Set<IItem>([mockItem1]);
  const mockDislikedItems = new Set<IItem>([mockItem2]);
  const mockLikedTraits = new Set<Trait>(['brave', 'playful']);
  const mockDislikedTraits = new Set<Trait>(['nasty', 'stupid']);

  let profile: Profile;

  beforeEach(() => {
    profile = new Profile({
      traits: Array.from(mockTraits),
      likedItems: Array.from(mockLikedItems),
      dislikedItems: Array.from(mockDislikedItems),
      likedTraits: Array.from(mockLikedTraits),
      dislikedTraits: Array.from(mockDislikedTraits),
    });
  });

  test('constructor initializes properties correctly with Set', () => {
    expect(profile.traits).toEqual(mockTraits);
    expect(profile.likedItems).toEqual(mockLikedItems);
    expect(profile.dislikedItems).toEqual(mockDislikedItems);
    expect(profile.likedTraits).toEqual(mockLikedTraits);
    expect(profile.dislikedTraits).toEqual(mockDislikedTraits);
  });

  // Additional tests for ensuring no duplicates can be added can also be included
});
