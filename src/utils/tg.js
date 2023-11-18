import axios from './axios'

export default async function sendApplication(fields) {
  try {
    let text = ''
    const formDataArray = Object.entries(fields)
    formDataArray.forEach(([key, value], i) => {
      if (value) {
        text += `${key}: ${value}${i < formDataArray.length - 1 ? '%0A' : ''}`
      }
    })

    const url = `https://api.telegram.org/bot${process.env.VUE_APP_TG_TOKEN}/sendMessage?chat_id=${process.env.VUE_APP_TG_ID}&text=${text}&parse_mode=HTML`
    await axios.get(url)
  } catch (err) {
    console.error(err)
  }
}
