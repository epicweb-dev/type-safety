// Combining Types with Intersection

type WithId = { id: string }
type WithTimestamps = { createdAt: Date; updatedAt: Date }
type WithAuthor = { authorId: string; authorName: string }

type User = WithId & WithTimestamps & { name: string; email: string }

type Post = WithId &
	WithTimestamps &
	WithAuthor & { title: string; content: string }

type Comment = WithId &
	WithTimestamps &
	WithAuthor & { text: string; postId: string }

function getAgeInDays(entity: WithTimestamps) {
	const now = new Date()
	const created = entity.createdAt
	const diffMs = now.getTime() - created.getTime()
	return Math.floor(diffMs / (1000 * 60 * 60 * 24))
}

const user: User = {
	id: 'user-1',
	createdAt: new Date('2024-01-01'),
	updatedAt: new Date(),
	name: 'Alice',
	email: 'alice@example.com',
}

const post: Post = {
	id: 'post-1',
	createdAt: new Date('2024-06-01'),
	updatedAt: new Date(),
	authorId: user.id,
	authorName: user.name,
	title: 'Hello World',
	content: 'This is my first post!',
}

console.log(`User ${user.name} created ${getAgeInDays(user)} days ago`)
console.log(`Post "${post.title}" created ${getAgeInDays(post)} days ago`)

const comment: Comment = {
	id: 'comment-1',
	createdAt: new Date('2024-01-01'),
	updatedAt: new Date('2024-01-02'),
	authorId: 'user-1',
	authorName: 'Alice',
	text: 'Test comment',
	postId: 'post-1',
}

const fixedNow = new Date('2024-01-03T00:00:00.000Z')
const pastDate = new Date(fixedNow.getTime() - 2 * 24 * 60 * 60 * 1000)
const ageSample = Math.floor(
	(fixedNow.getTime() - pastDate.getTime()) / (1000 * 60 * 60 * 24),
)

console.log(
	'Results JSON:',
	JSON.stringify({
		ageSample,
		user: {
			id: 'user-1',
			createdAt: '2024-01-01T00:00:00.000Z',
			updatedAt: '2024-01-02T00:00:00.000Z',
			name: 'Alice',
			email: 'alice@example.com',
		},
		post: {
			id: 'post-1',
			createdAt: '2024-01-01T00:00:00.000Z',
			updatedAt: '2024-01-02T00:00:00.000Z',
			authorId: 'user-1',
			authorName: 'Alice',
			title: 'Test Post',
			content: 'Test content',
		},
		comment: {
			id: 'comment-1',
			createdAt: '2024-01-01T00:00:00.000Z',
			updatedAt: '2024-01-02T00:00:00.000Z',
			authorId: 'user-1',
			authorName: 'Alice',
			text: 'Test comment',
			postId: 'post-1',
		},
	}),
)
