import React from "react";
import {
  FaYoutube,
  FaTelegram,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export const people = [
  {
    id: 1,
    name: "TONALE",
    job: "BEAUTIFULLY DISTINCTIVE",
    image: "images/slide1.jpg",
    text: "Named after one of Italy’s highest mountain passes, the Tonale encapsulates the organic curvatures, bends and lines found in nature. ",
  },
  {
    id: 2,
    name: "TONALE",
    job: "EXPLORE ALFA ROMEO MODELS",
    image: "images/slide2.jpg",
    text: "A long line of high-performance Italian vehicles that continues to be one of the most iconic ambassadors of luxury and speed. ",
  },
];

export const links = [
  {
    id: 1,
    url: "/eBook",
    text: "eBook",
  },
  {
    id: 2,
    url: "./youtube",
    text: "Youtube",
  },
  {
    id: 3,
    url: "./courses",
    text: "Courses",
  },
  {
    id: 4,
    url: "/blog",
    text: "Blog",
  },
  {
    id: 5,
    url: "./guide",
    text: "Guide",
  },
  {
    id: 6,
    url: "./login",
    text: "Login",
  },
];

export const social = [
  {
    id: 1,
    url: "",
    icon: <FaYoutube />,
    name: "youtube",
  },
  {
    id: 2,
    url: "https://web.facebook.com/joel.iguse",
    icon: <FaFacebook />,
  },

  {
    id: 3,
    url: "https://twitter.com/JoelionXpress",
    icon: <FaTwitter />,
  },
  {
    id: 4,
    url: "https://www.linkedin.com/in/igono-joel-88b680185",
    icon: <FaLinkedin />,
  },
  {
    id: 5,
    url: "https://t.me/JoelIgono",
    icon: <FaTelegram />,
  },
];
