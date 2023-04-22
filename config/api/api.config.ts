type ApiConfig = {
	baseURL: string
	headers: HeadersInit
}
class Api {
	readonly config: ApiConfig = {
		baseURL: 'http://localhost:3500/api',
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
			'Access-Control-Allow-Origin': '*',
		},
	}

	async get(url: string, token: string | null = null) {
		let headers
		if (token !== null)
			headers = new Headers({
				...this.config.headers,
				Authorization: `Bearer ${token}`,
			})
		try {
			const res = await fetch(this.config.baseURL + url, {
				headers: token !== null ? headers : this.config.headers,
			})
			if (!res.ok) throw new Error(`Error: ${res.status}`)
			return await res.json()
		} catch (e) {
			console.error(e)
			return e
		}
	}
	async post(url: string, body: object, token: string | null = null) {
		let headers
		if (token !== null)
			headers = new Headers({
				...this.config.headers,
				Authorization: `Bearer ${token}`,
			})
		try {
			const res = await fetch(this.config.baseURL + url, {
				headers: token !== null ? headers : this.config.headers,
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
	async patch(url: string, body: object, token: string | null = null) {
		let headers
		if (token !== null)
			headers = new Headers({
				...this.config.headers,
				Authorization: `Bearer ${token}`,
			})
		try {
			const res = await fetch(this.config.baseURL + url, {
				headers: token !== null ? headers : this.config.headers,
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
	async put(url: string, body: object, token: string | null = null) {
		let headers
		if (token !== null)
			headers = new Headers({
				...this.config.headers,
				Authorization: `Bearer ${token}`,
			})
		try {
			const res = await fetch(this.config.baseURL + url, {
				headers: token !== null ? headers : this.config.headers,
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
	async delete(url: string, token: string | null = null) {
		let headers
		if (token !== null)
			headers = new Headers({
				...this.config.headers,
				Authorization: `Bearer ${token}`,
			})
		try {
			const res = await fetch(this.config.baseURL + url, {
				headers: token !== null ? headers : this.config.headers,
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
