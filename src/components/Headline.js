import	React,	{	PropTypes,	Component	}	from	'react'
export	default	class	Headline	extends	Component	{
render()	{
const	{	headline	}	=	this.props
return	<div>
<p>	
<input className='input--full' value={headline}
onChange={(e) => this.setState({ headline: e.target.value })}
modifier='underbar' />
</p>
</div>
}
}
Headline.propTypes	=	{
		headline:	PropTypes.string.isRequired
}
