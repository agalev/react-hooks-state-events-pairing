import React, { useState } from 'react'
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa'

import video from '../data/video.js'
import Comments from './Comments.js'

function App() {
	const [data, setData] = useState(video)
	const [comments, setComments] = useState(true)
	console.log("Here's your data:", data)
  
	function handleUpvote() {
		setData({
			...data,
			upvotes: data.upvotes + 1
		})
	}
	function handleDownvote() {
		setData({
			...data,
			downvotes: data.downvotes + 1
		})
	}

	function toggleComments() {
		comments ? setComments(false) : setComments(true)
	}

	return (
		<div className='App'>
			<iframe
				width='919'
				height='525'
				src={data.embedUrl}
				allowFullScreen
				title='Thinking in React'
			/>
			<h1>{data.title}</h1>
			<span>
				{data.views} Views | Uploaded {data.createdAt}
			</span>
			<br />
			<br />
			<button onClick={() => handleUpvote()}>
				{data.upvotes} <FaThumbsUp />
			</button>
			<button onClick={() => handleDownvote()}>
				{data.downvotes} <FaThumbsDown />
			</button>
			<br />
			<br />
			<button onClick={() => toggleComments()}>
				{comments ? 'Hide Comments' : 'Show Comments'}
			</button>
			<hr />
			{comments ? <Comments comments={data.comments} /> : null}
		</div>
	)
}

export default App
