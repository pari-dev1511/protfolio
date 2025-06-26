import React, { useState } from "react";
import PageLayout from "../Components/PageLayout";
import FilterTabs from "../Components/FilterTabs";
import { galleryItems, GalleryItem } from "../data";
import GalleryGrid from "../Components/GalleryGrid";
import LightboxModal from "../Components/LightboxModal";

// const galleryItems: GalleryItem[] = [
//   { id: 1, title: "project 1", category: "html", imageUrl: ServicePhoto1 },
//   {
//     id: 2,
//     title: "project 2",
//     category: "e-commerce",
//     imageUrl: ServicePhoto1,
//   },
//   { id: 3, title: "project 3", category: "AI-base", imageUrl: ServicePhoto1 },
//   {
//     id: 4,
//     title: "project 4",
//     category: "e-commerce",
//     imageUrl: "/images/lehenga2.jpg",
//   },
//   {
//     id: 5,
//     title: "project 5",
//     category: "e-commerce",
//     imageUrl: ServicePhoto1,
//   },
// ];

const Portfolio: React.FC<any> = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | string>(
    "All"
  );
  console.log("selectedCategory_________", selectedCategory);
  
  const [LightBoxItem, setLightBoxItem] = useState<GalleryItem | null>(null);
  console.log("LightBoxItem_________", LightBoxItem);

  const categories = galleryItems.map((item: any) => item.category);
  const uniqueCategories = Array.from(new Set(categories));

  const handleCategoryChange = (e: React.SyntheticEvent, newValue: number) => {
    setSelectedCategory(newValue as number);
  };

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);
      

  return (
    <PageLayout
      name="Portfolio"
      Contant={
        <>
          <FilterTabs
            selected={selectedCategory}
            categories={uniqueCategories}
            handleCategoryChange={handleCategoryChange}
          />
          <GalleryGrid items={filteredItems} onImageClick={setLightBoxItem} />
          <LightboxModal
            item={LightBoxItem}
            onClose={() => {
              setLightBoxItem(null);
            }}
          />
        </>
      }
    ></PageLayout>
  );
};

export default Portfolio;
