
import { Review } from "./review";

export type User = {
    id: number;
    name: string;
    email: string;
    reviews: Review[];
}