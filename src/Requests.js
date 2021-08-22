const API_BASE = 'https://rickandmortyapi.com/api'

const randomNumber = () => {
  return (Math.floor(Math.random() * 27) + 1);
}

const basicFetch = async (endpoint) => {
  return (await fetch(`${API_BASE}${endpoint}`)).json()
}

const Requests = {

  getHomeCards: async () => {
    return [
      {
        slug: 'character',
        title: 'Characters',
        item: await basicFetch(`/character/${randomNumber()}`)
      },
      {
        slug: 'location',
        title: 'Locations',
        item: await basicFetch(`/location/${randomNumber()}`)
      },
      {
        slug: 'episode',
        title: 'Episodes',
        item: await basicFetch(`/episode/${randomNumber()}`)
      }
    ]
  },
  getList: async (slug) => {
    return [
      {
        slug: `${slug}`,
        item: await basicFetch(`/${slug}`)
      }
    ]

  }
}

export default Requests;