function onYouTubePlayerAPIReady() {
    player = new YT.Player('Youtube', {
        events: {'onReady': onPlayerReady}
    });
}

if (document.getElementsByTagName('textarea').length > 0) {
    var ta = document.getElementsByTagName('textarea');

    for (var i = 0; i < ta.length; i++) {
        ta[i].value = '';
    }
}

function onPlayerReady(event) {
    document.getElementById("overlay").addEventListener("click", function () {
        player.pauseVideo();
    });
    if (document.getElementById('closeVideo')) {
        document.getElementById('closeVideo').addEventListener("click", function () {
            player.pauseVideo();
        });
    }
}

if (document.querySelector('.products-columns')) {
    document.querySelector('.products-columns').style.width = document.querySelector('.products-columns').children.length * 189 + 'px';
}

NProgress.start();

jQuery(document).ready(function () {

    if (document.getElementById('largeImg')) {
        document.getElementById('largeImg').src = document.querySelector('.activeContent').children[0].dataset.src;
    }

    if ($(document).scrollTop() > 677) {
        $('.scrollTop').css({'opacity': '1', 'cursore': 'pointer', 'visibility': 'visible'});
    }

    if ($(document).scrollTop() >= 400) {
        if ($('.checkout-cart').length > 0) {
            $('.checkout-cart').css({
                position: 'fixed',
                top: 20
            });
        }
    } else if ($('.checkout-cart').length > 0 && $(document).scrollTop() >= 1230) {
        $('.checkout-cart').css({
            position: 'absolute',
            top: 1255
        })
    }

    $(window).scroll(function () {
        if ($(document).scrollTop() > 677) {
            $('.scrollTop').css({'opacity': '1', 'cursore': 'pointer', 'visibility': 'visible'});
        }
        else {
            $('.scrollTop').css({'opacity': '0', 'cursore': 'default', 'visibility': 'hidden'});
        }
        if ($('.checkout-cart').length > 0 && $(document).scrollTop() >= 400 && $(document).scrollTop() < 1230) {
            $('.checkout-cart').css({
                position: 'fixed',
                top: 20
            });
        } else if ($('.checkout-cart').length > 0 && $(document).scrollTop() >= 1230) {
            $('.checkout-cart').css({
                position: 'absolute',
                top: 1255
            })
        }

        else {
            if ($('.checkout-cart').length > 0) {
                $('.checkout-cart').css({
                    position: 'static'
                });
            }
        }

    });

    $('.scrollTop').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });

    $('.searchform :text').keyup(function () {
        if ($(this).val().length != 0) {
            console.log($(this).val());
            $(this).css({
                "fontSize": '14px',
                "color": '#424e56'
            })

        } else {
            $(this).css({
                "fontSize": '12px',
                "color": '#bbbbbb'
            });
        }
    });

    $('.enterClub :text').keyup(function () {
        if ($(this).val().length != 0) {
            console.log($(this).val());
            $(this).css({
                "fontSize": '14px',
                "color": '#424e56'
            })

            $('.enterClub form').submit(function () {
                $(this).hide();
                $('.enterClub h2').hide();
                $('.sended').show();
            });
        } else {
            $(this).css({
                "fontSize": '12px',
                "color": '#bbbbbb'
            });
        }
    });

    if (!!jQuery('.scrollbar-inner').length) {
        jQuery('.scrollbar-inner').scrollbar();
    }
    var cnf1 = $('.discountSlider .owl-carousel');

    if (cnf1.length > 0) {
        cnf1.owlCarousel({
            loop: false,
            items: 4,
            margin: 14,
            nav: true,
            navText: ["<img src='img/prevt_right_x1.png'>", "<img src='img/next_right_x1.png'>"],
            dots: false,
            navContainer: '.discNav'
        });
    }

    var cnf2 = $('.sameSlider .owl-carousel');

    if (cnf2.length > 0) {
        cnf2.owlCarousel({
            loop: false,
            items: 4,
            margin: 14,
            nav: true,
            navText: ["<img src='img/prevt_right_x1.png'>", "<img src='img/next_right_x1.png'>"],
            dots: false,
            navContainer: '#sameNav'

        });
    }

    var cnf3 = $('.backetSlider .owl-carousel');

    if (cnf3.length > 0) {
        cnf3.owlCarousel({
            loop: false,
            items: 4,
            margin: 14,
            nav: true,
            navText: ["<img src='img/prevt_right_x1.png'>", "<img src='img/next_right_x1.png'>"],
            dots: false,
            navContainer: '.backNav'

        });
    }

    var cnf4 = $('.goods .owl-carousel');

    if (cnf4.length > 0) {
        cnf4.owlCarousel({
            loop: true,
            items: 3,
            margin: 10,
            nav: true,
            navText: ["назад", "вперед"],
            dots: true,
            navContainer: '.navGoods',
            dotsContainer: '.dotsGoods',
            autoplay: true,
            autoplayTimeout: 1000,
            dotsEach: true
        });
    }

    var leftMenu = document.getElementsByClassName('tech')[0].getBoundingClientRect().left;
    var top;

    $('.tech>li').mouseenter(function () {
        // top = $(this).position().top;
        $(this).find('.tovary').css({
            left: leftMenu - $(this).position().left,
            top: $(this).height(),
            width: 1164
        });
    });


    $('.bucket').click(function () {
        $('.openBucket').toggle();

    });

    $('.close').click(function () {
            $(this).parent().parent().hide();
        }
    );

    $('.buttonDescription').click(function () {
        var currentHeight = $('.slideDescription').height();
        var defaultHeight = 57;
        var totalHeight = $('.slideDescription p').height();

        if (currentHeight == defaultHeight) {
            $('.slideDescription').animate({
                'height': totalHeight
            }, 500);
            $(this).find('span').text('СКРЫТЬ');
        } else {
            $('.slideDescription').animate({
                'height': defaultHeight
            }, 500);
            $(this).find('span').text('ЧИТАТЬ ДАЛЬШЕ');
        }
    })

    $(document).mouseup(function (e) {
        var container = $('.openBucket');

        if (container.has(e.target).length === 0) {
            container.hide();
        }
    });

    $('.lookedTov').click(function () {
        $('.looked').css({
            left: $('.lookedTov').position().left - $('.looked').width() / 2,
            bottom: 60
        });
        $('.looked').toggle();

    });

    $(document).mouseup(function (e) {
        var container = $('.looked');

        if (container.has(e.target).length === 0) {
            container.hide();
        }
    });


    $('.choiseCity a, #overlay').click(function () {
        $('.choiseCity').hide();
        $('#overlay').fadeOut(200);
    });

    $('.choiseCity span, .changeCity').on('click', function (e) {
        e.preventDefault();
        $('.choiseCity').hide();
        $('#overlay').fadeIn(100,
            function () {
                $('.otherCity').stop()
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
            });

        $('#overlay').click(function () {
            $('.otherCity').stop(true).animate({opacity: 0, top: '45%'}, 200,
                function () {
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(200);
                }
            );
        });
    });

    /*buy one click*/

    $('.fastBuy').on('click', function (e) {
        e.preventDefault();
        $('#overlay').fadeIn(100,
            function () {
                $('.buyOneClick').stop()
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
            });

        $('#overlay').click(function () {
            $('.buyOneClick').stop(true).animate({opacity: 0, top: '45%'}, 200,
                function () {
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(200);
                }
            );
        });
    });


    /*Личный кабинет табуляция*/

    $('.barChoice').click(function () {
        var active = $('.activeBarChoice');
        var activeBar = $('.activeBarContent');
        var next = $(this).index();

        active.removeClass('activeBarChoice');
        activeBar.removeClass('activeBarContent');
        $(this).addClass('activeBarChoice');
        $('.barContent').eq(next).addClass('activeBarContent');
    });


    /* слайдер цен */

    if (document.querySelector('#priceBar')) {
        $("#priceBar").slider({
            min: 0,
            max: 1000,
            values: [0, 1000],
            range: true,
            stop: function (event, ui) {
                $("input#minCost").val($("#priceBar").slider("values", 0));
                $("input#maxCost").val($("#priceBar").slider("values", 1));

            },
            slide: function (event, ui) {
                $("input#minCost").val($("#priceBar").slider("values", 0));
                $("input#maxCost").val($("#priceBar").slider("values", 1));
            }
        });
        $("input#minCost").change(function () {

            var value1 = $("input#minCost").val();
            var value2 = $("input#maxCost").val();

            if (parseInt(value1) > parseInt(value2)) {
                value1 = value2;
                $("input#minCost").val(value1);
            }
            $("#priceBar").slider("values", 0, value1);
        });
        $("input#maxCost").change(function () {

            var value1 = $("input#minCost").val();
            var value2 = $("input#maxCost").val();

            if (value2 > 1000) {
                value2 = 1000;
                $("input#maxCost").val(1000)
            }

            if (parseInt(value1) > parseInt(value2)) {
                value2 = value1;
                $("input#maxCost").val(value2);
            }
            $("#priceBar").slider("values", 1, value2);
        });
    }


