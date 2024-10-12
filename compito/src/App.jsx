import { useState } from "react";
import { validateInput } from "./utilities/form";

const App = () => {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    phone: 0
  });
  const [errors, setErrors] = useState({
    name: false,
    surname: false,
    email: false,
    password: false,
    phone: false
  });

  const isFormError = () => {
    return Object.values(errors).some((error) => error);
  }
  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm((form) => {
      return {
        ...form,
        [name]: value,
      }
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  const handleSendForm = () => {
    console.log(form);
  }
  const handleValidateInput = (e, options = { required: false, errorMessage: null }) => {
    const { name, value, type } = e.target;
    console.log(name, value);
    try {
      validateInput(value, name, type, options);
      setErrors((errors) => {
        return {
          ...errors,
          [name]: false,
        }
      });
    } catch (error) {
      setErrors((errors) => {
        return {
          ...errors,
          [error.name]: error.message,
        }
      });
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" name="name" value={form.name} onInput={handleInput} onBlur={(e) => handleValidateInput(e, { required: true, errorMessage: "Nome utente obbligatorio" })} />
          {
            errors.name && (
              <div>
                <span className="error">{errors.name}</span>
              </div>
            )
          }
        </div>
        <div>
          <label htmlFor="surname">Cognome</label>
          <input type="text" id="surname" name="surname" value={form.surname} onInput={handleInput} onBlur={(e) => handleValidateInput(e, { required: true, errorMessage: "Cognome obbligatorio" })} />
          {
            errors.surname && (
              <div>
                <span className="error">{errors.surname}</span>
              </div>
            )
          }
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={form.email} onInput={handleInput} onBlur={(e) => handleValidateInput(e, { required: true, errorMessage: "Email obbligatoria" })} />
          {
            errors.email && (
              <div>
                <span className="error">{errors.email}</span>
              </div>
            )
          }
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={form.password} onInput={handleInput} onBlur={(e) => handleValidateInput(e, { required: true, errorMessage: "Password obbligatoria" })} />
          {
            errors.password && (
              <div>
                <span className="error">{errors.password}</span>
              </div>
            )
          }
        </div>
        <div>
          <label htmlFor="phone">Telefono</label>
          <input type="tell" id="phone" name="phone" value={form.phone} onInput={handleInput} onBlur={(e) => handleValidateInput(e, { required: true, errorMessage: "Telefono obbligatorio" })} />
          {
            errors.phone && (
              <div>
                <span className="error">{errors.phone}</span>
              </div>
            )
          }
        </div>
        <div>
          <button type="button" onClick={handleSendForm} disabled={isFormError()}>Sign in</button>
        </div>
      </form>
    </>
  );
}

export default App;