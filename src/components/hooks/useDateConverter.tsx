export const useDateConverter = (apiDate: string): string => {

    const date: string = apiDate;
    const apiDateDay: number = parseInt(date.substring(10, 8));
    const apiDateMonth: number = parseInt(date.substring(5, 7));
    const apiDateYear: number = parseInt(date.substring(0, 4));

    const weekDays: Array<string> = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    const calcWeekDay = (apiDateDay: number, apiDateMonth: number, apiDateYear: number): string => {
        return weekDays[new Date(`${apiDateYear}/${apiDateMonth}/${apiDateDay}`).getUTCDay()];
    }

    return `${calcWeekDay(apiDateDay, apiDateMonth, apiDateYear)} ${apiDateDay}`
}
