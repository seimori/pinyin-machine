import React from 'react'
import { SongFragment } from '../../types/types'
import styles from './Index.module.scss'
import parse from 'html-react-parser'

export const IndexContainer = ({ songs }: { songs: SongFragment[] }) => {
	const song = songs[0]
	return (
		<main>
			{parse(song.youtubeIframe)}
			<p>{song.lyrics}</p>
			{/* <iframe
				width='560'
				height='315'
				src='https://www.youtube.com/embed/w_JBF4CJ-9M'
				frameborder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
				allowfullscreen
			></iframe> */}
		</main>
	)
}
