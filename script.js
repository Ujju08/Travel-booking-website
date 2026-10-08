/* =========================================================
   TRAVEL BOOKING WEBSITE
   Main JavaScript File

   Technologies:
   - Vanilla JavaScript
   - DOM Manipulation
   - Form Validation
   - LocalStorage
   ========================================================= */


/* ================= DESTINATION DATA ================= */

const destinations = [

    {
        id: 1,
        name: "Goa",
        country: "India",
        price: 12000,
        rating: 4.5,
        duration: "4 Days / 3 Nights",
        category: "Budget",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
        transport: "Flight or train to Goa. Local cab and scooter rentals are available.",
        accommodation: "Budget-friendly beachside hotels and guest houses.",
        sightseeing: "Baga Beach, Fort Aguada, Calangute Beach and local markets."
    },

    {
        id: 2,
        name: "Manali",
        country: "India",
        price: 15000,
        rating: 4.6,
        duration: "5 Days / 4 Nights",
        category: "Budget",
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=800&q=80",
        transport: "Volvo bus or flight to Bhuntar followed by a local transfer.",
        accommodation: "Comfortable hotels near Mall Road and Old Manali.",
        sightseeing: "Solang Valley, Rohtang Pass, Hadimba Temple and Mall Road."
    },

    {
        id: 3,
        name: "Dubai",
        country: "UAE",
        price: 45000,
        rating: 4.8,
        duration: "5 Days / 4 Nights",
        category: "Mid-range",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
        transport: "International flight with airport transfer.",
        accommodation: "Modern hotels in central Dubai.",
        sightseeing: "Burj Khalifa, Dubai Mall, Marina, Desert Safari and Palm Jumeirah."
    },

    {
        id: 4,
        name: "Paris",
        country: "France",
        price: 85000,
        rating: 4.9,
        duration: "6 Days / 5 Nights",
        category: "Luxury",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
        transport: "International flight and airport-to-hotel transfer.",
        accommodation: "Premium hotels near central Paris.",
        sightseeing: "Eiffel Tower, Louvre Museum, Seine River and Champs-Élysées."
    },

    {
        id: 5,
        name: "Bali",
        country: "Indonesia",
        price: 55000,
        rating: 4.7,
        duration: "6 Days / 5 Nights",
        category: "Mid-range",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
        transport: "International flight and private local transfers.",
        accommodation: "Resorts and hotels near beaches.",
        sightseeing: "Ubud, Tanah Lot, Kuta Beach, rice terraces and temples."
    },

    {
        id: 6,
        name: "Switzerland",
        country: "Switzerland",
        price: 110000,
        rating: 4.9,
        duration: "7 Days / 6 Nights",
        category: "Luxury",
        image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=800&q=80",
        transport: "International flight and scenic train journeys.",
        accommodation: "Premium hotels with mountain views.",
        sightseeing: "Interlaken, Lucerne, Zurich and Swiss Alps."
    },

    {
        id: 7,
        name: "Jaipur",
        country: "India",
        price: 10000,
        rating: 4.4,
        duration: "3 Days / 2 Nights",
        category: "Budget",
        image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80",
        transport: "Train, bus or flight with local cab service.",
        accommodation: "Heritage hotels and affordable stays.",
        sightseeing: "Amber Fort, Hawa Mahal, City Palace and Jantar Mantar."
    },

    {
        id: 8,
        name: "Singapore",
        country: "Singapore",
        price: 65000,
        rating: 4.8,
        duration: "5 Days / 4 Nights",
        category: "Mid-range",
        image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80",
        transport: "International flight and airport transfer.",
        accommodation: "Modern hotels close to major attractions.",
        sightseeing: "Marina Bay Sands, Gardens by the Bay, Sentosa and Universal Studios."
    }

];


/* ================= DOM ELEMENTS ================= */

const destinationGrid = document.getElementById("destinationGrid");
const noResults = document.getElementById("noResults");

const destinationSearch = document.getElementById("destinationSearch");
const categoryFilter = document.getElementById("categoryFilter");
const sortSelect = document.getElementById("sortSelect");

const bookingForm = document.getElementById("bookingForm");
const bookingDestination = document.getElementById("bookingDestination");
const travellers = document.getElementById("travellers");
const packageType = document.getElementById("packageType");

const pricePerPerson = document.getElementById("pricePerPerson");
const totalPrice = document.getElementById("totalPrice");

const bookingModal = document.getElementById("bookingModal");
const bookingSummary = document.getElementById("bookingSummary");

