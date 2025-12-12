import { getUsersBadge } from './index';
import { Icon } from './types/icon.enum';
import { User } from './types/user.interface';

describe('getUsersBadge', () => {
  it('get Badge Starter', async () => {
    await expect(getUsersBadge(getUserMock(1))).resolves.toEqual(Icon.BADGE_STARTER);
    await expect(getUsersBadge(getUserMock(2))).resolves.toEqual(Icon.BADGE_STARTER);
    await expect(getUsersBadge(getUserMock(4))).resolves.toEqual(Icon.BADGE_STARTER);
  });

  it('get Badge Bronze', async () => {
    await expect(getUsersBadge(getUserMock(5))).resolves.toEqual(Icon.BADGE_BRONZE);
    await expect(getUsersBadge(getUserMock(10))).resolves.toEqual(Icon.BADGE_BRONZE);
    await expect(getUsersBadge(getUserMock(24))).resolves.toEqual(Icon.BADGE_BRONZE);
  });

  it('get Badge Silver', async () => {
    await expect(getUsersBadge(getUserMock(25))).resolves.toEqual(Icon.BADGE_SILVER);
    await expect(getUsersBadge(getUserMock(30))).resolves.toEqual(Icon.BADGE_SILVER);
    await expect(getUsersBadge(getUserMock(49))).resolves.toEqual(Icon.BADGE_SILVER);
  });

  it('get Badge Gold', async () => {
    await expect(getUsersBadge(getUserMock(50))).resolves.toEqual(Icon.BADGE_GOLD);
    await expect(getUsersBadge(getUserMock(70))).resolves.toEqual(Icon.BADGE_GOLD);
    await expect(getUsersBadge(getUserMock(99))).resolves.toEqual(Icon.BADGE_GOLD);
  });

  it('get Badge Platinum', async () => {
    await expect(getUsersBadge(getUserMock(100))).resolves.toEqual(Icon.BADGE_PLATINUM);
    await expect(getUsersBadge(getUserMock(500))).resolves.toEqual(Icon.BADGE_PLATINUM);
    await expect(getUsersBadge(getUserMock(1999))).resolves.toEqual(Icon.BADGE_PLATINUM);
  });

  it('get Badge God Like', async () => {
    await expect(getUsersBadge(getUserMock(2000))).resolves.toEqual(Icon.BADGE_GOD_LIKE);
    await expect(getUsersBadge(getUserMock(1000000))).resolves.toEqual(Icon.BADGE_GOD_LIKE);
  });

  it('get Badge Bad Ass', async () => {
    await expect(getUsersBadge(getUserMock(0))).resolves.toEqual(Icon.BADGE_BAD_ASS);
    await expect(getUsersBadge(getUserMock(-1))).resolves.toEqual(Icon.BADGE_BAD_ASS);
    await expect(getUsersBadge(getUserMock(-100))).resolves.toEqual(Icon.BADGE_BAD_ASS);
  });
});

function getUserMock(count: number): User {
  return {
    id: '___',
    username: '___',
    solutionCount: count,
  };
}