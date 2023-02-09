import axios from 'axios'
const server = 'BerryCraft'
export default async function discordFetchServerMembers() {
  try {
    const apiResult = await axios({
      data: {},
      method: 'get',
      url: `https://discord.com/api/v9/guilds/${server}/members`,
    })
    console.log(apiResult)
  } catch (err) {
    console.log(err)
  }
}
