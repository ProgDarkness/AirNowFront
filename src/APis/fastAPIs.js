import axios from 'axios'

export default function consulta() {
  axios
    .get('http://localhost:8000/')
    .then((response) => {
      console.log('first')
      console.log(response.data)
    })
    .catch((err) => {
      console.log(err)
    })
}
