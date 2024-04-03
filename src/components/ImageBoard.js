import ImageCard from "./ImageCard";

function ImageBoard({ category, imageList }) {
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    return (
        <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold mb-4">
                {category === '' ? "Images on the way.." : capitalizeFirstLetter(category) + " Images"}
            </h1>
            <div className="grid grid-cols-4 gap-4">
                {imageList.map((image, i) => (
                    <ImageCard key={i} src={image} alt={category}/>
                ))}
            </div>
        </div>
    );
}

export default ImageBoard;
