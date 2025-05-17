import logo from './logo.svg';
import './App.css';
import { mockData } from "./backend/mockData";
import { useState, useEffect } from "react";


function App() {
	const [data, setData] = useState([]);
	const selectedUsers = data.filter(ele => ele.active);
	
	function handleSelect(item) {
		let newData = data.map((ele, i) => {
			if (ele.id === item.id) {
				return {...ele, active: !ele.active}
			}
			return ele;
		})
		
		setData(newData);
	}
	
	function handleSubmit() {
		console.log(selectedUsers);
	}
	
	useEffect(() => {
		function getData() {
			let users = mockData();
			let usersSelect = [];
			let selectObject;
			for (let i = 0; i < users.length; ++i) {
				selectObject = users[i];
				selectObject.active = false;
				usersSelect.push(selectObject);
			}
			
			setData(usersSelect);
		}
		getData();
	}, []);
	
	useEffect(() => {
		
	}, [data]);
	
	
	console.log(data);
	return (
	<div className="hcontainer" style={{backgroundColor: "#000000", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>		
		<div className="card" style={{display: "flex", backgroundColor: "#020024", borderRadius: "30px 30px 0px 0px", height: "100px", width: "500px", padding: "20px", background: "linear-gradient(46deg,rgba(2, 0, 36, 1) 32%, rgba(9, 9, 121, 1) 55%, rgba(0, 212, 255, 1) 100%)"}} >
				<div className="" style={{ display: "flex", flexDirection: "column", color: "#f0f1f2" }}>
					<h4>Select Any of the following</h4>
					<p>
						Select any of the following members
					</p>
				</div>
		</div>
		<div className="card" style={{display: "flex", flexDirection: "column", backgroundColor: "#f0f1f2", borderRadius: "0px 0px 30px 30px", height: "auto", width: "500px", padding: "20px"}}>
			{ data &&
			  data.map(
				(item, i) => {
					return (
						<div className={`inactive`} key={i}>
							<div className={item.active === false ? `inactiveSelect` : `activeSelect`} onClick={() => {handleSelect(item)}}>
									<div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
										{ !item.active &&
											<svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
											  <rect width="15" height="15" x="15" y="15" style={{stroke: "black", strokeWidth: "2", fillOpacity: "0.1", strokeOpacity: "0.9"}} />
											</svg>
										}
										{ item.active &&
											<svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
											  <rect width="15" height="15" x="17" y="17" style={{ stroke: "black", strokeWidth: "2", fillOpacity: "0.1", strokeOpacity: "0.9" }} />
											  <path d="M18 21l4 4L35 10" style={{ fill: "none", stroke: "black", strokeWidth: "2" }} />
											</svg>
										}
									</div>
									<div style={{display: "flex", flexDirection: "column", marginLeft: "10px", alignItems: "start", justifyContent: "center"}}>
										<span className="" style={{fontSize: "20px", textTransform: "capitalize", fontWeight: "bold"}}>{item.name}</span>
										<span style={{fontSize: "12px", textTransform: "undercase", color: "#141414"}}>{item.email}</span>
									</div>
							</div>
						</div>
					);
				}
			  )
			}
			<div className="" style={{width: "full", display: "flex", justifyContent: "end"}}>
				<div onClick={handleSubmit} style={{backgroundColor: "#07065e", color: "white", padding: "5px 10px 5px 10px", borderRadius: "15px", display: "flex", textAlign: "center"}}>
					<span style={{ fontSize: "12px"}}>submit</span>
				</div>
			</div>
		</div>
	</div>
  );
}

export default App;
