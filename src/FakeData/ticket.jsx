import airacon from "@/assets/Images/Icons/AiraIcon.png"
import airlinelogoweb from "@/assets/Images/Icons/airlinelogoweb.svg"
import airlinelogo from "@/assets/Images/Icons/Airlinelogo.svg"

const sampleTicket = [
  {
    id: 1,
    limit: 3,
    forth: "استانبول",
    back: "دبی",
    price: 2000000,
    image: airlinelogo
  },
  {
    id: 2,
    limit: 13,
    forth: "تهران",
    back: "امارات",
    price: 3000000,
    image: airlinelogoweb

  },
  {
    id: 3,
    limit: 32,
    forth: "قم",
    back: "نیروگاه",
    price: 66000000,
    image: airacon

  },
  {
    id: 4,
    limit: 1,
    forth: "عمان",
    back: "کانادا",
    price: 100000,
    image: airlinelogoweb

  },
  {
    id: 5,
    limit: 4,
    forth: "قم",
    back: "عراق",
    price: 3000000,
    image: airacon

  },
  {
    id: 6,
    limit: 3,
    forth: "اسپانیا",
    back: "دبی",
    price: 20000,
    image: airacon

  },
  {
    id: 7,
    limit: 3,
    forth: "تهران",
    back: "قزوین",
    price: 1000000,
    image: airlinelogoweb
  },
  {
    id: 8,
    limit: 3,
    forth: "آمریکا",
    back: "آلمان",
    price: 90000000000,
    image: airlinelogo

  },
  {
    id: 9,
    limit: 3,
    forth: "ایتالیا",
    back: "افغانستان",
    price: 30000000,
    image: airlinelogoweb

  },
  {
    id: 10,
    limit: 3,
    forth: "عربستان",
    back: "برزیل",
    price: 556000,
    image: airlinelogoweb

  },
  {
    id: 11,
    limit: 3,
    forth: "ترکیه",
    back: "بلژیک",
    price: 650000,
    image: airlinelogoweb

  },
  {
    id: 12,
    limit: 3,
    forth: "تهران",
    back: "کیش",
    price: 76100,
    image: airlinelogo

  },
  {
    id: 13,
    limit: 3,
    forth: "یزد",
    back: "اردبیل",
    price: 62100,
    image: airlinelogoweb

  },
  {
    id: 14,
    limit: 3,
    forth: "کاشان",
    back: "تهران",
    price: 76100,
    image: airacon

  },
  {
    id: 15,
    limit: 3,
    forth: "کاشان",
    back: "مشهد",
    price: 9300,
    image: airlinelogoweb

  },
  {
    id: 16,
    limit: 3,
    forth: "شیراز",
    back: "اصفهان",
    price: 40200,
    image: airlinelogo

  },
  {
    id: 17,
    limit: 3,
    forth: "دبی",
    back: "قم",
    price: 40200,
    image: airlinelogo

  },
  {
    id: 18,
    limit: 3,
    forth: "کرمان",
    back: "اصفهان",
    price: 40200,
    image: airlinelogo

  },
  {
    id: 19,
    limit: 3,
    forth: "قم",
    back: "اصفهان",
    price: 40200,
    image: airlinelogo

  },

  {
    id: 20,
    limit: 3,
    forth: "شاغالو",
    back: "اصفهان",
    price: 40200,
    image: airlinelogoweb

  },
  {
    id: 21,
    limit: 3,
    forth: "ایران",
    back: "اصفهان",
    price: 40200,
    image: airlinelogo

  },
  {
    id: 22,
    limit: 3,
    forth: "بلوارامین",
    back: "اصفهان",
    price: 40200,
    image: airlinelogoweb

  },
  {
    id: 23,
    limit: 3,
    forth: "صفاییه",
    back: "اصفهان",
    price: 40200,
    image: airlinelogo

  },
  {
    id: 24,
    limit: 3,
    forth: "canada",
    back: "اصفهان",
    price: 40200,
    image: airlinelogo

  },
  {
    id: 25,
    limit: 3,
    forth: "iran",
    back: "اصفهان",
    price: 40200,
    image: airlinelogoweb

  },
  {
    id: 26,
    limit: 3,
    forth: "فلسطین",
    back: "اسرییل",
    price: 40200,
    image: airlinelogo

  },
  {
    id: 27,
    limit: 3,
    forth: "غزه",
    back: "اصفهان",
    price: 40200,
    image: airlinelogoweb

  },
  {
    id: 28,
    limit: 3,
    forth: "کرانه",
    back: "اصفهان",
    price: 40200,
    image: airlinelogo

  },
  {
    id: 29,
    limit: 3,
    forth: "ارومیه",
    back: "اصفهان",
    price: 40200,
    image: airacon

  },
  {
    id: 30,
    limit: 3,
    forth: "نمک آبرود",
    back: "اصفهان",
    price: 40200,
    image: airlinelogo

  },
  {
    id: 31,
    limit: 3,
    forth: "qom",
    back: "اصفهان",
    price: 40200,
    image: airacon

  },
  {
    id: 32,
    limit: 3,
    forth: "کربلا",
    back: "اصفهان",
    price: 40200,
    image: airacon

  },
  {
    id: 33,
    limit: 3,
    forth: "نجف ",
    back: "قم",
    price: 40200,
    image: airlinelogo

  },
  {
    id: 34,
    limit: 3,
    forth: "شاهرود",
    back: "قم",
    price: 40200,
    image: airacon

  },
  {
    id: 35,
    limit: 3,
    forth: "قم ",
    back: "شاهرود",
    price: 40200,
    image: airlinelogoweb

  },
  {
    id: 36,
    limit: 3,
    forth: "مشهد",
    back: "قم",
    price: 40200,
    image: airlinelogo

  },
  {
    id: 37,
    limit: 3,
    forth: "قم ",
    back: "مشهد",
    price: 40200,
    image: airlinelogoweb

  },
  {
    id: 38,
    limit: 3,
    forth: "تهران ",
    back: "مشهد",
    price: 40200,
    image: airlinelogoweb

  },
  {
    id: 39,
    limit: 3,
    forth: "مشهد ",
    back: "تهران",
    price: 40200,
    image: airlinelogo

  },
  {
    id: 40,
    limit: 3,
    forth: "مزار شریف",
    back: "قم",
    price: 40200,
    image: airlinelogo

  },
];

export { sampleTicket };
