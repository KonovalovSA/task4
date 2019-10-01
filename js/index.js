btn.onclick = function() {
        // Создаём пустой массив куда в дальнейшем поместим фотографии
    let arrJpg = [];
        // Объявляем блок с фото и записываем количесвто сколько фотографий
    let blockFoto = document.getElementById("foto");
    let arrJpgCol = blockFoto.getElementsByTagName("img").length;
        // Заполняем массив фотографиями
    for (let i = 0; i < arrJpgCol; i++) {
        pic = blockFoto.getElementsByTagName( "img" )[i];
        arrJpg.push(pic);
    }
        // Перемешивалка
    function compareRandom() {
        return Math.random() - 0.5;
    }
    arrJpg.sort(compareRandom);
        // Возвращаем на страничку фотографии в перемешанном порядке
    for (let i = 0; i < arrJpgCol; i++) {
        blockFoto.appendChild(arrJpg[i]);
    }
}