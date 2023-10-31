import React, {useState} from 'react'
import StarIcon from './StarIcon'
import './StarButton.css'
import { Button } from '@mui/material'

const StarButton = () => {
	const [starred, setStarred] = useState(false)

	const toggleStarred = () => {
		setStarred((starred) => !starred)
	}

	return (
		<Button className={`StarButton ${starred ? 'StarButton--starred' : ''}`} type="button" onClick={toggleStarred}>
			
			<StarIcon />
		</Button>
	)
}

export default StarButton
