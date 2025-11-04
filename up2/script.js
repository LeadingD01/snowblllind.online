document.addEventListener('DOMContentLoaded', () => {
    const paymentOptions = document.querySelectorAll('.payment-option');
    
    paymentOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove a seleção anterior
            paymentOptions.forEach(option => option.classList.remove('selected'));
            
            // Adiciona a classe 'selected' ao método de pagamento clicado
            this.classList.add('selected');
        });
    });
});