// фильтрация ввода в поля
    jQuery('#minCost, #maxCost').keypress(function (event) {
        var key, keyChar;
        if (!event) var event = window.event;

        if (event.keyCode) key = event.keyCode;
        else if (event.which) key = event.which;

        if (key == null || key == 0 || key == 8 || key == 13 || key == 9 || key == 46 || key == 37 || key == 39) return true;
        keyChar = String.fromCharCode(key);

        if (!/\d/.test(keyChar))    return false;

    });

    /*filter hide*/

    $('.nameCateg').click(function () {
        $(this).next().stop().slideToggle();
        $(this).toggleClass('hiden');
    });

    /*choice*/

    $('.catalog input').click(function () {
        var parent = $(this).parents('.catalog');
        var left, right;

        $('.choiceTov').css('display', 'flex');
        left = parent.position().left + parent.width() - 10;
        top = parent.position().top + 35;
        console.log(
            parent.position().top + ',' +
            $(this).parent().position().top
        )
        $('.choiceTov').css({
            left: left,
            top: $(this).parent().position().top - 10
        });
    })

    $(document).mouseup(function (e) {
        var popup = $(".choiceTov");
        if (!$('.choiceTov').is(e.target) && !popup.is(e.target) && popup.has(e.target).length == 0) {
            popup.hide();
        }
    });

    //compare

    $('.discTovCompare, .addCompare').click(function () {
        var num = $('.compareCounter').text();
        $('.compareCounter').text(++num);
    });

    /*setAside24 counter*/

    $('.setAside').click(function () {
        var num = $('.setAsideCounter').text();
        $('.setAsideCounter').text(++num);
    });

    //video

    $('.activeChoiceReview').on('click', function (e) {
        e.preventDefault();
        $('#overlay').fadeIn(100,
            function () {
                $('.video').stop()
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
            });

        $('#overlay, .closeWindow').click(function () {
            $('.video').stop(true).animate({opacity: 0, top: '45%'}, 200,
                function () {
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(200);
                }
            );
        });
    });

    sliderRotatore();

    //popImg
    $('.defCol').click(function () {

        var activeCol = $('.activeColor ');
        var actCont = $('.imgs .activeContent');
        var cont = $('.imgs .content');
        var next = $(this).index();
        var active = $('.activeTovImg');


        activeCol.removeClass('activeColor');
        actCont.removeClass('activeContent');
        $(this).addClass('activeColor');
        $(cont[next]).addClass('activeContent');
        active.removeClass('activeTovImg');
        document.querySelector('.activeContent img').classList.add('activeTovImg');
        document.getElementById('largeImg').src = document.querySelector('.activeContent img').dataset.src;
        document.getElementById('lImg').src = document.querySelector('.activeContent img').dataset.src;
        sliderRotatore();
    });

    var a = document.querySelectorAll('.imgs .content');

    a.forEach(function (item) {
        item.style.width = item.children.length * 100 - 10 + 'px';
    });

    /*popImg*/

    $('.popImg').on('click', function (e) {
        e.preventDefault();


        $('#lImg').attr('src', $('.activeContent .activeTovImg').data().src);


        var cur = document.querySelector('.activeContent').cloneNode(true);
        cur.style.width = 90 + 'px';
        cur.style.margin = 0;
        document.querySelector('#imgsBOX').appendChild(cur);

        var height = 95;
        var count = 1;
        var num = 4;
        var list = document.querySelector('#imgsBOX .activeContent');
        var listItems = list.querySelectorAll('img');
        var positionTop = 0;

        document.getElementsByClassName('topS')[0].onclick = function () {
            positionTop = Math.min(positionTop + height * count, 0);
            list.style.marginTop = positionTop + 'px';
        }

        document.getElementsByClassName('bottomS')[0].onclick = function () {
            positionTop = Math.max(positionTop - height * count, -height * (listItems.length - num));
            list.style.marginTop = positionTop + 'px';
        }


        $(' #imgsBOX img').click(function () {
            var active = $('.activeTovImg');
            var prod = $('.imgs .activeContent img');
            active.removeClass('activeTovImg');
            $(this).addClass('activeTovImg');
            prod.eq($(this).index()).addClass('activeTovImg');
            console.log($(this).index());


            var src = $('.activeTovImg').data().src;
            $('#largeImg').attr('src', src);
            $('#lImg').attr('src', src);


            if (document.querySelector('#imgsBOX .activeContent img').classList.contains('activeTovImg')) {
                $('.prevIm').css('opacity', '0.3');
            } else {
                $('.prevIm').css('opacity', '1');
            }
            if (document.querySelector('#imgsBOX .activeContent img:last-Child').classList.contains('activeTovImg')) {
                $('.nextIm').css('opacity', '0.3');
            } else {
                $('.nextIm').css('opacity', '1');
            }
        });

        $('body').on('keydown', function (eventObject) {
            if ($('.popUpImg').css('display') == 'block') {
                if (eventObject.keyCode == 39) {
                    var active = $('.activeTovImg ');
                    var next = active.next();

                    if (next.length === 0) {
                        return;
                    }
                    active.removeClass('activeTovImg');
                    next.addClass('activeTovImg');
                    $('.bottomS').trigger('click');
                    var src = $('.activeTovImg').data().src;
                    $('#largeImg').attr('src', src);
                    $('#lImg').attr('src', src);
                    if (document.querySelector('#imgsBOX .activeContent img').classList.contains('activeTovImg')) {
                        $('.prevIm').css('opacity', '0.3');
                    } else {
                        $('.prevIm').css('opacity', '1');
                    }
                    if (document.querySelector('#imgsBOX .activeContent img:last-Child').classList.contains('activeTovImg')) {
                        $('.nextIm').css('opacity', '0.3');
                    } else {
                        $('.nextIm').css('opacity', '1');
                    }

                }
                else if (eventObject.keyCode == 37) {
                    var active = $('.activeTovImg ');
                    var prev = active.prev();

                    if (prev.length === 0) {
                        return;
                    }
                    active.removeClass('activeTovImg');
                    prev.addClass('activeTovImg');
                    $('.topS').trigger('click');
                    var src = $('.activeTovImg').data().src;
                    $('#largeImg').attr('src', src);
                    $('#lImg').attr('src', src);
                    if (document.querySelector('#imgsBOX .activeContent img').classList.contains('activeTovImg')) {
                        $('.prevIm').css('opacity', '0.3');
                    } else {
                        $('.prevIm').css('opacity', '1');
                    }
                    if (document.querySelector('#imgsBOX .activeContent img:last-Child').classList.contains('activeTovImg')) {
                        $('.nextIm').css('opacity', '0.3');
                    } else {
                        $('.nextIm').css('opacity', '1');
                    }
                }
            }

        });
        $('.prevIm').unbind('click');
        $('.nextIm').unbind('click');
        $('.prevIm').click(function () {
            var active = $('.activeTovImg ');
            var prev = active.prev();

            if (prev.length === 0) {
                return;
            }
            active.removeClass('activeTovImg');
            prev.addClass('activeTovImg');
            $('.topS').trigger('click');
            var src = $('.activeTovImg').data().src;
            $('#largeImg').attr('src', src);
            $('#lImg').attr('src', src);

            if (document.querySelector('#imgsBOX .activeContent img').classList.contains('activeTovImg')) {
                $(this).css('opacity', '0.3');
            } else {
                $(this).css('opacity', '1');
            }

            if (document.querySelector('#imgsBOX .activeContent img:last-Child').classList.contains('activeTovImg')) {
                $('.nextIm').css('opacity', '0.3');
            } else {
                $('.nextIm').css('opacity', '1');
            }
        });
        if (document.querySelector('#imgsBOX .activeContent img').classList.contains('activeTovImg')) {
            $('.prevIm').css('opacity', "0.3")
        } else {
            $('.prevIm').css('opacity', "1")
        }
        $('.nextIm').click(function () {

            var active = $('.activeTovImg ');
            var next = active.next();

            if (next.length === 0) {
                return;
            }
            active.removeClass('activeTovImg');
            next.addClass('activeTovImg');
            $('.bottomS').trigger('click');
            var src = $('.activeTovImg').data().src;
            $('#largeImg').attr('src', src);
            $('#lImg').attr('src', src);

            if (document.querySelector('#imgsBOX .activeContent img').classList.contains('activeTovImg')) {
                $('.prevIm').css('opacity', '0.3');
            } else {
                $('.prevIm').css('opacity', '1');
            }

            if (document.querySelector('#imgsBOX .activeContent img:last-Child').classList.contains('activeTovImg')) {
                $(this).css('opacity', '0.3');
            } else {
                $(this).css('opacity', '1');
            }
        });


        $('#overlay').fadeIn(100,
            function () {
                $('.popUpImg').stop()
                    .css('display', 'block')
                    .animate({opacity: 1, top: '150'}, 200);
            });
        $('html,body').animate({
            scrollTop: 50
        }, 500);

        $('#overlay, .closeWindow').click(function () {
            $('.popUpImg').stop(true).animate({opacity: 0, top: '100'}, 200,
                function () {
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(200);
                    document.querySelector('#imgsBOX').removeChild(document.querySelector('#imgsBOX .content'));
                }
            );
        });
    });


    //search

    $('#search').on('keyup', function () {
        var top = $('.searchform').position().top + $('.searchform ').height() - 18;
        var left = $('.searchform').position().left + 20;

        $('.searchResalt').css({
            left: left,
            top: top,
            display: 'block'
        }).animate({
            opacity: 1
        }, 200);
    })

    $('#search').on('blur', function () {

        $('.searchResalt').animate({
            opacity: 1
        }, 200, function () {
            $('.searchResalt').css({
                display: 'none'
            })
        });
    })


    //your price

    $('.yourPrice').on('click', function (e) {
        e.preventDefault();
        $('#overlay').fadeIn(100,
            function () {
                $('.yourPricePop').stop()
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
            });

        $('#overlay, .closeWindow').click(function () {
            $('.yourPricePop').stop(true).animate({opacity: 0, top: '45%'}, 200,
                function () {
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(200);
                }
            );
        });
    });

    //comment ga
    $('.enterSmartLIGA').on('click', function (e) {
        e.preventDefault();
        var close1 = document.querySelector('.howEnterSmartLIGA .closeWindow');
        var close2 = document.querySelector('#overlay');

        function close1func() {
            ga('send', 'event', 'How to join club?', 'Close')
        }

        $('#overlay').fadeIn(100,
            function () {
                $('.howEnterSmartLIGA').stop()
                    .css('display', 'block')
                    .animate({opacity: 1, top: '150'}, 200);

                $('html,body').animate({
                    scrollTop: 50
                }, 500);

                close1.addEventListener('click', close1func);
                close2.addEventListener('click', close1func);
                console.log(1);
            });

        $('#overlay, .closeWindow').click(function () {


            $('.howEnterSmartLIGA').stop(true).animate({opacity: 0, top: '100'}, 200,
                function () {
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(200);
                    close1.removeEventListener('click', close1func);
                    close2.removeEventListener('click', close1func);
                }
            );
        });
    });

    //comment ga

    $('.clubLIGAdisc, .buyTov').on('click', function (e) {
        e.preventDefault();
        var closeclubLIGAdisc1 = document.querySelector('.onlySmartLIGA .closeWindow');
        var closeclubLIGAdisc2 = document.querySelector('#overlay');

        function closeclubLiga() {
            ga('send', 'event', 'Only members', 'Close')
        }

        $('#overlay').fadeIn(100,
            function () {
                $('.onlySmartLIGA').stop()
                    .css('display', 'block')
                    .animate({opacity: 1, top: '150'}, 200);

                $('html,body').animate({
                    scrollTop: 50
                }, 500);

                closeclubLIGAdisc1.addEventListener('click', closeclubLiga);
                closeclubLIGAdisc2.addEventListener('click', closeclubLiga);
                console.log(2);
            });

        $('#overlay, .closeWindow').click(function () {
            if ($('.onlySmartLIGA').css('display') == 'block') {
                $('#overlay1').fadeIn(200);
                setTimeout(function () {
                    var pos = $('.bottTakeOrder').position();

                    $('.freeDelInfo').css({
                        bottom: 60,
                        left: pos.left - $('.freeDelInfo').width() / 2 + 35,
                        opacity: 1
                    });

                    $('.freeDelInfo').fadeIn();
                }, 500);
            }
            $('.onlySmartLIGA').stop(true).animate({opacity: 0, top: '100'}, 200,
                function () {
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(200);
                    closeclubLIGAdisc1.removeEventListener('click', closeclubLiga);
                    closeclubLIGAdisc2.removeEventListener('click', closeclubLiga);

                }
            );
        });
    });

    $('#overlay1').click(function () {
        $('.freeDelInfo').stop(true).animate({opacity: 0}, 200,
            function () {
                $(this).css('display', 'none');
                $('#overlay1').fadeOut(200);
            }
        );
    });


    //refund money
    //comment ga

    $('.refMoney, .refMoneyActive').on('click', function (e) {
        e.preventDefault();
        var closeRef1 = document.querySelector('.refundMoney .closeWindow');
        var closeRef2 = document.querySelector('#overlay');

        function closeRef() {
            ga('send', 'event', 'Money refunds', 'Close')
        }

        $('#overlay').fadeIn(100,
            function () {
                $('.refundMoney').stop()
                    .css('display', 'block')
                    .animate({opacity: 1, top: '150'}, 200);

                $('html,body').animate({
                    scrollTop: 50
                }, 500);

                closeRef1.addEventListener('click', closeRef);
                closeRef2.addEventListener('click', closeRef);
            });


        $('#overlay, .closeWindow').click(function () {
            $('.refundMoney').stop(true).animate({opacity: 0, top: '100'}, 200,
                function () {
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(200);
                    closeRef1.removeEventListener('click', closeRef);
                    closeRef2.removeEventListener('click', closeRef);
                });
        });
    });

    //togle form
    $('.respondReview a').click(function () {
        $('html,body').animate({
            scrollTop: $('.textReview').position().top
        }, 500, function () {
            $('.textReview').focus();
        });

    });

    //imgs

    $('.imgs img, #imgsBOX img').click(function () {
        var active = $('.activeTovImg ');
        active.removeClass('activeTovImg');
        $(this).addClass('activeTovImg');
        var src = $('.activeTovImg').data().src;
        $('#largeImg').attr('src', src);
        $('#lImg').attr('src', src);
    });

    /*href for Pop*/
    $('.headLIGA form').submit(function (e) {
        e.preventDefault();
        window.location.href = 'bucket.html';
    });

    $('.buyOneClick form').submit(function (e) {
        e.preventDefault();
        window.location.href = 'success.html';
    });

    $('.forms').click(function () {
        $('.forms.activeForm form').unbind('submit');
        var active = $('.activeForm ');
        active.removeClass('activeForm');
        $(this).addClass('activeForm');
        /*validationForms*/
        $('.forms.activeForm form ').submit(function (e) {
            e.preventDefault();
            window.location.href = 'privatRoom.html';
            /* var data = {
             pass: $(".forms.activeForm .pass").val(),
             repass: $(".forms.activeForm .repass").val() || "none",
             email: $(".forms.activeForm .email").val()
             };


             function isValidEmail(emailAddress) {
             var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
             return pattern.test(emailAddress);
             };
             function isValidPass(pass, repass) {
             if (repass != "none" || repass.length > 0) {
             return pass == repass;
             } else if (repass == "none") {
             return !!pass;
             }
             }

             if (isValidEmail(data['email']) && isValidPass(data['pass'], data['repass'])) {
             return true;
             }
             else {
             $('html,body').animate({
             scrollTop: $(".forms.activeForm").position().top
             });
             if (!isValidEmail(data['email']) || data['email'].length == 0) {
             $(".forms.activeForm .email").css('border-color', 'red');
             email: $(".forms.activeForm .email").focus();
             }
             else if (!isValidPass(data["pass"], data["repass"]) || data['pass'] == 0) {
             $(".forms.activeForm .pass").css('border-color', 'red');
             $(".forms.activeForm .pass").focus();
             }
             }
             return false;*/
        });
    });

    $('.callBack').on('click', function (e) {
        e.preventDefault();
        $('.choiseCity').hide();
        $('#overlay').fadeIn(100,
            function () {
                $('.callBackForm').stop()
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
            });

        $('#overlay').click(function () {
            $('.callBackForm').stop(true).animate({opacity: 0, top: '45%'}, 200,
                function () {
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(200);
                }
            );
        });
    });

    $('.TellYourFriends').on('click', function (e) {
        e.preventDefault();
        $('.tellFriends').hide();
        $('#overlay').fadeIn(100,
            function () {
                $('.tellFriends').stop()
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
            });

        $('#overlay').click(function () {
            $('.tellFriends').stop(true).animate({opacity: 0, top: '45%'}, 200,
                function () {
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(200);
                }
            );
        });
    });


    /*show more review*/
    var reviews = $('.review');
    var view = 3;

    for (var i = 0; i < view; i++) {
        $(reviews[i]).css('display', 'block');
    }

    $('.lookAllRewievs').click(function () {
        view += 5;
        for (var i = 0; i < view; i++) {
            $(reviews[i]).css('display', 'block');
        }

    });
    function sliderRotatore() {
        if (document.querySelector('.imgs .activeContent')) {
            var width1 = 100;
            var count1 = 1;
            var num1 = 4;
            var list1 = document.getElementsByClassName('activeContent')[0];
            var listItems1 = list1.querySelectorAll('img');
            var positionLeft1 = 0;
            list1.style.marginLeft = positionLeft1 + 'px';

            document.getElementsByClassName('imgLeft')[0].onclick = function () {
                positionLeft1 = Math.min(positionLeft1 + width1 * count1, 0);
                list1.style.marginLeft = positionLeft1 + 'px';
            }

            document.getElementsByClassName('imgRight')[0].onclick = function () {
                positionLeft1 = Math.max(positionLeft1 - width1 * count1, -width1 * (listItems1.length - num1));
                list1.style.marginLeft = positionLeft1 + 'px';
            }
        }
    };

    // Способы доставки и оплаты по-умолчанию
    $('.choice-of-delivery-method input').prop('checked', false);
    $('.choice-of-delivery-method input#delivery-method1').prop('checked', true);

    $('.choice-of-payment-method input').prop('checked', false);
    $('.choice-of-payment-method input#payment-method1').prop('checked', true);

    // Выбор способа доставки
    $('.choice-of-delivery-method input').click(function () {
        var inputId = $(this).attr('id');
        console.log(inputId);
        $('.for-delivery-method').slideUp();
        $('#for-' + inputId + '').slideDown();
    });

    // Есть или нет аккаунта
    $('#have-account').click(function () {
        $('#if-have-account').slideUp();
        $('#if-not-have-account').slideDown();
        return false;
    });

    $('#not-have-account').click(function () {
        $('#if-not-have-account').slideUp();
        $('#if-have-account').slideDown();
        return false;
    });

    // установка e-mail по-умолчанию
    $('#email-for-changes').val('segey.noviy@gmail.com').addClass('true');
    //Имзенить e-mail;
    $('#change-email').click(function () {
        $('#email-for-changes').removeClass('true').val('').focus();
        return false;
    });
    NProgress.done();

});

