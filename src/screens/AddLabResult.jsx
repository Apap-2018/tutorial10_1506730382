import React from 'react';
import { Loading } from '../components/Loading';
import { FormAddLabResult } from '../containers/FormAddLabResult';
import { Appointment } from '../utils/Appointment.js';
import { Lab } from '../utils/Lab.js';

export class AddLabResult extends React.Component {
	/** 
	 * TODO: Akses method getDetailPasien(idPasien) pada Appointment dan lakukan update state. 
	 * TODO: Lakukan pemanggilan pada constructor() atau pada lifecycle componentDidMount()
	 */

	constructor(props) {
		super(props)
		this.state = {
			loading: true,
			pasien: {},
		}
		this.handleFormSubmit = this.handleFormSubmit.bind(this)
	}

	componentDidMount() {
		Appointment.getDetailPasien(this.props.match.params.id).then(response => {
			if (response.status === 200) {
				this.setState({
					loading: false,
					pasien: response.result
				})
			} else {
				alert('Data tidak ditemukan')
				this.props.history.push('/all-pasien')
			}
		})
	}

	handleFormSubmit(e) {
		e.preventDefault()
		/** 
		 * TODO: Akses method addLabResult(requestBody) pada Lab dan lakukan create state. 
		 */
        this.setState({
			loading: true
		})

		const data = new FormData(e.target)
		const dataJson = {}
		data.forEach((val, key) => {
			if (val !== "") {
				let name = key.split('.');
				if (name.length > 1) {
					let last = name.pop()
					name.reduce((prev, next) => {
						return prev[next] = prev[next] || {};
					}, dataJson)[last] = val
				} else {
					dataJson[key] = val
				}
			}
		})

		Lab.addLabResult(dataJson).then(response => {
			if (response.status === 200) {
				this.setState({
					loading: false
				})
				alert(`Sukses tambah hasil lab untuk ${this.state.pasien.nama}`)
			} else {
				this.setState({
					loading: false
				})
				alert(`Gagal tambah hasil lab untuk ${this.state.pasien.nama}`)
			}
		})
	}

	render() {
		if (this.state.loading) {
			return (
				<Loading msg="Fetching Data..." />
			)
		} else {
			return (
				<FormAddLabResult pasien={this.state.pasien} onSubmit={this.handleFormSubmit} />
			)
		}
	}
}