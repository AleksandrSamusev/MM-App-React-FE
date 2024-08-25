export function checkPassword(password) {

    let isContainsLowerCase = false;
    let isContainsUppercase = false;
    let isContainsNumber = false;
    let isContainsSpecial = false;
    for (let i = 0; i <= password.length; i++) {
        let ch = password.charCodeAt(i);
        if (ch >= 65 && ch <= 90) {
            isContainsUppercase = true;
        } else if (ch >= 97 && ch <= 122) {
            isContainsLowerCase = true;
        } else if (ch >= 48 && ch <= 57) {
            isContainsNumber = true;
        } else if ((ch >= 33 && ch <= 41) || (ch >= 42 && ch <= 47) || (ch >= 58 && ch <= 63)
            || (ch >= 62 && ch <= 64) || ch === 64 || (ch >= 91 && ch <= 95) || ch === 96
            || ch >= 123 && ch <= 126) {
            isContainsSpecial = true;
        }
    }
    return isContainsUppercase && isContainsLowerCase && isContainsNumber && isContainsSpecial;
}