/*google analitic function */

function createFunctionWithTimeout(callback, opt_timeout) {
    var called = false;

    function fn() {
        if (!called) {
            called = true;
            callback();
        }
    }

    setTimeout(fn, opt_timeout || 1000);
    return fn;
}

function handleOutboundLinkClicks(event) {
    ga('send', 'event', {
        eventCategory: 'Outbound Link',
        eventAction: 'click',
        eventLabel: event.target.href
    });
}

/*site header*/

//city start

var ChooseCity = document.querySelector('.changeCity');
ChooseCity.addEventListener('click', function () {
    ga('send', 'event', 'Site header', 'Choose city');
});

var ChooseAnotherCity = document.querySelector('.choiseCity span');
ChooseAnotherCity.addEventListener('click', function () {
    ga('send', 'event', 'Site header', 'Choose another city')
});

var CityCorrect = document.querySelector('.choiseCity a');
CityCorrect.addEventListener('click', function () {
    ga('send', 'event', 'Site header', 'City correct')
});

//city end

var AreYouSupplier = document.querySelector('.AreYouSupplier');
AreYouSupplier.addEventListener('click', function () {
    ga('send', 'event', 'Site header', 'Are you supplier?')
});
var pageBonus = document.querySelector('.pageBonus');
pageBonus.addEventListener('click', function (event) {
    ga('send', 'event', 'Site header', 'Invite 200 uah')
});

