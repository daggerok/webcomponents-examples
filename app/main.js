(function main() {
  'use strict';

  window.addEventListener('load', () => {
    document.querySelector('#subject').addEventListener('click', () => {

      const myMessage = document.querySelector('#banner');
      myMessage.visible = !myMessage.visible;
    });
  });

})();
