import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { PokemonDetails as PokemonDetailsType } from '../types';

export function PokemonDetails() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState<PokemonDetailsType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.error('Error fetching Pokemon details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!pokemon) {
    return <div>Pokemon not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="inline-flex items-center text-blue-500 hover:text-blue-600 mb-6">
        <ArrowLeft className="mr-2" />
        Back to Pokédex
      </Link>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src={pokemon.sprites.other['official-artwork'].front_default}
              alt={pokemon.name}
              className="w-full max-w-md mx-auto"
            />
          </div>

          <div>
            <h1 className="text-4xl font-bold capitalize mb-4">{pokemon.name}</h1>
            
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Types</h2>
              <div className="flex gap-2">
                {pokemon.types.map(({ type }) => (
                  <span
                    key={type.name}
                    className="px-3 py-1 rounded-full text-white bg-blue-500 capitalize"
                  >
                    {type.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h3 className="font-semibold">Height</h3>
                <p>{pokemon.height / 10} m</p>
              </div>
              <div>
                <h3 className="font-semibold">Weight</h3>
                <p>{pokemon.weight / 10} kg</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Base Stats</h2>
              <div className="space-y-2">
                {pokemon.stats.map(({ base_stat, stat }) => (
                  <div key={stat.name}>
                    <div className="flex justify-between mb-1">
                      <span className="capitalize">{stat.name.replace('-', ' ')}</span>
                      <span>{base_stat}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-blue-500 h-2.5 rounded-full"
                        style={{ width: `${(base_stat / 255) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}