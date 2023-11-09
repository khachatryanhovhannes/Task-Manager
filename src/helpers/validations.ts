const emailValidation = {
    required: {
        value: true,
        message: 'This field is required'
    },
    pattern: {
        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: "invalid email address"
    }
}

const passwordValidation = {
    required: {
        value: true,
        message: 'This field is required'
    },
    pattern: {
        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/,
        message: "Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character"
    }
};

const nameValidation = {
    required: 'Name is required',
    minLength: { value: 3, message: 'Name should be at least 3 characters' },
    maxLength: { value: 20, message: 'Name should not exceed 20 characters' }
}

export { emailValidation, passwordValidation, nameValidation }