const historyTableBody = document.getElementById("historyTableBody");
const historyTableContainer = document.getElementById("historyTableContainer");
const emptyHistory = document.getElementById("emptyHistory");

const planDestination = document.getElementById("planDestination");
const transportPlan = document.getElementById("transportPlan");
const accommodationPlan = document.getElementById("accommodationPlan");
const sightseeingPlan = document.getElementById("sightseeingPlan");


/* ================= RENDER DESTINATIONS ================= */

/*
    This function receives an array of destinations
    and creates HTML cards dynamically.
*/

function renderDestinations(data) {

    destinationGrid.innerHTML = "";

    if (data.length === 0) {
        noResults.classList.remove("hidden");
        return;
    }

    noResults.classList.add("hidden");

    data.forEach(destination => {

        const stars = "★".repeat(Math.floor(destination.rating)) +
                      (destination.rating % 1 !== 0 ? "½" : "");

        const card = document.createElement("article");

        card.className = "destination-card fade-in";

        card.innerHTML = `
            <div class="destination-image">

                <img
                    src="${destination.image}"
                    alt="${destination.name}"
                    loading="lazy">

                <span class="category-badge">
                    ${destination.category}
                </span>

            </div>

            <div class="destination-content">

                <h3>${destination.name}</h3>

                <p class="country">
                    <i class="fa-solid fa-location-dot"></i>
                    ${destination.country}
                </p>

                <div class="rating">
                    ${stars}
                    <span>(${destination.rating})</span>
                </div>

                <div class="destination-details">
                    <span>
                        <i class="fa-regular fa-clock"></i>
                        ${destination.duration}
                    </span>
                </div>

                <div class="destination-price">

                    <strong>
                        ₹${destination.price.toLocaleString("en-IN")}
                    </strong>

                    <button
                        class="card-book-btn"
                        onclick="selectDestination(${destination.id})">
                        Book Now
                    </button>

                </div>

            </div>
        `;

        destinationGrid.appendChild(card);
    });

    observeFadeElements();
}


/* ================= BOOKING DROPDOWN ================= */

function populateBookingDestinations() {

    bookingDestination.innerHTML =
        `<option value="">Select destination</option>`;

    destinations.forEach(destination => {

        const option = document.createElement("option");

        option.value = destination.id;

        option.textContent =
            `${destination.name} - ₹${destination.price.toLocaleString("en-IN")}`;

        bookingDestination.appendChild(option);
    });
}


/* ================= SELECT DESTINATION ================= */

/*
    Called when user clicks "Book Now" on a destination card.
*/

function selectDestination(id) {

    const destination = destinations.find(item => item.id === id);

    if (!destination) return;

    bookingDestination.value = destination.id;

    packageType.value = destination.category;

    updatePrice();

    updateTripPlan(destination);

    document.getElementById("booking").scrollIntoView({
        behavior: "smooth"
    });
}


/* ================= TRIP PLAN ================= */

function updateTripPlan(destination) {

    if (!destination) {
        planDestination.textContent =
            "Select a destination to see suggested travel plans.";

        transportPlan.textContent =
            "Flight/train options will appear here.";

        accommodationPlan.textContent =
            "Comfortable hotels and stays.";

        sightseeingPlan.textContent =
            "Popular attractions to explore.";

        return;
    }

    planDestination.textContent =
        `Suggested itinerary for ${destination.name}, ${destination.country}`;

    transportPlan.textContent =
        destination.transport;

    accommodationPlan.textContent =
        destination.accommodation;

    sightseeingPlan.textContent =
        destination.sightseeing;
}


/* ================= FILTER + SEARCH + SORT ================= */

function filterAndSortDestinations() {

    const searchValue =
        destinationSearch.value.toLowerCase().trim();

    const category =
        categoryFilter.value;

    const sortValue =
        sortSelect.value;

    let filtered = destinations.filter(destination => {

        const matchesSearch =
            destination.name.toLowerCase().includes(searchValue) ||
            destination.country.toLowerCase().includes(searchValue);

        const matchesCategory =
            category === "all" ||
            destination.category === category;

        return matchesSearch && matchesCategory;
    });


    /* Sorting */

    if (sortValue === "priceLow") {

        filtered.sort((a, b) => a.price - b.price);

    } else if (sortValue === "priceHigh") {

        filtered.sort((a, b) => b.price - a.price);

    } else if (sortValue === "ratingHigh") {

        filtered.sort((a, b) => b.rating - a.rating);
    }


    renderDestinations(filtered);
}


