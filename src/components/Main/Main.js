import React, { memo } from 'react'
import Footer from '../Footer/Footer'
import HomeAbout from '../HomeAbout/HomeAbout'
import HomeCatalog from '../HomeCatalog/HomeCatalog'
import HomeContact from '../HomeContact/HomeContact'
import MailModal from '../MailModal/MailModal'
import MainSLider from '../MainSlider/MainSLider'
import PhoneModal from '../PhoneModal/PhoneModal'

function Main() {

	// const { categoryData } = useSelector(selectCategories)
	// const { products, filteredProducts } = useSelector(selectProducts)
	// const dispatch = useDispatch()

	// useEffect(() => {
	//     if (!categoryData?.length) {
	//         dispatch(fetchCategories())
	//         dispatch(fetchProducts())
	//     }
	//     if (products?.length) {
	//         dispatch(fetchFillter(categoryData?.find(el => el.checked).slug))

	//     }

	// }, [products])

	return (
		<div className='page'>
			<MainSLider />
			<HomeCatalog />
			<HomeAbout />
			<HomeContact />
			<PhoneModal />
			<MailModal />
			<Footer />
		</div>
	)
}

export default memo(Main) 