var TellYourFriends = document.querySelector('.TellYourFriends');
TellYourFriends.addEventListener('click', function (event) {
    ga('send', 'event', 'Site header', 'Tell friends')
});

//share start

var facebook = document.querySelector('.facebook.shareButt');
facebook.addEventListener('click', function (event) {
    ga('send', 'event', 'Site header', 'Share Fb')
});

var twiter = document.querySelector('.twiter.shareButt');
twiter.addEventListener('click', function (event) {
    ga('send', 'event', 'Site header', 'Share Tw')
});

var vk = document.querySelector('.vk.shareButt');
vk.addEventListener('click', function (event) {
    ga('send', 'event', 'Site header', 'Share Vk')
});

//share end
//bucket start

var BucketPopup = document.querySelector('.bucket');
BucketPopup.addEventListener('click', function (event) {
    ga('send', 'event', 'Site header', 'Bucket popup')
});

var BucketEdit = document.querySelector('.correctOrder');
BucketEdit.addEventListener('click', function (event) {
    ga('send', 'event', 'Site header', 'Bucket edit')
});

var BucketCheckout = document.querySelector('.takeOrder');
BucketCheckout.addEventListener('click', function (event) {
    ga('send', 'event', 'Site header', 'Bucket checkout')
});

//bucket end


