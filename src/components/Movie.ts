export type Movie = {
  id: number;
  poster: string;
};

export const Movies = [
  {
    id: 1,
    poster: "https://images.unsplash.com/photo-1725983615817-963c4b2ccb06?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    poster: "https://images.unsplash.com/photo-1735809489088-ead6b62e5ac5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    poster: "https://images.unsplash.com/photo-1704553084855-3377fa808342?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 4,
    poster: "https://images.unsplash.com/photo-1704553086066-b048cdf15321?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 5,
    poster: "https://images.unsplash.com/photo-1736167908496-6a6773121e2d?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 6,
    poster: "https://images.unsplash.com/photo-1732905176274-ffdcffbeab41?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 7,
    poster: "https://images.unsplash.com/photo-1713369980451-30ca80a87bfa?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 8,
    poster: "https://images.unsplash.com/photo-1732167372202-30be36e1168e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 9,
    poster: "https://images.unsplash.com/photo-1734377957372-db8a4d696182?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
]

export const randomMoviesSet1 = Movies
  .sort(() => Math.random() - 0.5)
  .concat(Movies.sort(() => Math.random() - 0.5))
  .concat(Movies.sort(() => Math.random() - 0.5));

export const randomMoviesSet2 = Movies
  .sort(() => Math.random() - 0.5)
  .concat(Movies.sort(() => Math.random() - 0.5))
  .concat(Movies.sort(() => Math.random() - 0.5))
  .sort(() => Math.random() - 0.5);