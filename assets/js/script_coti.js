//function calculateCost() {
    // Obtener valores del formulario
    //const startDate = new Date(document.getElementById('startDate').value);
//    const endDate = new Date(document.getElementById('endDate').value);
  //  const carType = document.getElementById('carType').value;

    //if (isNaN(startDate.getTime()) || isNaN(endDate.getTime()) || startDate >= endDate) {
    //    alert('Por favor, ingrese fechas válidas y asegúrese de que la fecha de fin sea posterior a la de inicio.');
  //      return;
//    }

    // Calcular la duración en horas
//    const duration = (endDate - startDate) / (1000 * 60 * 60);
    
    // Definir tarifas por tipo de auto (por hora)
    //const rates = {
      //  economy: 10,   // Ejemplo: $10 por hora
    //    standard: 20,  // Ejemplo: $20 por hora
  //      luxury: 40,     // Ejemplo: $40 por hora
//    };

    // Calcular costo total
    //const rate = rates[carType];
    //const totalCost = duration * rate;

    // Redondear el costo total al número entero más cercano
  //  const roundedCost = Math.round(totalCost);

    // Mostrar resultado
 //   document.getElementById('result').innerText = `Costo Total: ${roundedCost} us.`;

//


// script.js
function calculateRental() {
    const categoryElement = document.getElementById('car-category');
    const daysElement = document.getElementById('rental-days');
    const resultElement = document.getElementById('total-cost');

    const dailyRate = parseInt(categoryElement.value, 10);
    const rentalDays = parseInt(daysElement.value, 10);

    if (rentalDays < 1) {
        resultElement.textContent = 'Número de días no válido.';
        return;
    }

    let totalCost = dailyRate * rentalDays;

    // Aplicar descuento del 30% a partir de 3 días
    if (rentalDays >= 3) {
        totalCost *= 0.7;
    }

    // Mostrar el resultado redondeado a entero
    resultElement.textContent = `Costo total: $${Math.round(totalCost)}`;
}