if (document.querySelector('.LogIn')) {
    var LogIn = document.querySelector('.LogIn');
    LogIn.addEventListener('click', function (event) {
        ga('send', 'event', 'Site header', 'Log in')
    });
}
;

if (document.querySelector('.Registration')) {
    var Registration = document.querySelector('.Registration');
    Registration.addEventListener('click', function (event) {
        ga('send', 'event', 'Site header', 'Registration')
    });
}
;

//search start

var Search = document.querySelector('.searchform form');
Search.addEventListener('submit', function (event) {
    ga('send', 'event', 'Site header', 'Search', {
        hitCallback: createFunctionWithTimeout(function () {
            Search.submit();
        })
    });
});

var AllSearch = document.querySelector('.AllSearch');
AllSearch.addEventListener('click', function (event) {
    ga('send', 'event', 'Site header', 'Search show all')
});

//search end

//subMenuButt start

var discover = document.querySelector('.discover.enterSmartLIGA');
BucketPopup.addEventListener('click', function (event) {
    ga('send', 'event', 'Site header', 'Know more')
});

var seeAll = document.querySelectorAll('.lookAll');
for (var i = 0; i < seeAll.length; i++) {
    seeAll[i].addEventListener('click', function (event) {
        ga('send', 'event', 'Site header', 'See all')
    });
}
//subMenuButt End

//call/mailBack start
var callBack = document.querySelector('.callBack');
BucketPopup.addEventListener('click', function (event) {
    ga('send', 'event', 'Site header', 'Call back popup')
});

var CallBackButton = document.querySelector('.callBackForm form');
CallBackButton.addEventListener('submit', function (event) {
    ga('send', 'event', 'Site header', 'Call back button', {
        hitCallback: createFunctionWithTimeout(function () {
            CallBackButton.submit();
        })
    });
});

var sendMessage = document.querySelector('.sendMassege');
sendMessage.addEventListener('click', function () {
    ga('send', 'event', 'Site header', 'Send message')
});
//call/mailBack end


/*SITE BOTTOM*/

var JoinTheClub = document.querySelector('.enterClub form');
JoinTheClub.addEventListener('submit', function (event) {
    ga('send', 'event', 'Site bottom', 'Join the club', {
        hitCallback: createFunctionWithTimeout(function () {
            JoinTheClub.submit();
        })
    });
});

/*shopingClub bottom start*/

var HowItWorks = document.querySelector('.HowItWorks');
HowItWorks.addEventListener('click', function () {
    ga('send', 'event', 'Site bottom', 'How it works?')
});

var About = document.querySelector('.About');
About.addEventListener('click', function () {
    ga('send', 'event', 'Site bottom', 'About')
});
var Shipping = document.querySelector('.Shipping');
Shipping.addEventListener('click', function () {
    ga('send', 'event', 'Site bottom', 'Shipping')
});

var Returns = document.querySelector('.Returns');
Returns.addEventListener('click', function () {
    ga('send', 'event', 'Site bottom', 'Returns')
});

var AreYouSupplierBottom = document.querySelector('.AreYouSupplierBottom');
AreYouSupplierBottom.addEventListener('click', function () {
    ga('send', 'event', 'Site bottom', 'Are you supplier?')
});

var Contacts = document.querySelector('.Contacts');
Contacts.addEventListener('click', function () {
    ga('send', 'event', 'Site bottom', 'Contacts')
});

var TermsOfUse = document.querySelector('.TermsOfUse');
TermsOfUse.addEventListener('click', function () {
    ga('send', 'event', 'Site bottom', 'Terms of Use')
});

/*shopingClub bottom end*/

scrollTop

var scrollTop = document.querySelector('.scrollTop');
scrollTop.addEventListener('click', function () {
    ga('send', 'event', 'Site bottom', 'Scroll up')
});

var LogInBottom = document.querySelector('.LogInBottom');
LogInBottom.addEventListener('click', function () {
    ga('send', 'event', 'Site bottom', 'Log in')
});

var RegistrationBottom = document.querySelector('.RegistrationBottom');
RegistrationBottom.addEventListener('click', function () {
    ga('send', 'event', 'Site bottom', 'Registration')
});

var LostPassBottom = document.querySelector('.LostPassBottom');
LostPassBottom.addEventListener('click', function () {
    ga('send', 'event', 'Site bottom', 'Forgot your password?')
});

var RefundsBottom = document.querySelector('.RefundsBottom');
RefundsBottom.addEventListener('click', function () {
    ga('send', 'event', 'Site bottom', 'Refunds')
});

var invite200UAHBottom = document.querySelector('.invite200UAHBottom');
invite200UAHBottom.addEventListener('click', function () {
    ga('send', 'event', 'Site bottom', 'Invite 200 uah')
});

var TellFriendsBottom = document.querySelector('.TellFriendsBottom');
TellFriendsBottom.addEventListener('click', function () {
    ga('send', 'event', 'Site bottom', 'Tell friends')
});

var GiveFriendCardBottom = document.querySelector('.GiveFriendCardBottom');
GiveFriendCardBottom.addEventListener('click', function () {
    ga('send', 'event', 'Site bottom', 'Give friend a card')
});

//share bottom start
var fbBottom = document.querySelector('.fbBottom');
fbBottom.addEventListener('click', function () {
    ga('send', 'event', 'Site bottom', 'Share Fb bottom')
});

var twBottom = document.querySelector('.twBottom');
twBottom.addEventListener('click', function () {
    ga('send', 'event', 'Site bottom', 'Share Tw bottom')
});

var vkBottom = document.querySelector('.vkBottom');
vkBottom.addEventListener('click', function () {
    ga('send', 'event', 'Site bottom', 'Share Vk bottom')
});

