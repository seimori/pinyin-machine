import React from 'react'
import styles from './Index.module.scss'

export const IndexContainer = () => {
	return (
		<main>
			<h1 className={styles.mainTitle}>Pinyin Machine</h1>
			<iframe
				width='560'
				height='315'
				src='https://www.youtube.com/embed/w_JBF4CJ-9M'
				frameBorder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
				allowFullScreen
			></iframe>
		</main>
	)
}
