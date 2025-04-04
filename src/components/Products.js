// src/components/Products.js - version 1
/*import React, { useEffect, useState } from 'react';
import supabase from '../services/supabaseAPI';  // Importation de la connexion Supabase

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const { data, error } = await supabase
                .from('Products')  // Table dans Supabase
                .select('*');  // Sélection de toutes les colonnes

            if (error) {
                console.error('Erreur de récupération des produits :', error);
            } else {
                setProducts(data);  // Met à jour l'état avec les produits récupérés
            }
        };

        fetchProducts();
    }, []);  // Exécute cette fonction lors du premier rendu du composant

    return (
        <div>
            <h2>Liste des produits</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <h3>{product.name}</h3>
                        <p>Prix : {product.price}€</p>
                        <p>Lieu de vente : {product.sale_place}</p>
                        <p>Vendu : {product.sold ? 'Oui' : 'Non'}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Products;*/

//version 2
/*import React from "react";

const Products = ({ products }) => {
  return (
    <div>
      <h2>Liste des produits</h2>
      {products.length === 0 ? (
        <p>Aucun produit à afficher.</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p>Prix : {product.price}€</p>
              <p>Lieu de vente : {product.sale_place}</p>
              <p>Vendu : {product.sold ? "Oui" : "Non"}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Products;*/

//version 3 - ajout icone modifier
import React, { useState } from "react";
import supabase from "../services/supabaseAPI";

const Products = ({ products }) => {
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({ name: "", price: "", sale_place: "", sold: false });

  const handleEditClick = (product) => {
    setEditId(product.id);
    setEditData(product);
  };

  const handleUpdate = async () => {
    const { error } = await supabase
      .from("Products")
      .update({
        name: editData.name,
        price: parseFloat(editData.price),
        sale_place: editData.sale_place,
        sold: editData.sold,
      })
      .eq("id", editId);

    if (error) {
      alert("Erreur lors de la mise à jour : " + error.message);
    } else {
      setEditId(null);
      window.location.reload(); // ou appeler fetchProducts si tu passes la fonction depuis App
    }
  };

  return (
    <div>
      <h2>Liste des produits</h2>
      {products.length === 0 ? (
        <p>Aucun produit à afficher.</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id} style={{ marginBottom: "1rem" }}>
              {editId === product.id ? (
                <div>
                  <input
                    value={editData.name}
                    onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                    placeholder="Nom"
                  />
                  <input
                    type="number"
                    value={editData.price}
                    onChange={(e) => setEditData({ ...editData, price: e.target.value })}
                    placeholder="Prix"
                  />
                  <input
                    value={editData.sale_place}
                    onChange={(e) => setEditData({ ...editData, sale_place: e.target.value })}
                    placeholder="Lieu"
                  />
                  <label>
                    Vendu :
                    <input
                      type="checkbox"
                      checked={editData.sold}
                      onChange={(e) => setEditData({ ...editData, sold: e.target.checked })}
                    />
                  </label>
                  <button onClick={handleUpdate}>💾 Sauvegarder</button>
                  <button onClick={() => setEditId(null)}>❌ Annuler</button>
                </div>
              ) : (
                <div>
                  <h3>{product.name}</h3>
                  <p>Prix : {product.price}€</p>
                  <p>Lieu de vente : {product.sale_place}</p>
                  <p>Vendu : {product.sold ? "Oui" : "Non"}</p>
                  <button onClick={() => handleEditClick(product)}>✏️ Modifier</button>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Products;