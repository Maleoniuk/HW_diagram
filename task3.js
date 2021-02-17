function createBarChart(data, width, height, color) {

    // создаем контейнер для диаграммы 
    // createElementNS первый параметр определяет пространство имен для элемента <svg xmlns="http://www.w3.org/2000/svg">
    let chart = document.createElement("div");
    chart.style.width = width+ "px";
    chart.style.height = height+ "px";
    chart.style.position="relative";

    // находим максимальное значение в массиве данных
    let max = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < data.length; i++) {
        if (max < data[i]) max = data[i];
    }

    let scale = height / max;
    let barWidth = Math.floor(width / data.length);

    // создаем отдельный элемент диаграммы
    for (let i = 0; i < data.length; i++) {
        let bar = document.createElement("div");

        bar.style.height=data[i]*scale+"px";
        bar.style.width=barWidth -4+"px";

        bar.style.position="absolute";
        bar.style.margin="5px";
        bar.style.bottom="0px";
        bar.style.left=barWidth*i+"px";

        bar.style.backgroundColor=color;
        bar.style.borderRadius="5px";
  


        chart.append(bar);
    }
  
return chart;
}


