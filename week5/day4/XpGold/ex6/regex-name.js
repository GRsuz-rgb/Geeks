function validateName(name) {
    const nameRegex = /^[A-Z][a-z]+ [A-Z][a-z]+$/;
    return nameRegex.test(name);
}

console.log(validateName("John Doe"));
console.log(validateName("John doe "));