destinationSearch.addEventListener(
    "input",
    filterAndSortDestinations
);

categoryFilter.addEventListener(
    "change",
    filterAndSortDestinations
);

sortSelect.addEventListener(
    "change",
    filterAndSortDestinations
);


/* ================= QUICK SEARCH ================= */

document
    .getElementById("quickSearchBtn")
    .addEventListener("click", () => {

        const search =
            document.getElementById("quickDestination")
            .value
            .trim();

        const budget =
            Number(document.getElementById("quickBudget").value);

        destinationSearch.value = search;

        /*
            If budget is entered, only destinations
            within that budget will be displayed.
        */

        let filtered = destinations.filter(destination => {

            const matchesName =
                !search ||
                destination.name.toLowerCase().includes(
                    search.toLowerCase()
                ) ||
                destination.country.toLowerCase().includes(
                    search.toLowerCase()
                );

            const matchesBudget =
                !budget ||
                destination.price <= budget;

            return matchesName && matchesBudget;
        });

        renderDestinations(filtered);

        document
            .getElementById("destinations")
            .scrollIntoView({
                behavior: "smooth"
            });
    });


/* ================= PRICE CALCULATION ================= */

function updatePrice() {

    const selectedId =
        Number(bookingDestination.value);

    const destination =
        destinations.find(item => item.id === selectedId);

    const numberOfTravellers =
        Number(travellers.value) || 1;

    if (!destination) {

        pricePerPerson.textContent = "₹0";
        totalPrice.textContent = "₹0";

        updateTripPlan(null);

        return;
    }

    const price =
        destination.price;

    const total =
        price * numberOfTravellers;

    pricePerPerson.textContent =
        `₹${price.toLocaleString("en-IN")}`;

    totalPrice.textContent =
        `₹${total.toLocaleString("en-IN")}`;

    updateTripPlan(destination);
}


bookingDestination.addEventListener(
    "change",
    updatePrice
);

travellers.addEventListener(
    "input",
    updatePrice
);


/* ================= ERROR HANDLING ================= */

function setError(fieldId, message) {

    const field = document.getElementById(fieldId);

    const error =
        document.getElementById(fieldId + "Error");

    if (error) {
        error.textContent = message;
    }

    const group =
        field.closest(".form-group");

    if (group) {
        group.classList.add("input-error");
    }
}


function clearError(fieldId) {

    const error =
        document.getElementById(fieldId + "Error");

    if (error) {
        error.textContent = "";
    }

    const field =
        document.getElementById(fieldId);

    if (field) {

        const group =
            field.closest(".form-group");

        if (group) {
            group.classList.remove("input-error");
        }
    }
}


function clearAllBookingErrors() {

    const fields = [
        "fullName",
        "email",
        "phone",
        "bookingDestination",
        "travelDate",
        "travellers",
        "packageType"
    ];

    fields.forEach(clearError);
}


/* ================= BOOKING VALIDATION ================= */

function validateBookingForm() {

    clearAllBookingErrors();

    let isValid = true;

    const name =
        document.getElementById("fullName").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const destination =
        bookingDestination.value;

    const date =
        document.getElementById("travelDate").value;

    const number =
        Number(travellers.value);

    const packageValue =
        packageType.value;


    /* Full Name */

    if (name.length < 2) {

        setError(
            "fullName",
            "Please enter your full name."
        );

        isValid = false;
    }


    /* Email */

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        setError(
            "email",
            "Please enter a valid email address."
        );

        isValid = false;
    }


    /* Phone */

    const phonePattern =
        /^[0-9]{10}$/;

    if (!phonePattern.test(phone)) {

        setError(
            "phone",
            "Phone number must contain exactly 10 digits."
        );

        isValid = false;
    }


    /* Destination */

    if (!destination) {

        setError(
            "bookingDestination",
            "Please select a destination."
        );

        isValid = false;
    }


    /* Travel Date */

    if (!date) {

        setError(
            "travelDate",
            "Please select a travel date."
        );

        isValid = false;

    } else {

        /*
            Compare selected date with today's date.
        */

        const today =
            new Date();

        today.setHours(0, 0, 0, 0);

        const selectedDate =
            new Date(date + "T00:00:00");

        if (selectedDate < today) {

            setError(
                "travelDate",
                "Travel date cannot be in the past."
            );

            isValid = false;
        }
    }


    /* Travellers */

    if (
        !Number.isInteger(number) ||
        number < 1 ||
        number > 10
    ) {

        setError(
            "travellers",
            "Travellers must be between 1 and 10."
        );

        isValid = false;
    }


    /* Package */

    if (!packageValue) {

        setError(
            "packageType",
            "Please select a package type."
        );

        isValid = false;
    }


    return isValid;
}


