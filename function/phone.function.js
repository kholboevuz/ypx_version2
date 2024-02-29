function convertPhoneNumber(inputNumber) {
    const numericOnly = inputNumber.replace(/\D/g, '');
    if (numericOnly.startsWith('+')) {
        return '+' + numericOnly.substring(1);
    } else {
        return numericOnly;
    }
}


module.exports = convertPhoneNumber