import { useQuery } from "@tanstack/react-query";
import { useGlobalContext } from "./context";
import { customFetch } from "./customAxios";

const Gallery = () => {
    const { searchValue } = useGlobalContext();

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["getImages", searchValue],
        queryFn: () => customFetch.get(`search/photos?query=${searchValue}`)
    });

    if (isLoading) {
        return <section className="image-container">
            <h4>Loading...</h4>
        </section>
    }

    if (isError) {
        return <section className="image-container">
            <h4>{error.response.data.msg}</h4>
        </section>
    }

    const images = data.data.results;

    if (!images || images.length == 0) {
        return <section className="image-container">
            <h4>No results found...</h4>
        </section>
    }

    console.log(images);

    return (<section className="image-container">
        {
            images.map(image => <img key={image.id} src={image?.urls?.regular} alt={image.alt_description} className="img" />)
        }
    </section>
    )
}

export default Gallery;