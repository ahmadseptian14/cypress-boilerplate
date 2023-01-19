Feature: Login page

    Feature Login page will work depending on the user credentials.

    Background:
        Given A web browser is at the larastore login page
    Scenario: Success Login
        When A user enters the username "septianahmad", the password "septian1960", and clicks on the login button
        Then the url will contains the inventory subdirectory

    Scenario: Incorrect Username Login
        When A user provides incorrect credentials, and clicks on the login button
            | username | password    |
            | testName | septian1960 |
        Then The error message "Username atau password salah." is displayed


    Scenario: Incorrect Password Login
        When A user provides incorrect credentials, and clicks on the login button
            | username      | password |
            | septianahmad | testPassword |
        Then The error message "Username atau password salah." is displayed
