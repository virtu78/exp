import	{	combineReducers	}	from	'redux'
import	setPost	from	'./post'
import	setHeadline	from	'./headline'
export	default	combineReducers({
		setPost,
		setHeadline
})
