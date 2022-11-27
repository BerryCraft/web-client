type ApiConfig = {
	baseURL: string
	headers: HeadersInit
}
class Api {
	// 51.210.69.86:3500
	readonly config: ApiConfig = {
		baseURL: '',
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
		},
	}

	async get(url: string) {
		const res = await fetch(this.config.baseURL + url, {
			headers: this.config.headers,
		})
		return res.json()
	}
	async post(url: string, body: object) {
		const res = await fetch(this.config.baseURL + url, {
			headers: this.config.headers,
			method: 'POST',
			body: JSON.stringify(body),
		})
		return res.json()
	}
	async patch(url: string, body: object) {
		const res = await fetch(this.config.baseURL + url, {
			headers: this.config.headers,
			method: 'PATCH',
			body: JSON.stringify(body),
		})
		return res.json()
	}
	async delete(url: string) {
		const res = await fetch(this.config.baseURL + url, {
			headers: this.config.headers,
			method: 'DELETE',
		})
		return res.json()
	}
}

const api: Api = new Api()

export default api
