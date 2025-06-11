type IRootStackParamList = {
  MealsCategories: undefined;
  MealsOverview: { catId: string };
  MealDetails: { mealId: string };
};

type IDrawerStackParamList = {
  somethin: undefined;
};

export { IRootStackParamList, IDrawerStackParamList };
