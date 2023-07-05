import React, { memo } from 'react'


function BasketLeftItem({ img, title, description }) {
	return (
		<div className="flex-left-item">
			<div className="basket_page_box_item_left_img"><img src={img} /></div>
			<div className="basket_page_box_item_left_text">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	)
}

export default memo(BasketLeftItem) 