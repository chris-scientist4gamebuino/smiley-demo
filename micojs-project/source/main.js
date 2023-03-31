
"push title Demo with ChatGPT";
"push author chris-scientist and ChatGPT";
"push description A MicoJS demo write with ChatGPT";
"set version v0.0.1";
"set category demo";
"set url https://micojs.github.com";

// [FRANCAIS]
//
// Le code que vous vous allez parcourir a été généré grâce à ChatGPT 3.
// Le projet date de fin mars 2023. Le prompt pour parvenir à ce code
// est fournie dans les sources de ce projet.
//
// ~~~ MicoJS ~~~
// MicoJS pour MIcroCOntroller JavaScript, est un language de programmation
// qui est une couche d'abstraction à différentes consoles dont :
// 32Blit, ESPboy, Galatic Unicorn, Gamebuino META, PicoSystem et Pokitto.
// Le projet a été initié par FManga en novembre 2022.
// Note : d'après mes tests en ligne le code n'est pas optimisé pour :
// Galatic Unicorn.
//
// ~~~ ChatGPT ~~~
// Il s'agit d'une intelligence articielle, en particulier d'un agent conversationnel.
// L'outil est développé par l'entreprise OpenAI.
// La version de ChatGPT, utilisée pour générer ce programme, a fini son apprentissage
// au début de l'année 2022.
//
// ~~~ Avertissement ~~~
// Comme vous pouvez le comprendre ChatGPT ignore ce qu'est MicoJS.
// Ce dernier est en effet arrivé après ChatGPT et ne fait donc
// pas partit de son domaine de compétence. Mais avec un peu de patience,
// vous pouvez apprendre à ChatGPT comment coder un projet en MicoJS.
// De plus, dans ce code et je n'ai pas insister auprès de ChatGPT,
// mais le smiley clin d'oeil ne fonctionne pas. Comprenez :
// qu'il n'y a aucun changement perceptible à l'écran...
// Enfin le prompt a été pensé pour la Gamebuino META. Mais ChatGPT
// a privilégié l'exemple à la consigne relative à la taille de l'écran.
//
//
// Pour aller plus loin :
//
// ~~~ MicoJS ~~~
// Wiki : https://github.com/micojs/micojs.github.io/wiki
// Web IDE : https://micojs.github.io
//
// ~~~ ChatGPT ~~~
// https://openai.com/blog/chatgpt
//
// [/FIN]

const bgColor = setPen(0, 0, 0);
const faceColor = setPen(255, 255, 0);
const mouthColor = setPen(255, 0, 0);
const eyeColor = setPen(0, 0, 0);

let screenWidth, screenHeight;

class Smiley {
    init() {
        this.x = screenWidth / 2;
        this.y = screenHeight / 2;
        this.faceWidth = 40;
        this.faceHeight = 40;
        this.mouthWidth = 20;
        this.mouthHeight = 10;
        this.eyeWidth = 5;
        this.eyeHeight = 5;
        this.isSmiling = false;
        this.isFrowning = false;
        this.isWinking = false;
    }

    update() {
        this.isSmiling = UP;
        this.isFrowning = DOWN;
        this.isWinking = LEFT;
        if (RIGHT) {
            this.mouthWidth = 10;
            this.mouthHeight = 20;
        } else {
            this.mouthWidth = 20;
            this.mouthHeight = 10;
        }
    }

    render() {
        setPen(faceColor);
        rect(this.x - this.faceWidth / 2, this.y - this.faceHeight / 2, this.faceWidth, this.faceHeight);
        setPen(mouthColor);
        if (this.isSmiling) {
            rect(this.x - this.mouthWidth / 2, this.y, this.mouthWidth, this.mouthHeight);
        } else if (this.isFrowning) {
            rect(this.x - this.mouthWidth / 2, this.y + this.mouthHeight, this.mouthWidth, this.mouthHeight);
        } else {
            rect(this.x - this.mouthWidth / 2, this.y + this.mouthHeight / 2, this.mouthWidth, this.mouthHeight);
        }
        setPen(eyeColor);
        rect(this.x - this.faceWidth / 4 - this.eyeWidth / 2, this.y - this.faceHeight / 4 - this.eyeHeight / 2, this.eyeWidth, this.eyeHeight);
        rect(this.x + this.faceWidth / 4 - this.eyeWidth / 2, this.y - this.faceHeight / 4 - this.eyeHeight / 2, this.eyeWidth, this.eyeHeight);
        if (this.isWinking) {
            setPen(bgColor);
            rect(this.x + this.faceWidth / 4 - this.eyeWidth / 2, this.y - this.faceHeight / 4 - this.eyeHeight / 2, this.eyeWidth, this.eyeHeight);
        }
    }
}

const smiley = new Smiley();

function init() {
    screenWidth = getWidth();
    screenHeight = getHeight();
    smiley.init();
}

function update(time) {
    smiley.update();
}

function render() {
    setPen(bgColor);
    clear();
    smiley.render();
    // [CODE AJOUTE A LA MAIN]
    // Ce code a été ajouté manuellement...
    // Mais il est possible de demander à ChatGPT de le générer.
    setPen(255,255,255);
    text("Generate by ChatGPT", 10, 10);
    // [/FIN DU CODE AJOUTE A LA MAIN]
}
