# Pokédex Application

A modern, responsive React application that serves as a Pokédex, allowing users to browse and search through Pokemon using the PokeAPI.

![Pokédex Screenshot](https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?auto=format&fit=crop&q=80&w=1200)

## Features

- **Pokemon Browsing**: View a grid of Pokemon with their official artwork
- **Search Functionality**: Filter Pokemon by name in real-time
- **Detailed Pokemon Information**: 
  - View comprehensive stats for each Pokemon
  - See Pokemon types, height, and weight
  - View base stats with visual progress bars
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean, intuitive interface with smooth animations
- **Fast Loading**: Lazy loading of images and loading states for better UX

## Technology Stack

- **React**: Frontend library for building user interfaces
- **TypeScript**: Static typing for better development experience
- **React Router**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Vite**: Next-generation frontend tooling
- **Lucide React**: Modern icon library
- **PokeAPI**: RESTful Pokemon API

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd pokemon-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173`

## Project Structure

```
src/
├── components/          # Reusable UI components
│   └── PokemonCard.tsx
├── pages/              # Page components
│   ├── HomePage.tsx
│   └── PokemonDetails.tsx
├── types/              # TypeScript type definitions
├── App.tsx            # Main application component
└── main.tsx          # Application entry point
```

## Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Run ESLint

## API Integration

The application uses the [PokeAPI](https://pokeapi.co/) to fetch Pokemon data:
- List endpoint: `https://pokeapi.co/api/v2/pokemon?limit=124`
- Individual Pokemon: `https://pokeapi.co/api/v2/pokemon/{id}`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [PokeAPI](https://pokeapi.co/) for providing the Pokemon data
- [Pokemon Official Artwork](https://github.com/PokeAPI/sprites) for the Pokemon images
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide React](https://lucide.dev/) for the beautiful icons
