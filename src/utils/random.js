export const randomChar = () => {
    const str = "abcdefghijklmnopqrstuvwxyz";

    return str[Math.floor(Math.random() * str.length)];
}