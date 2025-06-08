import { CATEGORIES, MEALS } from '@/data';
import { Meal } from '@/classes';
import {
  IGetStuffTitleById,
  IGetById,
  IGetTitleById,
  IGetMealById,
} from './getById.models';

const getById: IGetById = (id, ar) => ar.find(e => e.id === id);

const getTitleById: IGetTitleById = (id, ar) => ({
  title: getById(id, ar)?.title || '',
});

const getCategoryTitleById: IGetStuffTitleById = id =>
  getTitleById(id, CATEGORIES);

const getMealTitleById: IGetStuffTitleById = id => getTitleById(id, MEALS);

const getMealById: IGetMealById = id => getById(id, MEALS) as Meal;

export { getCategoryTitleById, getMealById, getMealTitleById };
