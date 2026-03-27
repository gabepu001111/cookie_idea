import React from 'react'

export default function RecipeCard({ recipe }) {
  // Simplified card: show image, name, and price only (no recipe details or order/view buttons)
  return (
    <article className="card product modern-card">
      <div className="media">
        <img src={recipe.image} alt={recipe.name} />
      </div>
      <div className="card-body">
        <div className="row">
          <h3 className="recipe-title">{recipe.name}</h3>
          <div className="price">{recipe.price}</div>
        </div>
      </div>
    </article>
  )
}
