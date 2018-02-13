import React, { Component } from 'react';
import axios from 'axios';

class APITest extends Component {
	getUserData() {
		axios
			.get('/api/get-user')
			.then((resp) => {
				console.log('Resp form get-user: ', resp);
			})
			.catch((err) => {
				console.log('Error from get-user: ', err.message);
			});
	}

	getArticleData() {
		axios
			.get('/api/get-articles')
			.then((resp) => {
				console.log('Resp from get-articles: ', resp);
			})
			.catch((err) => {
				console.log('Error from get-articles: ', err.message);
			});
	}

	render() {
		return (
			<div>
				<h1>API Testing Ground</h1>
				<button onClick={this.getUserData}>Get User Info</button>
				<br />
				<button onClick={this.getArticleData}>Get Article Info</button>
			</div>
		);
	}
}

export default APITest;
