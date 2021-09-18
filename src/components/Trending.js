import Card from "./Card";

const Trending = ({ drinks }) => {
  return (
    <section className="sm:grid sm:grid-cols-10 sm:h-[50vh] lg:h-[70vh]">
      <div className="flex justify-center sm:col-span-4 py-10 px-4">
        <h1 className="text-4xl font-serif sm:text-7xl lg:text-9xl">
          Latest <span className=" text-red-700">Drinks</span>{" "}
        </h1>
      </div>

      <div className="sm:col-start-5 sm:col-span-full grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 overflow-y-scroll gap-8 px-8 py-5 shadow-xl srollbar__hidden">
        {drinks.map((d) => (
          <Card key={d.idDrink} image={d.strDrinkThumb} title={d.strDrink} />
        ))}
      </div>
    </section>
  );
};

export default Trending;
