const day_in_miliseconds = 1000 * 60 * 60 * 24;

export const isFromTodayOrLater = (targetDate: string): boolean => {
    const today = new Date();
    const target_day = new Date(targetDate);

    const diff = Math.round(
        (target_day.getTime() - today.getTime()) / day_in_miliseconds
    );

    return diff > 0;
};

export const getDifferenceInDays = (from: string, to: string): number => {
    const fromDate = new Date(from);
    const toDate = new Date(to);
    const diff = toDate.getTime() - fromDate.getTime();
    const diff_days = Math.round(diff / day_in_miliseconds);

    return diff_days;
};
