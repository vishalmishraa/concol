// Description: This file is used to create a custom console.log() function that can be used to print colored text to the console.
 const color = {
        FgBlack: "\x1b[30m%s\x1b[0m",
        FgRed: "\x1b[31m%s\x1b[0m",
        FgGreen: "\x1b[32m%s\x1b[0m",
        FgYellow: "\x1b[33m%s\x1b[0m",
        FgBlue: "\x1b[34m%s\x1b[0m",
        FgMagenta: "\x1b[35m%s\x1b[0m",
        FgCyan: "\x1b[36m%s\x1b[0m",
        FgWhite: "\x1b[37m%s\x1b[0m",

        BgBlack: "\x1b[40m%s\x1b[0m",
        BgRed: "\x1b[41m%s\x1b[0m",
        BgGreen: "\x1b[42m%s\x1b[0m",
        BgYellow: "\x1b[43m%s\x1b[0m",
        BgBlue: "\x1b[44m%s\x1b[0m",
        BgMagenta: "\x1b[45m%s\x1b[0m",
        BgCyan: "\x1b[46m%s\x1b[0m",
        BgWhite: "\x1b[47m%s\x1b[0m",

 }


class Concol {
    cyan(text) {
        console.log(`${color.FgCyan}`, text);
    }

    yellow(text) {
        console.log(`${color.BgYellow}`, text);
    }

    black(text) {
        console.log(`${color.FgBlack}`, text);
    }

    red(text) {
        console.log(`${color.FgRed}`, text);
    }

    green(text) {
        console.log(`${color.FgGreen}`, text);
    }

    blue(text) {
        console.log(`${color.FgBlue}`, text);
    }

    magenta(text) {
        console.log(`${color.FgMagenta}`, text);
    }

    white(text) {
        console.log(`${color.FgWhite}`, text);
    }

    BgBlack(text) {
        console.log(`${color.BgBlack}`, text);
    }

    BgRed(text) {
        console.log(`${color.BgRed}`, text);
    }

    BgGreen(text) {
        console.log(`${color.BgGreen}`, text);
    }

    BgYellow(text) {
        console.log(`${color.BgYellow}`, text);
    }

    BgBlue(text) {
        console.log(`${color.BgBlue}`, text);
    }

    BgMagenta(text) {
        console.log(`${color.BgMagenta}`, text);
    }

    BgCyan(text) {
        console.log(`${color.BgCyan}`, text);
    }

    BgWhite(text) {
        console.log(`${color.BgWhite}`, text);
    }


    error(text) {
        console.error(`${color.BgRed}`, text);
    }

    warn(text) {
        console.warn(`${color.FgYellow}`, text);
    }

    info(text) {
        console.info(`${color.FgCyan}`, text);
    }

    success(text) {
        console.log(`${color.BgGreen}`, text);
    }

    debug(text) {
        console.debug(`${color.FgBlue}`, text);
    }

}

export default Concol;
