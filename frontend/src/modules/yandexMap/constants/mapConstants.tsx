export const initialState = {
  title: '',
  center: [55.755864, 37.617698],
  zoom: 12,
}

export const mapOptions = {
  modules: ['geocode', 'SuggestView'],
  defaultOptions: { suppressMapOpenBlock: true },
}
