const emailValidation = {
    required: {
        value: true,
        message: 'EMAIL_ERROR_ONE'
    },
    pattern: {
        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'EMAIL_ERROR_TWO'
    }
}

const passwordValidation = {
    required: {
        value: true,
        message: 'PASSWORD_ERROR_ONE'
    },
    pattern: {
        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/,
        message: "PASSWORD_ERROR_TWO"
    }
};

const nameValidation = {
    required: 'NAME_ERROR_ONE',
    minLength: { value: 3, message: 'NAME_ERROR_TWO' },
    maxLength: { value: 20, message: 'NAME_ERROR_THREE' }
}

export { emailValidation, passwordValidation, nameValidation }