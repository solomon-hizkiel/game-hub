import useGenres from "@/hooks/usGenres";

const GenreList = () => {
  const { genres, error, isLoading } = useGenres();

  //if (isLoading) return <div>Loading...</div>;
  //if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};
export default GenreList;