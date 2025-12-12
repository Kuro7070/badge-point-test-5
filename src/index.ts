import { User } from './types/user.interface';
import { Icon } from './types/icon.enum';



const BADGE_THRESHOLDS: { min: number; icon: Icon }[] = [
  { min: 2000, icon: Icon.BADGE_GOD_LIKE },
  { min: 100,  icon: Icon.BADGE_PLATINUM },
  { min: 50,   icon: Icon.BADGE_GOLD },
  { min: 25,   icon: Icon.BADGE_SILVER },
  { min: 5,    icon: Icon.BADGE_BRONZE },
  { min: 1,    icon: Icon.BADGE_STARTER },
];

export const getUsersBadge = async ({ solutionCount }: User): Promise<Icon> => {

  for (const { min, icon } of BADGE_THRESHOLDS) {
    if (solutionCount >= min) {
      return icon;
    }
  }

  return Icon.BADGE_BAD_ASS;

};

function calculateUsersStatistics() {
  // todo
}

calculateUsersStatistics();
