
let freelancersData = [];


function updateFreelancers(freelancers) {
    const freelancerList = document.getElementById('freelancer-list');
    freelancerList.innerHTML = '';
    freelancers.forEach(freelancer => {
        const freelancerItem = document.createElement('div');
        freelancerItem.textContent = `${freelancer.name} - ${freelancer.occupation} - Starting Price: $${freelancer.price}`;
        freelancerList.appendChild(freelancerItem);
    });
}


function updateAveragePrice() {
    const totalPrices = freelancersData.reduce((acc, freelancer) => acc + freelancer.price, 0);
    const averagePrice = totalPrices / freelancersData.length;
    document.getElementById('average-price').textContent = `$${averagePrice.toFixed(2)}`;
}


function filterFreelancersByOccupation(occupation) {
    if (occupation === 'all') {
        return freelancersData;
    } else {
        return freelancersData.filter(freelancer => freelancer.occupation === occupation);
    }
}


function sortFreelancersByPrice(sortBy) {
    if (sortBy === 'price-low-to-high') {
        return freelancersData.slice().sort((a, b) => a.price - b.price);
    } else {
        return freelancersData.slice().sort((a, b) => b.price - a.price);
    }
}


function applyFiltersAndSort() {
    const occupationFilter = document.getElementById('occupation-filter').value;
    const sortBy = document.getElementById('sort-by').value;

    let filteredFreelancers = filterFreelancersByOccupation(occupationFilter);
    filteredFreelancers = sortFreelancersByPrice(sortBy);

    updateFreelancers(filteredFreelancers);
    updateAveragePrice(filteredFreelancers);
}


function fetchFreelancers() {
    
    freelancersData = [
        { name: "John M", price: 25, occupation: "Web developer" },
        { name: "Dr Smith", price: 51, occupation: "Doctor" },
        { name: "Linda Kent", price: 40, occupation: "Nurse" },
        { name: "Prof. Dumbo", price: 100, occupation: "University Teacher" },
        { name: "Patrick J", price: 75, occupation: "Artist" },
        { name: "Jake Paul", price: 250000, occupation: "Boxer" },
        { name: "Dr. Malone", price: 120, occupation: "Dentist" },
        { name: "Devin Kramer", price: 50, occupation: "Cyber security" }
    ];

    
    const occupationFilter = document.getElementById('occupation-filter');
    const occupations = [...new Set(freelancersData.map(freelancer => freelancer.occupation))];
    occupations.forEach(occupation => {
        const option = document.createElement('option');
        option.textContent = occupation.charAt(0).toUpperCase() + occupation.slice(1);
        option.value = occupation;
        occupationFilter.appendChild(option);
    });

    applyFiltersAndSort();
}


fetchFreelancers();


document.getElementById('occupation-filter').addEventListener('change', applyFiltersAndSort);
document.getElementById('sort-by').addEventListener('change', applyFiltersAndSort);


