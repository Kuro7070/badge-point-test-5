import { User } from './types/user.interface';
import { Icon } from './types/icon.enum';



const BADGE_THRESHOLDS: { min: number; icon: Icon }[] = [
  { min: 50, icon: Icon.BADGE_GOLD },
  { min: 25, icon: Icon.BADGE_SILVER },
  { min: 5,  icon: Icon.BADGE_BRONZE },
];

export const getUsersBadge = ({ solutionCount }: User): Icon | null => {
  for (const { min, icon } of BADGE_THRESHOLDS) {
    if (solutionCount >= min) {
      return icon;
    }
  }
  return null;
};
