  function openPopup(menu) {
    document.getElementById("popupOrder").style.display = "flex";
    document.getElementById("popupTitle").textContent = menu;
  }

  function closePopup() {
    document.getElementById("popupOrder").style.display = "none";
  }

  function kirimPesanWA() {
    const menu = document.getElementById("popupTitle").textContent;
    const jumlah = document.getElementById("jumlah").value;
    const level = document.getElementById("level").value;
    const pesan = `Halo, saya ingin pesan ${menu} (Isi: ${jumlah}, Pedas: ${level})`;
    window.open(`https://wa.me/6285213963005?text=${encodeURIComponent(pesan)}`, '_blank');
  }

  // buble chat
  window.addEventListener('scroll', function () {
    const section = document.querySelector('.cara-order-section');
    const bubbleParent = section.querySelector('.about-image');
    const bubble = bubbleParent.querySelector('.bubble-chat');
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 100 && !bubble.classList.contains('typed')) {
      bubbleParent.classList.add('reveal-bubble');
      typeBubbleText(bubble, "Yukk..Mainkan Memory Game untuk mendapatkan PROMO!!..");
    }
  });

  function typeBubbleText(element, text, speed = 40) {
    element.classList.add('typed');
    element.textContent = "";
    let i = 0;
    const typing = setInterval(() => {
      if (i < text.length) {
        element.textContent += text[i];
        i++;
      } else {
        clearInterval(typing);
      }
    }, speed);
  }
