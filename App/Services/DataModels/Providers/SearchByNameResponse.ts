interface SearchByNameResponse {
  count: number;
  limit: number;
  results: ResultsItem[];
}

interface ResultsItem {
  serviceId: string;
  providerId: string;
  providerName: string;
  practice: null;
  providerEmail: string;
  providerPhone: string;
  providerAddressLine1: string;
  providerAddressLine2: string;
  providerCity: string;
  providerState: string;
  providerZipcode: string;
  age: string;
  gender: string;
  latitude: string;
  longitude: string;
  npi: null;
  facilityFlag: boolean;
  inPracticeSince: string;
  specialty: string;
  preferredFlag: boolean;
  logo: null;
  inTheMedibookrFlag: null;
  status: string;
  distance: number;
  rating: string;
  ratingCount: number;
}
