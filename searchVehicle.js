function searchVehicle() {
    var searchInput = document.getElementById("searchInput").value;
    fetch('data.json') // Assuming data is saved in data.json file
        .then(response => response.json())
        .then(data => {
            var result = data[searchInput];
            if (result) {
                document.getElementById("vehicleDetails").innerHTML = `
                    <h3>${searchInput}</h3>
                    <p>Make: ${result.make}</p>
                    <p>Model: ${result.model}</p>
                    <p>Year: ${result.year}</p>
                    <p>Price: ${result.price}</p>
                `;
            } else {
                document.getElementById("vehicleDetails").innerHTML = "Vehicle not found";
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
