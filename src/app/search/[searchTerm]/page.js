import Results from "@/components/Results";

const getMovies = async (query) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${query}&language=en-US&page=1`
  );
  if (!res.ok) {
    throw new Error("Cannot Search Movies");
  }
  return res.json();
};

export default async function SearchPage({ params }) {
  const data = await getMovies(params.searchTerm);
  const results = data.results;
  return (
    <div>
      {results && results.length === 0 ? (
        <h1 className="text-center pt-10">No results found!</h1>
      ) : (
        <div className="max-w-7xl px-4 sm:px-6 mx-auto">
          <h1 className="text-lg font-semibold p-4">
            {`Search Results for "${params.searchTerm}"`}
          </h1>
        </div>
      )}
      {results && <Results results={results} />}
    </div>
  );
}
