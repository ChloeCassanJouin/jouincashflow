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
import React from "react";

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

export default Products;