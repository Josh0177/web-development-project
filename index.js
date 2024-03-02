/**
 * temporary design for website
 * https://www.figma.com/file/0oB4WTMgPYtLdAyrk4IpQx/Web-Dev-Test?type=design&node-id=0-1&mode=design&t=9HLSK7V9TtE54VkU-0
 */

/**
 * VALIDATE FORM
 * determines whether the form is valid or not
 */
const validateForm = () => {
    const first_name_input = document.getElementById("first-name-input")
    // console.log(first_name_input.value)
    const last_name_input = document.getElementById("last-name-input")
    const email_input = document.getElementById("email-input")
    const reason_input = document.getElementById("reason-input")
    const inputs = [
        {
            value: first_name_input.value,
            message: "Missing first name"
        }, 
        {
            value: last_name_input.value,
            message: "Missing last name"
        }, 
        {
            value: email_input.value,
            message: "Missing email"
        }, 
        {
            value: reason_input.value,
            message: "Missing reason for contact"
        }
    ]
    
    let errorMessage = ""

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value == "") {
            errorMessage += inputs[i].message + "\n"
        }
    }

    if (errorMessage != "") {
        alert(errorMessage)
        return 
    }
    
    alert("Email sent to Josh")
}

