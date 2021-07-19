import React, { useEffect, useState } from 'react'
import * as firebase from "firebase";

export default function UserExist() {
    const [userExist, setUserExist] = useState(false);
    useEffect(() => {
      firebase.auth().onAuthStateChanged((user) => {
        !user ? setUserExist(false) : setUserExist(true);        
      });
    }, []);

	if (userExist == true) {
		return true;
	} else
	if (userExist == false) {
		return false;
	}
}
