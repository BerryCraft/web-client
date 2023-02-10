interface RequestConfig {
	uri: string
	headers: HeadersInit
}
export default class VkApiHandler {
	private static token: string = process.env.VK_API_TOKEN || ''

	private static requestConfig: RequestConfig = {
		uri: process.env.VK_API_URL || '',
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
