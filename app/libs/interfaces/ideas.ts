import { UUID } from "crypto";
import { Users } from "./users";

export interface Ideas {
  id: UUID | string;
  title: string;
  subtitle?: string | null;
  content: string;
  tags: "frontend" | "backend" | "fullstack" | "design" | "photography";
  author: Users["id"];
  // likes: Users["id"][];
}
