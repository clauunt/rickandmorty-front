export interface Character {
    id: number;
    name: string;
    status: string;
    gender: string;
    location: Location;
    species: string;
    origin: Origin;
}

interface Location {
    name: string;
    url: string;
}

interface Origin {
    name: string;
    url: string;
}