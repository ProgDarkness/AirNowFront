import axios from 'axios'

const fetchFastAPIHome = async () => {
  const response = await axios('http://localhost:8000/')
  const stringify = JSON.stringify(response)
  const json = await JSON.parse(stringify)
  return json
}

export { fetchFastAPIHome }
