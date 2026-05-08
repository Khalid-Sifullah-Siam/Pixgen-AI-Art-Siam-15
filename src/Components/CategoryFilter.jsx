"use client";

import { useRouter, useSearchParams } from 'next/navigation';

const CategoryFilter = ({ activeCategory, categories = [] }) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleChange = (event) => {
        const category = event.target.value;
        const params = new URLSearchParams(searchParams.toString());

        if (category === 'All') {
            params.delete('category');
        } else {
            params.set('category', category);
        }

        const query = params.toString();
        router.push(query ? `?${query}` : '/all-photos');
    };

    return (
        <div className="my-6">
            <select
                value={activeCategory ?? 'All'}
                onChange={handleChange}
                className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm outline-none transition focus:border-green-500"
            >
                <option value="All">All</option>
                {categories.map((category) => (
                    <option key={category.id} value={category.name}>
                        {category.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CategoryFilter;
