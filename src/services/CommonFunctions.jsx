export function getCurrentMonth() {
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September",
        "October", "November", "December"];
    const d = new Date();
    return month[d.getMonth()]
}

export function getCurrentQuarterAsNumber() {
    const d = new Date();
    const monthNumber = d.getMonth();
    if (monthNumber === 1 || monthNumber === 2 || monthNumber === 3) {
        return 1;
    } else if (monthNumber === 4 || monthNumber === 5 || monthNumber === 6) {
        return 2;
    } else if (monthNumber === 7 || monthNumber === 8 || monthNumber === 9) {
        return 3;
    } else if (monthNumber === 10 || monthNumber === 11 || monthNumber === 12) {
        return 4;
    }
}

export function getCurrentDay() {
    const date = new Date();
    return date.getDate();
}

export function getCurrentYear() {
    const date = new Date();
    return date.getFullYear();
}

export function getCurrentMonthAsNumber() {
    const date = new Date();
    let month = date.getMonth() + 1;
    if(month < 10) {
        month = '0' + month;
    }
    return month;
}

export function getMonthName(input) {
    if (input === '01') {
        return 'January'
    } else if (input === '02') {
        return 'February'
    } else if (input === '03') {
        return 'March'
    } else if (input === '04') {
        return 'April'
    } else if (input === '05') {
        return 'May'
    } else if (input === '06') {
        return 'June'
    } else if (input === '07') {
        return 'July'
    } else if (input === '08') {
        return 'August'
    } else if (input === '09') {
        return 'September'
    } else if (input === '10') {
        return 'October'
    } else if (input === '11') {
        return 'November'
    } else if (input === '12') {
        return 'December'
    }
}

