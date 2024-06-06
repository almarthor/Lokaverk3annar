import type { NextApiRequest, NextApiResponse } from "next";
import { Order } from "./types";

let nextId = 2;
let orders: Order[] = [
  {
    id: 1,
    drinks: [
      {
        brewer: "vifilfell",
        category: "beer",
        description: "tasty beer",
        id: "some-uuid",
        imageSource:
          "https://www.themealdb.com/images/media/meals/wai9bw1619788844.jpg",
        name: "Gylltur",
        price: 2500,
      },
    ],
    email: "gunnsteinnskula@gmail.com",
    count: 10,
    date: new Date().toISOString(),
    dish: {
      id: "53051",
      category: "seafood",
      cuisine: "Malaysian",
      description:
        "In a medium saucepan over medium heat, stir together coconut milk, water, ground ginger, ginger root, salt, bay leaf, and rice. Cover, and bring to a boil. Reduce heat, and simmer for 20 to 30 minutes, or until done.",
      imageSource:
        "https://www.themealdb.com/images/media/meals/wai9bw1619788844.jpg",
      name: "Nasi lemak",
      price: 2500,
    },
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const isOrder = (body: Order | Record<string, unknown>): body is Order => {
    return (
      typeof body.email === "string" &&
      typeof body.date === "string" &&
      typeof body.count === "number" &&
      typeof body.dish === "object" &&
      Array.isArray(body.drinks)
    );
  };

  const emailAlreadyTaken = (email: string) => {
    return orders.findIndex((order) => order.email === email) >= 0;
  };

  if (req.method === "POST") {
    if (!isOrder(req.body)) {
      res.status(400).json({
        success: false,
        error: "Must supply all properties of an order",
      });
      return;
    }

    if (emailAlreadyTaken(req.body.email)) {
      res.status(400).json({
        success: false,
        error: "Email already reserved",
      });
      return;
    }

    const order: Order = {
      ...req.body,
      id: nextId,
    };

    orders.push(order);
    nextId += 1;

    res.status(201).json({
      success: true,
      order,
    });
  } else if (req.method === "GET") {
    const { email } = req.query;
    const order = orders.find((order) => order.email === email);
    if (order) {
      res.status(200).json(order);
    } else {
      res.status(404).json({ error: "Order not found" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
