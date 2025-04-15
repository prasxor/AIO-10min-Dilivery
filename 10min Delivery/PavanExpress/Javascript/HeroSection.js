const promoMessages = [
  {
    text: "Biggest deals of the season, only for today!",
    color: "#FF5733",
    background: "#801700",
  },
  {
    text: "Flash Sale! Up to 70% off on all items.",
    color: "#2ECC71",
    background: "#13532e",
  },
  {
    text: "Free shipping on your first order!",
    color: "#3498DB",
    background: "#0f3a57",
  },
  {
    text: "Buy 1 Get 1 Free – Limited time only.",
    color: "#E67E22",
    background: "#5c300a",
  },
  {
    text: "New arrivals just dropped – Shop now!",
    color: "#9B59B6",
    background: "#3c1f47",
  },
  {
    text: "Mega discounts on electronics and fashion!",
    color: "#1ABC9C",
    background: "#0c5a4a",
  },
  {
    text: "Steal the deal before it's gone!",
    color: "#E74C3C",
    background: "#5b130b",
  },
  {
    text: "Shop smart, save big on every purchase.",
    color: "#F39C12",
    background: "#613e05",
  },
  {
    text: "Hot deals you can't miss this week!",
    color: "#34495E",
    background: "#243342",
  },
  {
    text: "Sale ends soon – Hurry up and grab yours!",
    color: "#16A085",
    background: "#0c5a4a",
  },
];

let currentIndex = 0;

function updateBannerText() {
  const banner = document.getElementById("HeroSectionBannerContent");
  const currentMessage = promoMessages[currentIndex];
  banner.textContent = currentMessage.text;
  banner.style.color = currentMessage.color;
  banner.style.backgroundColor = currentMessage.background;
  currentIndex = (currentIndex + 1) % promoMessages.length;
}

updateBannerText();

setInterval(updateBannerText, 3000);
