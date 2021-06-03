export interface IState {
    habbits: IHabbits[],
    isLoading: boolean
}

export interface IHabbits {
    id: string,
    title: string,
    complete: boolean
}
  