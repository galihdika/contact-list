export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: CompanyProfile;
}

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoLocation;
}

type GeoLocation = {
  lat: string;
  lng: string;
}

type CompanyProfile = {
  name: string;
  catchPhrase: string;
  bs: string;
}