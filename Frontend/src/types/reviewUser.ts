import { User } from "./user";

export type ReviewUser =  {
    id: number;
    text: string;
    movieId: number;
    user: User;
  }
