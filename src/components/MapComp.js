import React from "react";
import GoogleMaps from "simple-react-google-maps";

export default class Example extends React.Component {
    render() {
        return (
            <div>
                <GoogleMaps
                    apiKey={"AIzaSyChZPizXo_3sk70Cm4yveOd0YfQtuxc7As"}
                    style={{ height: "300px", width: "100%" }}
                    zoom={10}
                    center={{ lat: 51.246452, lng: 22.568445 }}
                />
            </div>
        );
    }
}
