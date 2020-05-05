let valueqr = document.querySelector('.qr'),
  valuetr = document.querySelector('.tr'),
  valuen = document.querySelector('.n'),
  valueTkns = document.querySelector('.Tkns'),
  valueQns = document.querySelector('.Qns'),
  valueWns = document.querySelector('.Wns'),
  valueTnns = document.querySelector('.Tnns'),

  innerQr = document.querySelectorAll('.innQr'),
  innertr = document.querySelectorAll('.inntr'),
  innern = document.querySelectorAll('.innn'),
  innerTkns = document.querySelectorAll('.innTkns'),
  innerQns = document.querySelectorAll('.innQns'),
  innerWns = document.querySelectorAll('.innWns'),
  innerTnns = document.querySelectorAll('.innTnns');


let onCalcHandler = function () {
  let Qr = Number(valueqr.value);
  let tr = Number(valuetr.value);
  let n = Number(valuen.value);
  let Tkns = Number(valueTkns.value);
  let resultQns = Number(Qr * (Math.pow(Tkns / tr, 1 - n) - Math.pow(Tkns / tr - 1, 1 - n)));
  let resultTnns = Number(tr * Math.pow(resultQns / Qr, 1 / (1 - n)));
  let resultWns = Number(((0.06 * Qr * tr) / (2 - n)) * (Math.pow(Tkns / tr, 2 - n) - Math.pow(resultTnns / tr, 2 - n) - Math.pow(Tkns / tr - 1, 2 - n) - ((resultQns / Qr) * (2 - n) * (Tkns / tr - resultTnns / tr))));

  valueQns.textContent = resultQns.toFixed(2);
  valueWns.textContent = resultWns.toFixed(2);
  valueTnns.textContent = resultTnns.toFixed(4);
  for (let i = 0; i < innerQr.length; i++) {
    innerQr[i].textContent = Qr.toFixed(2)
  };
  for (let i = 0; i < innertr.length; i++) {
    innertr[i].textContent = tr.toFixed(2)
  };
  for (let i = 0; i < innern.length; i++) {
    innern[i].textContent = n
  };
  for (let i = 0; i < innerTkns.length; i++) {
    innerTkns[i].textContent = Tkns.toFixed(2)
  };
  for (let i = 0; i < innerQns.length; i++) {
    innerQns[i].textContent = resultQns.toFixed(2)
  };
  for (let i = 0; i < innerTnns.length; i++) {
    innerTnns[i].textContent = resultTnns.toFixed(4)
  };
  for (let i = 0; i < innerWns.length; i++) {
    innerWns[i].textContent = resultWns.toFixed(2)
  };

  if (valueqr.value <= 0) {
    valueqr.value = 0;
  }
  if (valuen.value <= 0.27 || valuen.value > 0.74) {
    valuen.value = 0.71;
  }
  if (valueTkns.value <= 0) {
    valueTkns.value = 0;
  }
  if (valuetr.value <= 0 || Number(valuetr.value) > valueTkns.value) {
    valuetr.value = '';
  }
  else {

  }

}

valueqr.addEventListener('input', onCalcHandler);
valuen.addEventListener('change', onCalcHandler);
valueTkns.addEventListener('input', onCalcHandler);
valuetr.addEventListener('input', onCalcHandler);



(function () {
  let dialogElement = document.querySelector('.calcinput');
  let dialogHandler = document.querySelector('.calcinput__title');

  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    let startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    let dragged = false;

    let onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      let shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      dialogElement.style.top = (dialogElement.offsetTop - shift.y) + 'px';
      dialogElement.style.left = (dialogElement.offsetLeft - shift.x) + 'px';
    };

    let onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        let onClickPreventDefault = function (evt) {
          evt.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefault)
        };
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }

    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

  });

})();