/* ================= CREATE BOOKING ID ================= */

function generateBookingId() {

    const random =
        Math.floor(
            100000 + Math.random() * 900000
        );

    return `TRV-${random}`;
}


/* ================= BOOKING FORM SUBMIT ================= */

bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    if (!validateBookingForm()) {
        return;
    }

    const selectedId =
        Number(bookingDestination.value);

    const destination =
        destinations.find(item => item.id === selectedId);

    const name =
        document.getElementById("fullName").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const date =
        document.getElementById("travelDate").value;

    const number =
        Number(travellers.value);

    const packageValue =
        packageType.value;

    const total =
        destination.price * number;

    const booking = {

        id: generateBookingId(),

        name: name,

        email: email,

        phone: phone,

        destination: destination.name,

        travelDate: date,

        travellers: number,

        packageType: packageValue,

        pricePerPerson: destination.price,

        totalPrice: total,

        createdAt: new Date().toISOString()
    };


    /* Save booking in localStorage */

    const bookings =
        JSON.parse(
            localStorage.getItem("travelBookings")
        ) || [];

    bookings.push(booking);

    localStorage.setItem(
        "travelBookings",
        JSON.stringify(bookings)
    );


    /* Show confirmation */

    showBookingConfirmation(booking);

    /* Update booking history */

    renderBookingHistory();

    /* Reset form */

    bookingForm.reset();

    travellers.value = 1;

    updatePrice();

});


/* ================= CONFIRMATION MODAL ================= */

function showBookingConfirmation(booking) {

    bookingSummary.innerHTML = `

        <p>
            <span>Booking ID</span>
            <strong>${booking.id}</strong>
        </p>

        <p>
            <span>Name</span>
            <strong>${booking.name}</strong>
        </p>

        <p>
            <span>Destination</span>
            <strong>${booking.destination}</strong>
        </p>

        <p>
            <span>Travel Date</span>
            <strong>${formatDate(booking.travelDate)}</strong>
        </p>

        <p>
            <span>Travellers</span>
            <strong>${booking.travellers}</strong>
        </p>

        <p>
            <span>Package</span>
            <strong>${booking.packageType}</strong>
        </p>

        <p>
            <span>Total Price</span>
            <strong>₹${booking.totalPrice.toLocaleString("en-IN")}</strong>
        </p>
    `;

    bookingModal.classList.remove("hidden");
}


/* ================= CLOSE MODAL ================= */

document
    .getElementById("modalClose")
    .addEventListener("click", () => {

        bookingModal.classList.add("hidden");
    });


bookingModal.addEventListener("click", event => {

    if (event.target === bookingModal) {
        bookingModal.classList.add("hidden");
    }
});


document
    .getElementById("modalHistoryBtn")
    .addEventListener("click", () => {

        bookingModal.classList.add("hidden");

        document
            .getElementById("history")
            .scrollIntoView({
                behavior: "smooth"
            });
    });


/* ================= BOOKING HISTORY ================= */

function renderBookingHistory() {

    const bookings =
        JSON.parse(
            localStorage.getItem("travelBookings")
        ) || [];


    historyTableBody.innerHTML = "";

    if (bookings.length === 0) {

        emptyHistory.classList.remove("hidden");

        historyTableContainer.classList.add("hidden");

        return;
    }

    emptyHistory.classList.add("hidden");

    historyTableContainer.classList.remove("hidden");


    bookings.forEach(booking => {

        const row =
            document.createElement("tr");

        row.innerHTML = `

            <td>${booking.id}</td>

            <td>${booking.name}</td>

            <td>${booking.destination}</td>

            <td>${formatDate(booking.travelDate)}</td>

            <td>${booking.travellers}</td>

            <td>
                ₹${booking.totalPrice.toLocaleString("en-IN")}
            </td>

            <td>

                <button
                    class="cancel-btn"
                    onclick="cancelBooking('${booking.id}')">

                    Cancel

                </button>

            </td>
        `;

        historyTableBody.appendChild(row);
    });
}


/* ================= CANCEL BOOKING ================= */

