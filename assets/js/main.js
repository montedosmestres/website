/*
	Big Picture by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$all = $body.add($header);

	// Breakpoints.
		breakpoints({
			xxlarge: [ '1681px',  '1920px' ],
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '1001px',  '1280px' ],
			medium:  [ '737px',   '1000px' ],
			small:   [ '481px',   '736px'  ],
			xsmall:  [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Touch mode.
		if (browser.mobile)
			$body.addClass('is-touch');
		else {

			breakpoints.on('<=small', function() {
				$body.addClass('is-touch');
			});

			breakpoints.on('>small', function() {
				$body.removeClass('is-touch');
			});

		}

	// Fix: IE flexbox fix.
		if (browser.name == 'ie') {

			var $main = $('.main.fullscreen'),
				IEResizeTimeout;

			$window
				.on('resize.ie-flexbox-fix', function() {

					clearTimeout(IEResizeTimeout);

					IEResizeTimeout = setTimeout(function() {

						var wh = $window.height();

						$main.each(function() {

							var $this = $(this);

							$this.css('height', '');

							if ($this.height() <= wh)
								$this.css('height', (wh - 50) + 'px');

						});

					});

				})
				.triggerHandler('resize.ie-flexbox-fix');

		}

	// Gallery.
		$window.on('load', function() {

			var $gallery = $('.gallery');

			$gallery.poptrox({
				baseZIndex: 10001,
				useBodyOverflow: false,
				usePopupEasyClose: false,
				overlayColor: '#1f2328',
				overlayOpacity: 0.65,
				usePopupDefaultStyling: false,
				usePopupCaption: true,
				popupLoaderText: '',
				windowMargin: 50,
				usePopupNav: true
			});

			// Hack: Adjust margins when 'small' activates.
				breakpoints.on('>small', function() {
					$gallery.each(function() {
						$(this)[0]._poptrox.windowMargin = 50;
					});
				});

				breakpoints.on('<=small', function() {
					$gallery.each(function() {
						$(this)[0]._poptrox.windowMargin = 5;
					});
				});

		});

	// Section transitions.
		if (browser.canUse('transition')) {

			var on = function() {

				// Galleries.
					$('.gallery')
						.scrollex({
							top:		'30vh',
							bottom:		'30vh',
							delay:		50,
							initialize:	function() { $(this).addClass('inactive'); },
							terminate:	function() { $(this).removeClass('inactive'); },
							enter:		function() { $(this).removeClass('inactive'); },
							leave:		function() { $(this).addClass('inactive'); }
						});

				// Generic sections.
					$('.main.style1')
						.scrollex({
							mode:		'middle',
							delay:		100,
							initialize:	function() { $(this).addClass('inactive'); },
							terminate:	function() { $(this).removeClass('inactive'); },
							enter:		function() { $(this).removeClass('inactive'); },
							leave:		function() { $(this).addClass('inactive'); }
						});

					$('.main.style2')
						.scrollex({
							mode:		'middle',
							delay:		100,
							initialize:	function() { $(this).addClass('inactive'); },
							terminate:	function() { $(this).removeClass('inactive'); },
							enter:		function() { $(this).removeClass('inactive'); },
							leave:		function() { $(this).addClass('inactive'); }
						});

				// Contact.
					$('#contact')
						.scrollex({
							top:		'50%',
							delay:		50,
							initialize:	function() { $(this).addClass('inactive'); },
							terminate:	function() { $(this).removeClass('inactive'); },
							enter:		function() { $(this).removeClass('inactive'); },
							leave:		function() { $(this).addClass('inactive'); }
						});

			};

			var off = function() {

				// Galleries.
					$('.gallery')
						.unscrollex();

				// Generic sections.
					$('.main.style1')
						.unscrollex();

					$('.main.style2')
						.unscrollex();

				// Contact.
					$('#contact')
						.unscrollex();

			};

			breakpoints.on('<=small', off);
			breakpoints.on('>small', on);

		}

	// Events.
		var resizeTimeout, resizeScrollTimeout;

		$window
			.on('resize', function() {

				// Disable animations/transitions.
					$body.addClass('is-resizing');

				clearTimeout(resizeTimeout);

				resizeTimeout = setTimeout(function() {

					// Update scrolly links.
						$('a[href^="#"]').scrolly({
							speed: 1500,
							offset: $header.outerHeight() - 1
						});

					// Re-enable animations/transitions.
						setTimeout(function() {
							$body.removeClass('is-resizing');
							$window.trigger('scroll');
						}, 0);

				}, 100);

			})
			.on('load', function() {
				$window.trigger('resize');
			});


			const translations = {
				en: {

					intro: "",
					whatWeDo: {
						header: "What We Do",
						content: [
							"At Monte dos Mestres, we specialize in hosting unforgettable events set against the picturesque, rustic backdrop of the Alentejo.",
							"Monte dos Mestres takes pride in promoting sustainability and self-sufficiency, creating a unique atmosphere where guests can enjoy the tranquility and privacy of the Alentejo countryside.",
							"Whether you're dreaming of a romantic wedding under the stars, an intimate family gathering, or a team-building event surrounded by nature, Monte dos Mestres offers a setting like no other in the Alentejo region."
						],
					},
					whoWeAre: {
						header: "Who We Are",
						content: [
							"Monte dos Mestres is a recently established property in the heart of the Alentejo, located specifically in São Luís. Born from a decades-long dream of a local native, originally from Sines, who spent years abroad, Monte dos Mestres embodies a vision of revitalizing rural tourism in the region.",
							"With deep respect for the Alentejo's traditions and landscapes, we aim to offer an authentic, sustainable, and immersive experience for our guests.",
							"At Monte dos Mestres, our mission is more than just providing a venue for events; we seek to create a unique rural retreat where every celebration - whether it's a wedding, a corporate gathering, or a family reunion - reflects the essence of the Alentejo. Through our work, we hope to bring people closer to the natural beauty, tranquility, and charm of the Alentejo, fostering memories that last a lifetime."
						],
					},
					theMonte: {
						header: "The Monte/ O Monte",
						content: [
							"Welcome to The Monte, a place where the rustic charm of the Alentejo meets refined hospitality.",
							"Through these images, discover the beauty of Monte dos Mestres - from our serene landscapes and traditional architecture to the delightful catering we offer.",
							"Each dish celebrates local flavors, crafted with fresh ingredients to enhance every event, whether a wedding, family gathering, or corporate retreat.",
							"Immerse yourself in the essence of the Alentejo, where every moment becomes a cherished memory."
						],
					},
					contact: {
						header: "Our Contacts",
						content: [
							"Ready to book or have questions? Fill out the form below, or reach us directly through:",
							"Phone / Telefone: +351 912 345 678",
							"Email: info@montedosmestres.com",
							"Website: <a href='https://montedosmestres.com' target='_blank'>www.montedosmestres.com</a>",
							"<img src='images/whatsapp.png' alt='WhatsApp Logo' style='width:25px; vertical-align:middle;'> WhatsApp: +351 912 345 67",
							"We're here to help make your experience at Monte dos Mestres unforgettable."
						],
					},
					navigation: {
						intro: "Intro",
						whatWeDo: "What we Do",
						whoWeAre: "Who we are",
						theMonte: "The Monte",
						contact: "Contact"
					}
				},
				pt: {
					intro: "",
					whatWeDo: {
						header: "O que fazemos",
						content: [
							"No Monte dos Mestres, especializamo-nos em criar eventos inesquecíveis num cenário rústico e pitoresco do Alentejo.",
							"O Monte dos Mestres orgulha-se de promover a sustentabilidade e a autossuficiência, criando um ambiente único onde os convidados podem desfrutar da tranquilidade e privacidade do campo alentejano.",
							"Seja o sonho de um casamento romântico sob as estrelas, uma reunião familiar intimista, ou um evento de “team-building” rodeado pela natureza, o Monte dos Mestres oferece um ambiente inigualável na região do Alentejo."
						],
					},
					whoWeAre: {
						header: "Quem somos",
						content: [
							"O Monte dos Mestres é uma propriedade recente, situada no coração do Alentejo, mais especificamente em São Luís. Nascido do sonho de décadas de um siniense emigrado, o Monte dos Mestres representa uma visão de revitalizar o turismo rural na região.",
							"Com profundo respeito pelas tradições e paisagens alentejanas, o nosso objetivo é oferecer uma experiência autêntica, sustentável e envolvente aos nossos hóspedes.",
							"No Monte dos Mestres, a nossa missão vai além de ser apenas um espaço para eventos; queremos criar um refúgio rural único onde cada celebração - seja um casamento, um evento corporativo ou uma reunião familiar - reflita a essência do Alentejo. Através do nosso trabalho, procuramos aproximar as pessoas da beleza natural, tranquilidade e charme do Alentejo, promovendo memórias que perduram por toda a vida."
						],
					},
					theMonte: {
						header: "The Monte/ O Monte",
						content: [
							"Bem-vindo ao O Monte, onde o charme rústico do Alentejo encontra a hospitalidade requintada.",
							"Através destas imagens, descubra a beleza do Monte dos Mestres - das nossas paisagens serenas e arquitetura tradicional até às iguarias que oferecemos.",
							"Cada prato celebra os sabores locais, elaborado com ingredientes frescos para enriquecer qualquer evento, seja casamento, reunião familiar ou evento corporativo.",
							"Mergulhe na essência do Alentejo, onde cada momento se torna uma memória especial."
						],
					},
					contact: {
						header: "Os Nossos Contactos",
						content: [
							"Pronto para reservar ou tem alguma questão? Preencha o formulário abaixo ou entre em contacto diretamente através de:",
							"Telefone / Phone: +351 912 345 678",
							"Email: info@montedosmestres.com",
							"Website: <a href='https://montedosmestres.com' target='_blank'>www.montedosmestres.com</a>",
							"<img src='images/whatsapp.png' alt='WhatsApp Logo' style='width:25px; vertical-align:middle;'> WhatsApp: +351 912 345 67",
							"Estamos aqui para tornar a sua experiência no Monte dos Mestres inesquecível."
						],
					},
					navigation: {
						intro: "Introdução",
						whatWeDo: "O Que Fazemos",
						whoWeAre: "Quem Somos",
						theMonte: "O Monte",
						contact: "Contato"
					}
				},
			};

			const gallerySwitcher = (lang) => {

				const galleryEn = document.getElementById("gallery-en");
        		const galleryPt = document.getElementById("gallery-pt");

				 // Toggle Gallery Based on Language
				
		
					if (lang === "en") {
						galleryEn.classList.add("active");
						galleryPt.classList.remove("active");
					} else if (lang === "pt") {
						galleryPt.classList.add("active");
						galleryEn.classList.remove("active");
					}
				
			}
			
			const updateContent = (lang) => {
				gallerySwitcher(lang);

				// Update "What We Do" section
				document.querySelector("#what-we-do h2").textContent = translations[lang].whatWeDo.header;
				document.querySelector("#what-we-do p").innerHTML = translations[lang].whatWeDo.content.join("<br><br>");
			
				// Update "Who We Are" section
				document.querySelector("#who-we-are h2").textContent = translations[lang].whoWeAre.header;
				document.querySelector("#who-we-are p").innerHTML = translations[lang].whoWeAre.content.join("<br><br>");
			
				// Update "The Monte" section
				document.querySelector("#the-monte h2").textContent = translations[lang].theMonte.header;
				document.querySelector("#the-monte p").innerHTML = translations[lang].theMonte.content.join("<br><br>");
			
				// Update "Say Hello" section
				document.querySelector("#contact-header").textContent = translations[lang].contact.header;
				document.querySelector("#contact-description").innerHTML = translations[lang].contact.content.join("<br>");
				
				// Update Navigation Menu
					document.querySelector("#nav-intro").textContent = translations[lang].navigation.intro;
					document.querySelector("#nav-what-we-do").textContent = translations[lang].navigation.whatWeDo;
					document.querySelector("#nav-who-we-are").textContent = translations[lang].navigation.whoWeAre;
					document.querySelector("#nav-the-monte").textContent = translations[lang].navigation.theMonte;
					document.querySelector("#nav-contact").textContent = translations[lang].navigation.contact;

				
			};
			
			// Set default language (English) when the page loads
			window.addEventListener('DOMContentLoaded', () => {
				updateContent("pt");
			});
			
// Event listeners for language links
document.getElementById("en-btn").addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the default link behavior (scrolling to top)
    updateContent("en");
});

document.getElementById("pt-btn").addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the default link behavior (scrolling to top)
    updateContent("pt");
});

			

})(jQuery);
