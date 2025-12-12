import {User} from "./types/user.interface";
import {Icon} from "./types/icon.enum";

export function logUserCount(users: User[]): void {
    const userCount = users.length;
    console.log(`Total users: ${userCount}\n`);
}

export function logAverageSolutionCount(users: User[]): void {
    const userCount = users.length;
    const totalSolutions = users.reduce(
        (sum, user) => sum + user.solutionCount,
        0
    );
    const averageSolutions = userCount > 0 ? totalSolutions / userCount : 0;
    console.log(`Average solutionCount: ${averageSolutions.toFixed(2)}\n`);
}

export function logTopUsers(users: User[], limit = 5): void {
    const topUsers = [...users]
        .sort((a, b) => b.solutionCount - a.solutionCount)
        .slice(0, limit);

    console.log('Top users (by solutionCount):\n');
    topUsers.forEach((u, index) => {
        console.log(
            `  - ${index + 1}. ${u.username} – ${u.solutionCount} solutions`
        );
    });
    console.log('\n');
}

export async function logMostGivenBadge(users: User[], getUsersBadge: (user: User) => Promise<Icon>): Promise<void> {
    const usersWithBadges = await Promise.all(
        users.map(async (user) => ({
            user,
            badge: await getUsersBadge(user),
        }))
    );

    const badgeCounts = new Map<Icon, number>();
    for (const { badge } of usersWithBadges) {
        badgeCounts.set(badge, (badgeCounts.get(badge) ?? 0) + 1);
    }

    let mostGivenBadge: Icon | null = null;
    let maxCount = 0;

    for (const [badge, count] of badgeCounts.entries()) {
        if (count > maxCount) {
            mostGivenBadge = badge;
            maxCount = count;
        }
    }

    if (mostGivenBadge) {
        console.log(
            `Most given badge: ${mostGivenBadge} (${maxCount} users)\n`
        );
    } else {
        console.log('No badges were assigned.\n');
    }
}