import ServicePhoto1 from "../src/assets/images/services/1.png";

export type GalleryItem = {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
};

export const galleryItems: GalleryItem[] = [
   { id: 0, title: "project 1", category: "html", imageUrl: ServicePhoto1 },
  {
    id: 1,
    title: "project 2",
    category: "e-commerce",
    imageUrl: ServicePhoto1,
  },
  { id: 2, title: "project 3", category: "AI-base", imageUrl: ServicePhoto1 },
  {
    id: 3,
    title: "project 4",
    category: "e-commerce",
    imageUrl: "/images/lehenga2.jpg",
  },
  {
    id: 4,
    title: "project 5",
    category: "e-commerce",
    imageUrl: ServicePhoto1,
  },
];
