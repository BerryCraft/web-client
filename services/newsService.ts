import { axiauth } from '@/config/api/api.interceptor'
import { PostDTO } from '@/types/dto/post.dto'
import IPost from '@/types/structs/IPost'
import axios from 'axios'

const NEWS_URL = process.env.SERVER_URL + '/news'

class NewsService {
	async createPost(body: PostDTO) {
		const response = await axiauth.post<IPost>(`${NEWS_URL}/new`, body)

		return response.data
	}
	async getAllPosts() {
		console.log(NEWS_URL)
		const response = await axios.get<IPost[]>(`${NEWS_URL}/`)
		console.log(response.data)
		return response.data
	}
	async getPost(id: number) {
		const response = await axios.get<IPost>(`${NEWS_URL}/${id}`)
		return response.data
	}
	async updatePost(id: string) {
		return await axiauth.put(`${NEWS_URL}/e/${id}`)
	}
	async deletePost(id: string) {
		return await axiauth.delete(`${NEWS_URL}/d/${id}`)
	}
}

const newsService = new NewsService()

export default newsService
