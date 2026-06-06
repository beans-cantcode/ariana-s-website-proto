import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-qabuli.jpg";
import mantuImg from "@/assets/dish-mantu.jpg";
import chapliImg from "@/assets/dish-chapli.jpg";
import banjanImg from "@/assets/dish-banjan.jpg";
import interiorImg from "@/assets/story-interior.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ariana Kabob House — Authentic Afghan & Halal in Duluth, GA" },
      {
        name: "description",
        content:
          "Family-owned Afghan restaurant in Duluth, GA serving authentic kabobs, Qabuli Palau, Mantu, and more. Halal, fresh, made with love. Dine-in, takeout & delivery.",
      },
      { property: "og:title", content: "Ariana Kabob House — Authentic Afghan & Halal" },
      {
        property: "og:description",
        content: "Authentic Afghan cuisine in Duluth, GA. Family recipes, halal, 4.7★ on Google.",
      },
    ],
  }),
  component: Index,
});

type MenuItem = { name: string; price: string; desc: string; veg?: boolean };

const apps: MenuItem[] = [
  { name: "Banjan", price: "$14", desc: "Eggplant fried with tomato, garlic, and our special Afghan sauce. Served with naan.", veg: true },
  { name: "Chaana", price: "$13", desc: "Chickpeas with gravy served with naan.", veg: true },
  { name: "Samosa", price: "$10", desc: "Fried pastry stuffed with chickpeas and potatoes.", veg: true },
  { name: "Mantu", price: "$15", desc: "Afghan dumplings stuffed with ground beef, topped with yogurt." },
  { name: "Afghan Bolani", price: "$14", desc: "Dough stuffed with potatoes, chives, or squash. Served with plain yogurt.", veg: true },
  { name: "Hot Wings", price: "$16", desc: "10 piece wings marinated with our special Nando's-style sauce." },
  { name: "Ashak", price: "$13", desc: "Afghan dumpling filled with chives/leek, topped with beef and yogurt." },
  { name: "Sabzi", price: "$14", desc: "Spinach cooked with cilantro, garlic and spices. Served with naan.", veg: true },
  { name: "Aush", price: "$12", desc: "Afghan noodle soup with beans, chickpeas, yogurt and mint.", veg: true },
];

const wraps: MenuItem[] = [
  { name: "Chicken Wrap", price: "$13", desc: "Chopped chicken breast with lettuce, cucumber, cabbage, and our garlic sauce." },
  { name: "Tikka Lamb Wrap", price: "$13", desc: "Tender lamb with lettuce, cucumber, cabbage, and our garlic sauce." },
  { name: "Veggie Wrap", price: "$13", desc: "Eggplant wrapped with lettuce, cucumber, cabbage, and our garlic sauce.", veg: true },
  { name: "Tandoori Chicken Wrap", price: "$13", desc: "Tandoori chicken breast chopped and wrapped with our signature garlic sauce." },
  { name: "Beef or Chicken Gyro", price: "$13", desc: "Minced beef or chicken with lettuce, cucumber, cabbage, and garlic sauce." },
];

const entrees: MenuItem[] = [
  { name: "Qabuli Palau", price: "$22", desc: "Rice seasoned with Afghan spices, served with lamb shank, carrots and raisins on top." },
  { name: "Uzbeki Pilow", price: "$22", desc: "Afghan rice with lamb shank — cooked together with carrots and raisins." },
  { name: "Kofta Palau", price: "$20", desc: "Afghan-style meatballs cooked with tomatoes and onions, served with gravy and rice." },
  { name: "Goat Karahi", price: "$24", desc: "Slow-cooked goat karahi served with rice or naan." },
  { name: "Chicken Karahi", price: "$22", desc: "Tomato-rich chicken karahi served with naan or rice." },
  { name: "Tandoori Whole Chicken", price: "$32", desc: "Whole chicken with tandoori seasoning and Afghan spices. Served with brown rice and salad." },
];

const platters: MenuItem[] = [
  { name: "Kabob Platter for 4", price: "$110", desc: "A shareable feast of mixed kabobs for four." },
  { name: "Kabob Platter for 6", price: "$145", desc: "Mixed kabobs and rice generously plated for six." },
  { name: "Kabob Platter for 8", price: "$195", desc: "Catering-style platter for a gathering of eight." },
  { name: "Kabob Platter for 10", price: "$225", desc: "Our largest platter — perfect for a celebration." },
];

