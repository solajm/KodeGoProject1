
        // Get the element with id "listings-container" and assign it to the variable listingsContainer
        var listingsContainer = document.getElementById("listings-container");

        // Get the element with id "sorting-select" and assign it to the variable sortingSelect
        var sortingSelect = document.getElementById("sorting-select");

        // Add an event listener for the "change" event on the sortingSelect element, which triggers a function
        sortingSelect.addEventListener("change", function () {
            // Get the selected value from the sortingSelect element and assign it to the variable selectedValue
            var selectedValue = sortingSelect.value;

            // Convert the children of listingsContainer into an array and assign it to the variable listingsArray
            var listingsArray = Array.from(listingsContainer.children);

            // Sort the listingsArray based on the selected value
            if (selectedValue === "price-high-to-low") {
                // Sort the listingsArray in descending order of price
                listingsArray.sort(function (a, b) {
                    // Extract the price from the "card-text" element of each listing and parse it as an integer
                    var priceA = parseInt(a.querySelector(".card-text b").innerText.replace(/[^0-9]/g, ''));
                    var priceB = parseInt(b.querySelector(".card-text b").innerText.replace(/[^0-9]/g, ''));
                    // Compare the prices and return the result for sorting
                    return priceB - priceA;
                });
            } else if (selectedValue === "price-low-to-high") {
                // Sort the listingsArray in ascending order of price
                listingsArray.sort(function (a, b) {
                    // Extract the price from the "card-text" element of each listing and parse it as an integer
                    var priceA = parseInt(a.querySelector(".card-text b").innerText.replace(/[^0-9]/g, ''));
                    var priceB = parseInt(b.querySelector(".card-text b").innerText.replace(/[^0-9]/g, ''));
                    // Compare the prices and return the result for sorting
                    return priceA - priceB;
                });
            }

            // Append the sorted listings back to the listingsContainer
            listingsArray.forEach(function (listing) {
                listingsContainer.appendChild(listing);
            });
        });
