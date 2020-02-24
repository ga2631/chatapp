import io from "socket.io-client";

const socket = io.connect(`http://${window.location.hostname}:8000/`)

export default socket