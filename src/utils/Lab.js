const cors = "https://cors-anywhere.herokuapp.com/";
const baseUrl = "http://si-appointment.herokuapp.com/api";

export const Lab = {
	addLabResult(requestBody) {
		/** 
		 * TODO: POST data lab ke SI-Appointment
		 * @param requestBody
		 * @return responseRequest
		 */

		 return fetch(`${cors}${baseUrl}/1/addLabResult`, {
			 method: 'POST',
			 headers: {
				 'Content-Type': 'application/json'
			 },
			 body: JSON.stringify(requestBody)
		 })
		 .then(response => {
			 return response.json()
		 })
		 .then(jsonResponse => {
			 return jsonResponse
		 })
	}
}