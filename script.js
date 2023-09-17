document.addEventListener("DOMContentLoaded", function () {
    const pricingButtons = document.querySelectorAll(".pricing-button");
    const orderForm = document.getElementById("orderForm");
    const submitOrderButton = document.getElementById("submitOrder");

    pricingButtons.forEach(button => {
        button.addEventListener("click", function () {
            orderForm.reset();
        });
    });

    submitOrderButton.addEventListener("click", function () {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const comments = document.getElementById("comments").value;

        $("#pricingModal").modal("hide");
    });

});