const kabobs: MenuItem[] = [
  { name: "Chicken Kabob", price: "$16", desc: "Boneless chicken breast cubes, Afghan-spiced and grilled. Served with rice and salad." },
  { name: "Tandoori Chicken Kabob", price: "$16", desc: "Boneless chicken in spicy tandoori masala. Served with rice and salad." },
  { name: "Tandoori Half Chicken", price: "$18", desc: "Half chicken marinated in tandoori spice. Served with rice and salad." },
  { name: "Lamb Shank", price: "$22", desc: "Slow-cooked for 4 hours until fork-tender. Served with rice and salad." },
  { name: "Tikka Lamb Kabob", price: "$18", desc: "Tenderloin lamb cubes in our specialty house seasoning, with rice and salad." },
  { name: "Tandoori Kofta Combination", price: "$22", desc: "Tandoori kabob and beef kobedei kabob with rice and salad." },
  { name: "Soltani Kabob Combination", price: "$24", desc: "Tikka lamb kabob and kobedei kabob with rice and salad." },
  { name: "Wazeri Kabob Combination", price: "$22", desc: "Chicken shish kabob and kobedei kabob with rice and salad." },
  { name: "Chopan Kabob", price: "$28", desc: "Tender lamb chops marinated in our specialty seasoning, with rice and salad." },
  { name: "Kobedei Kabob", price: "$20", desc: "Two skewers of minced beef seasoned in-house. Served with rice and salad." },
  { name: "Chicken Kobedei Kabob", price: "$20", desc: "Two skewers of ground chicken with rice and salad." },
  { name: "Chapli Kabob", price: "$22", desc: "Ground beef patties marinated with green onion, onion, and tomatoes." },
];

const desserts: MenuItem[] = [
  { name: "Baklava", price: "$10", desc: "Afghan pastry stuffed with walnut. Made in-house." },
  { name: "Afghan Sher Yakh Jawla", price: "$12", desc: "Vanilla ice cream served with noodle syrup and creamer." },
  { name: "Firni", price: "$10", desc: "Afghan-style pudding topped with pistachios." },
];

