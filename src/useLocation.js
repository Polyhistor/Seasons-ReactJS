import { useState, useEffect } from "react";

export default () => {
  const [lat, setLat] = useState(null);
  const [errorMessage, seterrorMessage] = useState();
  // if you want your hooke to run only once, pass an empty array as the last argument,
  // this is equivalent of componentDidMount
  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      // we call setState to update our state
      position => setLat(position.coords.latitude),
      // success callback
      err => seterrorMessage(err.Message) // error callback
    );
  }, []);

  return [lat, errorMessage];
};
