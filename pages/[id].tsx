import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { graphqlClient } from '../lib/graphql/graphqlClients'
import { SongFragment } from '../types/types'
import { SongContainer } from '../components/SongComponents/SongContainer'

type SongProps = {
	song: SongFragment
}
export default function Song({ song }: SongProps) {
	return <SongContainer song={song} />
}

export const getStaticPaths: GetStaticPaths = async () => {
	const songsMetaResult = await graphqlClient.songsMetaQuery()
	return {
		paths:
			songsMetaResult.songs.map((song) => ({ params: { id: song.id } })) || [],
		fallback: false,
	}
}

export const getStaticProps: GetStaticProps<
	SongProps,
	{ id: string }
> = async ({ params }) => {
	const songResult = await graphqlClient.songQuery({
		id: params?.id || '',
	})
	return {
		props: {
			song: songResult.song,
		},
	}
}
