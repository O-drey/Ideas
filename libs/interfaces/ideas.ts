import { UUID } from "crypto";
import { Users } from "./users";
import { Categories } from "./categories";

export interface Ideas {
  id: UUID | string;
  title: string;
  subtitle?: string | null;
  content: string;
  tags: Categories["value"][];
  author: Users["id"];
  // likes: Users["id"][];
}
