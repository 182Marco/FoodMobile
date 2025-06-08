import { Category, Meal } from '@/classes';

type IGetById = (
  id: string,
  ar: Meal[] | Category[]
) => Meal | Category | undefined;

type ITitleObj = { title: string };

type IGetTitleById = (id: string, ar: Meal[] | Category[]) => ITitleObj;

type IGetStuffTitleById = (id: string) => ITitleObj;

type IGetMealById = (id: string) => Meal;

export { IGetById, IGetStuffTitleById, IGetTitleById, IGetMealById };
