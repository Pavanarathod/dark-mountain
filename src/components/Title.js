const Title = ({ children, spantitle }) => {
  return (
    <h1 className=" text-6xl px-3 py-5 sm:text-8xl font-serif">
      {children} <span className="text-red-700">{spantitle}.</span>{" "}
    </h1>
  );
};

export default Title;
