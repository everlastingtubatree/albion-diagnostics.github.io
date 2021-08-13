// A $( document ).ready() block.
$( document ).ready(function() {
   $("#oil").click(function() {
	   $(".makes ul li").hide();
	   $(".no-support").hide();
	   $(".icon-mini, .icon-porsche, .icon-vw, .icon-audi, .icon-seat, .icon-skoda").parent().parent().show();
	   $(".icon-bentley, .icon-mercedes, .icon-bmw, .icon-volvo, .icon-land-rover").parent().parent().show();
	   $(".icon-saab, .icon-peugeot, .icon-citroen, .icon-opel, .icon-jaguar").parent().parent().show();
	   $(".icon-smart, .icon-maserati, .icon-ferrari, .icon-lamborghini, .icon-bugati").parent().parent().show();
	   $(".icon-fiat, .icon-lancia, .icon-alpha-romeo, .icon-renault, .icon-astonmartin").parent().parent().show();
	   $(".icon-honda, .icon-toyota, .icon-lexus, .icon-nissan, .icon-infiniti, .icon-hyundai").parent().parent().show();
	   $(".icon-kia, .icon-mitsubishi, .icon-mazda, .icon-subaru, .icon-isuzu, .icon-suzuki, .icon-proton").parent().parent().show();
	   $(".icon-mg, .icon-rover").parent().parent().show();
	   $(".icon-gm, .icon-chrysler, .icon-dodge, .icon-jeep, .icon-ford-us, .icon-pontiac, .icon-saturn, .icon-scion").parent().parent().show();
	});
	
   $("#epb").click(function() {
	  $(".makes ul li").hide();
	  $(".no-support").hide();
	  $(".icon-audi, .icon-alpha-romeo, .icon-mercedes, .icon-bentley, .icon-bugati, .icon-bmw, .icon-citroen, .icon-ferrari").parent().parent().show();
	  $(".icon-jaguar, .icon-land-rover, .icon-maserati, .icon-mini, .icon-maybach, .icon-opel, .icon-peugeot, .icon-porsche").parent().parent().show();
	  $(".icon-renault, .icon-rolls-royce, .icon-saab, .icon-seat, .icon-skoda, .icon-volvo, .icon-vw, .icon-mini").parent().parent().show();
	  $(".icon-acura, .icon-honda, .icon-hyundai, .icon-kia, .icon-lexus, .icon-nissan, .icon-infiniti, .icon-scion").parent().parent().show();
	  $(".icon-subaru, .icon-toyota, .icon-mazda, .icon-mitsubishi, .icon-mg").parent().parent().show();
	   $(".icon-gm, .icon-chrysler, .icon-jeep, .icon-dodge, .icon-ford-us").parent().parent().show();
	  
	});
	
   $("#dpf").click(function() {
	   $(".makes ul li").hide();
	   $(".no-support").hide();
	   $(".icon-audi, .icon-fiat, .icon-jaguar, .icon-land-rover, .icon-opel, .icon-porsche, .icon-renault, .icon-alpha-romeo, .icon-seat, .icon-volvo").parent().parent().show();
	   $(".icon-toyota, .icon-hyundai, .icon-kia, .icon-mazda").parent().parent().show();
	   $(".icon-gm, .icon-chrysler, .icon-jeep, .icon-dodge, .icon-daewoo").parent().parent().show();
	});

   $("#battery-registration").click(function() {
	   $(".makes ul li").hide();
	   $(".no-support").hide();
	   $(".icon-bmw, .icon-mini, .icon-bentley, .icon-bugati, .icon-ford, .icon-citroen, .icon-gm, .icon-chrysler, .icon-jeep, .icon-dodge, .icon-jaguar").parent().parent().show();
	   $(".icon-lamborghini, .icon-land-rover, .icon-lexus, .icon-toyota, .icon-mitsubishi, .icon-nissan, .icon-infiniti, .icon-honda, .icon-acura, .icon-mercedes").parent().parent().show();
	   $(".icon-volvo, .icon-vw, .icon-audi, .icon-skoda, .icon-seat, .icon-porsche, .icon-renault, .icon-opel, .icon-peugeot, .icon-hyundai").parent().parent().show();
	   $(".icon-isuzu, .icon-kia, .icon-mazda").parent().parent().show();
	   $(".icon-mg").parent().parent().show();
	});
	
   $("#tpms").click(function() {
	   $(".makes ul li").hide();
	   $(".no-support").hide();
	   $(".icon-abarth, .icon-alpha-romeo, .icon-alpina, .icon-astonmartin, .icon-audi, .icon-bentley, .icon-bmw, .icon-bugati, .icon-citroen, .icon-dacia, .icon-ferrari").parent().parent().show();
	   $(".icon-fiat, .icon-jaguar, .icon-lada, .icon-lamborghini, .icon-lancia, .icon-land-rover, .icon-lotus").parent().parent().show();
	   $(".icon-maserati, .icon-maybach, .icon-mclaren, icon-mercedes, .icon-mini, .icon-opel, .icon-peugeot, .icon-porsche").parent().parent().show();
	   $(".icon-renault, .icon-rolls-royce, .icon-saab, .icon-seat, .icon-skoda, .icon-smart, .icon-vw, .icon-volvo").parent().parent().show();
	   
	   $(".icon-acura, .icon-daewoo-asia, .icon-honda, .icon-hyundai, .icon-infiniti, .icon-isuzu, .icon-kia, .icon-lexus").parent().parent().show();
	   $(".icon-mazda, .icon-mitsubishi, .icon-nissan, .icon-scion, .icon-subaru, .icon-suzuki, .icon-toyota, .icon-ssangyong").parent().parent().show();
	   
	   $(".icon-buick, .icon-cadillac, .icon-chevrolet, .icon-chrysler, .icon-dodge, .icon-ford-us, .icon-gmc, .icon-hummer, .icon-jeep, .icon-lincoln, .icon-pontiac, .icon-saturn, .icon-tesla").parent().parent().show();
	});
	
   $("#tps").click(function() {
	   $(".makes ul li").hide();
	   $(".no-support").hide();
	   $(".icon-mini, .icon-vw, .icon-audi, .icon-skoda, .icon-seat, .icon-mercedes, .icon-bmw, .icon-land-rover, .icon-jaguar, .icon-volvo, .icon-renault, .icon-peugeot").parent().parent().show();
	   $(".icon-citroen, .icon-porsche, .icon-maserati, .icon-opel, .icon-fiat, .icon-lancia, .icon-alpha-romeo, .icon-abarth, .icon-dacia, .icon-saab").parent().parent().show();
	   $(".icon-citroen, .icon-porsche, .icon-maserati, .icon-opel, .icon-fiat, .icon-lancia, .icon-alpha-romeo, .icon-abarth, .icon-dacia, .icon-saab").parent().parent().show();
	   
	   $(".icon-acura, .icon-daewoo-asia, .icon-hyundai, .icon-kia, .icon-lexus, .icon-mitsubishi, .icon-nissan, .icon-honda, .icon-toyota, .icon-infiniti").parent().parent().show();
	   $(".icon-mazda, .icon-proton, .icon-suzuki, .icon-ssangyong").parent().parent().show();
	   
	   $(".icon-mg, .icon-iveco").parent().parent().show();
	   
	   $(".icon-gm, .icon-chrysler, .icon-jeep, .icon-dodge, .icon-ford-us").parent().parent().show();
	});
	
	
   $("#tooth").click(function() {
	   $(".makes ul li").hide();
	   $(".no-support").hide();
	   $("#no-support-european").show();
	   $("#no-support-american").show();
	   $("#no-support-asian").show();
	});
	
   $("#abs-bleeding").click(function() {
	   $(".makes ul li").hide();
	   $(".no-support").hide();
	   $("#no-support-european").show();
	   $("#no-support-american").show();
	   $(".icon-suzuki, .icon-mazda, .icon-mg").parent().parent().show();
	});
	
	
   $("#abs-bleeding").click(function() {
	   $(".makes ul li").hide();
	    $(".no-support").hide();
	   $("#no-support-european").show();
	   $("#no-support-american").show();
	   $(".icon-suzuki, .icon-mazda, .icon-mg").parent().parent().show();
	});
	
   $("#window").click(function() {
	   $(".makes ul li").hide();
	   $(".no-support").hide();
	   $(".icon-mercedes, .icon-bmw, .icon-chrysler, .icon-volvo, .icon-honda, .icon-vw, .icon-toyota, .icon-ford, .icon-ford-us, .icon-citroen, .icon-nissan, .icon-renault, .icon-mitsubishi, .icon-suzuki, .icon-subaru, .icon-porsche, .icon-mazda, .icon-land-rover, .icon-rolls-royce, .icon-fiat, .icon-buick, .icon-jaguar").parent().parent().show();
	});
	
	
   $("#gear-box-matching").click(function() {
	   $(".makes ul li").hide();
	   $(".no-support").hide();
	   $(".icon-mini, .icon-opel, .icon-bmw, .icon-land-rover, .icon-jaguar, .icon-volvo, .icon-renault, .icon-fiat, .icon-lancia, .icon-abarth, .icon-alpha-romeo, .icon-porsche, .icon-maserati, .icon-vw, .icon-audi, .icon-skoda, .icon-ferrari, .icon-saab, .icon-peugeot, .icon-citroen").parent().parent().show();
	   $(".icon-hyundai, .icon-kia, .icon-nissan, .icon-honda, .icon-acura, .icon-subaru, .icon-mitsubishi, .icon-ssangyong, .icon-daewoo-asia, .icon-proton, .icon-mg").parent().parent().show();
	   $(".icon-ford-us, .icon-chrysler, .icon-gm").parent().parent().show();
	});
	
   $("#air-suspension").click(function() {
	   $(".makes ul li").hide();
	   $(".no-support").hide();
	   $(".icon-land-rover, .icon-jaguar").parent().parent().show();
	   $("#no-support-asian-two").show();
	   $("#no-support-american").show();
	});
	
	
   $("#dashboard-recovery").click(function() {
	   $(".makes ul li").hide();
	   $(".no-support").hide();
	   $(".icon-audi, .icon-bentley, .icon-mercedes, .icon-citroen, .icon-ferrari, .icon-fiat, .icon-jaguar, .icon-land-rover, .icon-maserati, .icon-peugeot, .icon-porsche, .icon-renault, .icon-seat, .icon-skoda, .icon-smart, .icon-volvo, .icon-vw").parent().parent().show();
	   $(".icon-hyundai, .icon-infiniti, .icon-isuzu, .icon-kia, .icon-mazda, .icon-mitsubishi, .icon-nissan, .icon-proton, .icon-ssangyong, .icon-subaru, .icon-suzuki, .icon-mg").parent().parent().show();
	   $(".icon-ford-us, .icon-chrysler, .icon-gmc, .icon-buick, .icon-cadillac, .icon-hummer, .icon-pontiac, .icon-saturn").parent().parent().show();
	});
	
   $("#headlights").click(function() {
	   $(".makes ul li").hide();
	   $(".no-support").hide();
	   $("#no-support-asian-two").show();
	   $(".icon-bmw, .icon-gm, .icon-vw, .icon-land-rover, .icon-jaguar").parent().parent().show();
	});
	
   $("#airbag-reset").click(function() {
	   $(".makes ul li").hide();
	   $(".no-support").hide();
	   $(".icon-audi, .icon-gm, .icon-honda, .icon-vw").parent().parent().show();
	});
	
	
   $("#injector-coding").click(function() {
	   $(".makes ul li").hide();
	   $(".no-support").hide();
	   $(".icon-citroen, .icon-renault, .icon-land-rover, .icon-jaguar").parent().parent().show();
	   $(".icon-peugeot, .icon-opel, .icon-volvo, .icon-porsche").parent().parent().show();
	   $(".icon-lancia, .icon-fiat, .icon-alpha-romeo, .icon-bmw").parent().parent().show();
	   $(".icon-vw, .icon-audi, .icon-seat, .icon-skoda, .icon-mini").parent().parent().show();
	   $(".icon-hyundai, .icon-kia, .icon-mazda, .icon-honda, .icon-toyota").parent().parent().show();
	   $(".icon-lexus, .icon-scion, .icon-subaru, .icon-mitsubishi, .icon-suzuki").parent().parent().show();
	   $(".icon-nissan, .icon-infiniti, .icon-isuzu, .icon-mitsubishi, .icon-ssangyong").parent().parent().show();
	   $(".icon-ford-us, .icon-gm, .icon-chrysler, .icon-jeep, .icon-dodge").parent().parent().show(); 
	});
	
	
   $("#steering-angle").click(function() {
	   $(".makes ul li").hide();
	   $(".no-support").hide();
	   $(".icon-peugeot, .icon-citroen, .icon-vw, .icon-audi").parent().parent().show();
	   $(".icon-skoda, .icon-seat, .icon-bentley, .icon-bugati").parent().parent().show();
	   $(".icon-lamborghini, .icon-land-rover, .icon-jaguar, .icon-volvo").parent().parent().show();
	   $(".icon-lamborghini, .icon-land-rover, .icon-jaguar, .icon-mercedes").parent().parent().show();
	   $(".icon-smart, .icon-bmw, .icon-mini, .icon-porsche").parent().parent().show();
	   $(".icon-renault, .icon-dacia, .icon-ferrari, .icon-maserati").parent().parent().show();
	   $(".icon-opel, .icon-fiat, .icon-lancia, .icon-alpha-romeo").parent().parent().show();
	   $(".icon-saab, .icon-astonmartin").parent().parent().show();
	   $(".icon-nissan, .icon-infiniti, .icon-toyota, .icon-lexus, .icon-subaru, .icon-honda, .icon-acura, .icon-suzuki, .icon-mazda").parent().parent().show();
	   $(".icon-hyundai, .icon-kia, .icon-ssangyong, .icon-mitsubishi, .icon-daihatsu, .icon-mg").parent().parent().show();
	   $(".icon-ford-us, .icon-gm, .icon-chrysler, .icon-jeep, .icon-dodge").parent().parent().show(); 
	});
});
