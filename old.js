const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const texts = require('./texts.json');
const lessons = require('./lessons.json');

const https = require('https');
/*

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    msg.content = msg.content.toLowerCase();

    if (msg.content.startsWith(";;§")) {
        simplify(msg.content.slice(4));
    }
    if (msg.content === "?fire tsrezì") {
        const embed = new MessageEmbed()
            .setTitle('Tsrezì sti')
            .setColor(0x000000)
            .setThumbnail(msg.author.avatarURL())
            // Set the main content of the embed
            .setDescription("How dare you!");
        msg.channel.send(embed)
    }
    if (msg.content.includes("tsrezì")) {
        msg.react("841785864136556597");
    }
    if (msg.content.includes("futa") || msg.content.includes("fura") || msg.content.includes("fula") || msg.content.includes("fwa") || msg.content.includes("furia") || msg.content.includes("tsawa") || msg.content.includes("tsata") || msg.content.includes("tsaria") || msg.content.includes("tsala") || msg.content.includes("tsara") || msg.content.includes("teynga") || msg.content.includes("tengria") || msg.content.includes("teyngta") || msg.content.includes("teyngla") || msg.content.includes("taluna")) {
        array = ["futa", "fula", "furia", "fura", "fwa", "tsawa", "tsara", "tsala", "tsata", "tsaria", "teyngta", "teyngla", "teynga", "tengria", "taluna"];
        testarray = ["", "", ""];
        x = false;
        for(i=0; i<array.length;i++) {
            testarray[0] = array[i];
            for (j = 0; j < array.length; j++) {
                testarray[1] = array[j]
                for (k=0; k < array.length; k++) {
                    testarray[2] = array[k]
                    string = testarray[0] + " " + testarray[1] + " " + testarray[2];
                    if(msg.content.includes(string)) {
                        msg.react("715763189865906206");
                        x = true;
                    }
                }                     
            }
        }
    }
    if (msg.content.includes("futa futa futa")) {
        msg.react("715763189865906206");
    }
    if (msg.content.includes("<@723257649055006740>")) {
        console.log("Test");
        const embed = new MessageEmbed()
            .setTitle('Tsrezì sti')
            .setColor(0x000000)
            .setThumbnail(msg.author.avatarURL())
            // Set the main content of the embed
            .setDescription("793234441421717515");
        msg.channel.send(embed)
    }
    if (msg.content.startsWith("%")) {
        var currentdate = new Date();
        var time = currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();
        console.log(msg.author.username + " executed " + msg.content + " at " + time);
        //getting command parts if there are more then one
        var command = msg.content.split(" ");

        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////GENERAL////////////////////////////////////////////////////////////////////////////////////////////////
        //********************HELP CENTER**********************
        if (command[0] === "%help" && !command[1]) {
            const embed = new MessageEmbed()
                .setTitle('help')
                .setColor(0x000000)
                .setThumbnail(msg.author.avatarURL())
                // Set the main content of the embed
                .setDescription(texts.help.general);
            msg.channel.send(embed)

            //********************LESSON LIST**********************
        } else if ((command[0] === "%updates" || command[0] === "%update") && !command[1]) {
            const embed = new MessageEmbed()
                .setTitle('Last updates')
                .setColor(0x000000)
                .setThumbnail(msg.author.avatarURL())
                // Set the main content of the embed
                .setDescription(texts.updates);
            msg.channel.send(embed)

             //********************LENITION**********************
        } else if ((command[0] === "%len" || command[0] === "%lenition") && !command[1]) {
            console.log("test");
            const embed = new MessageEmbed()
                .setTitle('Lenition')
                .setColor(0x000000)
                .setThumbnail(msg.author.avatarURL())
                // Set the main content of the embed
                .setDescription(texts.lenition);
            msg.channel.send(embed)
            //********************LESSON LISTS**********************
        } else if ((command[0] === "%lesson" || command[0] === "%lessons") && !command[1]) {
            const embed = new MessageEmbed()
                .setTitle('Lesson List')
                .setColor(0x000000)
                .setThumbnail(msg.author.avatarURL())
                // Set the main content of the embed
                .setDescription(texts.lessonList);
            msg.channel.send(embed)
            //********************LISTS OF VOCAB LISTS**********************
        } else if ((command[0] === "%wordlist" || command[0] === "%wordlists" || command[0] === "%words" || command[0] === "%vocab" || command[0] === "%wl") && !command[1]) {
            const embed = new MessageEmbed()
                .setTitle('Wordlists')
                .setColor(0x000000)
                .setThumbnail(msg.author.avatarURL())
                // Set the main content of the embed
                .setDescription(texts.wordlists);
            msg.channel.send(embed)




            ////////////////////////////////////////////////////////////////////////////////////////////
            /////////////////////LESSONS////////////////////////////////////////////////////////////////
            //******************PRONUNCIATION LESSON***********************
        } else if ((command[0] === "%1" || command[0] === "%one" || command[0] === "%'aw" || command[0] === "%pronunciation") && !command[1]) {
            if (!command[1]) {
                const embed = new MessageEmbed()
                    .setTitle('Lesson #01 - Pronounciation')
                    .setColor(0x000000)
                    .setThumbnail(msg.author.avatarURL())
                    // Set the main content of the embed
                    .setDescription(lessons.pronounciation.overview + texts.lessons.startExercise + lessons.pronounciation.exercise);
                msg.channel.send(embed).then(sentMessage => {
                    sentMessage.react("✅");

                    //await reactions
                    const filter = (reaction, user) => {
                        return ['✅'].includes(reaction.emoji.name) && user.id === msg.author.id;
                    };

                    sentMessage.awaitReactions(filter, { max: 1, time: 180000, errors: ['time'] })
                        .then(collected => {
                            const embed = new MessageEmbed()
                                .setTitle('Level Selection')
                                .setColor(0x000000)
                                .setThumbnail(msg.author.avatarURL())
                                // Set the main content of the embed
                                .setDescription(lessons.pronounciation.first.intro + texts.lessons.level + lessons.pronounciation.first.lvlDescription);
                            msg.channel.send(embed).then(sentMessage => {
                                sentMessage.react("1️⃣")
                                    .then(() => sentMessage.react('2️⃣')
                                        .then(() => sentMessage.react('3️⃣')
                                            .then(() => sentMessage.react('4️⃣'))));

                                //await reactions
                                const filter = (reaction, user) => {
                                    return ['1️⃣', '2️⃣', '3️⃣', '4️⃣'].includes(reaction.emoji.name) && user.id === msg.author.id;
                                };

                                sentMessage.awaitReactions(filter, { max: 1, time: 180000, errors: ['time'] })
                                    .then(collected => {
                                        const reaction = collected.first();
                                        let lvl;

                                        if (reaction.emoji.name === '1️⃣') {
                                            lvl = 0;
                                        } else if (reaction.emoji.name === '2️⃣') {
                                            lvl = 1;
                                        } else if (reaction.emoji.name === '3️⃣') {
                                            lvl = 2;
                                        } else if (reaction.emoji.name === '4️⃣') {
                                            lvl = 3;
                                        }
                                        const elements = lessons.pronounciation.first.level[lvl];
                                        let array = ["test", "test", "test", "test", "test"]

                                        for (let i = 0; i < 5; i++) {
                                            while (array[i] === "test") {
                                                word = elements[Math.floor(Math.random() * elements.length)];
                                                if (!array.includes(word)) {
                                                    array[i] = word;
                                                }
                                            }
                                        }
                                        test(msg, array);
                                    });

                            });
                        });
                });
            }
            //********************L AND T LESSON LESSON**********************
        } else if ((command[0] === "%landt" || command[0] === "%lt" || command[0] === "%mune" || command[0] === "%2" || command[0] === "%two") && !command[1]) {
            const embed = new MessageEmbed()
                .setTitle('Lesson #02 - L and T ending')
                .setColor(0x000000)
                .setThumbnail(msg.author.avatarURL())
                // Set the main content of the embed
                .setDescription(lessons.lt.overview + texts.lessons.exercises + lessons.lt.exercise);
            msg.channel.send(embed).then(sentMessage => {
                sentMessage.react("1️⃣")
                    .then(() => sentMessage.react('2️⃣')
                        .then(() => sentMessage.react('3️⃣')));

                //await reactions
                const filter = (reaction, user) => {
                    return ['1️⃣', '2️⃣', '3️⃣'].includes(reaction.emoji.name) && user.id === msg.author.id;
                };

                sentMessage.awaitReactions(filter, { max: 1, time: 180000, errors: ['time'] })
                    .then(collected => {
                        const reaction = collected.first();

                        if (reaction.emoji.name === '1️⃣') {
                            transitive(msg);
                        } else if (reaction.emoji.name === '2️⃣') {
                            console.log("number 2");
                        } else if (reaction.emoji.name === '3️⃣') {
                            tlsentences(msg);
                        }
                    });

            });

            ////////////////////////////////////////////////////////////////////////////////////////////
            /////////////////////WORDLISTS////////////////////////////////////////////////////////////////
        } else if ((command[0] === "%wordlist" || command[0] === "%wordlists" || command[0] === "%words" || command[0] === "%vocab" || command[0] === "%wl") && command[1]) {
            let wl;
            if (command[1] === "beginner" || command[1] === "'aw" || command[1] === "1" || command[1] === "one") {
                wl = wordlists.beginner;
            } else if (command[1] === "verbs" || command[1] === "mune" || command[1] === "2" || command[1] === "two") {
                wl = wordlists.verbs;
            } else if (command[1] === "pandora" || command[1] === "pxey" || command[1] === "3" || command[1] === "three") {
                wl = wordlists.pandora;
            } else if (command[1] === "body" || command[1] === "tsìng" || command[1] === "4" || command[1] === "four") {
                wl = wordlists.body;
            } else if (command[1] === "people" || command[1] === "mrr" || command[1] === "5" || command[1] === "five") {
                wl = wordlists.people;
            } else if (command[1] === "family" || command[1] === "pukap" || command[1] === "6" || command[1] === "six") {
                wl = wordlists.family;
            }
            let text = "";
            if (command[2] === "test") {
                //test wordlist

                const embed = new MessageEmbed()
                    .setTitle('Level selection vocab test')
                    .setColor(0x000000)
                    .setThumbnail(msg.author.avatarURL())
                    // Set the main content of the embed
                    .setDescription(wordlists.intro + texts.lessons.level + wordlists.level);
                msg.channel.send(embed).then(sentMessage => {
                    sentMessage.react("1️⃣")
                        .then(() => sentMessage.react('2️⃣'));

                    //await reactions
                    const filter = (reaction, user) => {
                        return ['1️⃣', '2️⃣'].includes(reaction.emoji.name) && user.id === msg.author.id;
                    };

                    sentMessage.awaitReactions(filter, { max: 1, time: 180000, errors: ['time'] })
                        .then(collected => {
                            const reaction = collected.first();

                            let array = ["test", "test", "test", "test", "test"];
                            for (let i = 0; i < 5; i++) {
                                while (array[i] === "test") {
                                    test = true;
                                    word = wl.words[Math.floor(Math.random() * wl.words.length)].split(";");
                                    for (let j = 0; j < i; j++) {
                                        part = array[j][0].split(";")[0];
                                        if (part === word[0]) {
                                            test = false;
                                        }
                                    }
                                    if (test) {
                                        array[i] = word;
                                    }
                                }
                            }

                            if (reaction.emoji.name === '1️⃣') {
                                wllvl2(msg, array, wl);
                            } else if (reaction.emoji.name === '2️⃣') {
                                wordlistTest(msg, array);
                            }
                        });

                });


                //show wordlist
            } else {
                for (let i = 0; i < wl.words.length; i++) {
                    word = wl.words[i].split(";");
                    text = text + "**" + word[0] + "** - " + word[1] + "\n";
                }
                text = text + wl.end;
                const embed = new MessageEmbed()
                    .setTitle(wl.title)
                    .setColor(0x000000)
                    .setThumbnail(msg.author.avatarURL())
                    // Set the main content of the embed
                    .setDescription(text);
                msg.channel.send(embed)
            }


            ////////////////////////////////////////////////////////////////////////////////////////////
            /////////////////////NUMBER CONVERSION////////////////////////////////////////////////////////////////
        } else if (command[0] === "%n") {
            oct = 0;
            text = "";
            i = 1;
            z = parseInt(command[1]);
            if(isNaN(parseInt(z))) {
                const embed = new MessageEmbed()
                .setTitle('Tsrezì sti')
                .setColor(0x000000)
                .setThumbnail(msg.author.avatarURL())
                // Set the main content of the embed
                .setDescription("Please enter a number and not some strange stuff to test if Tekre included corner cases.");
                msg.channel.send(embed)
            } else if(z<0) {
                const embed = new MessageEmbed()
                .setTitle('Ngaytxoa!')
                .setColor(0x000000)
                .setThumbnail(msg.author.avatarURL())
                // Set the main content of the embed
                .setDescription("Tsrezì does not convert negative numbers.");
            msg.channel.send(embed)
            } else {
            while(z != 0) {
                r=z%8;
                z=Math.floor(z/8);
                oct = oct + r*i;
                i*=10;
            }
            oct2=oct;
            words=[["kew","'aw", "mune", "pxey", "tsìng", "mrr", "pukap", "kinä", "vol"], ["aw", "mun", "pey", "sìng", "mrr", "fu", "hin", "vol"], ["", "", "me", "pxe", "tsì", "mrr", "pu", "ki", "vo"], ["vol", "zam", "vozam", "zazam"], ["vo", "za", "voza", "zaza"]];

            res="";
            if(oct<=8) {
                res=words[0][oct]
                text = "(**" + oct + "**x1) = " + parseInt(command[1]);
            }else if(oct>77777) {
                res="Numbers bigger than 77777(octal)/32767(decimal) can't be translated with the currently existing Na'vi words."
            }else{
                y=0;
                x=true;
                while(oct!=0) {
                    z = oct%10;
                    if(y!=0) {
                        text = " + " + text;
                    }
                    text = "(**" + z + "**x" + Math.pow(8, y) + ")" + text;
                    oct = Math.floor(oct/10);
                    if(z>0) {
                    if(y===0) {
                        res=words[1][z-1];
                    } else {
                        if(x) {
                            res=words[2][z] + words[3][y-1] + res;
                        } else {
                            res=words[2][z] + words[4][y-1] + res;
                        }
                    }
                    if(z>1) {
                        x=false;
                    };  
                }
                y++;
                }
                text = text + " = " + parseInt(command[1]);
            } 
            text2="";
            if(command[1]%1!=0){
                text2 = " (Sorry, Tsrezì is not smart enough for comma numbers)"
            }
            const embed = new MessageEmbed()
                .setTitle('Your number: ' + parseInt(command[1]) + text2)
                .setColor(0x000000)
                .setThumbnail(msg.author.avatarURL())
                // Set the main content of the embed
                .setDescription(text + '\n -> **Octal number:** ' + oct2 + "\n**Na'vi word:** " + res);
            msg.channel.send(embed)
        }


    }else if(command[0] === "%n2") {
        words=[["kew","'aw", "mune", "pxey", "tsìng", "mrr", "pukap", "kinä", "vol"], ["aw", "mun", "pey", "sìng", "mrr", "fu", "hin"], ["me", "pxe", "tsì", "mrr", "pu", "ki"], ["vol", "zam", "vozam", "zazam"], ["vo", "za", "voza", "zaza"]];
        zahl=command[1];
        erg = 0;

        for (var i = 0; i < words[0].length-1; i++) {
            if(zahl===words[0][i]) {
                erg = i;
            }  
        }

        for (var i = 0; i < words[1].length; i++) {
            if(zahl.endsWith(words[1][i])) {
                erg = i+1;
                zahl = zahl.substr(0, zahl.length-words[1][i].length);
            }  
        }
        console.log(erg);
        var b = true;
        for (var i = 0; i < 4; i++) {
            if(zahl.endsWith(words[3][i]) || zahl.endsWith(words[4][i])) {
                console.log("entered if with i = " + i);
                if(!((i===1) && (zahl.endsWith(words[3][i+2]) || zahl.endsWith(words[4][i+2]) || zahl.endsWith(words[3][i+1]) || zahl.endsWith(words[4][i+1])))) {
                    console.log("entered if 2 with i = " + i);
                    if(zahl.endsWith(words[3][i])) {
                        zahl = zahl.substr(0, zahl.length-words[3][i].length);
                    } else {
                        zahl = zahl.substr(0, zahl.length-words[4][i].length);
                    }
                    console.log(zahl);
                    
                    for (var j = 0; j < words[2].length; j++) {
                        if(zahl.endsWith(words[2][j])) {
                            b = false;
                            console.log("entered if 3 with j = " + j+2);
                            zahl = zahl.substr(0, zahl.length-words[2][j].length);
                            erg = erg + Math.pow(8, i+1)*(j+2);
                            console.log(j+2 + " x " + words[3][i]);
                            console.log(zahl);
                        }
                        if(j===5 && b) {
                            console.log("entered if 3 with j = 0");
                            erg = erg + Math.pow(8, i+1);
                            console.log(zahl);
                        }
                    }
                    b = true;
                }
            }
        }
        for (var i = 0; i < words[3].length; i++) {
            if(zahl.endsWith(words[3][i])) {
                zahl = zahl.substr(0, zahl.length-words[3][i].length);
                for (var j = 0; j < words[2].length; j++) {
                    if(zahl.endsWith(words[2][j])) {
                        zahl = zahl.substr(0, zahl.length-words[2][j].length);
                        erg = erg + Math.pow(8, i+1)*(j+2);
                    }
                }
            } else if(zahl.endsWith(words[4][i])) {
                zahl = zahl.substr(0, zahl.length-words[4][i].length);
                for (var j = 0; j < words[2].length; j++) {
                    for (var j = 0; j < words[2].length; j++) {
                        if(zahl.endsWith(words[2][j])) {
                            zahl = zahl.substr(0, zahl.length-words[2][j].length);
                            erg = erg + Math.pow(8, i+1)*(j+2);
                        }
                    }
                }
            }
        }
        var tìsung = "";
        if(command[1].includes("zam")) {
            if(!(command[1].endsWith("zamaw") || command[1].endsWith("zam") || command[1].endsWith("zamun"))) {

                tìsung = "\n\nNote: `zazam`, `vozam` and `zam` loose their -m when something else then `aw` follows. The correct number is: "
            }
        }
        const embed = new MessageEmbed()
                .setTitle('Your number: ' + command[1])
                .setColor(0x000000)
                .setThumbnail(msg.author.avatarURL())
                // Set the main content of the embed
                .setDescription("Result: " + erg);
            msg.channel.send(embed)
        //if is words[0]
        //ends with words[1]
        //ends with words[3/4][x] & words[2]
        //finished: when something is left, ?????
            ////////////////////////////////////////////////////////////////////////////////////////
            ///////////////////////STUPID TROLL STUFF///////////////////////////////////////////////
            //********************TSREZÌ LU TSTUNWIA RITI ATSTUNWI**********************
        } else if ((command[0] === "%kaltxì" || command[0] === "%kxì" || command[0] === "%about") && !command[1]) {
            const embed = new MessageEmbed()
                .setTitle('Kaltxì!')
                .setColor(0x000000)
                .setThumbnail(msg.author.avatarURL())
                // Set the main content of the embed
                .setDescription(texts.about);
            msg.channel.send(embed)
        } else if (command[0] === "%will" && command[1] === "tekre" && command[2] === "ever" && command[3] === "replace" && command[4] === "the" && command[5] === "filler" && command[6] === "texts") {
            const embed = new MessageEmbed()
                .setTitle('ììì')
                .setColor(0x000000)
                .setThumbnail(msg.author.avatarURL())
                // Set the main content of the embed
                .setDescription("Maybe in your dreams...");
            msg.channel.send(embed)
        } else if ((command[0] === "%hivahaw" && command[1] === "nìmwey") && !command[2]) {
            if (msg.author.id === "429361033446948864") {
                const embed = new MessageEmbed()
                    .setTitle("Hayalovay!")
                    .setColor(0x000000)
                    .setThumbnail(msg.author.avatarURL())
                    // Set the main content of the embed
                    .setDescription(texts.shutdown)
                msg.channel.send(embed).then(m => {
                    client.destroy();
                });
            } else {
                const embed = new MessageEmbed()
                    .setTitle("Kehe!")
                    .setColor(0x000000)
                    .setThumbnail(msg.author.avatarURL())
                    // Set the main content of the embed
                    .setDescription(texts.shutdown1);
                msg.channel.send(embed)
            }
        } else if ((command[0] === "%test")) {
            test3(msg);
        } else if ((command[0] === "%rd")) {
            zahl = Math.floor(Math.random() * command[1]) +1;
            const embed = new MessageEmbed()
                .setTitle("Tsrezìru lu tì'eyng")
                .setColor(0x000000)
                .setThumbnail(msg.author.avatarURL())
                // Set the main content of the embed
                .setDescription(zahl);
            msg.channel.send(embed)
        }else if ((command[0] === "%starve") && !command[1]) {
            const embed = new MessageEmbed()
                .setTitle("Tsrezì sti nìtxan")
                .setColor(0x000000)
                .setThumbnail(msg.author.avatarURL())
                // Set the main content of the embed
                .setDescription(texts.starve);
            msg.channel.send(embed)
        } else if (command[0] === "%q") {
            answer = texts.answers[Math.floor(Math.random() * texts.answers.length)];
            const embed = new MessageEmbed()
                .setTitle(msg.content.slice(3))
                .setColor(0x000000)
                .setThumbnail(msg.author.avatarURL())
                // Set the main content of the embed
                .setDescription(answer);
            msg.channel.send(embed);
            console.log("Tsrezì answered: " + answer)
            if (answer === "Hìtxoa, ke omum oel tsat... 'awa swawtsyìp, pìyawm Eytukanta oe.") {
                let question = "";
                for (let i = 1; i < command.length; i++) {
                    question += " " + command[i];
                }
                msg.channel.send("!8ball" + question);
            }
        } else if (command[0] === "%bad" && (texts.commnds.bad.includes(command[1]) || !command[1])) {
            const embed = new MessageEmbed()
                .setTitle("Tsrezì sti nìtxan")
                .setColor(0x000000)
                .setThumbnail(msg.author.avatarURL())
                // Set the main content of the embed
                .setDescription(texts.bad);
            msg.channel.send(embed)
        } else if (command[0] === "%pizza" && !command[1] || command[0] === "%feed" && command[1] === "pizza" || command[0] === "%🍕") {
            const embed = new MessageEmbed()
                .setTitle("Tsrezìru nga lu yawne")
                .setColor(0x000000)
                .setThumbnail(msg.author.avatarURL())
                // Set the main content of the embed
                .setDescription(texts.pizza);
            msg.channel.send(embed)
        } else if (command[0] === "%good" && (texts.commnds.good.includes(command[1]) || !command[1])) {
            const embed = new MessageEmbed()
                .setTitle("Tsrezì 'efu nitram")
                .setColor(0x000000)
                .setThumbnail(msg.author.avatarURL())
                // Set the main content of the embed
                .setDescription(texts.good);
            msg.channel.send(embed)
        } else if (command[0] === "%feed" && (texts.commnds.feedbad.includes(command[1]))) {
            const embed = new MessageEmbed()
                .setTitle("Tsrezì sti!")
                .setColor(0x000000)
                .setThumbnail(msg.author.avatarURL())
                // Set the main content of the embed
                .setDescription(texts.feedbad);
            msg.channel.send(embed)
        } else if (command[0] === "%feed" && (command[1] === "wllìm" || command[1] === "reykunyu" || command[1] === "tiretxan" || command[1] === "vawmie")) {
            const embed = new MessageEmbed()
                .setTitle("Tsrezì sti!")
                .setColor(0x000000)
                .setThumbnail(msg.author.avatarURL())
                // Set the main content of the embed
                .setDescription("I don't eat " + command[1] + ", he is my friend!");
            msg.channel.send(embed)
        } else if (command[0] === "%salad" || (command[0] === "%praise" && command[1] === "the" && command[2] === "salad")) {
            msg.channel.send("🥗")
        } else if (command[0] === "%praise" && command[1] === "the" && command[2] === "pizza") {
            msg.channel.send("🍕")
        } else if (command[0] === "%praise" && command[1] === "eywa") {
            const embed = new MessageEmbed()
                .setTitle("Nawma sa'nok lrrtok sivi")
                .setColor(0x000000)
                .setThumbnail(msg.author.avatarURL())
                // Set the main content of the embed
                .setDescription("Eywa will always protect you!");
            msg.channel.send(embed)
        } else if (command[0] === "%feed" && (texts.commnds.feed.includes(command[1]) && !command[2] || !command[1] || command[1] === "vegan") ) {
            let text = texts.feed;
            if (command[1] === "salad") {
                text += " The salad lord will be pleased too!"
            }
            const embed = new MessageEmbed()
                .setTitle("Tsrezì 'efu nitram")
                .setColor(0x000000)
                .setThumbnail(msg.author.avatarURL())
                // Set the main content of the embed
                .setDescription(text);
            msg.channel.send(embed)
            //********************LITTLE TEXT ABOUT TRANSITIVITY**********************
        } else if ((command[0] === "%transitivity") && !command[1]) {
            const embed = new MessageEmbed()
                .setTitle('Transitivity')
                .setColor(0x000000)
                .setThumbnail(msg.author.avatarURL())
                // Set the main content of the embed
                .setDescription(texts.transitivity);
            msg.channel.send(embed)
        } else if ((command[0] === "%start") && !command[1]) {
            const embed = new MessageEmbed()
                .setTitle('How to start?')
                .setColor(0x000000)
                .setThumbnail(msg.author.avatarURL())
                // Set the main content of the embed
                .setDescription(texts.start);
            msg.channel.send(embed)
        } else if (command[0] === "%good" && command[1] === "tekre" || command[0] === "%praise") {
            const embed = new MessageEmbed()
                .setTitle("Tsrezì sti nìtxan")
                .setColor(0x000000)
                .setThumbnail(msg.author.avatarURL())
                // Set the main content of the embed
                .setDescription("I, Eywa, the salad lord and the pizza lord are the only ones who can be praised!!!");
            msg.channel.send(embed)
        }
    }
});









//**FUNCTIONS AND STUFF; PLEASE DON'T READ, IT IS TOO UGLY FOR THIS WORLD - I MEAN, THE NAME OF THE TWO EXISTING FUNCTION ARE "TEST" AND "TEST2"...

async function wllvl2(msg, array, wl) {
    correctAnswers = 0;
    for (let i = 0; i < array.length; i++) {
        let promise = new Promise((resolve, reject) => {
            let words = ["", "", ""];
            const correct = Math.floor(Math.random() * 3);
            words[correct] = array[i][0];

            for (let j = 0; j < 3; j++) {
                if (j != correct) {
                    while (words[j] === "" || words[j] === words[correct]) {
                        words[j] = wl.words[Math.floor(Math.random() * wl.words.length)].split(";")[0];
                    }
                }
            }

            const embed = new MessageEmbed()
                .setTitle('Word number ' + (i + 1) + ' of 5')
                .setColor(0x000000)
                .setThumbnail(msg.author.avatarURL())
                // Set the main content of the embed
                .setDescription("**" + array[i][1] + "**" + wordlists.choice + "1️⃣ " + words[0] + "\n2️⃣ " + words[1] + "\n3️⃣ " + words[2]);
            msg.channel.send(embed).then(sentMessage => {
                sentMessage.react("1️⃣")
                    .then(() => sentMessage.react('2️⃣')
                        .then(() => sentMessage.react('3️⃣')));

                //await reactions
                const filter = (reaction, user) => {
                    return ['1️⃣', '2️⃣', '3️⃣'].includes(reaction.emoji.name) && user.id === msg.author.id;
                };

                sentMessage.awaitReactions(filter, { max: 1, time: 180000, errors: ['time'] })
                    .then(collected => {
                        const reaction = collected.first();
                        let solution;
                        if (reaction.emoji.name === '1️⃣') {
                            solution = 0;
                        } else if (reaction.emoji.name === '2️⃣') {
                            solution = 1;
                        } else if (reaction.emoji.name === '3️⃣') {
                            solution = 2;
                        }
                        let answer = "";
                        if (solution === correct) {
                            correctAnswers++;
                            if (i == 4) {
                                answer += "\n\n" + texts.lessons.congrats + " You answered " + correctAnswers + " of 5 correct!"
                            }
                            const embed = new MessageEmbed()
                                .setTitle("Correct!")
                                .setColor(0x000000)
                                .setThumbnail(msg.author.avatarURL())
                                // Set the main content of the embed
                                .setDescription("Your answer is correct - **" + array[i][1] + "** means **" + array[i][0] + "** in Na'vi!" + answer);
                            msg.channel.send(embed)
                        } else {
                            if (i == 4) {
                                answer += "\n\n" + texts.lessons.congrats + " You answered " + correctAnswers + " of 5 correct!"
                            };
                            const embed = new MessageEmbed()
                                .setTitle("Wrong answer")
                                .setColor(0x000000)
                                .setThumbnail(msg.author.avatarURL())
                                // Set the main content of the embed
                                .setDescription("Your answer was not correct - **" + array[i][1] + "** means **" + array[i][0] + "** in Na'vi!" + answer);
                            msg.channel.send(embed)
                        }

                        resolve("true");
                    })
                    .catch(collected => {
                        if (i < 4) {
                            const embed = new MessageEmbed()
                                .setTitle('Exercise ended')
                                .setColor(0x000000)
                                .setThumbnail(msg.author.avatarURL())
                                // Set the main content of the embed
                                .setDescription("<@" + msg.author.id + "> " + texts.lessons.endExercise);
                            msg.channel.send(embed)
                            resolve("false");
                        }
                    });
            });;
        });
        let result = await promise;
        if (result === "false") {
            break;
        }
    }
}

async function test(msg, array) {
    for (let i = 0; i < array.length; i++) {
        let promise = new Promise((resolve, reject) => {
            let reaction;
            if (i < 4) {
                content = "**" + array[i] + "**" + lessons.pronounciation.first.next;
                reaction = "✅";
            } else {
                content = "**" + array[i] + "**\n\n*Congratulation! You have reached the end of the exercise!*";
                reaction = "🎉";
            }
            const embed = new MessageEmbed()
                .setTitle('Word number ' + (i + 1) + ' of 5')
                .setColor(0x000000)
                .setThumbnail(msg.author.avatarURL())
                // Set the main content of the embed
                .setDescription(content);
            msg.channel.send(embed).then(sentMessage => {
                sentMessage.react(reaction);

                //await reactions
                const filter = (reaction, user) => {
                    return ["✅"].includes(reaction.emoji.name) && user.id === msg.author.id;
                };

                sentMessage.awaitReactions(filter, { max: 1, time: 360000, errors: ['time'] })
                    .then(collected => {
                        const reaction = collected.first();
                        resolve("true");
                    })
                    .catch(collected => {
                        if (i < 4) {
                            const embed = new MessageEmbed()
                                .setTitle('Exercise ended')
                                .setColor(0x000000)
                                .setThumbnail(msg.author.avatarURL())
                                // Set the main content of the embed
                                .setDescription("<@" + msg.author.id + "> " + texts.lessons.endExercise);
                            msg.channel.send(embed)
                            resolve("false");
                        }
                    });
            });;
        });
        let result = await promise;
        if (result === "false") {
            break;
        }
    }
}

async function test2(msg, array) {
    let correctAnswers = 0;
    for (let i = 0; i < array.length; i++) {
        let promise = new Promise((resolve, reject) => {
            const embed = new MessageEmbed()
                .setTitle('Verb number ' + (i + 1) + ' of 5')
                .setColor(0x000000)
                .setThumbnail(msg.author.avatarURL())
                // Set the main content of the embed
                .setDescription("**" + array[i][0] + "** ||" + array[i][1] + "||" + lessons.lt.first.text);
            msg.channel.send(embed).then(() => {
                answers = ["vtr", "vin"];
                const filter = response => {
                    return answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
                };

                msg.channel.awaitMessages(filter, { time: 180000, max: 1, errors: ['time'] })
                    .then(messages => {
                        let answer = "**" + array[i][0] + "** is **" + array[i][2] + "**";
                        if (messages.first().content === array[i][2]) {
                            correctAnswers++;
                            if (i == 4) {
                                answer += "\n\n" + texts.lessons.congrats + " You answered " + correctAnswers + " of 5 correct!"
                            }
                            const embed = new MessageEmbed()
                                .setTitle("Correct!")
                                .setColor(0x000000)
                                .setThumbnail(msg.author.avatarURL())
                                // Set the main content of the embed
                                .setDescription(answer);
                            msg.channel.send(embed)
                        } else {
                            if (array[i][0].includes(" si")) {
                                answer += "\n*Remember: All si-verbs are intransitive!*";
                            }
                            if (i == 4) {
                                answer += "\n\n" + texts.lessons.congrats + " You answered " + correctAnswers + " of 5 correct!"
                            }
                            const embed = new MessageEmbed()
                                .setTitle("Wrong answer")
                                .setColor(0x000000)
                                .setThumbnail(msg.author.avatarURL())
                                // Set the main content of the embed
                                .setDescription(answer);
                            msg.channel.send(embed)
                        }
                        resolve("true");
                    })
                    .catch(() => {
                        const embed = new MessageEmbed()
                            .setTitle('Exercise ended')
                            .setColor(0x000000)
                            .setThumbnail(msg.author.avatarURL())
                            // Set the main content of the embed
                            .setDescription("<@" + msg.author.id + "> " + texts.lessons.endExercise);
                        msg.channel.send(embed)
                        resolve("false");
                    });
            });
        });
        let result = await promise;
        if (result === "false") {
            break;
        }
    }
}

async function apiCall(reaction, msg) {
    let promise = new Promise((resolve, reject) => {
        if (reaction.emoji.name === '1️⃣') {
            resolve(lessons.lt.first.level[0]);
        } else if (reaction.emoji.name === '2️⃣') {
            https.get('https://reykunyu.wimiso.nl/api/list/transitivity', (resp) => {
                let data = '';

                // A chunk of data has been recieved.
                resp.on('data', (chunk) => {
                    data += chunk;
                });

                // The whole response has been received. Print out the result.
                resp.on('end', () => {
                    resolve(JSON.parse(data));
                });
            })
        }
    });
    let elements = await promise;
    let array = ["test", "test", "test", "test", "test"]

    for (let i = 0; i < 5; i++) {
        while (array[i] === "test") {
            test = true;
            word = elements[Math.floor(Math.random() * elements.length)];
            for (let j = 0; j < i; j++) {
                part = array[j][0];
                if (part === word[0]) {
                    test = false;
                }
            }
            if (test) {
                array[i] = word;
                if (array[i][2] === "transitive" || array[i][2] === "vtr") {
                    array[i][2] = "vtr"
                } else {
                    array[i][2] = "vin"
                }
            }
        }
    }
    test2(msg, array);
}

async function transitive(msg) {
    const embed = new MessageEmbed()
        .setTitle('Level Selection')
        .setColor(0x000000)
        .setThumbnail(msg.author.avatarURL())
        // Set the main content of the embed
        .setDescription(lessons.lt.first.intro + texts.lessons.level + lessons.lt.first.lvlDescription);
    msg.channel.send(embed).then(sentMessage => {
        sentMessage.react("1️⃣")
            .then(() => sentMessage.react('2️⃣'));

        //await reactions
        const filter = (reaction, user) => {
            return ['1️⃣', '2️⃣'].includes(reaction.emoji.name) && user.id === msg.author.id;
        };

        sentMessage.awaitReactions(filter, { max: 1, time: 180000, errors: ['time'] })
            .then(collected => {
                const reaction = collected.first();

                array = apiCall(reaction, msg);
            });

    });
}
function tlsentences(msg) {
    const embed = new MessageEmbed()
        .setTitle('Level Selection')
        .setColor(0x000000)
        .setThumbnail(msg.author.avatarURL())
        // Set the main content of the embed
        .setDescription(lessons.lt.third.intro + texts.lessons.level + lessons.lt.third.lvlDescription);
    msg.channel.send(embed).then(sentMessage => {
        sentMessage.react("1️⃣")
            .then(() => sentMessage.react('2️⃣')
                .then(() => sentMessage.react('3️⃣')
                    .then(() => sentMessage.react('4️⃣'))));
        //await reactions
        const filter = (reaction, user) => {
            return ['1️⃣', '2️⃣', '3️⃣', '4️⃣'].includes(reaction.emoji.name) && user.id === msg.author.id;
        };

        sentMessage.awaitReactions(filter, { max: 1, time: 180000, errors: ['time'] })
            .then(collected => {
                const reaction = collected.first();
                let lvl;

                if (reaction.emoji.name === '1️⃣') {
                    lvl = 0;
                } else if (reaction.emoji.name === '2️⃣') {
                    lvl = 1;
                } else if (reaction.emoji.name === '3️⃣') {
                    lvl = 2;
                } else if (reaction.emoji.name === '4️⃣') {
                    lvl = 3;
                }
                const elements = lessons.lt.first.level[lvl];
                let array = ["test", "test", "test", "test", "test"]
            });

    });
}
function simplify(sentence) {
    console.log(sentence);
    array = sentence.split(" ");
    console.log(array);
    console.log(array[0]);

}

async function wordlistTest(msg, array) {
    let correctAnswers = 0;
    for (let i = 0; i < array.length; i++) {
        let promise = new Promise((resolve, reject) => {
            const embed = new MessageEmbed()
                .setTitle('Word number ' + (i + 1) + ' of 5')
                .setColor(0x000000)
                .setThumbnail(msg.author.avatarURL())
                // Set the main content of the embed
                .setDescription("**" + array[i][1] + "**" + wordlists.exercise);
            msg.channel.send(embed).then(() => {
                const filter = (response) => {
                    return response.author.id === msg.author.id;
                };

                msg.channel.awaitMessages(filter, { time: 180000, max: 1, errors: ['time'] })
                    .then(messages => {

                        let answer = " ";
                        if (messages.first().content === array[i][0].toLowerCase()) {
                            correctAnswers++;
                            if (i == 4) {
                                answer += "\n\n" + texts.lessons.congrats + " You answered " + correctAnswers + " of 5 correct!"
                            }
                            const embed = new MessageEmbed()
                                .setTitle("Correct!")
                                .setColor(0x000000)
                                .setThumbnail(msg.author.avatarURL())
                                // Set the main content of the embed
                                .setDescription("Your answer is correct - **" + array[i][1] + "** means **" + array[i][0] + "** in Na'vi!" + answer);
                            msg.channel.send(embed)
                        } else {
                            if (i == 4) {
                                answer += "\n\n" + texts.lessons.congrats + " You answered " + correctAnswers + " of 5 correct!"
                            }
                            const embed = new MessageEmbed()
                                .setTitle("Wrong answer")
                                .setColor(0x000000)
                                .setThumbnail(msg.author.avatarURL())
                                // Set the main content of the embed
                                .setDescription("Your answer was not correct - **" + array[i][1] + "** means **" + array[i][0] + "** in Na'vi!" + answer);
                            msg.channel.send(embed)
                        }
                        resolve("true");
                    })
                    .catch(() => {
                        const embed = new MessageEmbed()
                            .setTitle('Exercise ended')
                            .setColor(0x000000)
                            .setThumbnail(msg.author.avatarURL())
                            // Set the main content of the embed
                            .setDescription("<@" + msg.author.id + "> " + texts.lessons.endExercise);
                        msg.channel.send(embed)
                        resolve("false");
                    });
            });
        });
        let result = await promise;
        if (result === "false") {
            break;
        }
    }
}

function test3() {
    https.get('https://reykunyu.wimiso.nl/api/list/transitivity', (resp) => {
        let data = '';

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            return JSON.parse(data);
        });
    })
}

client.login('NzIzMjU3NjQ5MDU1MDA2NzQw.XuvALQ.yusmf_zXgu0Yq6Yym7vfSKesXWU');*/