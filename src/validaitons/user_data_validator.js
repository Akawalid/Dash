function validateForm(email, phone, firstName, lastName, companyName, expertiseLevel) {
    //array will contain all errors by the end
    let errors_array = [];
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors_array.push('Invalid email address');
    }
  
    // Phone validation (basic check for 10 digits)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        errors_array.push('Invalid phone number');
    }
  
    // First and Last Name validation (only alphabets, no special characters)
    const nameRegex = /^[A-Za-z]+$/;
    if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
        errors_array.push('Invalid name');
    }

    //still didn't do the one for expertise level
    return errors_array;
  }

module.exports = validateForm