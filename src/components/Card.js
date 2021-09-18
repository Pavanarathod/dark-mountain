const Card = ({ image, title }) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center">
        <img src={image} alt="one" className="rounded-sm" />
      </div>
      <h1 className="truncate bg-gray-800 text-sm py-2 px-4 text-white font-mono">
        {title}
      </h1>
    </div>
  );
};

export default Card;
