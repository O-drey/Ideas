import { UUID } from "crypto";
// import type { Artwork } from "./artworks";

export interface Users {
  id: UUID | string;
  firstname: string;
  lastname: string;
  username: string;
  // dob: number | string;
  pronouns: "elle" | "iel" | "ielle" | "il";
  email: string;
  // phone?: number | string | null;
  // status: "étudiant·e" | "lycéen·ne" | "freelance" | "salarié·e";
  // sector?: string | null;
  // jobSearch?: "1er emploi" | "stage" | "alternance" | "école" | null;
  // avatar?: string | null; //ajouter image par défaut
  bio?: string;
  // role: "ADMIN" | "USER";
}

// export type Admin = Omit<Users, "jobSearch" | "status" | "age" | "pseudo">;
