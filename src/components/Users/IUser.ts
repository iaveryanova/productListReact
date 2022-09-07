export interface IUser
{
    id: number;
    email: string;
    username: string
    website: string;
    address: {
        zipcode: string;
        geo: { lng: string; lat: string };
        suite: string;
        city: string;
        street: string
    };
    phone: string;
    name: string;
    company: {
        bs: string;
        catchPhrase: string;
        name: string
    };
}