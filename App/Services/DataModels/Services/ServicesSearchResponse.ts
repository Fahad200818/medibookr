interface ServicesSearchResponse {
  count: number;
  limit: number;
  results: ResultsItem[];
}

interface ResultsItem {
  serviceId: string;
  service: Service;
}

interface Service {
  serviceId: string;
  level_0: string;
  level_1: string;
  level_2: string;
  level_3: string;
  level_4: string;
  level_5: string;
  level_6: string;
  level_7: string;
  level_8: string;
  level_9: string;
  name: string;
  shortName: string;
  specialty: string;
  endFlag: number;
  parentId: number;
  cptCode: string;
}
