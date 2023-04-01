type ApiConfig = {
	baseURL: string
	headers: HeadersInit
}
class Api {
	// 51.210.69.86:3500
	readonly config: ApiConfig = {
		baseURL: 'http://localhost:3500/api',
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
			'Access-Control-Allow-Origin': '*',
		},
	}

	async get(url: string) {
		try {
			const res = await fetch(this.config.baseURL + url, {
				headers: this.config.headers,
			})
			return await res.json()
		} catch (e) {
			console.log(`api error: ${e}`)
			return null
		}
	}
	async post(url: string, body: object) {
		try {
			const res = await fetch(this.config.baseURL + url, {
				headers: this.config.headers,
				method: 'POST',

				body: JSON.stringify(body),
			})
			return await res.json()
		} catch (e) {
			console.log(`api error: ${e}`)

			return null
		}
	}
	async patch(url: string, body: object) {
		try {
			const res = await fetch(this.config.baseURL + url, {
				headers: this.config.headers,
				method: 'PATCH',

				body: JSON.stringify(body),
			})
			return await res.json()
		} catch (e) {
			console.log(`api error: ${e}`)

			return null
		}
	}
	async put(url: string, body: object) {
		try {
			const res = await fetch(this.config.baseURL + url, {
				headers: this.config.headers,
				method: 'PUT',

				body: JSON.stringify(body),
			})
			return await res.json()
		} catch (e) {
			console.log(`api error: ${e}`)

			return null
		}
	}
	async delete(url: string) {
		try {
			const res = await fetch(this.config.baseURL + url, {
				headers: this.config.headers,
				method: 'DELETE',
			})
			return await res.json()
		} catch (e) {
			console.log(`api error: ${e}`)

			return null
		}
	}
}

const api: Api = new Api()

export default api
