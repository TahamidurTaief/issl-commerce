import Image from "next/image";
import Link from "next/link";

import baby_fashion from "@/public/img/Home/Caregory/baby-fashion.jpg";

const CategoryCards = () => {
  const categories = [
    {
      id: 1,
      name: "Fashion Clothes",
      itemCount: 16,
      imageUrl: baby_fashion,
      discount: "20%",
      type: "Generic Fashion",
    },
    {
      id: 2,
      name: "Generic Cosmetics",
      itemCount: 45,
      imageUrl: baby_fashion,
      discount: "15%",
      type: "Cosmetics",
    },
    {
      id: 3,
      name: "Stylish Shoes",
      itemCount: 58,
      imageUrl: baby_fashion,
      discount: "30%",
      type: "Footwear",
    },
    {
      id: 4,
      name: "Digital Watches",
      itemCount: 54,
      imageUrl: baby_fashion,
      discount: "25%",
      type: "Accessories",
    },
    {
      id: 5,
      name: "Leather Belts",
      itemCount: 75,
      imageUrl: baby_fashion,
      discount: "10%",
      type: "Accessories",
    },
    {
      id: 6,
      name: "Hand Bags",
      itemCount: 32,
      imageUrl: baby_fashion,
      discount: "35%",
      type: "Bags",
    },
    {
      id: 7,
      name: "Sunglasses",
      itemCount: 28,
      imageUrl: baby_fashion,
      discount: "20%",
      type: "Accessories",
    },
    {
      id: 8,
      name: "Jewelry",
      itemCount: 41,
      imageUrl: baby_fashion,
      discount: "40%",
      type: "Jewelry",
    },
  ];

  return (
    <section className="container mx-auto py-8">
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-[var(--color-text-primary)]">
          Shop by{" "}
          <span className="text-sky-500 dark:text-sky-300">Category</span>
        </h2>
        <Link
          href="/categories"
          className="text-blue-500 dark:text-sky-300 underline text-md md:text-lg hover:text-blue-500 "
        >
          See All
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 md:mt-5 xl:mt-7">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex flex-col gap-3 justify-between w-full bg-gray-200 dark:bg-[var(--color-second-bg)] px-3 py-5 rounded-lg hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex flex-col sm:flex-row gap-2 w-full">
              <div className="flex flex-col gap-2 w-full">
                <div className="gap-1">
                  <h3 className="text-lg">{category.type}</h3>
                  <h1 className="text-2xl font-bold">
                    {category.name.split(" ")[0]}
                  </h1>
                </div>
                <p className="text-lg">Items ({category.itemCount})</p>
              </div>
              <div className="w-full">
                <h2 className="text-gray-300 dark:text-gray-100 dark:opacity-10 dark:text-outline-2 text-6xl font-black w-full text-center sm:text-right">
                  {category.discount}
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <Image
                src={category.imageUrl}
                alt={category.name}
                className="p-1 bg-white rounded-lg object-cover aspect-square"
                width={80}
                height={80}
              />
              <Image
                src={category.imageUrl}
                alt={category.name}
                className="p-1 bg-white rounded-lg object-cover aspect-square"
                width={80}
                height={80}
              />
              <Image
                src={category.imageUrl}
                alt={category.name}
                className="p-1 bg-white rounded-lg object-cover aspect-square"
                width={80}
                height={80}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryCards;
