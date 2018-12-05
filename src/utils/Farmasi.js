const cors = "https://cors-anywhere.herokuapp.com/";
const baseUrl = "http://si-appointment.herokuapp.com/api";

export const Farmasi = {
    getAllStafFarmasi() {
		/** 
		 * TODO: Fetch data all staf farmasi
		 * @return listAllStafFarmasi
		 */

		 return fetch(`${cors}${baseUrl}/1/getAllStaffFarmasi`, {
			 method: 'GET'
		 })
		 .then(response => {
			 return response.json()
		 })
		 .then(jsonResponse => {
			 return jsonResponse
		 })
	}
}