import axios from 'axios'

const TOKEN =
	'vk1.a._shdPMlFXOuZG_REfxsV7y5EoIhZCWQc_41w8ppyOkDAyg9B3-zmQ3nrjjqmyQMj4jpukvIp-NoKoO18RXv4MNgP8-EqQ6LiHgDt99P6cLpaEUfl0lxw1viSs5IJQJqEZMyhMUR_e1h_ZJZ3zs5b8AMManYZNt-myIzC471nFm9J0jFBe78M7LRHM3leW743rPTL-NS2StlkDrTv5Cjjjg'
interface RequestConfig {
	uri: string
	headers: HeadersInit
}
export class VkApiHandler {
	private static token: string = process.env.VK_API_TOKEN || TOKEN

	private static requestConfig: RequestConfig = {
		uri: 'https://api.vk.com/method/groups.getMembers?group_id=berrycraftru&v=5.131',
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
			'Access-Control-Allow-Origin': '*',
			Authorization: `Bearer ${this.token}`,
		},
	}

	public static async countGroupMembers() {
		if (this.token !== '') {
			const res = await fetch(this.requestConfig.uri, {
				headers: this.requestConfig.headers,
			})
			return await res.json()
		}
	}
}
