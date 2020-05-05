let select70 = document.getElementsByName('selectlist70')[0],
  selectlisttw70 = document.getElementsByName('selectlisttw70')[0],
  selectlisttw100 = document.getElementsByName('selectlisttw100')[0],
  select100 = document.getElementsByName('selectlist100')[0],
  area1 = document.querySelector('.area1'),
  area2 = document.querySelector('.area2'),
  area3 = document.querySelector('.area3'),
  area4 = document.querySelector('.area4'),
  area5 = document.querySelector('.area5'),
  area6 = document.querySelector('.area6'),
  area7 = document.querySelector('.area7'),
  area1100 = document.querySelector('.area1100'),
  area2100 = document.querySelector('.area2100'),
  area3100 = document.querySelector('.area3100'),
  area4100 = document.querySelector('.area4100'),
  area5100 = document.querySelector('.area5100'),
  area6100 = document.querySelector('.area6100'),
  area7100 = document.querySelector('.area7100'),
  area1inn = document.querySelector('.area1inn'),
  area2inn = document.querySelector('.area2inn'),
  area3inn = document.querySelector('.area3inn'),
  area4inn = document.querySelector('.area4inn'),
  area5inn = document.querySelector('.area5inn'),
  area6inn = document.querySelector('.area6inn'),
  area7inn = document.querySelector('.area7inn'),
  area1inn100 = document.querySelector('.area1inn100'),
  area2inn100 = document.querySelector('.area2inn100'),
  area3inn100 = document.querySelector('.area3inn100'),
  area4inn100 = document.querySelector('.area4inn100'),
  area5inn100 = document.querySelector('.area5inn100'),
  area6inn100 = document.querySelector('.area6inn100'),
  area7inn100 = document.querySelector('.area7inn100'),
  areatotal = document.querySelector('.areatotal'),
  areatotal100 = document.querySelector('.areatotal100'),
  koeftotalinn = document.querySelectorAll('.koeftotalinn'),
  koeftotalinn100 = document.querySelectorAll('.koeftotalinn100'),
  hainn = document.querySelectorAll('.hainn'),
  hainn100 = document.querySelectorAll('.hainn100'),
  areatotalinn = document.querySelectorAll('.areatotalinn'),
  areatotalinn100 = document.querySelectorAll('.areatotalinn100'),
  volumetank = document.querySelector('.volumetank'),
  volumetank100 = document.querySelector('.volumetank100'),
  calcinputtank70 = document.querySelector('.calcinput-tank70'),
  calcinputtank100 = document.querySelector('.calcinput-tank100'),
  textinn = document.querySelector('.textinn'),
  textinn100 = document.querySelector('.textinn100'),
  koefSnowRemoveinn = document.querySelector('.koefSnowRemoveinn'),
  koefSnowRemoveinn100 = document.querySelector('.koefSnowRemoveinn100'),
  selectlisttw70inn = document.querySelectorAll('.selectlisttw70inn'),
  selectlisttw100inn = document.querySelectorAll('.selectlisttw100inn'),
  daysVolumeSnow70inn = document.querySelector('.daysVolumeSnow70inn'),
  daysVolumeSnow100inn = document.querySelector('.daysVolumeSnow100inn'),
  daysVolume = document.querySelector('.daysVolume'),
  daysVolume100 = document.querySelector('.daysVolume100'),
  timePumpinn = document.querySelectorAll('.timePumpinn'),
  timePumpinn100 = document.querySelectorAll('.timePumpinn100'),
  timePump = document.querySelector('.timePump'),
  timePump100 = document.querySelector('.timePump100'),
  totalQlosinn = document.querySelectorAll('.totalQlosinn'),
  totalQlosinn100 = document.querySelectorAll('.totalQlosinn100'),
  tr1 = document.querySelector('.tr1'),
  tr2 = document.querySelector('.tr2'),
  tr3 = document.querySelector('.tr3'),
  tr4 = document.querySelector('.tr4'),
  tr5 = document.querySelector('.tr5'),
  tr6 = document.querySelector('.tr6'),
  tr7 = document.querySelector('.tr7');

let rad = document.myForm.radio;

rad[0].addEventListener('change', function () {
  if (rad[0].value = 1) {
    calcinputtank70.classList.remove('hide');
    calcinputtank100.classList.add('hide');
    textinn.textContent = 'hа - максимальный слой осадков за дождь, мм. сток от которого подвергается очистке в полном объеме (от мало интенсивных часто повторяющихся дождей, обеспечивающий прием на очистку не менее 70% годового объема поверхностного стока);';
    area1.value = '';
    area2.value = '';
    area3.value = '';
    area4.value = '';
    area5.value = '';
    area6.value = '';
    area7.value = '';
    select70.value = '';
    selectlisttw70.value = '';
    timePump.value = '';
  }

});


