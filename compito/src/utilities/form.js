class InputError extends Error {
    constructor(message, name) {
        super(message);
        this.name = name;
    }
}

export const validateInput = (value, name, type, options = { required: false, errorMessage: "Valore non valido" }) => {
    options = { required: false, errorMessage: "Valore non valido", ...options };

    if (options.required && (!value || value.trim() === "")) {
        throw new InputError(options.errorMessage, name);
    }

    if (type === "text") {
        if (options.required && (!value || value == "")) {
            throw new InputError(options.errorMessage, name);
        }
    } else if (type === "email") {
        if (options.required && (!value || value == "")) {
            throw new InputError(options.errorMessage, name);
        }
        if (!value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ig)) {
            throw new InputError("Email non valida");
        }
    } else if (type === "password") {
        if (options.required && (!value || value == "")) {
            throw new InputError(options.errorMessage, name);
        }
        if (!value.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/ig)) {
            throw new InputError("La passowrd deve avere almeno 8 caratteri, un numero e un carattere speciale", name);
        }
    } else if (type === "tel") {
        if (options.required && (!value || value == "")) {
            throw new InputError(options.errorMessage, name);
        }
        if (!value.match(/^\+?[0-9]{7,15}$/ig)) {
            throw new InputError("Telefono inserito non valido", name);
        }
    }
    return value;
}