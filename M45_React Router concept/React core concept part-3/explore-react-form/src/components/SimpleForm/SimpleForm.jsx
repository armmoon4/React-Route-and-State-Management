import React from 'react';

const SimpleForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted")
        console.log(e.target.name.value)
        console.log(e.target.email.value)
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='Your Name' />
                <br />
                <input type="email" name='email' placeholder='enter your mail' />
                <br />
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default SimpleForm;