import React from 'react';
import './FunctionalComponent.css';

export default function FunctionalComponent(props) { // enviarUsuariosParfavar, miPropPrueba, elRender
	console.log('Entro => FunctionalComponent');
	console.log('enviarUsuariosParfavar', props.enviarUsuariosParfavar);
	const usuarios = props.enviarUsuariosParfavar.map(usuario => <li>{usuario.name}</li>);

	return (
		<div className='my-stateless-component' >
			<h3>Functional Component || Stateless</h3>
			<span>Prop Prueba: {props.miPropPrueba}</span>
			<div>El render: {props.elRender}</div>
			<br />
			<span>Usuarios:</span>
			<ul>
				{usuarios}
			</ul>
		</div >
	)
}
