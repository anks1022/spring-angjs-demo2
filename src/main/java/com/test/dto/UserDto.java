package com.test.dto;

/** User dto
 */
public class UserDto {
    Integer userId;

    String firstName;
    String lastName;
    String email;
    String date;
    String url;

    public UserDto(String firstName, String lastName, String email,String date, String url) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.date = date;
        this.url = url;
    }

    public UserDto() {
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }

    public String getDate() {
        return date;
    }

    public String getUrl() {
        return url;
    }
}
