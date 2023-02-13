import MovieCard from "./MovieCard";

export default function Results({ results }) {
  return (
    <div className="sm:gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-7xl mx-auto py-4 px-8">
      {results.map((result) => (
        <MovieCard key={result.id} data={result} />
      ))}
    </div>
  );
}
