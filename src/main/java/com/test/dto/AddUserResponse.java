package com.test.dto;

public class AddUserResponse {


    public String reasonCode;

    public AddUserResponse(){}

    public AddUserResponse(String reasonCode){
        this.reasonCode = reasonCode;
    }

    public String getReasonCode() {
        return reasonCode;
    }
}
