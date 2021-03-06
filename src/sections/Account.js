import React, {useState} from "react";
import DeleteAccount from "../components/DeleteAccount";
import UpdateProfileImage from "../components/UpdateProfileImage";

import ChangePasswordModal from "../components/ChangePasswordModal";
import '../styles/Account.css';

const Account = (props) => {

    const [showPasswordModal, setShowPasswordModal] = useState(true);
    const [accountInfo, setAccountInfo ] = useState(props.accountInfo) 
    console.log(accountInfo);

    
    return (
        <div>
        
            <div className="profilePicture"><UpdateProfileImage  userimg={accountInfo.url_userimage}/><br/>Profile Image</div>
            <div className="accountHeader"><h1 className="myAcc">My Account</h1></div>
                <div className="mainAcctDiv">
                <div className="userName">{accountInfo.username}</div>
                <div className="password">Password:   ****************</div>
                <div className="changePassword">{ showPasswordModal ? <ChangePasswordModal username={accountInfo.username} /> : <></> }</div>
                <div className="dateJoined">Date Joined: {accountInfo.createdAt.substr(0,10)}</div>
                <div className="deleteAcct"><DeleteAccount setIsLoggedIn={props.setIsLoggedIn} /></div>
            </div>

        </div> 
    )

};

export default Account;