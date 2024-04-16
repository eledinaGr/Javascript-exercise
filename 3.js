// Exercise 3

async function fetchData() {

    // POST request using fetch()
    try {
        let response = await fetch("https://reqres.in/api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },

            // Adding body or contents to send
            body: JSON.stringify({
                name: "morpheus",
                job: "leader"
            })
        })

        console.log(response);
        let result = await response.json();
        console.log(result)

        if (response.status != 201) {
            throw new error(' Status is not 201 ' + response.status);
        }

    } catch (error) {
        console.log('An error occurred! ' + error);
    }


}

fetchData();