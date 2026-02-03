import { useGlobalContext } from "./context";
import Gallery from "./Gallery";
import SearchForm from "./SearchForm";
import ThemeToggle from "./ThemeToggle";

const App = () => {
  const { searchValue } = useGlobalContext();

  return <main>
    <ThemeToggle />
    <SearchForm />
    {searchValue && <Gallery />}
  </main>
};
export default App;
