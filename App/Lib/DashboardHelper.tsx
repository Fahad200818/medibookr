import * as R from "ramda";

export const getLevelData = (level: number, items: ResultsItem[], type: string = "service"): { [index: string]: ResultsItem[] } => {
  return R.groupBy<ResultsItem>(a => a[type][`level_${level}`])(items);
};

export const getKeyMap = (data: any) =>
  R.keysIn(data).map(value => ({title: `${value} (${data[value].length})`, content: data[value]}));

export const hasMoreLevel = (array: ResultsItem[], level: number, type: string = "service") =>
  array.length > 0 && array[0][type][`level_${level + 2}`] && array[0][type][`level_${level + 2}`] != null;