function cancelBooking(bookingId) {

    const confirmCancel =
        confirm(
            "Are you sure you want to cancel this booking?"
        );

    if (!confirmCancel) {
        return;
    }

    let bookings =
        JSON.parse(
            localStorage.getItem("travelBookings")
        ) || [];

    bookings =
        bookings.filter(
            booking => booking.id !== bookingId
        );

    localStorage.setItem(
        "travelBookings",
        JSON.stringify(bookings)
    );

    renderBookingHistory();
}


/* ================= FORMAT DATE ================= */

function formatDate(dateString) {

    const date =
        new Date(dateString + "T00:00:00");

    return date.toLocaleDateString(
        "en-IN",
        {
            day: "2-digit",
            month: "short",
            year: "numeric"
        }
    );
}


/* ================= CONTACT FORM ================= */

const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        let valid = true;

        const name =
            document.getElementById("contactName");

        const email =
            document.getElementById("contactEmail");

        const message =
            document.getElementById("message");


        /* Clear errors */

        document.getElementById(
            "contactNameError"
        ).textContent = "";

        document.getElementById(
            "contactEmailError"
        ).textContent = "";

        document.getElementById(
            "messageError"
        ).textContent = "";


        /* Name */

        if (name.value.trim().length < 2) {

            document.getElementById(
                "contactNameError"
            ).textContent =
                "Please enter your name.";

            valid = false;
        }


        /* Email */

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email.value.trim())) {

            document.getElementById(
                "contactEmailError"
            ).textContent =
                "Please enter a valid email.";

            valid = false;
        }


        /* Message */

        if (message.value.trim().length < 5) {

            document.getElementById(
                "messageError"
            ).textContent =
                "Message must contain at least 5 characters.";

            valid = false;
        }


        if (!valid) {
            return;
        }


        document
            .getElementById("contactSuccess")
            .classList.remove("hidden");

        contactForm.reset();

        setTimeout(() => {

            document
                .getElementById("contactSuccess")
                .classList.add("hidden");

        }, 5000);

    }
);


/* ================= MOBILE NAVIGATION ================= */

const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.getElementById("navMenu");

menuToggle.addEventListener(
    "click",
    () => {

        navMenu.classList.toggle("active");

        const icon =
            menuToggle.querySelector("i");

        if (navMenu.classList.contains("active")) {

            icon.className = "fa-solid fa-xmark";

        } else {

            icon.className = "fa-solid fa-bars";
        }
    }
);


/*
    Close mobile menu after clicking
    a navigation link.
*/

navMenu.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        menuToggle
            .querySelector("i")
            .className = "fa-solid fa-bars";
    });
});


/* ================= DARK / LIGHT MODE ================= */

const themeToggle =
    document.getElementById("themeToggle");

themeToggle.addEventListener(
    "click",
    () => {

        document.body.classList.toggle("dark");

        const icon =
            themeToggle.querySelector("i");

        if (document.body.classList.contains("dark")) {

            icon.className =
                "fa-solid fa-sun";

            localStorage.setItem(
                "theme",
                "dark"
            );

        } else {

            icon.className =
                "fa-solid fa-moon";

            localStorage.setItem(
                "theme",
                "light"
            );
        }
    }
);


/* Load saved theme */

if (
    localStorage.getItem("theme") === "dark"
) {

    document.body.classList.add("dark");

    themeToggle
        .querySelector("i")
        .className = "fa-solid fa-sun";
}


/* ================= FADE-IN ANIMATION ================= */

/*
    IntersectionObserver detects when
    an element enters the screen.
*/

function observeFadeElements() {

    const elements =
        document.querySelectorAll(".fade-in");

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );
                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    elements.forEach(element => {

        if (!element.classList.contains("visible")) {
            observer.observe(element);
        }

    });
}


/* ================= DATE MINIMUM ================= */

/*
    Prevent selecting a date before today
    from the browser date picker.
*/

function setMinimumDate() {

    const today =
        new Date();

    const year =
        today.getFullYear();

    const month =
        String(today.getMonth() + 1)
        .padStart(2, "0");

    const day =
        String(today.getDate())
        .padStart(2, "0");

    const todayString =
        `${year}-${month}-${day}`;

    document
        .getElementById("travelDate")
        .min = todayString;
}


/* ================= INITIALIZE WEBSITE ================= */

function initializeWebsite() {

    renderDestinations(destinations);

    populateBookingDestinations();

    renderBookingHistory();

    setMinimumDate();

    updatePrice();

    observeFadeElements();
}


/* Start application */

initializeWebsite();