//share bottom end

var lookedTov = document.querySelector('.lookedTov');
lookedTov.addEventListener('click', function () {
    ga('send', 'event', 'Site bottom', 'Viewed')
});

var compareBottom = document.querySelector('.compareBottom');
compareBottom.addEventListener('click', function () {
    ga('send', 'event', 'Site bottom', 'Compare')
});

var bookedBottom = document.querySelector('.bookedBottom');
bookedBottom.addEventListener('click', function () {
    ga('send', 'event', 'Site bottom', 'Booked')
});

var bucketBottom = document.querySelectorAll('.bucketBottom');
for (var i = 0; i < bucketBottom.length; i++) {
    bucketBottom[i].addEventListener('click', function () {
        ga('send', 'event', 'Site bottom', 'Bucket')
    });
}

//bottom end
/*pageBonus*/

if (document.querySelector('.pageBonusBox')) {
    var pageBonusBox = document.querySelector('.pageBonusBox');
    pageBonusBox.addEventListener('submit', function (event) {
        ga('send', 'event', 'pageBonus', 'Send', {
            hitCallback: createFunctionWithTimeout(function () {
                pageBonusBox.submit();
            })
        });
    });
}

//share
if (document.querySelector('.pageBonusFb')) {
    var pageBonusFb = document.querySelector('.pageBonusFb');
    pageBonusFb.addEventListener('click', function () {
        ga('send', 'event', 'pageBonus', 'Share Fb')
    });
}

if (document.querySelector('.pageBonusTw')) {
    var pageBonusTw = document.querySelector('.pageBonusTw');
    pageBonusTw.addEventListener('click', function () {
        ga('send', 'event', 'pageBonus', 'Share Tw')
    });
}

if (document.querySelector('.pageBonusVk')) {
    var pageBonusVk = document.querySelector('.pageBonusVk');
    pageBonusVk.addEventListener('click', function () {
        ga('send', 'event', 'pageBonus', 'Share Vk')
    });
}
//pageBonus End

/*enterRegistration*/

