import api from '@/config/api/api.config'


class SkinService {
	async skin(body: any) {
		return await api.post('/skins', body)
	}
    async getSkin(nick: string) {
		return await api.get('/skins/' + nick + '.png')
	}
}

const skinService = new SkinService()

export default skinService