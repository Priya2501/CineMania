import Chip from '@mui/material/Chip';
import axios from "axios";
import React, { useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme } from '../darkTheme';

const Genres = ({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  type,
  setPage,
}) => {
  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };

  const handleRemove = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setPage(1);
  };

  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setGenres(data.genres);
  };

  useEffect(() => {
    fetchGenres();

    return () => {
      setGenres({}); // unmounting when moving to diff pg
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div style={{ padding: "6px 0" }}>
      {selectedGenres && selectedGenres.map((genre) => (
        <ThemeProvider theme={darkTheme}>
        <Chip
          style={{ margin: 2 }}
          label={genre.name}
          key={genre.id}
          variant="filled"
          color="primary"
          clickable
          size="small"
          onDelete={() => handleRemove(genre)}
        />
        </ThemeProvider>
      ))}
      {genres && genres.map((genre) => (
        <ThemeProvider theme={darkTheme}>
        <Chip
          style={{ margin: 2 }}
          label={genre.name}
          key={genre.id}
          clickable
          size="small"
          onClick={() => handleAdd(genre)}
        />
        </ThemeProvider>
      ))}
    </div>
  );
};

export default Genres;