import { useState, ChangeEvent, FormEvent } from "react";
import SectionTitle from "./SectionTitle";
import axios from "axios";

// Tipos
type FormData = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Validação
    const validationErrors: FormErrors = {};

    if (!formData.name.trim()) validationErrors.name = "Nome é obrigatório";
    if (!formData.email.trim()) validationErrors.email = "Email é obrigatório";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      validationErrors.email = "Email inválido";
    if (!formData.message.trim())
      validationErrors.message = "Mensagem é obrigatória";

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Aqui você pode processar o envio do formulário.
      axios
        .post("/api/sendMail", formData)
        .then((response) => {
          console.log(response.data);
          setFormData({
            name: "",
            email: "",
            message: "",
          });
          alert("E-mail enviado com sucesso!");
        })
        .catch((error) => {
          console.error("Erro ao enviar e-mail:", error);
        });
    }
  };

  return (
    <div className='bg-white p-8 rounded shadow-lg max-w-lg mx-auto w-full'>
      <SectionTitle title='Canal de Comunicação' />

      <form className='space-y-6' onSubmit={handleSubmit}>
        <div>
          <input
            type='text'
            className={`transition duration-300 ease-in-out transform p-4 w-full rounded border ${
              errors.name ? "border-red-500" : "border-wine-light"
            } hover:shadow-md focus:border-wine focus:outline-none`}
            placeholder='Nome'
            name='name'
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && (
            <p className='text-sm text-red-500 mt-2'>{errors.name}</p>
          )}
        </div>

        <div>
          <input
            type='email'
            className={`transition duration-300 ease-in-out transform p-4 w-full rounded border ${
              errors.email ? "border-red-500" : "border-wine-light"
            } hover:shadow-md focus:border-wine focus:outline-none`}
            placeholder='Email'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className='text-sm text-red-500 mt-2'>{errors.email}</p>
          )}
        </div>

        <div>
          <textarea
            className={`transition duration-300 ease-in-out transform p-4 w-full rounded border ${
              errors.message ? "border-red-500" : "border-wine-light"
            } hover:shadow-md focus:border-wine focus:outline-none`}
            rows={4}
            placeholder='Mensagem'
            name='message'
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && (
            <p className='text-sm text-red-500 mt-2'>{errors.message}</p>
          )}
        </div>

        <div>
          <button
            type='submit'
            className='w-full bg-wine text-white py-2 px-6 rounded hover:bg-wine-dark focus:outline-none transform transition duration-300 ease-in-out hover:shadow-md'
          >
            Enviar Mensagem
          </button>
        </div>
      </form>
    </div>
  );
}
