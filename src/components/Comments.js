import { useState } from 'react'
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa'

export default function Comments({ comments }) {
  const [state, setState] = useState(comments)
  console.log(state)

	function handleUpvote(id) {
		// setState({
		// 	...state,
		// 	upvotes: state.upvotes + 1
		// })
    console.log(id)
    let copyState = state
    console.log(copyState.filter(comment => comment.id === id))
    // setState(copyState.filter(

    // )
    // )
	}
	function handleDownvote() {
		setState({
			...state,
			downvotes: state.downvotes + 1
		})
	}


	return state.map((comment) => (
		<div key={comment.id} id={comment.id}>
			<b>{comment.user}</b>
			<p>{comment.comment}</p>
      <button onClick={() => handleUpvote(comment.id)}>
				{comment.upvotes} <FaThumbsUp />
			</button>
			<button onClick={() => handleDownvote()}>
				{comment.downvotes} <FaThumbsDown />
			</button>
		</div>
	))
}
