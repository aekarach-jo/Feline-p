import { banner, bannerImg, card1, card2, card3 } from "./assets";

export const navLinks = [
  { id: "home", title: "Home" },
  { id: "new", title: "สินค้าใหม่" },
  { id: "all", title: "สินค้าทั้งหมด" },
  { id: "contact", title: "ติดต่อเรา" },
  { id: "cart", title: "ตะกร้า" },
];

export const bannerDetail = {
  title: ["ร้านขายอาหาร", "และอุปกรณ์สัตว์เลี้ยง"],
  detail:
    "ให้คุณได้รับสินค้า ในรูปแบบที่ดี และมีคุณภาพมากที่สุด ที่เราได้เลือกมาให้คุณแล้ว",
  bg: banner,
  image: bannerImg,
};

export const cardContent = [card1, card2, card3];
