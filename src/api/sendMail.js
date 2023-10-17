import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { name, email, message } = req.body;
  const SENDGRID_API_KEY = import.meta.env.VITE_SENDGRID_API_KEY;

  try {
    const response = await axios.post("https://api.sendgrid.com/v3/mail/send", {
      personalizations: [
        {
          to: [{ email: "gustavomarquesmm@gmail.com" }],
          subject: `Nova mensagem de ${name}`,
        },
      ],
      from: { email: "from-email@example.com", name: "Flexcargo Transporte e Logística" },
      content: [
        {
          type: "text/plain",
          value: `De: ${email}\n\n${message}`,
        },
      ],
    },
    {
      headers: {
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
        "Content-Type": "application/json",
      },
    });

    if (response.status === 202) {
      return res.status(200).send("E-mail enviado com sucesso!");
    } else {
      return res.status(400).send("Erro ao enviar e-mail.");
    }
  } catch (error) {
    return res.status(500).send("Erro interno do servidor.");
  }
}
