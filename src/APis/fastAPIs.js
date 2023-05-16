import axios from 'axios'

const basepath = 'http://10.242.1.101:8080'

const fetchFastAPIHome = async () => {
  try {
    const response = await axios(basepath)
    const stringify = JSON.stringify(response)
    const json = await JSON.parse(stringify)
    return json
  } catch (err) {
    console.log(err)
  }
}

const userById = async (id_user) => {
  try {
    const response = await axios(`${basepath}/users/${id_user}`)
    const stringify = JSON.stringify(response)
    const json = await JSON.parse(stringify)
    return json
  } catch (err) {
    console.log(err)
  }
}

export { fetchFastAPIHome, userById }
