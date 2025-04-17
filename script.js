// Sample data structure
const formData = {
    claimNumber: "20042047",
    workerName: "Madeleine Willson",
    workerAppId: "712041",
    submissionDate: "March 28, 2024 20:43",
    prescriptionDrugs: [
        {
            drugName: "Amoxicillin",
            prescriptionDate: "March 15, 2024",
            datePurchased: "March 16, 2024",
            healthcareProvider: "Dr. Smith",
            paidAmount: "$25.00"
        },
       
    ],
    otcDrugs: [
        {
            drugName: "Ibuprofen",
            datePurchased: "March 20, 2024",
            paidAmount: "$12.50",
            sellerName: "Shoppers Drug Mart",
            reasonForPurchase: "Pain relief"
        },
    
    ],
    medicalSupplies: [
        {
            itemPurchased: "Wrist Brace",
            datePurchased: "March 22, 2024",
            prescribed: "Yes",
            healthcareProvider: "Dr. Johnson",
            paidAmount: "$45.00",
            sellerName: "Medical Supply Store"
        },
       
    ],
    parking: [
        {
            address: "Health Sciences Centre",
            date: "March 25, 2024",
            paidAmount: "$8.00",
            meterUsed: "Yes",
            meterNumber: "P123456"
        },
    
    ],
    mileage: [
        {
            appointmentDate: "March 28, 2024",
            healthcareAddress: "HSC, 820 Sherbrook St, Winnipeg MB R3A 1R9, Canada",
            workplaceAddress: "WCB, 333 Broadway, Winnipeg MB R3C 4W3, Canada",
            kilometers: "20 km"
        },
     
    ],
    busTaxiFare: [
        {
            appointmentDate: "March 28, 2024",
            startingPoint: "",
            destination: "HSC Winnipeg Women's Hospital, 665 William Ave, Winnipeg MB R3E 0Z2, Canada",
            transportType: "Bus",
            farePaid: "$3.00"
        },
        {
            appointmentDate: "March 27, 2024",
            startingPoint: "25 Furby St, Winnipeg MB R3C2A2, Canada",
            destination: "440 Edmonton St, Winnipeg MB R3B 2M4, Canada",
            transportType: "Taxi",
            farePaid: "$15.00"
        }
    ]
};


function populateTables(data) {
    
    function createTableRow(data, columns) {
        const tr = document.createElement('tr');
        columns.forEach(col => {
            const td = document.createElement('td');
            td.textContent = data[col] || '';
            tr.appendChild(td);
        });
        return tr;
    }

   
    const prescriptionTable = document.getElementById('prescriptionTable').getElementsByTagName('tbody')[0];
    data.prescriptionDrugs.forEach(drug => {
        const columns = ['drugName', 'prescriptionDate', 'datePurchased', 'healthcareProvider', 'paidAmount'];
        prescriptionTable.appendChild(createTableRow(drug, columns));
    });

    const otcTable = document.getElementById('otcTable').getElementsByTagName('tbody')[0];
    data.otcDrugs.forEach(drug => {
        const columns = ['drugName', 'datePurchased', 'paidAmount', 'sellerName', 'reasonForPurchase'];
        otcTable.appendChild(createTableRow(drug, columns));
    });

    const suppliesTable = document.getElementById('suppliesTable').getElementsByTagName('tbody')[0];
    data.medicalSupplies.forEach(supply => {
        const columns = ['itemPurchased', 'datePurchased', 'prescribed', 'healthcareProvider', 'paidAmount', 'sellerName'];
        suppliesTable.appendChild(createTableRow(supply, columns));
    });

   
    const parkingTable = document.getElementById('parkingTable').getElementsByTagName('tbody')[0];
    data.parking.forEach(parking => {
        const columns = ['address', 'date', 'paidAmount', 'meterUsed', 'meterNumber'];
        parkingTable.appendChild(createTableRow(parking, columns));
    });

 
    const mileageTable = document.getElementById('mileageTable').getElementsByTagName('tbody')[0];
    data.mileage.forEach(mileage => {
        const columns = ['appointmentDate', 'healthcareAddress', 'workplaceAddress', 'kilometers'];
        mileageTable.appendChild(createTableRow(mileage, columns));
    });
}


function updateHeaderInfo(data) {
    document.querySelector('.claim-box span').textContent = `Claim No. ${data.claimNumber}`;
    document.querySelector('.name').textContent = data.workerName;
}


function updateFooterInfo(data) {
    const footerElements = document.querySelectorAll('.footer-info');
    footerElements.forEach(footer => {
        footer.querySelector('.worker-app-id').textContent = `Worker App ID: ${data.workerAppId}`;
        footer.querySelector('.submission-info div:first-child').textContent = `Submitted: ${data.submissionDate}`;
    });
}


document.addEventListener('DOMContentLoaded', () => {
    updateHeaderInfo(formData);
    updateFooterInfo(formData);
    populateTables(formData);

  
    const privacyCheckbox = document.getElementById('privacy-checkbox');
    if (privacyCheckbox) {
        privacyCheckbox.addEventListener('change', (e) => {
            
            console.log('Privacy notice acceptance:', e.target.checked);
        });
    }
});


if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        populateTables,
        updateHeaderInfo,
        updateFooterInfo
    };
} 