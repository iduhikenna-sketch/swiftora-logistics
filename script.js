// =====================================
// SWIFTORA LOGISTICS
// Shipment Tracking System
// =====================================

const trackingForm = document.getElementById("trackingForm");
const trackingNumber = document.getElementById("trackingNumber");
const trackingResult = document.getElementById("trackingResult");

trackingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const number = trackingNumber.value.trim().toUpperCase();

    if (number === "") {
        trackingResult.innerHTML = `
            <div class="tracking-message">
                Please enter a tracking number.
            </div>
        `;
        return;
    }

    // Temporary development shipment
    // Real shipment data will later come from PHP + MySQL.

    if (number === "SWF-00124873") {

        trackingResult.innerHTML = `
            <div class="tracking-message tracking-success">

                <strong>Shipment Found</strong>

                <p>
                    Tracking Number:
                    <strong>${number}</strong>
                </p>

                <p>
                    Current Status:
                    <strong>In Transit</strong>
                </p>

                <p>
                    Route:
                    Lagos, Nigeria → London, United Kingdom
                </p>

                <p>
                    Last Update:
                    Shipment is currently moving toward its destination.
                </p>

            </div>
        `;

    } else {

        trackingResult.innerHTML = `
            <div class="tracking-message tracking-error">

                <strong>Shipment Not Found</strong>

                <p>
                    We couldn't find a shipment matching
                    <strong>${number}</strong>.
                </p>

                <p>
                    Please check the tracking number and try again.
                </p>

            </div>
        `;
    }
});
