import { GetStaticProps } from 'next'
import React from 'react'
import { IndexContainer } from '../components/IndexComponents/IndexContainer'
import { graphqlClient } from '../lib/graphql/graphqlClients'
import { SongFragment } from '../types/types'

export const getStaticProps: GetStaticProps<any> = async () => {
	const songResult = await graphqlClient.songsQuery()
	console.log(songResult)
	return {
		props: {
			songs: songResult.songs,
		},
	}
}

export default function Index({ songs }: { songs: SongFragment[] }) {
	return <IndexContainer songs={songs} />
}
