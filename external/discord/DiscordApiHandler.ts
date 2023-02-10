interface RequestConfig {
	uri: string
	headers: HeadersInit
}

export default class DiscordApiHandler {
	private static token: string = process.env.VK_API_TOKEN || ''
	private static clientID: string =
		process.env.DISCORD_CLIENT_ID || '1073664165413138432'

	private static clientSecret: string =
		process.env.DISCORD_CLIENT_SECRET || 'wXiVgbutW5MRlP9dyoxyramuwArP2y3U'

	public static getServerMembers() {}
}
