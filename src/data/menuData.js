import Americano from "../assets/media/images/americano.jpg";
import Mocha from "../assets/media/images/mocha.jpg";
import Latte from "../assets/media/images/latte.jpg";
import Amaretto from "../assets/media/images/amaretto.jpg";
import Espresso from "../assets/media/images/espresso.jpg";
import Cappuccino from "../assets/media/images/cappuccino.png";
import Caramel from "../assets/media/images/caramel.jpg";
import Vanilla from "../assets/media/images/vanilla.jpg";
import Iced from "../assets/media/images/iced.jpg";
import Macchiato from "../assets/media/images/macchiato.jpg";
import Affogato from "../assets/media/images/affogato.jpg";
import Frappuccino from "../assets/media/images/frappuccino.jpg";
import Chocolate from "../assets/media/images/chocolate.jpg";
import Brownie from "../assets/media/images/brownie.jpg";
import Cheesecake from "../assets/media/images/cheesecake.jpg";
import Croissant from "../assets/media/images/croissant.jpg";
import Donut from "../assets/media/images/donut.png";
import Muffins from "../assets/media/images/muffins.jpg";

const menuData = [
  {
    id: "americano",
    name: "Americano",
    category: "coffee",
    price: "$5.80",
    img: Americano,
    description: "Rich espresso diluted with hot water.",
    ingredients: ["Espresso", "Hot Water"],
    ratings: 4.4
  },
  {
    id: "latte",
    name: "Latte",
    category: "coffee",
    price: "$6.20",
    img: Latte,
    description: "Smooth espresso blended with steamed milk.",
    ingredients: ["Espresso", "Milk", "Foam"],
    ratings: 4.5
  },
  {
    id: "cappuccino",
    name: "Cappuccino",
    category: "coffee",
    price: "$6.10",
    img: Cappuccino,
    description: "Creamy espresso with thick milk foam.",
    ingredients: ["Espresso", "Milk", "Foam"],
    ratings: 4.6
  },
  {
    id: "espresso",
    name: "Espresso",
    category: "coffee",
    price: "$5.60",
    img: Espresso,
    description: "Strong and bold coffee shot.",
    ingredients: ["Espresso"],
    ratings: 4.7
  },
  {
    id: "mocha",
    name: "Mocha",
    category: "coffee",
    price: "$6.40",
    img: Mocha,
    description: "Chocolate infused coffee with milk.",
    ingredients: ["Espresso", "Chocolate", "Milk"],
    ratings: 4.8
  },
  {
    id: "macchiato",
    name: "Macchiato",
    category: "coffee",
    price: "$6.20",
    img: Macchiato,
    description: "Espresso topped with foam.",
    ingredients: ["Espresso", "Foam"],
    ratings: 4.5
  },

  {
    id: "amaretto",
    name: "Amaretto",
    category: "cold",
    price: "$6.00",
    img: Amaretto,
    description: "Sweet almond-flavored cold coffee.",
    ingredients: ["Coffee", "Almond Syrup", "Ice"],
    ratings: 4.6
  },
  {
    id: "iced",
    name: "Iced Coffee",
    category: "cold",
    price: "$5.80",
    img: Iced,
    description: "Chilled coffee served over ice.",
    ingredients: ["Coffee", "Ice"],
    ratings: 4.4
  },
  {
    id: "caramel",
    name: "Caramel Latte",
    category: "cold",
    price: "$6.50",
    img: Caramel,
    description: "Latte infused with caramel flavor.",
    ingredients: ["Espresso", "Milk", "Caramel"],
    ratings: 4.5
  },
  {
    id: "vanilla",
    name: "Vanilla Latte",
    category: "cold",
    price: "$6.50",
    img: Vanilla,
    description: "Smooth latte with vanilla sweetness.",
    ingredients: ["Espresso", "Milk", "Vanilla"],
    ratings: 4.5
  },
  {
    id: "affogato",
    name: "Affogato",
    category: "cold",
    price: "$6.70",
    img: Affogato,
    description: "Espresso poured over ice cream.",
    ingredients: ["Espresso", "Ice Cream"],
    ratings: 4.6
  },
  {
    id: "frappuccino",
    name: "Frappuccino",
    category: "cold",
    price: "$6.60",
    img: Frappuccino,
    description: "Blended iced coffee drink.",
    ingredients: ["Coffee", "Milk", "Ice"],
    ratings: 4.5
  },

  {
    id: "chocolate",
    name: "Chocolate Cake",
    category: "desserts",
    price: "$6.50",
    img: Chocolate,
    description: "Rich and moist chocolate cake.",
    ingredients: ["Flour", "Cocoa", "Sugar"],
    ratings: 4.5
  },
  {
    id: "brownie",
    name: "Brownie",
    category: "desserts",
    price: "$5.50",
    img: Brownie,
    description: "Soft and fudgy chocolate brownie.",
    ingredients: ["Chocolate", "Butter", "Sugar"],
    ratings: 4.5
  },
  {
    id: "cheesecake",
    name: "Cheesecake",
    category: "desserts",
    price: "$6.70",
    img: Cheesecake,
    description: "Creamy and smooth cheesecake.",
    ingredients: ["Cream Cheese", "Sugar"],
    ratings: 4.5
  },
  {
    id: "croissant",
    name: "Croissant",
    category: "desserts",
    price: "$5.70",
    img: Croissant,
    description: "Flaky buttery pastry.",
    ingredients: ["Flour", "Butter"],
    ratings: 4.5
  },
  {
    id: "donut",
    name: "Donut",
    category: "desserts",
    price: "$5.20",
    img: Donut,
    description: "Sweet fried dough treat.",
    ingredients: ["Flour", "Sugar", "Oil"],
    ratings: 4.5
  },
  {
    id: "muffins",
    name: "Muffin",
    category: "desserts",
    price: "$5.50",
    img: Muffins,
    description: "Soft baked muffin.",
    ingredients: ["Flour", "Sugar", "Egg"],
    ratings: 4.5
  }
];

export default menuData;