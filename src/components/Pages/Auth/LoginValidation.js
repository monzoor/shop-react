import validate from 'validate.js';

export default function loginValidate(data) {

    // console.log('===1===', data);
    var constraints = {
        emailPhone: {
            presence: true,
            format: {
                pattern: /(\S+@\S+\.\S+)|((\+?88)?(01)[0-9]\d{8})/,
                message: "This is not a valid input"
            }
        },
        password: {
            presence: true,
            length: {
                minimum: 6,
                message: "must be at least 6 characters"
            }
        }
    };

    return {
        errors: validate(data.formData, constraints, { fullMessages: false }),
        isValid: validate.isEmpty(validate(data.formData, constraints))
    };
};
