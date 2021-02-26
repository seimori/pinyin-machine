import React from 'react'
import { SongFragment } from '../../types/types'
import Link from 'next/link'
import styles from './Index.module.scss'

export const IndexContainer = ({ songs }: { songs: SongFragment[] }) => {
	return (
		<main className={styles.indexContainer}>
			<h1>Pinyin Machine</h1>
			<ul className={styles.songsList}>
				{songs.map((song) => (
					<li key={song.id} className={styles.songItem}>
						<Link href={`/${song.id}`}>
							<a>
								<figure>
									<img
										src={`https://img.youtube.com/vi/${song.youtubeId}/hqdefault.jpg`}
									/>
									<figcaption className={styles.songTitle}>
										{song.title}
									</figcaption>
								</figure>
							</a>
						</Link>
					</li>
				))}
			</ul>
		</main>
	)
}
