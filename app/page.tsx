import api from '../config/api/api.config'

const HomePage = async () => {
	const user = await api.get('https://jsonplaceholder.typicode.com/users/1')
	return (
		<>
			<div>User</div>
			<div>name: {user.name}</div>
		</>
	)
}

export default HomePage
