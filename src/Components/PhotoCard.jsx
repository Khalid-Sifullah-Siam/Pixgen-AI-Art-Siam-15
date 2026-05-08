import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { IoMdDownload } from "react-icons/io";
import { IoHeart } from "react-icons/io5";

const PhotoCard = ({ data }) => {
  const { id, title, imageUrl, category, likes, downloads } = data;
 

  
  return (
    <Card
      className="border rounded-xl overflow-hidden shadow-sm 
                 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
    >
      {/* Image Section */}
      <div className="relative w-full aspect-square">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 
                 (max-width: 1200px) 50vw, 
                 33vw"
          className="object-cover"
        />
        <Chip
          className="absolute top-2 right-2 bg-gradient-to-r from-indigo-500 to-purple-500 
                     text-white font-semibold shadow-md"
        >
          {category}
        </Chip>
      </div>

      {/* Title */}
      <h1 className="font-bold text-lg px-4 mt-3 text-gray-800 dark:text-gray-200">
        {title}
      </h1>

      {/* Stats */}
      <div className="flex justify-between px-4 py-3 text-gray-600 dark:text-gray-400">
        <div className="flex gap-1 items-center hover:text-red-500 transition-colors duration-300">
          <IoHeart className="text-red-500" />
          <p>{likes}</p>
        </div>

        <div className="flex gap-1 items-center hover:text-blue-600 transition-colors duration-300">
          <IoMdDownload className="text-blue-600" />
          <p>{downloads}</p>
        </div>
      </div>

      {/* Button */}
      <div className="px-4 pb-4">
        <Button
          className="w-full font-bold rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 
                     text-white hover:shadow-lg hover:scale-[1.03] transition-all duration-300"
        >
          <Link href={`/all-photos/${id}`}>View Details</Link>
        </Button>
      </div>
      
    </Card>
  );
};

export default PhotoCard;
