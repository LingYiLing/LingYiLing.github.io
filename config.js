// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "Hi Gaby（⌒▽⌒）",
        "Long Time No See",
        "How are you recently",
        "I hope you doing well",
        "✿ヽ(°▽°)ノ✿",
        "I still remember how we met",
        "You are looking foring students",
        "And I'm curious about the OOB",
        "You taught me the flying skill",
        "Gradually...",
        "We became good friends",
        "And You introduced ajie to me",
        "♪(*°▽°*)八(*°▽°*)八(*°▽°*)♪",
        "you took me to explore beatiful sights",
        "The moon above the GW",
        "The office in the vault",
        "The Little Prince Area",
        "like the:",
        "Home",
        "Swing",
        "King",
        "...",
        "You are very capable and generous",
        "I appreciate it very much",
        "٩(๛ ˘ ³˘)۶❤",
        "I think of myself as a rule seeker",
        "Like to learn, exlore",
        "You taught me to play",
        "my first piece of music",
        "Happy birthday song",
        "As well as the chords",
        "Make it better",
        "from then on",
        "Thanks you a lot",
        "I start to learn music",
        "(・ω< )★",
        "You told me your birthday",
        "The 12 of Februay",
        "I always remember it",
        "...",
        "Sorry for being late today",
        "In my calendar",
        "You are still young and beautiful",
        "ﾟ･:*:･｡(=ﾟωﾟ)ノHappyBirthdayヽ(ﾟωﾟ=)｡･:*:･ﾟ",
        "Did you still remember here?",
        "That is one of my favorite sights",
        "Since we are adults",
        "We have a lot to deal with",
        // "I have been very busy since last year",
        "This year will continue",
        "But I think it is good",
        "It means we're making progress",
        "(=・ω・=)",
        "In the future",
        "Hope we will have more time",
        "To Play together",
        "Hope you always be",
        "Happy",
        "Healthy",
        "And sunshine",
        "Finally, again",
        "Happy birthday, Gaby",
        "Birthday САКЁゞ(●′з｀)=з ┌iii┐",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "Home": "./imgs/LittlePrince1.jpg",
        "Swing": "./imgs/LittlePrince2.jpg",
        "King": "./imgs/LittlePrince3.jpg",
        "Did you still remember here?": "./imgs/Hermit1.jpg",
        "And sunshine": "./imgs/Hermit2.jpg",
        // "心爱的小可爱": "./imgs/xiaokeai.png",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "Turn On Lights",
        play: "Play Music",
        bannar_coming: "Let's Decorate",
        balloons_flying: "Fly With Ballons",
        cake_fadein: "Delicious Cake",
        light_candle: "Light Candle",
        wish_message: "Happy Birthday",
        story: "A MESSAGE FOR Gaby",
    }
};
