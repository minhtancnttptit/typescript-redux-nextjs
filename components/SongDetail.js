import React from 'react'
import { connect } from 'react-redux'
import { RangeSlider } from '@shopify/polaris'

const SongDetail = ({ song }) => {
	if (!song) {
		return <div>Select a song</div>
	}

	return (
		<div>
			<h3>Details for</h3>
			<p>
				Title: {song.title}
				<br />
				Duration: {song.duration}
				<RangeSlider />
			</p>
		</div>
	)
}

const mapStateToProps = (state) => {
	return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail)
