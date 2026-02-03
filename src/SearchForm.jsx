import { useGlobalContext } from "./Context";

const SearchForm = () => {
    const { setSearchValue } = useGlobalContext();

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const searchValue = formData.get("search");

        if (!searchValue) {
            return;
        }

        setSearchValue(searchValue);
    }

    return (
        <section>
            <h1 className="title">unsplash images</h1>
            <form className="search-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="cat"
                    name="search"
                    className="search-input form-input" />
                <button type="submit" className="btn">
                    Search
                </button>
            </form>
        </section>
    )
}

export default SearchForm;