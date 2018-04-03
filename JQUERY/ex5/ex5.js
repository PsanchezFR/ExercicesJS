function firstAnim(animSpeed) {
    $('<div></div>').appendTo($('#animation1'))
        .animate(
            {
                left: $('#animation1').width() / 2 - 20
            },
            animSpeed,
            () => {

            }
        )
        .animate(
            {
                left: $('#animation1').width() - 20
            },
            animSpeed,
            () => {

            }
        )
        .animate(
            {
                top: $('#animation1').height() / 2 - 20
            },
            animSpeed,
            () => {

            }
        )
        .animate(
            {
                top: $('#animation1').height() - 20
            },
            animSpeed,
            () => {

            }
        )
        .animate(
            {
                left: $('#animation1').width() / 2 - 20
            },
            animSpeed,
            () => {

            }
        )
        .animate(
            {
                left: 0
            },
            animSpeed,
            () => {

            }
        )
        .animate(
            {
                top: $('#animation1').height() / 2 - 20
            },
            animSpeed,
            () => {

            }
        )
        .animate(
            {
                top: 0
            },
            animSpeed,
            () => {

            }
        )
        .fadeOut()
}

function secondAnim(animSpeed) {
    $('<div>').css('background', '#6BE8E0').appendTo($('#animation2'))
        .animate(
            {
                left: $('#animation2').width() / 2 - 20
            },
            animSpeed,
            "linear",
            () => {

            }
        ).delay(animSpeed-50)
        .animate(
            {
                left: $('#animation2').width() - 20
            },
            animSpeed,
            () => {

            }
        )
        .animate(
            {
                top: $('#animation2').height() / 2 - 20
            },
            animSpeed,
            "linear",
            () => {

            }
        ).delay(animSpeed-50)
        .animate(
            {
                top: $('#animation2').height() - 20
            },
            animSpeed,
            () => {

            }
        )
        .animate(
            {
                left: $('#animation2').width() / 2 - 20
            },
            animSpeed,
            "linear",
            () => {

            }
        ).delay(animSpeed-50)
        .animate(
            {
                left: 0
            },
            animSpeed,
            () => {

            }
        )
        .animate(
            {
                top: $('#animation2').height() / 2 - 20
            },
            animSpeed,
            "linear",
            () => {

            }
        ).delay(animSpeed-50)
        .animate(
            {
                top: 0
            },
            animSpeed,
            () => {

            }
        )
        .fadeOut()
}

function thirdAnim(animSpeed) {
    $('<div>').css('background', '#26641a').css('border-radius', '100%').appendTo($('#animation3'))
        .animate(
            {
                left: $('#animation3').width() / 2 - 20,
                top: $('#animation3').height() - 20
            },
            animSpeed,
            "linear",
            () => {

            }
        )
        .animate(
            {
                left: $('#animation3').width(),
                top: 0
            },
            animSpeed,
            "swing",
            () => {

            }
        )
}

function fourthAnim(animSpeed) {
    $('<div>').css('background', '#b84300').css('border-radius', '100%').css('left', '80px').appendTo($('#animation4'))
        .animate(
            {
                top: $('#animation4').height()-10
            },
            animSpeed,
            "linear",
            () => {

            }
        )
        .animate(
            {
                left: $('#animation4').width() / 2 - 50,
                width: 100
            },
            animSpeed,
            "swing",
            () => {

            }
        )
        .fadeOut(50)
}

function fifthAnim(animSpeed, number) {
    for (let i = 0; i < number; i++) {
        let hueStep = 360/number;
        $('<div>').appendTo($('#animation5'))
            .animate(
                {
                    top: 0,
                    left: i * 20

                },
                0,
                "linear",
                () => {

                }
            )
            .animate(
                {
                    top: $('#animation5').height()-20,

                },
                i*150,
                "swing",
                function () {
                    $(this).css('background-color', 'hsl('+ hueStep * i +',100%,50%)');
                }
            )
            .animate(
                {
                    top: 0
                },
                animSpeed,
                "swing",
                () => {

                }
            )
            .fadeOut()
    }

}


$(function () {

    setInterval(() => {
        firstAnim(800)
    }, 800);

    setInterval(() => {
        secondAnim(500)
    }, 600);

    setInterval(() => {
        thirdAnim(500)
    }, 1000);

    setInterval(() => {
        fourthAnim(500)
    }, 1000);

    setInterval(() => {
        fifthAnim(500, 10)
    }, 2000);
});