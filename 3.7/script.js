$(document).ready(function(){
    // Вибираємо всі елементи <p> та замінюємо їх текст на "Змінений текст"
    $('p').text("Змінений текст");

    // Вибираємо елемент з ідентифікатором task1 і додаємо йому клас highlight
    $('#task1').addClass('highlight');

    // Вибираємо всі елементи <li> та додаємо їм клас list-item
    $('li').addClass('list-item');
	
	// Вибираємо всі елементи з класом highlight та змінюємо їх колір на червоний
	$('.highlight').css('color', '#FF0000'); 

	// Вибираємо всі елементи з класом list-item та змінюємо їх фон на світло-сірий
	$('.list-item').css('background-color', '#D3D3D3'); 

	// Вибираємо всі елементи з класом highlight та застосовуємо до них ефект fadeIn
	$('.highlight').hide().fadeIn('slow');
	
	$('#task1 p:last').text("Новий останній текст");

	$('#additional_task').click(function(){
    $('.list-item').remove();
});
	
});