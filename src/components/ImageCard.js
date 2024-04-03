function ImageCard({ src, alt, caption }){
    return(
        <div className="flex justify-center">
          <img src={src} alt={alt} className="w-full h-auto" />
          {caption && <p className="text-center">{caption}</p>}
        </div>
    );
}

export default ImageCard;