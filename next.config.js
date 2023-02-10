/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	async rewrites() {
		return [
			{
				source: '/api/vk/group',
				destination:
					'https://api.vk.com/method/groups.getMembers?group_id=berrycraftru&v=5.131',
			},
		]
	},
}

module.exports = nextConfig
