import { getUsersBadge } from './index';
import { Icon } from './types/icon.enum';
import { User } from './types/user.interface';

describe('getUsersBadge', () => {

  it('get Gold', async () => {
    await expect(getUsersBadge(getUserMock(100))).resolves.toEqual(Icon.BADGE_GOLD);
    await expect(getUsersBadge(getUserMock(50))).resolves.toEqual(Icon.BADGE_GOLD);
    await expect(getUsersBadge(getUserMock(1000000))).resolves.toEqual(Icon.BADGE_GOLD);
  });

  it('get Silver', async () => {
    await expect(getUsersBadge(getUserMock(25))).resolves.toEqual(Icon.BADGE_SILVER);
    await expect(getUsersBadge(getUserMock(49))).resolves.toEqual(Icon.BADGE_SILVER);
    await expect(getUsersBadge(getUserMock(30))).resolves.toEqual(Icon.BADGE_SILVER);
  });

  it('get Bronze', async () => {
    await expect(getUsersBadge(getUserMock(5))).resolves.toEqual(Icon.BADGE_BRONZE);
    await expect(getUsersBadge(getUserMock(24))).resolves.toEqual(Icon.BADGE_BRONZE);
    await expect(getUsersBadge(getUserMock(10))).resolves.toEqual(Icon.BADGE_BRONZE);
  });

  it('get no Icon', async () => {
    await expect(getUsersBadge(getUserMock(4))).resolves.toBeNull();
    await expect(getUsersBadge(getUserMock(-100))).resolves.toBeNull();
    await expect(getUsersBadge(getUserMock(0))).resolves.toBeNull();
  });

});

function getUserMock(count: number): User {
  return {
    id: '___',
    username: '___',
    solutionCount: count
  };
}