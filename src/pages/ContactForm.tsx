import React, { useState, FormEvent } from "react";

function ContactForm() {
  // Déclaration des états avec des types explicites
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  // Déclaration du type pour le paramètre de handleSubmit
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Nom:", name);
    console.log("Email:", email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nom :</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit">Envoyer</button>
    </form>
  );
}

export default ContactForm;
