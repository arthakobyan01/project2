import React, { memo } from 'react'

function ContactsForm() {
	return (
		<form>
			<label><input type="text" placeholder="Имя*" /></label>
			<label><input type="text" placeholder="Телефон*" /></label>
			<label className="submit"><input type="submit" value="ЗАКАЗАТЬ" /></label>
		</form>
	)
}

export default memo(ContactsForm)  