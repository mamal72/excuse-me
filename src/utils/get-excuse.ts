import axios from 'axios'
import cheerio from 'cheerio'

export async function getExcuse(): Promise<string> {
  const { data } = await axios.get<string>('http://developerexcuses.com/')
  const $ = cheerio.load(data)
  return $('.wrapper a').text()
}
