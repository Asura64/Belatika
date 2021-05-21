export default class Cookies {
    constructor() {
        let cookies = document.cookie.split('; ');
        cookies.forEach(cookie => {
            cookie = cookie.split('=');
            if (cookie.length === 2) {
                this[cookie[0]] = cookie[1];
            }
        });
    }

    has(key)
    {
        return this[key] !== undefined;
    }

    get(key)
    {
        return this[key];
    }

    set(key, value, exDays = 365)
    {
        this[key] = value;
        let d = new Date();
        d.setTime(d.getTime() + (exDays*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = key + "=" + value + ";" + expires + ";path=/";
    }
}