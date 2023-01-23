import api from '@/config/api/api.config'
import { PostDTO } from '@/types/dto/post.dto'

class NewsService {
	async createPost(body: PostDTO) {
		return await api.post('/news/create', body)
	}
	async getAllPosts() {
		return await api.get('/news/get')
	}
	async getPost(id: number) {
		return await api.get('/news/get/' + id)
	}
}

const newsService = new NewsService()

export default newsService