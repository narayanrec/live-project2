
export function getTomorrow() {
    let d = new Date(),
        month = '' +(d.getMonth() + 1),
        day = '' +(d.getDate()+1),
        year = d.getFullYear();

        if(month.length < 2) month = '0' + month;
        if(day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

export function isDateLesserThanToday(input) {
    const now = new Date().getTime();
    const inputDate = new Date(input).getTime();

    return inputDate < now;
}