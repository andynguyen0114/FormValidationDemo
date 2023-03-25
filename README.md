# Project Title
Form Validation Demo 

# Project Description
A sign-up form created using HTML, CSS, and JavaScript. With this form, a user can create a username and sign up with their email and password. 
The user will have to complete the form in a manner where all inputs are valid. If user input is not valid, then error messages will occur and 
tell the user the correct input formats. All validation is done on client-side using JavaScript. A complete and submitted form will output a 
message to the console log. 

# How to Install and Run 
1.	Download Visual Studio Code (make sure the necessary downloads are installed and beware of pathing issues) 
    * Download Node.js
    * In VS Code, install extensions:
      * HTML CSS Support
      * Live Server 
      * JavaScript (ES6) code snippets 
      * Code Runner 
        
2.	Open Visual Studio Code 
    * Create a New Folder 
    * Clone ‘FormValidationDemo’ repository into created folder  
    * Open cloned repository 
    * Run live server 
    * Run project (or click F5) 

# How to use Sign-Up form 
**Test Cases**


![(1)SignUp](https://user-images.githubusercontent.com/34176263/227669194-24923acb-289b-4bdb-9519-430a2c22a4c4.PNG)

**Case 1:** Submit button is clicked with all input fields empty 

1. Show error messages for empty inputs 
    1. Username: “Username cannot be blank.” 
    2. Email: “Email cannot be blank.”
    3. Password: “Password cannot be blank.”
    4. Confirm Password: “Please enter the password again.” 

![(2)SubmitButton_AllError](https://user-images.githubusercontent.com/34176263/227678541-7a025ef3-cacc-4d65-95b0-ee50e7b5c045.PNG)
 
 
 
 **Case 2:** Username is not valid 
 
 1. If username input is not more than a single letter then error message for Username will appear 
    1. Username: “Username must be between 2 and 25 characters.” 
    2. Email: “Email cannot be blank.”
    3. Password: “Password cannot be blank.”
    4. Confirm Password: “Please enter the password again.” 

![(3)IncorrectUsername](https://user-images.githubusercontent.com/34176263/227679000-c9523127-f212-464b-8d43-57b06daab1bd.PNG)



 **Case 3:** Username is valid 
 
 1. Success validation for Username 
    1. Username: input box border turns green  
    2. Email: “Email cannot be blank.”
    3. Password: “Password cannot be blank.”
    4. Confirm Password: “Please enter the password again.”
    
![(4)CorrectUsername](https://user-images.githubusercontent.com/34176263/227679045-ff7abd56-0f78-4ab3-97be-6568e9bf09b5.PNG)



 **Case 4:** Email is not valid 
 
 1. If email input is not in a correct format then error message for Email will appear 
    1. Username: input box border turns green  
    2. Email: “Email is not valid.”
    3. Password: “Password cannot be blank.”
    4. Confirm Password: “Please enter the password again.”
    
![(5)IncorrectEmail](https://user-images.githubusercontent.com/34176263/227679133-b45298d3-1671-4b09-ba56-7d3771a95f57.PNG)



 **Case 5:** Email is valid 
 
 1. Success validation for Email  
    1. Username: input box border turns green  
    2. Email: input box border turns green 
    3. Password: “Password cannot be blank.”
    4. Confirm Password: “Please enter the password again.”
    
![(6)CorrectEmail](https://user-images.githubusercontent.com/34176263/227679229-4b6135db-ba45-41b0-96bb-485ff6a224de.PNG)



 **Case 6:** Password is not valid 
 
 1. If password input does not meet requirements then error message for Password will appear   
    1. Username: input box border turns green  
    2. Email: input box border turns green 
    3. Password: “Password must contain at least 8 characters that include 1 lowercase,
    1 uppercase character, 1 number, and 1 special character.”
    4. Confirm Password: “Please enter the password again.”
    
![(7)IncorrectPassword](https://user-images.githubusercontent.com/34176263/227679627-c40acb74-ca27-4200-a70e-bdd6e140f7bf.PNG)



 **Case 7:** Password is valid 
 
 1. Success validation for Password    
    1. Username: input box border turns green  
    2. Email: input box border turns green 
    3. Password: input box border turns green 
    4. Confirm Password: “Please enter the password again.”
    
![(8)CorrectPassword](https://user-images.githubusercontent.com/34176263/227679817-8a0d4a2e-7e42-417d-9f39-d3775addc674.PNG)



 **Case 8:** Confirm Password is not valid  
 
 1. If confirm password input does not match Password then error message for Confirm Password will appear    
    1. Username: input box border turns green  
    2. Email: input box border turns green 
    3. Password: input box border turns green 
    4. Confirm Password: “Confirm Password does not match.”
    
![(9)IncorrectConfirmPassword](https://user-images.githubusercontent.com/34176263/227679979-be5ed3cf-d7aa-48d0-a4ae-d17384d406a6.PNG)



 **Case 9:** Correct Form Submission   
 
 1. If every input is correct, when form is submitted, each input field will clear and a message will be displayed in the 
 console log (Click F12 --> Go to Console)
    1. Message in Console log: "Form has been submitted."
    
![(10)SubmittedForm](https://user-images.githubusercontent.com/34176263/227680110-95bce167-63c7-4bb9-ac88-b10184fae044.PNG)
