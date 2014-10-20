// Вообще, ни стайлгайд ни js Не требуют в конце символ ';'
// Символ годится, если операторы идут друг за другом в одну строку
// Стайлгайд определяет такой формат как "на крайний случай", я не встречал таких крайнит случаев.
// Такой код невозможно читать. Ну а C/C++/Java подобная привычка тыкать в конец строки символ ';'
// избыточна в данном контексте и, скажем, любителям python режит глаз.

function setEqualizer(selector, timeout, colWidth) {
    var $subj = $(selector)

    if (!colWidth) {
        colWidth = 1
    }
    $subj.css({
        verticalAlign: 'bottom',
        lineHeight: $subj.height() + 'px'
    })

    // Кол-во столбиков
    var colQuantity = Math.ceil($subj.width()/colWidth)
    
    // Почему я исправил? Читаем style guid
    var cols = []
    for (var i = 0 i < colQuantity i++) {

        // jQuery элементы по стайлгайду должны начинаться с бакса - исправляем
        var $span = $('<span/>').appendTo(selector)
        $span.css({
            verticalAlign: 'bottom',
            display: 'inline-block',

            fontSize: 0,
            lineHeight: 0,

            width: colWidth,
            background: 'pink',
            borderTop: '2px solid red'
        })
    }

    runEqualizer(selector, timeout)
}

// Не читая нижеприведенный код, могу сказать, что проблема в нем. 
// Это ясно было из поведения браузера, без всяких отладчиков
// Исправляем имя функции согласно требованиям стайлгайда
function runEqualizer (selector, timeout) {
    var $subj = $(selector),
        $span = $(selector + ' span')


    $span.each(function (i) {
        var colHeight = Math.round($subj.height() * Math.random())
        $(this).height(colHeight)
    })

    $span.animate(
        {height: $subj.height()/2},
        timeout,
        'linear',
        function () {
            runEqualizer(selector, timeout)
        }
    )
}

jQuery(function($) {
    setEqualizer('#eq_1 .equalizer', 1000, 2)
    setEqualizer('#eq_2 .equalizer', 1000, 2)
    setEqualizer('#eq_3 .equalizer', 1000, 2)

// Единственное место, где я ставлю ';'
// Некоторые минимайзеры коряво склеивают скрипты, если в конце файла нет ';' и перевода строки.
});
