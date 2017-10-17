/* Story script */
$(document).ready(function() {

    /*
    1
    2
    3
    4
    5 jump to 7
    6
    7 jump from 5
    8
    9
    10
    */
    // change to start at 0 not 1
    var ch1f1 = new Frame();
    ch1f1.bg = "./bg (49).jpg";
    ch1f1.left_idol = "https://maveys.github.io/assets/girls/muse/nico/nico (1).png";
    ch1f1.middle_idol = "https://maveys.github.io/assets/girls/muse/maki/maki (1).png";
    ch1f1.right_idol = "https://maveys.github.io/assets/girls/muse/nozomi/nozomi (1).png";
    ch1f1.speaker_name = "Maki";
    ch1f1.speaker_pos = "middle";
    ch1f1.text_one = "Class is starting soon, did you need something?";
    chapter_one.push(ch1f1);

    var ch1f2 = new Frame();
    ch1f2.left_idol = "https://maveys.github.io/assets/girls/muse/nico/nico (1).png";
    ch1f2.middle_idol = "https://maveys.github.io/assets/girls/muse/maki/maki (10).png";
    ch1f2.right_idol = "https://maveys.github.io/assets/girls/muse/nozomi/nozomi (1).png";
    ch1f2.speaker_name = "Nozomi";
    ch1f2.speaker_pos = "right";
    ch1f2.text_one = "Don't worry, Maki may not seem like it, but she's really nervous.";
    ch1f2.text_two = "She was really excited about talking with you.";
    chapter_one.push(ch1f2);

    var ch1f3 = new Frame();
    ch1f3.left_idol = "./nico (1).png";
    ch1f3.middle_idol = "./maki (13).png";
    ch1f3.right_idol = "./nozomi (1).png";
    ch1f3.speaker_name = "Maki";
    ch1f3.speaker_pos = "middle";
    ch1f3.text_one = "Whahh, I am not!";
    ch1f3.text_two = "Anyways, if you don't need anything I need to head to class.";
    chapter_one.push(ch1f3);

    /* CHOICE OPTION */
    var ch1f4 = new Frame();
    ch1f4.left_idol = "./honoka (19).png";
    ch1f4.middle_idol = "./rin (4).png";
    ch1f4.right_idol = "./nozomi (1).png";
    ch1f4.speaker_pos = "middle"
    ch1f4.is_choice = true;
    ch1f4.choice_one = "Should we meet Saturday, lunch and study?";
    ch1f4.jump_one = 5;
    ch1f4.choice_two = "We could go study at my house.";
    ch1f4.jump_two = 9;
    ch1f4.choice_three = "Oh no, I prefer to study alone.";
    chapter_one.push(ch1f4);

    /* C1 J1 */
    var ch1f5 = new Frame();
    ch1f5.left_idol = "./nico (3).png";
    ch1f5.middle_idol = "./maki (10).png";
    ch1f5.right_idol = "./nozomi (1).png";
    ch1f5.speaker_pos = "middle"
    ch1f5.speaker_name = "Maki";
    ch1f5.text_one = "Jump one test Ehh?! Why... Why are you asking that now?";
    ch1f5.text_two = "Nico and Nozomi are here!";
    ch1f5.text_three = "And I have practice anyways after school.";
    chapter_one.push(ch1f5);

    var ch1f6 = new Frame();
    ch1f6.left_idol = "./nico (5).png";
    ch1f6.middle_idol = "./maki (11).png";
    ch1f6.right_idol = "./nozomi (1).png";
    ch1f6.speaker_pos = "right"
    ch1f6.speaker_name = "Nozomi";
    ch1f6.text_one = "Maki, you work so hard, it's okay to take a break once in a while";
    ch1f6.text_two = "I don't think Nico minds either.";
    chapter_one.push(ch1f6);

    var ch1f7 = new Frame();
    ch1f7.left_idol = "./nico (5).png";
    ch1f7.middle_idol = "./maki (11).png";
    ch1f7.right_idol = "./nozomi (1).png";
    ch1f7.speaker_pos = "left"
    ch1f7.speaker_name = "Nico";
    ch1f7.text_one = "Eh, what's that supposed to mean?";
    ch1f7.text_two = "Maki can do whatever she wants to do.";
    chapter_one.push(ch1f7);

    var ch1f8 = new Frame();
    ch1f8.left_idol = "./nico (5).png";
    ch1f8.middle_idol = "./maki (10).png";
    ch1f8.right_idol = "./nozomi (1).png";
    ch1f8.speaker_pos = "middle";
    ch1f8.speaker_name = "Maki";
    ch1f8.text_one = "Jeez, can everyone please stop.";
    ch1f8.text_two = "I guess I can do something after school.";
    ch1f8.text_three = "We can talk more after class.";
    chapter_one.push(ch1f8);

    /* C1 J2 */
    var ch1f9 = new Frame();
    ch1f9.left_idol = "./nico (5).png";
    ch1f9.middle_idol = "./maki (11).png";
    ch1f9.right_idol = "./nozomi (1).png";
    ch1f9.speaker_pos = "left"
    ch1f9.speaker_name = "Nico";
    ch1f9.text_one = "Jump two test";
    chapter_one.push(ch1f9);


    /* Starts the chapter out */
    next_frame();
});
