import { VkApiHandler } from '@/external/vk/vkApi'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const data = await VkApiHandler.countGroupMembers()

	// req.statusCode = 200
	res.status(200).send(data)
}