rad[1].addEventListener('change', function () {
  if (rad[1].value = 2) {
    calcinputtank100.classList.remove('hide');
    calcinputtank70.classList.add('hide');
    textinn100.textContent = 'hа - максимальный слой осадков за дождь, мм. сток от которого подвергается очистке в полном объеме';
    area1100.value = '';
    area2100.value = '';
    area3100.value = '';
    area4100.value = '';
    area5100.value = '';
    area6100.value = '';
    area7100.value = '';
    select100.value = '';
    selectlisttw100.value = '';
    timePump100.value = '';

  }

});

let calcVolume = function () {
  let areaTotalCulc = Number(area1.value) + Number(area2.value) + Number(area3.value) + Number(area4.value) + Number(area5.value) + Number(area6.value) + Number(area7.value);
  let koefTotalCulc = ((area1.value * 0.95) + (area2.value * 0.6) + (area3.value * 0.45) + (area4.value * 0.4) + (area5.value * 0.3) + (area6.value * 0.2) + (area7.value * 0.1)) / areaTotalCulc;
  let volumeTankCulc = 10 * select70.value * areaTotalCulc * koefTotalCulc;
  let koefSnowRemove = 1 - (Number(area1.value) + Number(area2.value) + Number(area3.value) + Number(area4.value) + Number(area5.value)) / areaTotalCulc;
  let daysVolumeSnow = 10 * 0.5 * 0.8 * areaTotalCulc * koefSnowRemove * selectlisttw70.value;


  let daysVolumeCulc;
  if (volumeTankCulc > daysVolumeSnow) {
    daysVolumeCulc = volumeTankCulc;
  }
  else {
    daysVolumeCulc = daysVolumeSnow;
  };

  let time = timePump.value;

  let totalQlos = daysVolumeCulc / (3.6 * time);

  area1inn.textContent = Number(area1.value);
  area2inn.textContent = Number(area2.value);
  area3inn.textContent = Number(area3.value);
  area4inn.textContent = Number(area4.value);
  area5inn.textContent = Number(area5.value);
  area6inn.textContent = Number(area6.value);
  area7inn.textContent = Number(area7.value);
  koeftotalinn.textContent = koefTotalCulc.toFixed(2);

  for (let i = 0; i < hainn.length; i++) {
    hainn[i].textContent = select70.value
  };

  for (let i = 0; i < koeftotalinn.length; i++) {
    koeftotalinn[i].textContent = koefTotalCulc.toFixed(2);
  };

  for (let i = 0; i < areatotalinn.length; i++) {
    areatotalinn[i].textContent = areaTotalCulc.toFixed(2);
  };

  for (let i = 0; i < selectlisttw70inn.length; i++) {
    selectlisttw70inn[i].textContent = selectlisttw70.value;
  };

  volumetank.textContent = volumeTankCulc.toFixed(0);
  koefSnowRemoveinn.textContent = koefSnowRemove.toFixed(2);

  daysVolumeSnow70inn.textContent = daysVolumeSnow.toFixed(0);
  daysVolume.textContent = daysVolumeCulc.toFixed(0);

  for (let i = 0; i < timePumpinn.length; i++) {
    timePumpinn[i].textContent = time;
  };


  for (let i = 0; i < totalQlosinn.length; i++) {
    totalQlosinn[i].textContent = totalQlos.toFixed(2);
  };


  if (area1.value < 0) {
    area1.value = '';
  }

  if (area2.value < 0) {
    area2.value = '';
  }

  if (area3.value < 0) {
    area3.value = '';
  }

  if (area4.value < 0) {
    area4.value = '';
  }

  if (area5.value < 0) {
    area5.value = '';
  }

  if (area6.value < 0) {
    area6.value = '';
  }

  if (area7.value < 0) {
    area7.value = '';
  }

  if (select70.value < 0) {
    select70.value = '';
  }
  if (selectlisttw70.value < 0) {
    selectlisttw70.value = '';
  }
  if (timePump.value < 0) {
    timePump.value = '';
  }
  else { }

};

select70.addEventListener('change', calcVolume);
selectlisttw70.addEventListener('change', calcVolume);
area1.addEventListener('input', calcVolume);
area2.addEventListener('input', calcVolume);
area3.addEventListener('input', calcVolume);
area4.addEventListener('input', calcVolume);
area5.addEventListener('input', calcVolume);
area6.addEventListener('input', calcVolume);
area7.addEventListener('input', calcVolume);
timePump.addEventListener('input', calcVolume);



