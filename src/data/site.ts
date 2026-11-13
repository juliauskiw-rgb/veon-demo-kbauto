// Facts for the homepage. Source: veon/client.json (ids in comments) and design/concept.md. Nothing here is invented.

export const NOTE = "Розділ у розробці";

// company.contacts (phones, emails, messengers)
export const contact = {
  phone: { href: "tel:+37256804201", label: "+372 5680 4201" },
  phoneFi: { href: "tel:+358404834737", label: "+358 40 483 4737" },
  sales: "sales@kbauto.ee",
  info: "info@kbauto.ee",
  fi: "myynti@kbauto.fi",
  whatsapp: "https://wa.me/37256804201",
  map: "https://www.google.com/maps/search/?api=1&query=Kooli%2010%2C%20Rummu%2C%2076102%2C%20Estonia",
};

export const wa = (text?: string) => (text ? `${contact.whatsapp}?text=${encodeURIComponent(text)}` : contact.whatsapp);

// socials (status confirmed only)
export const socials = [
  { name: "Facebook", href: "https://www.facebook.com/kbauto.ee" },
  { name: "Instagram", href: "https://www.instagram.com/kbautoeesti/" },
  { name: "YouTube", href: "https://www.youtube.com/@saleskbauto" },
];

// C-004: category counts on 13.11.2026 (803 listings in 14 categories)
export const categories = [
  { name: "Вантажівки", count: 240 },
  { name: "Автобуси", count: 103 },
  { name: "Будівельна техніка", count: 64 },
  { name: "Тягачі", count: 58 },
  { name: "Напівпричепи", count: 53 },
  { name: "Причепи", count: 22 },
  { name: "Сільгосптехніка", count: 22 },
  { name: "Фургони", count: 14 },
  { name: "Складська техніка", count: 6 },
  { name: "Комунальна техніка", count: 5 },
  { name: "Легкові авто", count: 4 },
  { name: "Лісова техніка", count: 2 },
];
export const parts = [
  { name: "Запчастини для вантажівок", count: 177 },
  { name: "Запчастини для будівельної техніки", count: 33 },
];

// Languages of the current site switcher (company.languages); Ukrainian is this page.
export const languages = [
  { code: "ET", name: "Eesti" }, { code: "EN", name: "English" }, { code: "ES", name: "Español" },
  { code: "FI", name: "Suomi" }, { code: "NO", name: "Norsk" }, { code: "RU", name: "Русский" },
  { code: "SV", name: "Svenska" }, { code: "DE", name: "Deutsch" }, { code: "AR", name: "العربية" },
];

export const nav = [
  { href: "#catalog", label: "Техніка" },
  { href: "#services", label: "Послуги" },
  { href: "#rent", label: "Оренда" },
  { href: "#sell", label: "Продати" },
  { href: "#about", label: "Про нас" },
  { href: "#contacts", label: "Контакти" },
];

export const STOCK_DATE = "13.11.2026";
