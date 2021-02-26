import parse from 'html-react-parser'
import Link from 'next/link'
import React from 'react'
import { SongFragment } from '../../types/types'
import styles from './Song.module.scss'

export const SongContainer = ({ song }: { song: SongFragment }) => {
	console.log(song)
	return (
		<main className={styles.songContainer}>
			<Link href='/'>
				<button>Back to home</button>
			</Link>
			<h1>{song.title}</h1>
			<iframe
				width='560'
				height='315'
				// src='https://www.youtube.com/embed/w_JBF4CJ-9M'
				src={`https://www.youtube.com/embed/${song.youtubeId}`}
				frameBorder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
				allowFullScreen
			></iframe>
			<p>{song.lyrics}</p>
		</main>
	)
}
