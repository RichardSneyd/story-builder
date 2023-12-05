import Profile from './Profile';
import { Trait } from "./IProfile";
import Item from './Item';
import { IItem } from "./IItem";
jest.mock('./Item');

const mockItem1 = new (Item as any)();
const mockItem2 = new (Item as any)();

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

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('constructor initializes properties correctly with Set', () => {
    expect(profile.traits).toEqual(mockTraits);
    expect(profile.likedItems).toEqual(mockLikedItems);
    expect(profile.dislikedItems).toEqual(mockDislikedItems);
    expect(profile.likedTraits).toEqual(mockLikedTraits);
    expect(profile.dislikedTraits).toEqual(mockDislikedTraits);
  });

});