let calcVolume100 = function () {
  let areaTotalCulc100 = Number(area1100.value) + Number(area2100.value) + Number(area3100.value) + Number(area4100.value) + Number(area5100.value) + Number(area6100.value) + Number(area7100.value);
  let koefTotalCulc100 = ((area1100.value * 0.95) + (area2100.value * 0.6) + (area3100.value * 0.45) + (area4100.value * 0.4) + (area5100.value * 0.3) + (area6100.value * 0.2) + (area7100.value * 0.1)) / areaTotalCulc100;
  let volumeTankCulc100 = 10 * select100.value * areaTotalCulc100 * koefTotalCulc100;
  let koefSnowRemove100 = 1 - (Number(area1100.value) + Number(area2100.value) + Number(area3100.value) + Number(area4100.value) + Number(area5100.value)) / areaTotalCulc100;
  let daysVolumeSnow100 = 10 * 0.5 * 0.8 * areaTotalCulc100 * koefSnowRemove100 * selectlisttw100.value;


  let daysVolumeCulc100;

  if (volumeTankCulc100 > daysVolumeSnow100) {
    daysVolumeCulc100 = volumeTankCulc100;
  }
  else {
    daysVolumeCulc100 = daysVolumeSnow100;
  };

  let time100 = timePump100.value;

  let totalQlos100 = daysVolumeCulc100 / (3.6 * time100);

  area1inn100.textContent = Number(area1100.value);
  area2inn100.textContent = Number(area2100.value);
  area3inn100.textContent = Number(area3100.value);
  area4inn100.textContent = Number(area4100.value);
  area5inn100.textContent = Number(area5100.value);
  area6inn100.textContent = Number(area6100.value);
  area7inn100.textContent = Number(area7100.value);
  koeftotalinn100.textContent = koefTotalCulc100.toFixed(2);

  for (let i = 0; i < hainn100.length; i++) {
    hainn100[i].textContent = select100.value
  };

  for (let i = 0; i < koeftotalinn100.length; i++) {
    koeftotalinn100[i].textContent = koefTotalCulc100.toFixed(2);
  };

  for (let i = 0; i < areatotalinn100.length; i++) {
    areatotalinn100[i].textContent = areaTotalCulc100.toFixed(2);
  };

  for (let i = 0; i < selectlisttw100inn.length; i++) {
    selectlisttw100inn[i].textContent = selectlisttw100.value;
  };
  areatotalinn100.textContent = areaTotalCulc100;
  volumetank100.textContent = volumeTankCulc100.toFixed(0);
  koefSnowRemoveinn100.textContent = koefSnowRemove100.toFixed(2);
  daysVolumeSnow100inn.textContent = daysVolumeSnow100.toFixed(0);
  daysVolume100.textContent = daysVolumeCulc100.toFixed(0);


  for (let i = 0; i < timePumpinn100.length; i++) {
    timePumpinn100[i].textContent = time100;
  };


  for (let i = 0; i < totalQlosinn100.length; i++) {
    totalQlosinn100[i].textContent = totalQlos100.toFixed(2);
  };

  if (area1100.value < 0) {
    area1100.value = '';
  }
  if (area2100.value < 0) {
    area2100.value = '';
  }
  if (area3100.value < 0) {
    area3100.value = '';
  }
  if (area4100.value < 0) {
    area4100.value = '';
  }
  if (area5100.value < 0) {
    area5100.value = '';
  }
  if (area6100.value < 0) {
    area6100.value = '';
  }
  if (area7100.value < 0) {
    area7100.value = '';
  }
  if (select100.value < 0) {
    select100.value = '';
  }
  if (selectlisttw100.value < 0) {
    selectlisttw100.value = '';
  }
  if (timePump100.value < 0) {
    timePump100.value = '';
  }
  else {
  }
};

select100.addEventListener('change', calcVolume100);
selectlisttw100.addEventListener('change', calcVolume100);
area1100.addEventListener('input', calcVolume100);
area2100.addEventListener('input', calcVolume100);
area3100.addEventListener('input', calcVolume100);
area4100.addEventListener('input', calcVolume100);
area5100.addEventListener('input', calcVolume100);
area6100.addEventListener('input', calcVolume100);
area7100.addEventListener('input', calcVolume100);
timePump100.addEventListener('input', calcVolume100);














(function () {
  let dialogElement = document.querySelector('.calcinput-tank');
  let dialogHandler = document.querySelector('.calcinput-tank__title');

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



