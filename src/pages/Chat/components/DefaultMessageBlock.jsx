import React, { useState,useEffect } from "react";

import { useRef } from "react";
import fileAttachImg from "../../../assets/images/chat_img/fileAttachImg.png";
import classes from "./DefaultMessageBlock.module.scss";
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
function DefaultMessageBlock(props) {
	const hiddenFileInput = useRef(null);
	const [arr, setArr] = useState([]);
	const [value, setValue] = useState("");
	const [connection, setConnection] = useState()

	useEffect(() => {
		createHubConnection()
	},[])

	useEffect(() => {
		if(connection) {
			connection.on("RecieveMessage", (data) => {
				console.log(data);
			})
		}
	},[connection])

	const createHubConnection = async () => {
		
		const hubConnectionBuilder = new HubConnectionBuilder()
			.withUrl("http://localhost:5000/chat", options =>{
				console.log(options);
				options.AccessTokenFactory = () => {
					const token = localStorage.getItem("token")
					return `Bearer ${token}`;
				}
			})
			.withAutomaticReconnect()
			.configureLogging(LogLevel.Information);
		console.log(hubConnectionBuilder);
		const hubConnection = hubConnectionBuilder.build();
		let tokenFactory = () => {
			const token = localStorage.getItem("token")
			return `Bearer ${token}`;
		}
		hubConnection._accessTokenFactory = tokenFactory;
		//hubConnection._httpClient._accessTokenFactory = tokenFactory;

	    console.log(hubConnection);
		try {
			await hubConnection.start()
			console.log("bog'landi");
		}catch(e) {
			console.log(e);
		}

		setConnection(hubConnection)
	}
	

	const onChangePicture = e => {
		
	};

	const submitValue = e => {
		const data = {
			message: {
				fromId: "string",
				toId: "string",
				dateTime: "datetime",
				text: "string",
				isRead: true,
				hasLink:  false,
				hasMedia: false,
				hasFile: false,
				chatId: 1
			  },
			  filePaths: [ "string" ]
		}
		connection.invoke("WriteMessage", JSON.stringify(data))
	};

	return (
		<div className={classes.modalMessageAndWrite}>
			<div className={classes.box}>
				<div className={classes.messageContainer}>
					<div className={classes.message}>
						{arr.map(({ message, index }) => (
							<span key={index} className={classes.sentMessage}>
								{message}
							</span>
						))}
					</div>
				</div>
				<div className={classes.writeAndSendMessage}>
					<input
						className={classes.writeMessage}
						onChange={e => setValue(e.target.value)}
						required
						type="text"
						placeholder="Text message..."
					/>
					<button onClick={submitValue}>Send</button>
					<div className={classes.fileAttach} onChange={onChangePicture}>
						<input type="file" ref={hiddenFileInput} multiple accept="image/*" />
						<img type="file" src={fileAttachImg} alt="File Attach Img" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default DefaultMessageBlock;
