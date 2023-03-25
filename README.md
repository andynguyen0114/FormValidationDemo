# Project Title
Form Validation 

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

**Case 1:** Submit button is clicked with all input fields empty 

1. Show error messages for empty inputs 
    1. Username: “Username cannot be blank.” 
    2. Email: “Email cannot be blank.”
    3. Password: “Password cannot be blank.”
    4. Confirm Password: “Please enter the password again.” 
    
 ![(1)SignUp](https://user-images.githubusercontent.com/34176263/227669194-24923acb-289b-4bdb-9519-430a2c22a4c4.PNG)
 
 **Case 2:** Username is not valid 
 
 1. If input is not more than a single letter then error message for Username will appear 
    1. Username: 
            
