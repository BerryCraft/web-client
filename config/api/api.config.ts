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
			if (!res.ok) throw new Error(`Error: ${res.status}`)
			return await res.json()
		} catch (e) {
			console.error(e)
			return e
		}
	}
	async post(url: string, body: object) {
		try {
			const res = await fetch(this.config.baseURL + url, {
				headers: this.config.headers,
				method: 'POST',

				body: JSON.stringify(body),
			})
			if (!res.ok) throw new Error(`Error: ${res.status}`)

			return await res.json()
		} catch (e) {
			console.error(e)
			return e
		}
	}
	async patch(url: string, body: object) {
		try {
			const res = await fetch(this.config.baseURL + url, {
				headers: this.config.headers,
				method: 'PATCH',

				body: JSON.stringify(body),
			})
			if (!res.ok) throw new Error(`Error: ${res.status}`)

			return await res.json()
		} catch (e) {
			console.error(e)
			return e
		}
	}
	async put(url: string, body: object) {
		try {
			const res = await fetch(this.config.baseURL + url, {
				headers: this.config.headers,
				method: 'PUT',

				body: JSON.stringify(body),
			})
			if (!res.ok) throw new Error(`Error: ${res.status}`)

			return await res.json()
		} catch (e) {
			console.error(e)
			return e
		}
	}
	async delete(url: string) {
		try {
			const res = await fetch(this.config.baseURL + url, {
				headers: this.config.headers,
				method: 'DELETE',
			})
			if (!res.ok) throw new Error(`Error: ${res.status}`)

			return await res.json()
		} catch (e) {
			console.error(e)
			return e
		}
	}
}

const api: Api = new Api()

export default api