if (document.querySelector('.enterRegistration')) {

    var EnterRegistrationRegisterForm = document.querySelector('.EnterRegistrationRegisterForm');
    EnterRegistrationRegisterForm.addEventListener('submit', function () {
        ga('send', 'event', 'enterRegistration', 'Register')
    });

    var EnterRegistrationLogInForm = document.querySelector('.EnterRegistrationLogInForm');
    EnterRegistrationLogInForm.addEventListener('submit', function () {
        ga('send', 'event', 'enterRegistration', 'Log in')
    });


    var EnterRegistratinLogAsFacebook = document.querySelector('.EnterRegistratinLogAsFacebook');
    EnterRegistratinLogAsFacebook.addEventListener('click', function () {
        ga('send', 'event', 'enterRegistration', 'Log in Fb')
    });


    var EnterRegistratinlogAsVK = document.querySelector('.EnterRegistratinlogAsVK');
    EnterRegistratinlogAsVK.addEventListener('click', function () {
        ga('send', 'event', 'enterRegistration', 'Log in Vk')
    });


    var ERpassRecovery = document.querySelector('.ERpassRecovery');
    ERpassRecovery.addEventListener('click', function () {
        ga('send', 'event', 'enterRegistration', 'Forgot pass?')
    });

    var ERTermsOfUse = document.querySelector('.ERTermsOfUse');
    ERTermsOfUse.addEventListener('click', function () {
        ga('send', 'event', 'enterRegistration', 'Terms of Use')
    });

}
/*contact*/
if (document.querySelector('.contactSendMessage')) {
    var contactSendMessage = document.querySelector('.contactSendMessage');
    contactSendMessage.addEventListener('submit', function () {
        ga('send', 'event', 'contact', 'Send')
    });
}
/*bucket*/
if (document.querySelector('.buckets')) {
    var removeAllBucket = document.querySelector('.removeAllBucket');
    removeAllBucket.addEventListener('click', function () {
        ga('send', 'event', 'bucket', 'Delete all')
    });
    var removeLIGAtovBucket = document.querySelectorAll('.removeLIGAtovBucket');
    for (var i = 0; i < removeLIGAtovBucket.length; i++) {
        var obj = removeLIGAtovBucket[i].addEventListener('click', function () {
            ga('send', 'event', 'bucket', 'Delete')
        })
    }

    var cuponForm = document.querySelector('#cuponForm');
    cuponForm.addEventListener('submit', function () {
        ga('send', 'event', 'bucket', 'Use coupon')
    });
    var fastBuy = document.querySelector('.fastBuy');
    fastBuy.addEventListener('click', function () {
        ga('send', 'event', 'bucket', 'Buy one click')
    });
    var buyOneClick = document.querySelector('.buyOneClick form');
    buyOneClick.addEventListener('submit', function () {
        ga('send', 'event', 'bucket', 'Checkout one click')
    });
    var takeOrderBucket = document.querySelector('.takeOrderBucket');
    takeOrderBucket.addEventListener('click', function () {
        ga('send', 'event', 'bucket', 'Checkout')
    });
    var HowGetCupon = document.querySelector('.HowGetCupon');
    HowGetCupon.addEventListener('click', function () {
        ga('send', 'event', 'bucket', 'How to get coupons?')
    });
    var refMoneyActiveBucket = document.querySelector('.refMoneyActiveBucket');
    refMoneyActiveBucket.addEventListener('click', function () {
        ga('send', 'event', 'bucket', 'What is this?')
    });
    var buyTovBucket = document.querySelectorAll('.backetSlider .buyTov');
    var discTovCompareBucket = document.querySelectorAll('.backetSlider .discTovCompare');

    console.log(buyTovBucket);
    console.log(discTovCompareBucket);

    for (var i = 0; i < buyTovBucket.length; i++) {
        buyTovBucket[i].addEventListener('click', function () {
            ga('send', 'event', 'bucket', 'Buy')
        });
    }
    for (var i = 0; i < discTovCompareBucket.length; i++) {
        discTovCompareBucket[i].addEventListener('click', function () {
            ga('send', 'event', 'bucket', 'Compare')
        });
    }
}
//bucket End
//Order
if (document.querySelector('.orderPage')) {
    var changeCityOrderNP = document.querySelector('.changeCityOrderNP');
    changeCityOrderNP.addEventListener('click', function () {
        ga('send', 'event', 'order', 'Change city nova pochta')
    });

    var changeCityOrderCourier = document.querySelector('.changeCityOrderCourier');
    changeCityOrderCourier.addEventListener('click', function () {
        ga('send', 'event', 'order', 'Change city courier')
    });


    var changeEmail = document.querySelector('#change-email');
    changeEmail.addEventListener('click', function () {
        ga('send', 'event', 'order', 'Change email')
    });

    var haveAccount = document.querySelector('#have-account');
    haveAccount.addEventListener('click', function () {
        ga('send', 'event', 'order', 'Already have an account?')
    });


    var TellYourFriendsOrder = document.querySelector('.TellYourFriendsOrder');
    TellYourFriendsOrder.addEventListener('click', function () {
        ga('send', 'event', 'order', 'How to get coupons?')
    });

    var submitOrder = document.querySelector('#submit');
    submitOrder.addEventListener('click', function () {
        ga('send', 'event', 'order', 'Use coupon')
    });
    var editOrder = document.querySelector('#edit-order');
    editOrder.addEventListener('click', function () {
        ga('send', 'event', 'order', 'Edit bucket')
    });
    var makeOrder = document.querySelector('#make-order');
    makeOrder.addEventListener('click', function () {
        ga('send', 'event', 'order', 'Confirm purchase')
    });

    var whatItIsOrder = document.querySelector('.whatItIsOrder');
    whatItIsOrder.addEventListener('click', function () {
        ga('send', 'event', 'order', 'What is this?')
    });
}
//Order END
//Succes
if (document.querySelector('.thanks')) {
    var successFacebook = document.querySelector('.successFacebook');
    successFacebook.addEventListener('click', function () {
        ga('send', 'event', 'success', 'Share Fb')
    });
    var successTwiter = document.querySelector('.successTwiter');
    successTwiter.addEventListener('click', function () {
        ga('send', 'event', 'success', 'Share Tw')
    });
    var successVk = document.querySelector('.successVk');
    successVk.addEventListener('click', function () {
        ga('send', 'event', 'success', 'Share Vk')
    });
}
//End Succes
//section
if (document.querySelector('.category')) {
    var sectionBoxForm = document.querySelector('.sectionBoxForm');
    sectionBoxForm.addEventListener('submit', function () {
        ga('send', 'event', 'section', 'Send')
    });
    var sectionHowEnterCountDown = document.querySelector('.sectionHowEnterCountDown');
    sectionHowEnterCountDown.addEventListener('click', function () {
        ga('send', 'event', 'section', 'How to join the club?')
    });

    var buyCategory = document.querySelectorAll('.category .sectTovInfo .buyTov');
    for (var i = 0; i < buyCategory.length; i++) {
        buyCategory[i].addEventListener('click', function () {
            ga('send', 'event', 'section', 'Buy')
        });
    }

    var compareCategory = document.querySelectorAll('.category .sectTovInfo .discTovCompare');
    for (var i = 0; i < compareCategory.length; i++) {
        compareCategory[i].addEventListener('click', function () {
            ga('send', 'event', 'section', 'Compare')
        });
    }

    var catalogSpecDisc = document.querySelector('.catalogSpecDisc');
    catalogSpecDisc.addEventListener('click', function () {
        ga('send', 'event', 'section', 'Special discounts')
    });
    var catalogSpecRefund = document.querySelector('.catalogSpecRefund');
    catalogSpecRefund.addEventListener('click', function () {
        ga('send', 'event', 'section', 'Refunds')
    });

    var catalogFilterBar = document.querySelector('.catalogFilterBar');
    catalogFilterBar.addEventListener('submit', function () {
        ga('send', 'event', 'section', 'Apply')
    });

    var catalogFilterBarReset = document.querySelector('.catalogFilterBarReset');
    catalogFilterBarReset.addEventListener('click', function () {
        ga('send', 'event', 'section', 'Dismiss')
    });

    var allModelCategory = document.querySelectorAll('.category .allModel');
    for (var i = 0; i < allModelCategory.length; i++) {
        allModelCategory[i].addEventListener('click', function () {
            ga('send', 'event', 'section', 'All models')
        });
    }
}
//section end
//subsection
if (document.querySelector('.subcategory')) {
    var subectionBoxForm = document.querySelector('.subectionBoxForm');
    subectionBoxForm.addEventListener('submit', function () {
        ga('send', 'event', 'subsection', 'Send')
    });
    var subsectionHowEnterCountDown = document.querySelector('.subsectionHowEnterCountDown');
    subsectionHowEnterCountDown.addEventListener('click', function () {
        ga('send', 'event', 'subsection', 'How to join the club?')
    });

    var buySubcategory = document.querySelectorAll('.subcategory .sectTovInfo .buyTov');
    for (var i = 0; i < buySubcategory.length; i++) {
        buySubcategory[i].addEventListener('click', function () {
            ga('send', 'event', 'subsection', 'Buy')
        });
    }

    var comparesubcategory = document.querySelectorAll('.subcategory .sectTovInfo .discTovCompare');
    for (var i = 0; i < comparesubcategory.length; i++) {
        comparesubcategory[i].addEventListener('click', function () {
            ga('send', 'event', 'subsection', 'Compare')
        });
    }

    var subcatalogSpecDisc = document.querySelector('.subcatalogSpecDisc');
    subcatalogSpecDisc.addEventListener('click', function () {
        ga('send', 'event', 'subsection', 'Special discounts')
    });
    var subcatalogSpecRefund = document.querySelector('.subcatalogSpecRefund');
    subcatalogSpecRefund.addEventListener('click', function () {
        ga('send', 'event', 'subsection', 'Refunds')
    });

    var subcatalogFilterBar = document.querySelector('.subcatalogFilterBar');
    subcatalogFilterBar.addEventListener('submit', function () {
        ga('send', 'event', 'subsection', 'Apply')
    });

    var subcatalogFilterBarReset = document.querySelector('.subcatalogFilterBarReset');
    subcatalogFilterBarReset.addEventListener('click', function () {
        ga('send', 'event', 'subsection', 'Dismiss')
    });
}
//subsectionEnd
//Product
if (document.querySelector('.Product')) {
    var productPopImg = document.querySelector('.productPopImg');
    productPopImg.addEventListener('click', function () {
        ga('send', 'event', 'product', 'Fullsceen')
    });

    var ProductBuyWithDisc = document.querySelector('.ProductBuyWithDisc');
    ProductBuyWithDisc.addEventListener('click', function () {
        ga('send', 'event', 'product', 'Buy with discount')
    });
    var productYourPrice = document.querySelector('.productYourPrice');
    productYourPrice.addEventListener('click', function () {
        ga('send', 'event', 'product', 'Offer your price')
    });

    var hint = document.querySelector('.hint .enterSmartLIGA');
    hint.addEventListener('click', function () {
        ga('send', 'event', 'product', 'How to join the club tip?')
    });

    var yourPricePop = document.querySelector('.yourPricePop form');
    yourPricePop.addEventListener('submit', function () {
        ga('send', 'event', 'product', 'Offer your price button')
    });

    var ProducntEnterSmartLIGA = document.querySelector('.ProducntEnterSmartLIGA');
    ProducntEnterSmartLIGA.addEventListener('click', function () {
        ga('send', 'event', 'product', 'How to join the club?')
    });


    var ProductWhatIsThis = document.querySelectorAll('.ProductWhatIsThis');
    for (var i = 0; i < ProductWhatIsThis.length; i++) {
        ProductWhatIsThis[i].addEventListener('click', function () {
            ga('send', 'event', 'product', 'What is this?')
        });
    }

    var ProductAddCompare = document.querySelector('.ProductAddCompare');
    ProductAddCompare.addEventListener('click', function () {
        ga('send', 'event', 'product', 'Compare')
    });

    var ProductSetAside = document.querySelector('.ProductSetAside');
    ProductSetAside.addEventListener('click', function () {
        ga('send', 'event', 'product', 'Book')
    });

    var ProductVideo = document.querySelector('.ProductVideo');
    ProductVideo.addEventListener('click', function () {
        ga('send', 'event', 'product', 'Video')
    });

    var ProductFb = document.querySelector('.ProductFb');
    ProductFb.addEventListener('click', function () {
        ga('send', 'event', 'product', 'Share Fb')
    });

    var ProductTw = document.querySelector('.ProductTw');
    ProductTw.addEventListener('click', function () {
        ga('send', 'event', 'product', 'Share Tw')
    });

    var ProductVk = document.querySelector('.ProductVk');
    ProductVk.addEventListener('click', function () {
        ga('send', 'event', 'product', 'Share Vk')
    });
    var ProductEnterSmartLIGABottom = document.querySelector('.ProductEnterSmartLIGABottom');
    ProductEnterSmartLIGABottom.addEventListener('click', function () {
        ga('send', 'event', 'product', 'How to join the club bottom?')
    });
    var ProductRefMoneyBottom = document.querySelector('.ProductRefMoneyBottom');
    ProductRefMoneyBottom.addEventListener('click', function () {
        ga('send', 'event', 'product', 'What is this bottom?')
    });

    setTimeout(function () {
        var productNavGoodsForward = document.querySelector('.productNavGoods .owl-next');
        productNavGoodsForward.addEventListener('click', function () {
            ga('send', 'event', 'product', 'Forward carousel')
        });

        var productNavGoodsBack = document.querySelector('.productNavGoods .owl-prev');
        productNavGoodsBack.addEventListener('click', function () {
            ga('send', 'event', 'product', 'Back carousel')
        });
    }, 1000);

    var ProductReadMore = document.querySelector('.ProductReadMore');
    ProductReadMore.addEventListener('click', function () {
        ga('send', 'event', 'product', 'Read more')
    });
    var ProductHowEnterSmartLIGA = document.querySelector('.ProductHowEnterSmartLIGA');
    ProductHowEnterSmartLIGA.addEventListener('click', function () {
        ga('send', 'event', 'product', 'How to join smartliga club?')
    });
    var ProductBuyKit = document.querySelector('.ProductBuyKit');
    ProductBuyKit.addEventListener('click', function () {
        ga('send', 'event', 'product', 'Buy kit')
    });

    var ProductInviteForm = document.querySelector('.ProductInviteForm');
    ProductInviteForm.addEventListener('submit', function () {
        ga('send', 'event', 'product', 'Send')
    });

    var ProductAddReview = document.querySelector('.ProductAddReview');
    ProductAddReview.addEventListener('submit', function () {
        ga('send', 'event', 'product', 'Add review')
    });

    var ProductReply = document.querySelectorAll('.ProductReply');
    for (var i = 0; i < ProductReply.length; i++) {
        ProductReply[i].addEventListener('click', function () {
            ga('send', 'event', 'product', 'Reply')
        });
    }

    var ProductlookAllRewievs = document.querySelector('.ProductlookAllRewievs');
    ProductlookAllRewievs.addEventListener('click', function () {
        ga('send', 'event', 'product', 'See more')
    });

    var Productbuy = document.querySelectorAll('.Product .buyTov');
    for (var i = 0; i < Productbuy.length; i++) {
        Productbuy[i].addEventListener('click', function () {
            ga('send', 'event', 'product', 'Buy')
        });
    }

    var Productcompare = document.querySelectorAll('.Product .discTovCompare');
    for (var i = 0; i < Productcompare.length; i++) {
        Productcompare[i].addEventListener('click', function () {
            ga('send', 'event', 'product', 'Compare bottom')
        });
    }
}
//ProductNon
if (document.querySelector('.ProductNon')) {
    var ProductNonWantDiscount = document.querySelector('.ProductNonWantDiscount');
    ProductNonWantDiscount.addEventListener('submit', function () {
        ga('send', 'event', 'productNon', 'Want discount')
    });
}
//Pass Recovery
if (document.querySelector('.paswordRecovery')) {
    var passRecoveryForm = document.querySelector('.passRecoveryForm');
    passRecoveryForm.addEventListener('submit', function () {
        ga('send', 'event', 'paswordRecovery', 'Recovery pass')
    });
}
//PrivatRoom
if (document.querySelector('.privatRoom')) {
    var PRmyDiscount = document.querySelector('.PRmyDiscount');
    PRmyDiscount.addEventListener('click', function () {
        ga('send', 'event', 'privatRoom', 'My discounts')
    });
    var PRHistoryOrder = document.querySelector('.PRHistoryOrder');
    PRHistoryOrder.addEventListener('click', function () {
        ga('send', 'event', 'privatRoom', 'History')
    });

    var PRChangePass = document.querySelector('.PRChangePass');
    PRChangePass.addEventListener('click', function () {
        ga('send', 'event', 'privatRoom', 'Password')
    });

    var PRChangePassForm = document.querySelector('.PRChangePassForm');
    PRChangePassForm.addEventListener('submit', function () {
        ga('send', 'event', 'privatRoom', 'Change pass')
    });

    var PRHistoryOrder = document.querySelector('.PRHistoryOrder');
    PRHistoryOrder.addEventListener('click', function () {
        ga('send', 'event', 'privatRoom', 'History')
    });

    if (document.querySelector('.myDisctountTopMenu')) {
        var myDisctountTopMenu = document.querySelector('.myDisctountTopMenu');
        myDisctountTopMenu.addEventListener('click', function () {
            ga('send', 'event', 'privatRoom', 'My account')
        });
    }
}

