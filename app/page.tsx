import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="grid gap-8 md:grid-cols-2 items-center">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Fresh coffee, homemade Breakfast, right at your fingertips.
          </h1>
          <p className="text-slate-600">
            Order your favourite dishes, customise ingredients, and choose
            pickup or delivery. Simple, fast, and delicious.
          </p>
          <div className="flex gap-3">
            <Link
              href="/menu"
              className="rounded-full bg-amber-600 text-white px-5 py-2 text-sm font-medium hover:bg-amber-700"
            >
              Order Now
            </Link>
            <Link
              href="/offers"
              className="rounded-full border border-amber-600 text-amber-700 px-5 py-2 text-sm font-medium hover:bg-amber-50"
            >
              View Special Offers
            </Link>
          </div>
        </div>
        <div className="aspect-[4/3] bg-slate-200 rounded-xl shadow-inner flex items-center justify-center text-slate-500 text-sm relative overflow-hidden">
          <Image src={'/images/hero/hero.jpg'}
                 alt="hero"
                 fill
                 className="w-full h-full object-cover" />
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="bg-white rounded-xl shadow-sm border p-4">
          <h2 className="font-semibold mb-3">Opening Hours</h2>
          <ul className="text-sm space-y-1">
            <li>Mon–Fri: 6:00am – 5:00pm</li>
            <li>Sat-Sun: 6:00am – 6:00pm</li>
           
          </ul>
        </div>
        <div className="bg-white rounded-xl shadow-sm border p-4">
          <h2 className="font-semibold mb-3">Location</h2>
          <p className="text-sm text-slate-600">
            57 McKeon St, Maroubra NSW 2035
          </p>
          <div className="mt-3 h-40 bg-slate-200 rounded-lg flex items-center justify-center text-xs text-slate-500 overflow-hidden">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.793263395588!2d151.256466!3d-33.946445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b3ca0eda0ebd%3A0x7f19f60ae5471057!2sMarini%20Cafe!5e0!3m2!1sen!2sau!4v1763806345113!5m2!1sen!2sau"
                    width="600"
                    height="450"
                    style={{ border: 0 }} 
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold">Special Offers</h2>
          <Link href="/offers" className="text-xs text-amber-700">
            View all
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="bg-white border rounded-xl p-3 text-sm">
            <p className="font-medium">Happy Hour Coffee</p>
            <p className="text-slate-600 text-xs">
              2-for-1 espresso between 3–5pm weekdays.
            </p>
          </div>
          <div className="bg-white border rounded-xl p-3 text-sm">
            <p className="font-medium">Breakfast Combo</p>
            <p className="text-slate-600 text-xs">
              Any coffee + pastry for $9.90.
            </p>
          </div>
          <div className="bg-white border rounded-xl p-3 text-sm">
            <p className="font-medium">Family Burger Night</p>
            <p className="text-slate-600 text-xs">
              4 burgers + fries + drinks bundle.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
