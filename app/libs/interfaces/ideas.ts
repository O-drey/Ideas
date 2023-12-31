import { UUID } from "crypto";
import { Users } from "./users";

export interface Ideas {
  id: UUID | string;
  title: string;
  subtitle?: string | null;
  content: string;
  category: "frontend" | "backend" | "fullstack" | "design" | "photography";
  by_userId: Users["id"];
  // likes: Users["id"][];
}
