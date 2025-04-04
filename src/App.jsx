/* version par défaut
 import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App */

// src/App.jsx - version 1 pour affichage bdd
/* import React, { useEffect, useState } from 'react';
import supabase from './services/supabaseAPI'; // Utilise l'import par défaut// Vérifie le bon chemin

function App() {
  const [products, setProducts] = useState([]); // État pour stocker les produits
  const [loading, setLoading] = useState(true); // Indicateur de chargement

  // Fonction pour récupérer les produits depuis Supabase
  useEffect(() => {
    async function fetchProducts() {
      try {
        const { data, error } = await supabase
          .from('Products') // Nom de ta table
          .select('*'); // Sélectionne toutes les colonnes

        if (error) {
          console.error('Erreur:', error.message);
          return;
        }

        setProducts(data); // Stocke les produits dans l'état
        setLoading(false); // Change l'état de chargement à false une fois les données récupérées
      } catch (error) {
        console.error('Erreur lors de la récupération des produits:', error);
        setLoading(false); // On arrête de charger même en cas d'erreur
      }
    }

    fetchProducts();
  }, []); // Le tableau vide [] signifie que ce code s'exécute une seule fois lors du montage du composant

  if (loading) {
    return <div>Chargement...</div>; // Affiche un message de chargement tant que les données ne sont pas récupérées
  }

  return (
    <div>
      <h1>Liste des Produits</h1>
      {products.length === 0 ? (
        <p>Aucun produit à afficher.</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <h2>{product.name}</h2>
              <p>Prix : {product.price}€</p>
              <p>Lieu de vente : {product.sale_place}</p>
              <p>Vendu : {product.sold ? 'Oui' : 'Non'}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;*/

//version 2 - formulaire modification bdd
/*import React, { useEffect, useState } from "react";
import supabase from "./services/supabaseAPI";
import Products from "./components/Products";
import AddProductForm from "./components/AddProductForm";


function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    const { data, error } = await supabase.from("Products").select("*");

    if (error) {
      console.error("Erreur de récupération :", error.message);
    } else {
      setProducts(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Gestion des Produits</h1>
      <AddProductForm onProductAdded={fetchProducts} />
      {loading ? <p>Chargement...</p> : <Products products={products} />}
    </div>
  );
}

export default App;*/

//version 3 - rajouter products en props
import React, { useEffect, useState } from "react";
import supabase from "./services/supabaseAPI";
import Products from "./components/Products";
import AddProductForm from "./components/AddProductForm";


function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    const { data, error } = await supabase.from("Products").select("*");

    if (error) {
      console.error("Erreur de récupération :", error.message);
    } else {
      setProducts(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Gestion des Produits</h1>
      <AddProductForm onProductAdded={fetchProducts} />
      {loading ? <p>Chargement...</p> : <Products products={products} fetchProducts={fetchProducts} />} 
    </div>
  );
}

export default App;
//ligne modifiée 164