import React, { Component } from 'react';
import FunctionalComponent from '../FunctionalComponent/FunctionalComponent';
import './ClassComponent.css';
import { usuarios } from '../../MokeData/data';

class ClassComponent extends Component {
	constructor(props) {
		super(); // siempre usar super para inicializar el contructor de Component de React
		console.log('*********** ClassComponent ***********');
		console.log('1-----------Constructor-----', props.prebaChino);
		// Solo aqui el state se iguala a un objeto, despues usa this.setState({ propiedad: valor }) para actualizar el estado
		this.state = {
			usuarios: [],
			elRender: 3,
			valorInput: '',
		}
		this.miRef = React.createRef();
	}
	// -------------- Segunda forma para creat el constructor. -------------------
	// state = {
	// 	usuarios: [],
	// 	elRender: 3,
	// }
	static getDerivedStateFromProps(props, state) {
		console.log('-----------getDerivedStateFromProps');
		console.log('props', props);
		console.log('state', state);

		return null;
	};

	shouldComponentUpdate(nextProps, nextState) {
		console.log('----------shouldComponentUpdate');
		// this.state.elRender !== nextState.elRender
		console.log('nextProps', nextProps);
		console.log('nextState', nextState);
		return true; // nextState.elRender < 5;
	}

	componentDidMount() {
		console.log('4--------------componentDidMount');
		// this.miRef.current.focus();
		this.setState({ usuarios, elRender: 5 }); // es6 => propiedad: valor => shorthand para usuarios
	}

	getRef = () => {
		const valorRef = this.miRef.current.value;
		console.log('valorRef', valorRef);
	}

	onChange = (evento) => {
		const valorInput = evento.target.value;

		this.setState({ valorInput });

	}

	componentDidUpdate() {
		console.log('componentDidUpdate');

	}
	// const nuevoUsuario = [ ...this.state.usuarios, { asdsd . asd. .sd}]
	// usuarios: nuevoUsuario
	render() {
		console.log(`${this.state.elRender}----------render+++++++++++++++++++`); // es6 => template literal
		console.log('this.state.usuarios', this.state.usuarios);
		console.log('valorInput', this.state.valorInput);
		return (
			<div className='my-class-component' >
				<h2>Class Component || Statefull Component</h2>
				{/* Componente no Controlado */}
				<h3>Componente no Controlado </h3>
				<input ref={this.miRef} />
				<button onClick={this.getRef}>Get input Ref value</button>
				{/* Componente Controlado */}
				<h3>Componente Controlado </h3>
				<input value={this.state.miInputValor} onChange={this.onChange} />
				<FunctionalComponent
					enviarUsuariosParfavar={this.state.usuarios}
					miPropPrueba='cadena123'
					elRender={this.state.elRender}
				/>

			</div>
		)
	}
}

export default ClassComponent;

