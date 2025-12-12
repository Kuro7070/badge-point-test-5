import { User } from './types/user.interface';
import { Icon } from './types/icon.enum';
import {getAllUser} from "./user-store";
import {logAverageSolutionCount, logMostGivenBadge, logTopUsers, logUserCount} from "./logs";
import {emulateLongProcess} from "./emulate-long-process";



const BADGE_THRESHOLDS: { min: number; icon: Icon }[] = [
  { min: 2000, icon: Icon.BADGE_GOD_LIKE },
  { min: 100,  icon: Icon.BADGE_PLATINUM },
  { min: 50,   icon: Icon.BADGE_GOLD },
  { min: 25,   icon: Icon.BADGE_SILVER },
  { min: 5,    icon: Icon.BADGE_BRONZE },
  { min: 1,    icon: Icon.BADGE_STARTER },
];

export const getUsersBadge = async ({ solutionCount }: User): Promise<Icon> => {

  await emulateLongProcess();

  for (const { min, icon } of BADGE_THRESHOLDS) {
    if (solutionCount >= min) {
      return icon;
    }
  }

  return Icon.BADGE_BAD_ASS;

};

export async function calculateUsersStatistics(): Promise<void> {
  const users = await getAllUser();

  logUserCount(users);

  logAverageSolutionCount(users);

  logTopUsers(users, 5);

  await logMostGivenBadge(users, getUsersBadge);

}

calculateUsersStatistics();
