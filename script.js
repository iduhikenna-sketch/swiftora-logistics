/* =========================================================
   SWIFTORA LOGISTICS
   Shipment Tracking
   ========================================================= */

const trackingForm = document.getElementById("trackingForm");
const trackingNumber = document.getElementById("trackingNumber");
const trackingResult = document.getElementById("trackingResult");


/* ---------------------------------------------------------
   DEMONSTRATION SHIPMENT DATA
   --------------------------------------------------------- */

const shipments = {

    "SWF-00124873": {
        trackingNumber: "SWF-00124873",
        status: "In Transit",
        origin: "Lagos, Nigeria",
        destination: "London, United Kingdom",
        currentLocation: "International Transit",
        latestUpdate: "Shipment is currently moving toward its destination.",
        updated: "Latest shipment event recorded"
    }

};


/* ---------------------------------------------------------
   TRACK SHIPMENT
   --------------------------------------------------------- */

if (trackingForm) {

    trackingForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const number = trackingNumber.value
            .trim()
            .toUpperCase();

        if (!number) {
            showMessage(
                "Please enter a tracking number.",
                "error"
            );

            return;
        }


        const shipment = shipments[number];


        if (!shipment) {

            trackingResult.innerHTML = `
                <div class="tracking-result tracking-error">

                    <h3>Shipment Not Found</h3>

                    <p>
                        We couldn't find a shipment with tracking
                        number <strong>${escapeHTML(number)}</strong>.
                    </p>

                    <p>
                        Please check the tracking number and try again.
                    </p>

                </div>
            `;

            return;
        }


        trackingResult.innerHTML = `

            <div class="tracking-result tracking-success">

                <h3>
                    Shipment Found
                </h3>

                <p>
                    <strong>Tracking Number:</strong>
                    ${escapeHTML(shipment.trackingNumber)}
                </p>

                <p>
                    <strong>Status:</strong>
                    <span class="status-badge">
                        ${escapeHTML(shipment.status)}
                    </span>
                </p>

                <p>
                    <strong>Origin:</strong>
                    ${escapeHTML(shipment.origin)}
                </p>

                <p>
                    <strong>Destination:</strong>
                    ${escapeHTML(shipment.destination)}
                </p>

                <p>
                    <strong>Current Location:</strong>
                    ${escapeHTML(shipment.currentLocation)}
                </p>

                <p>
                    <strong>Latest Update:</strong>
                    ${escapeHTML(shipment.latestUpdate)}
                </p>

                <p class="tracking-updated">
                    ${escapeHTML(shipment.updated)}
                </p>

            </div>

        `;

    });

}


/* ---------------------------------------------------------
   ENTER KEY / CLEAN INPUT
   --------------------------------------------------------- */

if (trackingNumber) {

    trackingNumber.addEventListener("input", function () {

        this.value = this.value
            .toUpperCase();

    });

}


/* ---------------------------------------------------------
   SAFE TEXT DISPLAY
   --------------------------------------------------------- */

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* ---------------------------------------------------------
   MESSAGE HELPER
   --------------------------------------------------------- */

function showMessage(message, type) {

    if (!trackingResult) {
        return;
    }

    trackingResult.innerHTML = `
        <div class="tracking-result tracking-${type}">
            <p>${escapeHTML(message)}</p>
        </div>
    `;

}