if (document.querySelector('.howEnterSmartLIGA')) {
    var HowEnterSmartLIGAPopUpForm = document.querySelector('.HowEnterSmartLIGAPopUpForm');
    HowEnterSmartLIGAPopUpForm.addEventListener('submit', function () {
        ga('send', 'event', 'How to join club?', 'Join')
    });

    //look at  713

}

if (document.querySelector('.refundMoney')) {
    var refundMoneyRegistrationForm = document.querySelector('.refundMoneyRegistrationForm');
    refundMoneyRegistrationForm.addEventListener('submit', function () {
        ga('send', 'event', 'Money refunds', 'Registration')
    });

    var refundMoneyLogInForm = document.querySelector('.refundMoneyLogInForm');
    refundMoneyLogInForm.addEventListener('submit', function () {
        ga('send', 'event', 'Money refunds', 'Log in')
    });


    var refundMoneyLogAsFacebook = document.querySelector('.refundMoneyLogAsFacebook');
    refundMoneyLogAsFacebook.addEventListener('click', function () {
        ga('send', 'event', 'Money refunds', 'Log in Fb')
    });

    var refundMoneyLogAsVk = document.querySelector('.refundMoneyLogAsVk');
    refundMoneyLogAsVk.addEventListener('click', function () {
        ga('send', 'event', 'Money refunds', 'Log in Vk')
    });

}

if (document.querySelector('.onlySmartLIGA')) {
    var JoiTheClubAndBuy = document.querySelectorAll('.onlySmartLIGA form input[type="submit"]')[1];
    JoiTheClubAndBuy.addEventListener('click', function () {
        ga('send', 'event', 'Only members', 'Joi the club and buy');
    });

    var WithoutDiscountTop = document.querySelectorAll('.onlySmartLIGA form input[type="submit"]')[0];
    WithoutDiscountTop.addEventListener('click', function () {
        ga('send', 'event', 'Only members', 'Without discount top');
    });
    var ContinueShopping = document.querySelector('.onlySmartLIGA .continue');
    ContinueShopping.addEventListener('click', function () {
        ga('send', 'event', 'Only members', 'Continue shopping');
    });

    var WithoutDiscountBottom = document.querySelector('.onlySmartLIGA .orderwithout');
    WithoutDiscountBottom.addEventListener('click', function () {
        ga('send', 'event', 'Only members', 'Without discount bottom');
    });
}
