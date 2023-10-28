import { useEffect, useInsertionEffect, useState } from "react";
import { usePage } from "../../context/PageContext";
import { useUser } from "../../context/UserContext";
import Movies from "../../components/moviesComponent/Movies";
import { SectionContainer } from "../../components/Components/StyledComponents";
import SearchMoviesForm from "../../components/moviesComponent/SearchForm";
import DropDown from "../../components/dropDown/DropDown";

const MyAccount = () => {
  const { user, setUser, auth, setAuth } = useUser();
  const { subPageData, setSubPageData } = usePage();
  const [movieList, setMovieList] = useState([]);
  const [movies, setMovies] = useState([]);
  const updateMovies = (newMovies) => {
    setMovies(newMovies);
  };

  useEffect(() => {
    setSubPageData(() => ({
      name: `${location.pathname
        .slice(1, 2)
        .toUpperCase()}${location.pathname.slice(2)} Page`,
    }));
  }, []);

  // console.log('user.movieLists',user.movieLists)
  const movieLists = user.movieLists;

  const onListChange = (e) => {
    const list = movieLists.find((el) => el.movielist_id == e.target.value);
    // console.log("list movieList", list);
    setMovieList(list.list);
  };

  return (
    <>
      <SectionContainer>
        <DropDown
          onChangeFunction={onListChange}
          defaultDropDownValue={`${user.name} movie lists`}
          list={movieLists}
          listIterator={"movielist_id"}
          itemPropertyToShow={"name"}
        />
        <Movies movies={movieList} size="small" />
      </SectionContainer>
      <SectionContainer>
        <SearchMoviesForm updateMovies={updateMovies} />
        <Movies movies={movies} />
      </SectionContainer>
    </>
  );
};

export default MyAccount;
