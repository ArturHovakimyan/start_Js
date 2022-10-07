"use strict";
const API = "index.json"
// AJAX = Asyncron JavaScript and XML
function foo (){
  const result = {}
   fetch(API)
    .then((res)=> res.json())
    .then(((res) => {
		return result.value = res
    }))
    return result
}
const data = foo()
console.log(data);   


const AMD_input = document.getElementById("amd");
const USD_input = document.getElementById("usd");
const MENU1 = document.getElementById("menu1")
const MENU2 = document.getElementById("menu2")
const inputDivBox1 = document.querySelector(".input1")
const inputDivBox2 = document.querySelector(".input2")


MENU1.addEventListener("click", ()=>{
	const div = document.createElement("div")
	div.classList = "dropDown"
	data.value.map((value) => {
		const p = document.createElement("p")
		p.textContent = value.name
		p.id = value.id
		return div.append(p)
	})
	return inputDivBox1.append(div)
})
MENU2.addEventListener("click", ()=>{
	const div = document.createElement("div")
	div.classList = "dropDown"
	data.value.map((value) => {
		const p = document.createElement("p")
		p.textContent = value.name
		p.id = value.id
		return div.append(p)
	})
	return inputDivBox2.append(div)
})


AMD_input.addEventListener("input", (e) => {
	const request = new XMLHttpRequest();

	// 1) method, 2) url, 3) async, 4) password
	request.open("GET", "index.json");
	request.setRequestHeader("content-type", "application/json");
	request.send();

	// status, statusText, response, readyState

	request.addEventListener("readystatechange", () => {
		if (request.readyState === 4 && request.status === 200) {
			const data = JSON.parse(request.response);
			USD_input.value = (
				parseFloat(e.target.value)
				/
				parseFloat(data.value.usd)
			).toFixed(2);
		}

		// if (isNaN(USD_input) || isNaN(AMD_input)) {
		// 	USD_input.value = 0;
		// }
	});
});

USD_input.addEventListener("input", (e) => {
	const request = new XMLHttpRequest();
	request.open("GET", "index.json");
	request.setRequestHeader("content-type", "appliaction/json");
	request.send();

	request.addEventListener("load", () => {
		if (request.status === 200) {
			const data = JSON.parse(request.response);
			AMD_input.value = (
				parseFloat(data.value.usd)
				*
				parseFloat(e.target.value)
			).toFixed(2);
		}
	});
});