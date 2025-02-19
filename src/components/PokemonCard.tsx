import React from 'react';
import { Link } from 'react-router-dom';

interface PokemonCardProps {
  name: string;
  id: number;
}

export function PokemonCard({ name, id }: PokemonCardProps) {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  return (
    <Link to={`/pokemon/${id}`} className="transform hover:scale-105 transition-transform">
      <div className="bg-white rounded-lg shadow-lg p-4">
        <img
          src={imageUrl}
          alt={name}
          className="w-48 h-48 mx-auto"
          loading="lazy"
        />
        <h2 className="text-xl font-bold text-center mt-4 capitalize">
          {name}
        </h2>
      </div>
    </Link>
  );
}