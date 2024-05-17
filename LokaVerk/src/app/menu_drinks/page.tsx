<<<<<<< HEAD

=======
/* import Link from "next/link";
import { useEffect, useState } from "react";

const MenuDrinks = () => {
  const [Drinks, setDrinks] = useState([]);
  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDrinks(data);
      });
  }, []);
  return (
    <div>
      <div className=" grid grid-cols-2 md:grid-cols-1">
        {Drinks.map((drink) => (
          <img key={drink.id} src={drink.url} alt={drink.title} width={100} />
        ))}
      </div>
      <Link href="/">Go back home</Link>
    </div>
  );
};

export default MenuDrinks; */
>>>>>>> parent of 0d97ac7 (.)
