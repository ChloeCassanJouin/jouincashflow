import React, { useState } from "react";
import supabase from "../services/supabaseAPI";

const AddProductForm = ({ onProductAdded }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [salePlace, setSalePlace] = useState("");
  const [sold, setSold] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !price || !salePlace) {
      setMessage("Tous les champs doivent être remplis !");
      return;
    }

    const { data, error } = await supabase.from("Products").insert([
      {
        name,
        price: parseFloat(price), // Convertir le prix en nombre
        sale_place: salePlace,
        sold,
      },
    ]);

    if (error) {
      setMessage(`Erreur : ${error.message}`);
    } else {
      setMessage("Produit ajouté avec succès !");
      setName("");
      setPrice("");
      setSalePlace("");
      setSold(false);
      onProductAdded(); // Met à jour la liste des produits après ajout
    }
  };

  return (
    <div>
      <h2>Ajouter un produit</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom du produit"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Prix"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Lieu de vente"
          value={salePlace}
          onChange={(e) => setSalePlace(e.target.value)}
          required
        />
        <label>
          Vendu :
          <input
            type="checkbox"
            checked={sold}
            onChange={(e) => setSold(e.target.checked)}
          />
        </label>
        <button type="submit">Ajouter</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddProductForm;