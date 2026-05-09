import { Button } from "@heroui/react";
import Link from "next/link";
import PhotoCard from "./PhotoCard";
import { getJson } from "@/lib/get-json";

const TopGenerations = async () => {
  const dataObject = await getJson("data.json");

  return (
    <div>
      <h1 className="text-center text-2xl font-bold my-6">Top Generations</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12 md:mb-16 xl:mb-24">
        {dataObject.slice(0, 8).map((data) => (
          <PhotoCard key={data.id} data={data} />
        ))}
      </div>

      <div className="px-4 md:px-12 lg:px-24">
        {/* Button এর ভেতর Link */}
        <Button
          fullWidth
          className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 text-white font-bold text-xl md:text-2xl py-8 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-500 ease-in-out"
        >
          <Link href="/all-photos" className="w-full h-full flex items-center justify-center">
            View All Photos -{">"}
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default TopGenerations;