import React from 'react'

const Slot = (props) => {

	let x = props.x;
	let y = props.y;
	let z = props.z;

	if (x === y && y === z) {
		return <>
			<h1>{x} {y} {z}</h1>

			<p> THIS IS MATCHING</p>
		</>
	}

	else {
		return <>
			<h1>{x}{y}{z}</h1>

			<p> THIS IS NOT MATCHING</p>
		</>
	}

}








export default Slot;
