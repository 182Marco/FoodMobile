import { MEALS } from '@/data';
import { IGetInCategory } from './getInCategory.models';

const getMealsInCategory: IGetInCategory = catId =>
  MEALS.filter(e => e.categoryIds.includes(catId));

export { getMealsInCategory };
