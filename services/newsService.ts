import api from '@/config/api/api.config'
import { PostDTO } from '@/types/dto/post.dto'

class NewsService {
	async createPost(body: PostDTO) {
		return await api.post('/news/create', body)
	}
	async getAllPosts() {
		return await api.get('/news/')
	}
	async getPost(id: number) {
		// TODO: add getById on server
		return await api.get('/news/' + id)
	}
}

const newsService = new NewsService()

export default newsService
