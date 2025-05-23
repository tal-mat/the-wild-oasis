import Image from "next/image";
import Link from "next/link";

import { UsersIcon } from "@heroicons/react/24/solid";

// Renders a card component displaying cabin details, including image, name, capacity, price, and reservation link.
function CabinCard({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

  return (
    <div className="flex flex-col sm:flex-row border-primary-800 border">
      {/* Displays the cabin image on the left side */}
      <div className="relative w-full sm:w-1/2 h-48 sm:h-auto">
        <Image
          src={image}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          alt={`Cabin ${name}`}
          className="object-cover border-b sm:border-r border-primary-800"
        />
      </div>

      <div className="flex-grow">
        <div className="pt-5 pb-4 px-7 bg-primary-950">
          {/* Displays the cabin name */}
          <h3 className="text-accent-500 font-semibold text-2xl mb-3">
            Cabin {name}
          </h3>

          {/* Shows maximum guest capacity with an icon */}
          <div className="flex gap-3 items-center mb-2">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            <p className="text-lg text-primary-200">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </p>
          </div>

          {/* Renders the price, displaying discount if applicable */}
          <p className="flex gap-3 justify-end items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-3xl font-[350]">
                  ${regularPrice - discount}
                </span>
                <span className="line-through font-semibold text-primary-600">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-3xl font-[350]">${regularPrice}</span>
            )}
            <span className="text-primary-200">/ night</span>
          </p>
        </div>

        {/* Link to cabin details and reservation */}
        <div className="bg-primary-950 border-t border-t-primary-800 text-right">
          <Link
            href={`/cabins/${id}`}
            className="border-l border-primary-800 py-4 px-6 inline-block hover:bg-accent-600 transition-all hover:text-primary-900"
          >
            Details & reservation &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CabinCard;
