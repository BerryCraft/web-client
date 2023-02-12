interface RequestConfig {
	uri: string
	headers: HeadersInit
}

export default class DiscordApiHandler {
	public static getServerMembers() {
		const headers = new Headers()
		headers.append('Content-Type', 'application/json')

		fetch('https://eorblt45n7i2rtx.m.pipedream.net')
	}
}
