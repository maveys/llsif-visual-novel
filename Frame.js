var current_frame = -1;
var chapter_one = [];
var click_disabled = false;
var quit_typed_text = false;
var loaded_sprites = [];

/* Frame object - need to seperate scene frame and choice frame into different objects */
Frame = function() {
    this.bg = null;
    this.is_choice = false;
    this.choice_one = null;
    this.jump_one = null;
    this.choice_two = null;
    this.jump_two = null;
    this.choice_three = null;
    this.jump_three = null;
    this.left_idol = null;
    this.middle_idol = null;
    this.right_idol = null;
    this.text_one = null;
    this.text_two = null;
    this.text_three = null;
    this.speaker_name = null;
    this.speaker_pos = null;
}

function clear_all_div()
{
    $("#left").empty();
    $("#middle").empty();
    $("#right").empty();
    $("#speaker").empty();
    $("#dialog > img").remove();
    $("#speaker_text").empty();
    $(".text").empty();
    quit_typed_text = false;
    click_disabled = false;
}

function next_frame()
{
    if (chapter_one[++current_frame] != null) {
        var frame = chapter_one[current_frame];
        console.log('current: ' + current_frame)
        clear_all_div();

        preload_sprites(chapter_one[current_frame]);

        if (frame.bg != null)
            $("#background").css('background-image', 'url("'+loaded_sprites[0].src+'")');
        if (frame.left_idol != null)
            $("#left").append('<img class="idolimg" id="left_idol" src="'+loaded_sprites[1].src+'">');
        if (frame.middle_idol != null)
            $("#middle").append('<img class="idolimg" id="middle_idol" src="'+loaded_sprites[2].src+'">');
        if (frame.right_idol != null)
            $("#right").append('<img class="idolimg" id="right_idol" src="'+loaded_sprites[3].src+'">');

        switch (frame.speaker_pos) {
            case "left":
                $('#'+frame.speaker_pos+"_idol").css({
                    "width": "770.56px",
                    "height": "770.75px"
                });
                break;
            case "middle":
                $('#'+frame.speaker_pos+"_idol").css({
                    "width": "770.56px",
                    "height": "770.75px",
                    "margin-left": "-210px"
                });
                break;
            case "right":
                $('#'+frame.speaker_pos+"_idol").css({
                    "width": "770.56px",
                    "height": "770.75px",
                    "margin-left": "-240px"
                });
                break;
        }
        $("#speaker").append('<img src="./assets/sprites/name.png"/>');
        $("#dialog").append('<img id="textarea" src="./assets/sprites/dialog.png"/>');
        $("#textarea").click(function() {
            if (click_disabled == true) return;
            quit_typed_text = true;
            next_frame();
        });

        /* CHOICE OPTIONS */
        if (frame.is_choice) {
            click_disabled = true;
            $(".text").hover(function(){
                $(this).css("background-color", "gray");
                }, function(){
                $(this).css("background-color", "transparent");
            });
            $(".text").css({
                "cursor": "pointer"
            })
            $("#textarea").css({"cursor": "default"});
            if (frame.choice_one != null) {
                document.getElementById('text_one').innerHTML = frame.choice_one;
                $("#text_one").click(function() {
                    click_disabled = false;
                    /* -1 for chapter frames starting at 1, -1 again for incrementing current_frame before proceeding to current frame Can I change this? */
                    current_frame = frame.jump_one - 2;
                    next_frame();
                });
            }
            if (frame.choice_two != null) {
                document.getElementById('text_two').innerHTML = frame.choice_two;
                $("#text_two").click(function() {
                    click_disabled = false;
                    current_frame = frame.jump_two - 2;
                    next_frame();
                });
            }
            if (frame.choice_three != null) {
                document.getElementById('text_three').innerHTML = frame.choice_three;
                $("#text_three").click(function() {
                    click_disabled = false;
                    current_frame = frame.jump_three - 2;
                    next_frame();
                });
            }
        } else {
            var speaker_div = document.getElementById('speaker_text');
            speaker_div.innerHTML = frame.speaker_name
            click_disabled = true;

            typed_text("#text_one", frame.text_one, 0, 20).then(function() {
                if (frame.text_two == null) return;
                return typed_text("#text_two", frame.text_two, 0, 20);
            }).then(function() {
                if (frame.text_three == null) return;
                quit_typed_text = false;
                return typed_text("#text_three", frame.text_three, 0, 20);
            }).then(function() {
                click_disabled = false;
            });
        }
    }
}

function typed_text(div, text, index, interval)
{
    return new Promise(function(resolve) {
        var do_it = function() {
            if (quit_typed_text == true) {
                interval = 0;
            }
            if (index < text.length) {
                $(div).append(text[index++]);
                setTimeout(do_it, interval);
            } else {
                resolve();
            }
        }
        do_it();
    });
}

function load_sprites(frame)
{
    if (frame.bg != NULL) {
        if (image_exist(frame.bg)) loaded_sprites.src = frame.bg;
    }

    if (frame.left_idol != NULL) {
        if (image_exist(frame.left_idol)) loaded_sprites.src = frame.bg
    }

    if (frame.middle_idol != NULL) {
        if (image_existt(frame.middle_idol)) loaded_sprites.src
    }
}

function preload_sprites(frame)
{
    for (var i = 0; i < 4; i++) {
        loaded_sprites[i] = new Image();
        switch (i) {
            case 0:
                if (frame.bg != null) {
                    loaded_sprites[i].src = frame.bg;
                }
                break;
            case 1:
                if (frame.left_idol != null) {
                    loaded_sprites[i].src = frame.left_idol;
                }
                break;
            case 2:
                if (frame.middle_idol != null) {
                    loaded_sprites[i].src = frame.middle_idol;
                }
                break;
            case 3:
                if (frame.right_idol != null) {
                    loaded_sprites[i].src = frame.right_idol;
                }
                break;
        }
    }
}

function image_exist(source)
{
    for (var i = 0; i < loaded_sprites.length; i++) {
        if (laoded_sprites[i].src === source) return true;
    }
    return false;
}

function load_sprites(sources)
{
    for(var i = 0; i < load_sprites.length; i++) {
        if (load_sprites[i].src != NULL) return loaded_sprite[i].src;
        
    }
    return;
}

/* Fix later
$("#save_btn").click(function() {
    console.log('saving frame: ' + current_frame);
    save();
})

$("#load_btn").click(function() {
    console.log('loading');
    load_story();
})

function load_choices()
{
    $(".user_choice").click(function() {
        clear_all_div();
    })
}

function save()
{
    localStorage.setItem('saved_frame', current_frame);
}

//Gets integer value from local storage to start at the saved chapter
function load_story()
{
    var saved_frame = localStorage.getItem('saved_frame');
    if (saved_frame != null) {
        current_frame = saved_frame - 1;
        next_frame();
        return;
    }
    current_frame = -1;
    next_frame();
}
*/
