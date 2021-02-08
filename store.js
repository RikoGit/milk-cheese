import { createStore } from "redux";

import reducer from "./reducer.js";

const state = {
  cards: [
    {
      id: 1,
      title: "Just Milk Semi-Skimmed 6 x 1L (Case of 2) 1",
      price: 1.59,
      image: "1.png",
      group: 1,
      countInCart: 2,
    },
    {
      id: 2,
      title: "Best-in 10 British Big Eggs 1",
      price: 1.59,
      image: "4.png",
      group: 4,
      countInCart: 1,
    },
    {
      id: 3,
      title: "Best-in 10 British Big Eggs 2",
      price: 1.59,
      image: "4.png",
      group: 4,
      countInCart: 0,
    },
    {
      id: 4,
      title: "Best-in 10 British Big Eggs 3",
      price: 1.59,
      image: "4.png",
      group: 4,
      countInCart: 0,
    },
    {
      id: 5,
      title: "Best-in 10 British Big Eggs 4",
      price: 1.59,
      image: "4.png",
      group: 4,
      countInCart: 0,
    },
    {
      id: 6,
      title: "Best-in 10 British Big Eggs 5",
      price: 1.59,
      image: "4.png",
      group: 4,
      countInCart: 0,
    },
    {
      id: 7,
      title: "Best-in 10 British Big Eggs 1",
      price: 1.59,
      image: "2.png",
      group: 2,
      countInCart: 15,
    },
    {
      id: 8,
      title: "Best-in 10 British Big Eggs 1",
      price: 1.59,
      image: "3.png",
      group: 3,
      countInCart: 0,
    },
    {
      id: 9,
      title: "Just Milk Semi-Skimmed 6 x 1L (Case of 2) 2",
      price: 1.59,
      image: "1.png",
      group: 1,
      countInCart: 2,
    },
    {
      id: 10,
      title: "Just Milk Semi-Skimmed 6 x 1L (Case of 2) 3",
      price: 1.59,
      image: "1.png",
      group: 1,
      countInCart: 2,
    },
    {
      id: 11,
      title: "Best-in 10 British Big Eggs 2",
      price: 1.59,
      image: "3.png",
      group: 3,
      countInCart: 3,
    },
  ],
};

export default createStore(reducer, state);
