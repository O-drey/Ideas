import { Categories } from "../libs/interfaces/categories";

export const formatTags = (value: Categories["value"]) =>
  value === "backend"
    ? "Back-end"
    : value === "frontend"
    ? "Front-end"
    : value === "fullstack"
    ? "Full-Stack"
    : value === "mobile"
    ? "Mobile"
    : value === "design"
    ? "Design"
    : "Photographie";
