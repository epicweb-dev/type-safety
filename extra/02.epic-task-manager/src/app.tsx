import { useState } from 'react'
import {
	type Task,
	type User,
	type ProjectStatus,
	type Priority,
	type UserRole,
	formatProjectStatus,
	filterByPriority,
	getUserDisplayName,
	canManageTasks,
	updateTaskProperty,
	getTasksByAssignee,
	createProjectUpdate,
} from './utils'
import './app.css'

// Mock data - in a real app, this would come from an API
const mockUsers: Array<User> = [
	{ id: '1', name: 'Alice Johnson', email: 'alice@example.com', role: 'admin' },
	{ id: '2', name: 'Bob Smith', email: 'bob@example.com', role: 'manager' },
	{
		id: '3',
		name: 'Charlie Brown',
		email: 'charlie@example.com',
		role: 'developer',
	},
	{
		id: '4',
		name: 'Diana Prince',
		email: 'diana@example.com',
		role: 'designer',
	},
]

const mockTasks: Array<Task> = [
	{
		id: '1',
		title: 'Design login page',
		description: 'Create mockups for the login interface',
		priority: 'high',
		completed: false,
		assigneeId: '4',
	},
	{
		id: '2',
		title: 'Implement authentication',
		description: 'Set up user authentication flow',
		priority: 'urgent',
		completed: false,
		assigneeId: '3',
	},
	{
		id: '3',
		title: 'Write documentation',
		description: 'Document the API endpoints',
		priority: 'medium',
		completed: true,
		assigneeId: '1',
	},
	{
		id: '4',
		title: 'Code review',
		description: 'Review pull requests',
		priority: 'low',
		completed: false,
		assigneeId: null,
	},
]

function App() {
	const [tasks] = useState<Array<Task>>(mockTasks)
	const [users] = useState<Array<User>>(mockUsers)
	const [selectedPriority, setSelectedPriority] = useState<Priority | 'all'>(
		'all',
	)
	const [selectedUserId, setSelectedUserId] = useState<string | null>(null)
	const [projectStatus, setProjectStatus] = useState<ProjectStatus>({
		status: 'planning',
	})

	// 🐨 Use the filterByPriority function to filter tasks by selectedPriority
	// If selectedPriority is 'all', show all tasks
	// Otherwise, filter by the selected priority
	const filteredTasks = tasks

	// 🐨 Use getTasksByAssignee to further filter by selectedUserId
	const finalTasks = filteredTasks

	// 🐨 Use formatProjectStatus to display the current project status
	const statusDisplay = 'Not implemented'

	// 🐨 Use getUserDisplayName to show the assignee name for each task
	const getAssigneeName = (assigneeId: string | null) => {
		if (!assigneeId) return 'Unassigned'
		const user = users.find((u) => u.id === assigneeId)
		return user ? user.name : 'Unknown'
	}

	const handleTaskToggle = (taskId: string) => {
		// 🐨 Use updateTaskProperty to toggle the completed status of a task
		// Find the task, then update its 'completed' property to the opposite value
		console.log('Toggle task:', taskId)
	}

	const handleProjectStart = () => {
		// 🐨 Use createProjectUpdate to transition from 'planning' to 'active'
		// Set startDate to new Date().toISOString()
		console.log('Start project')
	}

	const handleProjectComplete = () => {
		// 🐨 Use createProjectUpdate to transition from 'active' to 'completed'
		// Set endDate to new Date().toISOString()
		console.log('Complete project')
	}

	const getPriorityClass = (priority: Priority) => {
		return `priority-${priority}`
	}

	return (
		<div className="app">
			<h1>Epic Task Manager</h1>

			{/* Project Status Section */}
			<section className="section">
				<h2>Project Status</h2>
				<p>{statusDisplay}</p>
				{projectStatus.status === 'planning' && (
					<button className="button" onClick={handleProjectStart}>
						Start Project
					</button>
				)}
				{projectStatus.status === 'active' && (
					<button className="button" onClick={handleProjectComplete}>
						Complete Project
					</button>
				)}
			</section>

			{/* Filters */}
			<section className="filters">
				<h2>Filters</h2>
				<div className="filter-group">
					<label>
						Priority:{' '}
						<select
							value={selectedPriority}
							onChange={(e) =>
								setSelectedPriority(e.target.value as Priority | 'all')
							}
						>
							<option value="all">All</option>
							<option value="low">Low</option>
							<option value="medium">Medium</option>
							<option value="high">High</option>
							<option value="urgent">Urgent</option>
						</select>
					</label>
				</div>
				<div className="filter-group">
					<label>
						Assignee:{' '}
						<select
							value={selectedUserId || ''}
							onChange={(e) =>
								setSelectedUserId(e.target.value === '' ? null : e.target.value)
							}
						>
							<option value="">All / Unassigned</option>
							{users.map((user) => (
								<option key={user.id} value={user.id}>
									{getUserDisplayName(user)}
								</option>
							))}
						</select>
					</label>
				</div>
			</section>

			{/* Tasks List */}
			<section>
				<h2>Tasks ({finalTasks.length})</h2>
				<ul className="tasks-list">
					{finalTasks.map((task) => {
						const assignee = users.find((u) => u.id === task.assigneeId)
						const canManage = assignee ? canManageTasks(assignee.role) : false

						return (
							<li
								key={task.id}
								className={`task-item ${task.completed ? 'completed' : ''}`}
							>
								<div className="task-content">
									<input
										type="checkbox"
										className="task-checkbox"
										checked={task.completed}
										onChange={() => handleTaskToggle(task.id)}
										disabled={!canManage}
									/>
									<div className="task-details">
										<h3 className="task-title">
											{task.title} {task.completed && '✓'}
										</h3>
										<p className="task-description">{task.description}</p>
										<div className="task-meta">
											Priority:{' '}
											<strong className={getPriorityClass(task.priority)}>
												{task.priority}
											</strong>{' '}
											| Assignee:{' '}
											<strong>{getAssigneeName(task.assigneeId)}</strong>
											{canManage && ' (Can manage)'}
										</div>
									</div>
								</div>
							</li>
						)
					})}
				</ul>
			</section>
		</div>
	)
}

export default App
