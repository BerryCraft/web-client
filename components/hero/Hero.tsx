import { images } from 'helpers/imageLoader'
import Image from 'next/image'
import styles from './hero.module.scss'

const Hero = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.image}>
				<Image src={images.berry} alt='berrycraft logo' />
			</div>
			<div className={styles.title}>BerryCraft</div>
		</div>
	)
}

export default Hero
