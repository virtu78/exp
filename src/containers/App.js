import	React,	{	Component	}	from	'react'
import	{	connect	}	from	'react-redux'
import	Headline	from	'../components/Headline'
import	Post	from	'../components/Post'
class	App	extends	Component	{
render()	{
const	{	setHeadline,	setPost	}	=	this.props
return	<div>	
<Headline	headline={setHeadline.headline}	/>
<Post	post={setPost.post}		/>
</div>
}
}
function	mapStateToProps	(state)	{
return	{
setHeadline:	state.setHeadline,
setPost: state.setPost
}
}
export	default	connect(mapStateToProps)(App)
