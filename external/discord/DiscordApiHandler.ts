interface RequestConfig {
	uri: string
	headers: HeadersInit
}

export default class DiscordApiHandler {
	private static url: string = process.env.DISCORD_PIPEDREAM_LINK || ''
	public static async getServerMembers() {
		const res = await fetch(this.url, {
			headers: { 'Content-Type': 'application/json' },
		})
		const resJson = await res.json()

		const discordMembers = Object.keys(resJson).length

		return discordMembers
	}
}
