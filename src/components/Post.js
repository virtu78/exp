import	React,	{	PropTypes,	Component	}	from	'react'
export	default	class	Post	extends	Component	{
render()	{
const	{	post	}	=	this.props
return	<div>
<p>
<textarea className='input--full' value={post}
cols='70'
rows='8'
onChange={(e) => this.setState({ post: e.target.value })}
modifier='underbar' />
</p>
</div>
}
}
Post.propTypes	=	{
		post:	PropTypes.string.isRequired
}
