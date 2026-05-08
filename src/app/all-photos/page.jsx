import CategoryFilter from "@/Components/CategoryFilter";
import PhotoCard from "@/Components/PhotoCard";
import { Button } from "@heroui/react";
import Link from "next/link";

const AllPhotosPage = async ({searchParams}) => {
  const {category} = await searchParams;
  const res = await fetch('http://localhost:3000/data.json')// ata change korta hoba
  const dataObject = await res.json();
  const categoryRes = await fetch('http://localhost:3000/category.json');
  const categories = await categoryRes.json();

  const filteredData = category ? dataObject.filter(data => data.category.toLowerCase() === category.toLowerCase() ) : dataObject;

  return (
    <div className="px-4 md:px-8 lg:px-12">
      <div className="flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between">
        
          <h1 className="text-2xl md:text-3xl font-bold">All Photos</h1>
          
        

        <CategoryFilter activeCategory={category} categories={categories} />
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12 md:mb-16 xl:mb-24">
        {filteredData.map((data) => (
          <PhotoCard key={data.id} data={data} />
        ))}
      </div>

      {/* Attractive Last Button */}
      <div className="px-4 md:px-12 lg:px-24">
        <Button
          fullWidth
          className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 
                     text-white font-bold text-xl md:text-2xl py-6 rounded-xl 
                     shadow-md hover:shadow-xl hover:scale-[1.03] 
                     transition-all duration-500 ease-in-out"
        >
          <Link href="/" className="w-full text-center">
            View Top Generations Photos →
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default AllPhotosPage;
