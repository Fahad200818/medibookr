interface SpecialitySearchResponse {
  count: number;
  limit: number;
  results: ResultsSpecialityItem[];
}
interface ResultsSpecialityItem {
  specialtyId: string;
  specialty: Specialty;
}
interface Specialty {
  id: number;
  specialtyId: string;
  level_0: string;
  level_1: string;
  level_2: string;
  level_3: null;
}
