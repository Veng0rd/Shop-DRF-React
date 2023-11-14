export const initialState = {
  title: '',
  center: [55.003992, 73.303729],
  zoom: 12,
}

export const mapOptions = {
  modules: ['geocode', 'SuggestView'],
  defaultOptions: { suppressMapOpenBlock: true },
}
