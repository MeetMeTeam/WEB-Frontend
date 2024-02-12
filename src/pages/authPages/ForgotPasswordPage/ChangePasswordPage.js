
import React, { useState, useEffect } from "react";
import ResetPasswordHeader from "./ResetPasswordHeader";
import InputWithLabel from "../../../shared/components/InputWithLabel";
import CustomPrimaryButton from "../../../shared/components/CustomPrimaryButton";
import {useParams,useHistory} from 'react-router-dom';
import { getActions } from "../../../store/actions/authActions";
import { connect } from "react-redux";

const ChangePasswordPage = ({ changePassword }) => {
    const history = useHistory();
    const params = useParams();
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [isMatch, setIsMatch] = useState(false)
    useEffect(() => {
        if (password !== "" && rePassword !== "" && password === rePassword) {
            setIsMatch(true);
        } else {
            setIsMatch(false);
        }
    }, [password, rePassword]);
    
    
    const handleChangePassword = (e) => {
        
        e.preventDefault();
        console.log(e)
        const userDetails = {
            password: password,
            token: params.token
        };
        changePassword(userDetails, history);

    };
    return (
        <>
            <div className="relative  w-screen h-screen flex items-center justify-center">
                <div className="absolute z-50 xl:w-[617px] w-[617px] h-[530px] rounded-lg bg-white opacity-50">

                </div>
                <div className="absolute z-50 xl:w-[617px] w-[617px] h-[530px]  p-6  flex flex-col">
                    <ResetPasswordHeader />
                    <div className="flex flex-col space-y-8">
                        <InputWithLabel
                            value={password}
                            setValue={setPassword}
                            label="New password"
                            type="password"
                            placeholder="enter new password"
                        />
                        <InputWithLabel
                            value={rePassword}
                            setValue={setRePassword}
                            label="New re-password"
                            type="password"
                            placeholder="enter new password again"
                        />
                    </div>
                    <CustomPrimaryButton
                        label="Confirm change"
                        additionalStyles={{ marginTop: "32px", color: "white" }}
                        disabled={!isMatch}
                        onClick={handleChangePassword}
                    />
                </div>
            </div>
        </>
    )
}

const mapActionsToProps = (dispatch) => {
    return {
      ...getActions(dispatch),
    };
  };

  export default connect(null, mapActionsToProps)(ChangePasswordPage);
