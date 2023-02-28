export interface Character {
    id: number;
    name: string;
    status: string;
    gender: string;
    location: Location;
    species: string;
    origin: Origin;
    image: string;
}

interface Location {
    name: string;
    url: string;
}

interface Origin {
    name: string;
    url: string;
}