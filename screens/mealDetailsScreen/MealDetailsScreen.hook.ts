import { getMealById } from '@/utils';

const useMealDetailsScreen = (id: string) => {
  const meal = getMealById(id);

  return { meal };
};

export { useMealDetailsScreen };