function Section({ id, title, items }: { id: string; title: string; items: MenuItem[] }) {
  return (
    <div id={id} className="mb-20 scroll-mt-28">
      <div className="flex items-end justify-between border-b border-stone-200 pb-4 mb-10">
        <h3 className="font-serif text-3xl md:text-4xl text-brand-green italic">{title}</h3>
        <span className="font-medium text-xs uppercase tracking-[0.2em] text-stone-400">
          {items.length} items
        </span>
      </div>
      <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
        {items.map((i) => (
          <div key={i.name} className="group">
            <div className="flex justify-between items-baseline gap-4 mb-2">
              <h4 className="font-serif text-xl text-stone-900">{i.name}</h4>
              <span className="text-brand-green font-bold whitespace-nowrap">{i.price}</span>
            </div>
            <p className="text-sm text-stone-500 leading-relaxed">{i.desc}</p>
            {i.veg && (
              <span className="inline-block mt-2 text-[10px] font-bold uppercase tracking-widest text-brand-green/70 bg-brand-green/5 px-2 py-0.5 rounded-full">
                Vegetarian
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function Index() {
  const phone = "(470) 292-3774";
  return (
    <div className="font-sans text-stone-900 bg-earth-bg selection:bg-brand-gold/30">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-earth-bg/85 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <div className="size-9 bg-brand-green rounded-full grid place-items-center text-brand-gold font-serif italic text-lg">
              A
            </div>
            <span className="font-serif text-xl font-bold tracking-tight text-brand-green uppercase">
              Ariana
            </span>
          </a>
          <div className="hidden md:flex items-center gap-10 text-sm font-medium uppercase tracking-widest text-stone-600">
            <a href="#menu" className="hover:text-brand-green transition-colors">Menu</a>
            <a href="#story" className="hover:text-brand-green transition-colors">Our Story</a>
            <a href="#reviews" className="hover:text-brand-green transition-colors">Reviews</a>
            <a href="#visit" className="hover:text-brand-green transition-colors">Visit</a>
          </div>
          <a
            href={`tel:${phone.replace(/[^0-9]/g, "")}`}
            className="px-5 md:px-6 py-2.5 bg-brand-green text-white text-xs font-bold uppercase tracking-widest hover:bg-stone-800 transition-all rounded-sm"
          >
            Order Pickup
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header id="top" className="relative px-6 py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="z-10">
            <span className="inline-block px-3 py-1 bg-brand-gold/10 text-brand-gold text-xs font-bold uppercase tracking-widest mb-6 rounded-full">
              Authentic Afghan · Halal
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-brand-green leading-[0.95] mb-8">
              Taste the <span className="italic">Silk Road</span> in Duluth
            </h1>
            <p className="text-lg text-stone-600 max-w-lg mb-10 leading-relaxed">
              Family-owned and lovingly cooked. Our recipes travel from our mother's kitchen
              straight to your table — slow-simmered, charcoal-grilled, and always halal.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <a
                href="#menu"
                className="px-8 py-4 bg-brand-green text-white font-bold uppercase tracking-widest text-sm hover:-translate-y-0.5 transition-all"
              >
                View the Menu
              </a>
              <div className="flex items-center gap-3">
                <div className="flex text-brand-gold text-lg" aria-hidden>
                  ★★★★★
                </div>
                <div className="text-sm">
                  <span className="block font-bold">4.7 / 5</span>
                  <span className="text-stone-500">680+ Google reviews</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroImg}
              alt="Qabuli Palau with lamb shank, the signature dish of Ariana Kabob House"
              width={1200}
              height={1500}
              className="w-full aspect-[4/5] object-cover rounded-2xl shadow-2xl shadow-brand-green/20"
            />
            <div className="absolute -bottom-8 -left-4 md:-left-10 bg-white p-6 shadow-xl rounded-xl hidden md:block max-w-[260px]">
              <p className="font-serif italic text-lg text-brand-green mb-2 leading-tight">
                "The lamb shank falls off the bone. Truly feels like home."
              </p>
              <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
                — Mahia Z.
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Specialties */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-stone-200">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-serif text-4xl text-brand-green mb-4">Our Specialties</h2>
            <p className="text-stone-500 max-w-md uppercase text-xs tracking-[0.2em] font-medium">
              Traditional techniques. Generations of soul.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { img: mantuImg, name: "Mantu", price: "$15", desc: "Afghan dumplings stuffed with seasoned ground beef and finished with a savory yogurt drizzle." },
            { img: chapliImg, name: "Chapli Kabob", price: "$22", desc: "Ground beef patties marinated with green onion and house spices, grilled over an open flame." },
            { img: banjanImg, name: "Banjan", price: "$14", desc: "Tender eggplant fried with tomato and garlic, finished with our signature Afghan sauce." },
          ].map((d) => (
            <div key={d.name} className="group cursor-pointer">
              <div className="aspect-square rounded-lg overflow-hidden mb-6">
                <img
                  src={d.img}
                  alt={d.name}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                />
              </div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-serif text-2xl">{d.name}</h3>
                <span className="text-brand-green font-bold">{d.price}</span>
              </div>
              <p className="text-stone-500 text-sm leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section id="story" className="bg-brand-green text-stone-100 py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <img
            src={interiorImg}
            alt="The warm dining room at Ariana Kabob House"
            width={1200}
            height={900}
            loading="lazy"
            className="w-full aspect-[4/3] object-cover rounded-2xl"
          />
          <div>
            <span className="inline-block px-3 py-1 bg-brand-gold/15 text-brand-gold text-xs font-bold uppercase tracking-widest mb-6 rounded-full">
              Our Story
            </span>
            <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">
              A family kitchen, <span className="italic text-brand-gold">just bigger</span>.
            </h2>
            <p className="text-lg leading-relaxed text-stone-300 mb-6">
              Ariana is a family-owned restaurant where mother cooks the recipes she grew up with,
              and her sons greet every guest at the door. Every kabob is hand-skewered, every
              dumpling folded by hand, and every shank simmered for hours until it surrenders.
            </p>
            <p className="text-lg leading-relaxed text-stone-300">
              We are proudly halal, deeply Afghan, and always glad to see you — whether it's your
              first visit or your fiftieth.
            </p>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="max-w-7xl mx-auto px-6 py-24 scroll-mt-24">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-brand-gold/10 text-brand-gold text-xs font-bold uppercase tracking-widest mb-6 rounded-full">
            The Full Menu
          </span>
          <h2 className="font-serif text-5xl md:text-6xl text-brand-green">Eat well, eat often.</h2>
        </div>

        {/* Sticky sub-nav */}
        <div className="sticky top-20 z-40 bg-earth-bg/90 backdrop-blur-md border-y border-stone-200 -mx-6 px-6 py-3 mb-12 flex gap-2 overflow-x-auto text-xs font-bold uppercase tracking-widest">
          {[
            ["apps", "Appetizers"],
            ["wraps", "Wraps"],
            ["entrees", "Entrees"],
            ["kabobs", "Kabobs"],
            ["platters", "Platters"],
            ["dessert", "Dessert"],
          ].map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className="px-4 py-2 rounded-full bg-stone-100 hover:bg-brand-green hover:text-white transition-colors whitespace-nowrap"
            >
              {label}
            </a>
          ))}
        </div>

        <Section id="apps" title="Appetizers" items={apps} />
        <Section id="wraps" title="Wraps" items={wraps} />
        <Section id="entrees" title="Entrees" items={entrees} />
        <Section id="kabobs" title="Kabobs & Grill" items={kabobs} />
        <Section id="platters" title="Family Platters" items={platters} />
        <Section id="dessert" title="Dessert" items={desserts} />
      </section>

      {/* Reviews */}
      <section id="reviews" className="bg-stone-100 py-24 px-6 border-y border-stone-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-brand-gold/10 text-brand-gold text-xs font-bold uppercase tracking-widest mb-6 rounded-full">
              Guest Voices
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-green">
              Loved by our neighbors.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Ariana is a family-owned Afghan restaurant where you can truly feel the love put into the food. The mother is the main cook and uses authentic family recipes.",
                name: "Svetlana C.",
                meta: "Local Guide · Google",
              },
              {
                quote:
                  "Feels like home, honestly. The ONLY place in Atlanta I come for chapli kabob besides my mom's house. Always consistently delicious — and of course halal.",
                name: "Mahia Z.",
                meta: "Yelp",
              },
              {
                quote:
                  "First time trying Afghan cuisine and we loved it. The lamb shanks had meat falling off the bone, and the flavors brought out the natural ingredients beautifully.",
                name: "Ron P.",
                meta: "Local Guide · Google",
              },
            ].map((r) => (
              <figure
                key={r.name}
                className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200/60"
              >
                <div className="text-brand-gold text-lg mb-4" aria-hidden>★★★★★</div>
                <blockquote className="font-serif italic text-lg text-brand-green leading-snug mb-6">
                  "{r.quote}"
                </blockquote>
                <figcaption>
                  <div className="font-bold text-sm">{r.name}</div>
                  <div className="text-[10px] uppercase tracking-widest text-stone-400 mt-1">
                    {r.meta}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Visit */}
      <section id="visit" className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="inline-block px-3 py-1 bg-brand-gold/10 text-brand-gold text-xs font-bold uppercase tracking-widest mb-6 rounded-full">
              Visit Us
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-green mb-8">
              Come hungry. Leave family.
            </h2>
            <dl className="space-y-6 text-stone-700">
              <div>
                <dt className="text-xs uppercase tracking-widest text-stone-400 font-bold mb-1">
                  Address
                </dt>
                <dd className="text-lg">
                  2870 Peachtree Industrial Blvd<br />
                  Duluth, GA 30097
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-stone-400 font-bold mb-1">
                  Phone
                </dt>
                <dd className="text-lg">
                  <a href={`tel:${phone.replace(/[^0-9]/g, "")}`} className="hover:text-brand-green">
                    {phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-stone-400 font-bold mb-1">
                  Hours
                </dt>
                <dd className="text-lg leading-relaxed">
                  Mon – Sat: 11:30 AM – 8:30 PM<br />
                  Sunday: 12:00 PM – 8:00 PM
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-stone-400 font-bold mb-1">
                  Order Online
                </dt>
                <dd className="flex flex-wrap gap-3 mt-2">
                  {["Grubhub", "Uber Eats", "DoorDash"].map((s) => (
                    <span
                      key={s}
                      className="px-4 py-2 bg-stone-100 border border-stone-200 text-sm font-medium rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </div>
          <div className="rounded-2xl overflow-hidden border border-stone-200 aspect-square lg:aspect-auto lg:h-[520px]">
            <iframe
              title="Map to Ariana Kabob House"
              src="https://www.google.com/maps?q=2870+Peachtree+Industrial+Blvd,+Duluth,+GA+30097&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-green text-stone-300 py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 border-b border-white/10 pb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="size-7 bg-brand-gold rounded-full" />
              <span className="font-serif text-2xl text-white uppercase tracking-tight italic">
                Ariana Kabob House
              </span>
            </div>
            <p className="text-lg max-w-sm leading-relaxed">
              Bringing the rich flavors of Afghanistan to Georgia. Halal, fresh, and always served
              with a smile.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold uppercase text-[10px] tracking-widest mb-6">
              Visit
            </h4>
            <p className="text-sm leading-loose">
              2870 Peachtree Industrial Blvd<br />
              Duluth, GA 30097<br />
              {phone}
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold uppercase text-[10px] tracking-widest mb-6">
              Hours
            </h4>
            <p className="text-sm leading-loose">
              Mon – Sat: 11:30 AM – 8:30 PM<br />
              Sunday: 12:00 PM – 8:00 PM
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-medium opacity-50">
          <span>© {new Date().getFullYear()} Ariana Kabob House · Halal Certified</span>
          <div className="flex gap-8">
            <span>Instagram</span>
            <span>Facebook</span>
            <span>Grubhub</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
