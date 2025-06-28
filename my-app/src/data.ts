import ServicePhoto1 from "../src/assets/images/services/1.png";
import blogImg1 from "../src/assets/images/blog/1.jpeg";

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

export type BlogPost = {
  id: number;
  title: string;
  image: string;
  excerpt: string;
  url: string;
  description: string;
};

// Sample data
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Rise of Ethnic Fashion",
    image: blogImg1,
    excerpt:
      "Explore how traditional Indian clothing is dominating global fashion.",
    url: "/blog/rise-of-ethnic-fashion",
    description:
      "In this blog post, we ac,amet fermentum. Cras jusget",
  },
  {
    id: 2,
    title: "Lehenga Styling Tips",
    image: blogImg1,
    excerpt:
      "Learn how to style your lehenga for weddings, festivals, and parties.",
    url: "/blog/lehenga-styling-tips",
    description:
      "In this blog post, we delve into the resurgence.Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget",
  },
  {
    id: 3,
    title: "Top Saree Trends 2025",
    image: blogImg1,
    excerpt: "Discover the latest saree styles and fabrics trending this year.",
    url: "/blog/saree-trends-2025",
    description:
      "In this blog post, we delve into the resurgence.Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget",
  },
];
