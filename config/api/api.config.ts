type ApiConfig = {
	baseURL: string
	headers: HeadersInit
}
class Api {
	// 51.210.69.86:3500
	readonly config: ApiConfig = {
		baseURL: 'http://51.210.69.86:3500/api',
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
			'Access-Control-Allow-Origin': '*',
		},
	}

	async get(url: string) {
		const res = await fetch(this.config.baseURL + url, {
			headers: this.config.headers,
		})
		return await res.json()
	}
	async post(url: string, body: object) {
		const res = await fetch(this.config.baseURL + url, {
			headers: this.config.headers,
			method: 'POST',

			body: JSON.stringify(body),
		})
		return await res.json()
	}
	async patch(url: string, body: object) {
		const res = await fetch(this.config.baseURL + url, {
			headers: this.config.headers,
			method: 'PATCH',

			body: JSON.stringify(body),
		})
		return await res.json()
	}
	async put(url: string, body: object) {
		const res = await fetch(this.config.baseURL + url, {
			headers: this.config.headers,
			method: 'PUT',

			body: JSON.stringify(body),
		})
		return await res.json()
	}
	async delete(url: string) {
		const res = await fetch(this.config.baseURL + url, {
			headers: this.config.headers,
			method: 'DELETE',
		})
		return await res.json()
	}
}

const api: Api = new Api()

export default api
