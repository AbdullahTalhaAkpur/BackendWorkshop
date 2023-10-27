// Kullanıcadan alınan girdileri tanımlama
function generatePassword(upper, lower, numCount, specialChar) {
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const digits = '0123456789';
    const specialSymbols = '!@#$%^&*()_+';

    let password = upper + lower;

    for (let i = password.length; i < 9 - numCount - 1; i++) {
        const randomType = Math.floor(Math.random() * 4); // 0 (büyük harf), 1 (küçük harf), 2 (sayı), 3 (özel simge)
        if (randomType === 0) {
            password += uppercaseLetters.charAt(Math.floor(Math.random() * uppercaseLetters.length));
        } else if (randomType === 1) {
            password += lowercaseLetters.charAt(Math.floor(Math.random() * lowercaseLetters.length));
        } else if (randomType === 2) {
            password += digits.charAt(Math.floor(Math.random() * digits.length));
        } else {
            password += specialSymbols.charAt(Math.floor(Math.random() * specialSymbols.length));
        }
    }

    for (let i = 0; i < numCount; i++) {
        password += digits.charAt(Math.floor(Math.random() * digits.length));
    }

    return password;
}

// Kullanıcıdan alınan girdiler
const upperCaseInput = 'H';
const lowerCaseInput = 'm';
const numCountInput = 2;
const specialCharInput = '@';

// Şifre oluşturma
const password = generatePassword(upperCaseInput, lowerCaseInput, numCountInput, specialCharInput);

console.log("Oluşturulan Şifre:", password);