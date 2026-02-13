import { useState, useEffect } from "react";

export function MovieApp() {
  const [movie, setMovie] = useState("spider");
  const [movies, setMovies] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (movie === "") {
      setMovies([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true); 
    const timer = setTimeout(() => {
      fetchMovies();
    }, 500);

    return () => clearTimeout(timer);
  }, [movie]);

  const fetchMovies = async () => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${movie}&apikey=11fcbda`
      );

      const result = await response.json();

      if (result.Response === "True") {
        setMovies(result.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      alert("Something Went Wrong");
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <>
      <h1>🎬 Movie App</h1>

      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setMovie(e.target.value)}
      />

      <ul>
        {movies.map((item) => (
          <li key={item.imdbID}>
            <h3>{item.Title}</h3>
            <p>Year: {item.Year}</p>
            <img src={item.Poster} alt={item.Title} width="120" />
          </li>
        ))}
      </ul>

      {!isSearching && movie && movies.length === 0 && (
        <p>❌ Movie  Not Found</p> )}
        </>
  );
}