/* =========================================
   PREETU: YEAR 23
========================================= */


/* =========================================
   BASIC NAVIGATION
========================================= */

const screens = document.querySelectorAll(".screen");
const enterButton = document.getElementById("enter-button");
const roomObjects = document.querySelectorAll(".room-object");
const backButtons = document.querySelectorAll(".back-button");


function showScreen(screenId) {

    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    const target = document.getElementById(screenId);

    if (target) {
        target.classList.add("active");
        window.scrollTo(0, 0);
    }

}


enterButton.addEventListener("click", () => {
    showScreen("home-screen");
});


roomObjects.forEach(object => {

    object.addEventListener("click", () => {

        const feature = object.dataset.feature;

        showScreen(feature);

    });

});


backButtons.forEach(button => {

    button.addEventListener("click", () => {
        showScreen("home-screen");
    });

});


/* =========================================
   DAY COUNTER
========================================= */

function updateDayCounter() {

    const birthday = new Date(2026, 8, 27);
    const today = new Date();

    birthday.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    const millisecondsPerDay =
        1000 * 60 * 60 * 24;

    let day =
        Math.floor(
            (today - birthday) /
            millisecondsPerDay
        ) + 1;


    if (day < 1) {
        day = 1;
    }


    if (day > 365) {
        day = 365;
    }


    document.getElementById("day-counter").textContent =
        `Day ${day} of 365 ♡`;

}


updateDayCounter();


/* =========================================
   MODAL
========================================= */

const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");
const modalClose = document.getElementById("modal-close");


function openModal(html) {

    modalContent.innerHTML = html;

    modal.classList.remove("hidden");

}


function closeModal() {

    modal.classList.add("hidden");

}


modalClose.addEventListener("click", closeModal);


modal.addEventListener("click", event => {

    if (event.target === modal) {
        closeModal();
    }

});


/* =========================================
   VAULT DATA
========================================= */

const vaultItems = [

    {
        date: "2026-09-27",
        displayDate: "SEPTEMBER 27, 2026",
        title: "Welcome to 23",
        body: `
            <h2>🎂 Welcome to 23</h2>

            <p>Hi birthday girl. ♡</p>

            <p>
                If you're reading this, congratulations! You found
                the part of your gift that I physically could not
                fit inside the giant heart.
            </p>

            <p>
                Welcome to <strong>PREETU: YEAR 23.</strong>
            </p>

            <p>
                I wanted to give you something that wouldn't end
                when your birthday ended.
            </p>

            <p>
                Some things in here will make you emotional.
                Some will probably make you laugh.
                Both are acceptable outcomes.
            </p>

            <p>
                I don't know exactly what this year is going to
                look like for you.
            </p>

            <p>
                But I do know one thing:
            </p>

            <p>
                <strong>
                    I'm really freaking happy I get to know you
                    through another version of yourself.
                </strong>
            </p>

            <p>
                Happy 23, Behen.
            </p>

            <p>
                Go explore your stupid little app.
            </p>

            <p>
                <strong>I love you times ♾️.</strong>
            </p>

            <p>— Pooja ❤️</p>
        `
    },


    {
        date: "2026-10-27",
        displayDate: "OCTOBER 27, 2026",
        title: "One Month of 23",
        body: `
            <h2>💕 One Month of 23</h2>

            <p>
                🚨 <strong>OFFICIAL YEAR 23 CHECKPOINT</strong>
            </p>

            <p>
                You have survived exactly one month
                of being 23.
            </p>

            <p>
                Current rating: ___ / 10
            </p>

            <p>
                Best thing that's happened: __________
            </p>

            <p>
                Current obsession: __________
            </p>

            <p>
                Current complaint: __________
            </p>

            <p>
                Something you're looking forward to: __________
            </p>

            <p>
                Screenshot this and send it to me.
            </p>

            <p>
                Okay bye. Continue being 23. ❤️
            </p>
        `
    },


    {
        date: "2026-12-31",
        displayDate: "DECEMBER 31, 2026",
        title: "End Credits: 2026",
        body: `
            <h2>✨ End Credits: 2026</h2>

            <p>
                Before this year ends, think about
                the Preetu who started 2026.
            </p>

            <p>
                Everything she didn't know yet.
                Every good day she hadn't lived.
                Every shitty day she didn't know she'd survive.
            </p>

            <p>
                And now you're standing at the other end of it.
            </p>

            <p>
                Before you start listing everything you need
                to accomplish next year, give yourself five
                freaking minutes to be proud of everything
                you handled this year.
            </p>

            <p>
                <strong>I'm proud of you.</strong>
            </p>

            <p>
                Happy New Year, Behen. ❤️
            </p>

            <p>
                P.S. See you in 10 days. 👀
            </p>
        `
    },


    {
        date: "2027-01-10",
        displayDate: "JANUARY 10, 2027",
        title: "Our Day ♡",
        body: `
            <h2>👯‍♀️ Our Day ♡</h2>

            <p>
                January 10.
            </p>

            <p>
                The day I met you.
            </p>

            <p>
                Which is funny because I obviously had no idea
                what I was getting myself into.
            </p>

            <p>
                I didn't know that one day “Behen” would
                automatically require “Bol Behen.”
            </p>

            <p>
                I didn't know we'd argue, annoy each other,
                feed each other, hype each other up,
                analyze screenshots and somehow become
                this insanely attached.
            </p>

            <p>
                I didn't know there would eventually be a point
                where calling you just my “friend”
                wouldn't really explain it anymore.
            </p>

            <p>
                You became <strong>Behen.</strong>
            </p>

            <p>
                Somehow, year after year,
                <strong>I just keep knowing you more.</strong>
            </p>

            <p>
                If I could go back to the day we met
                and tell that version of me one thing,
                I'd probably say:
            </p>

            <p>
                <strong>“Yeah. Keep this one.”</strong>
            </p>

            <p>
                Happy us day, Preetu. ♡
            </p>

            <p>
                P + P forever, bitch.
            </p>

            <p>— Pooja</p>
        `
    },


    {
        date: "2027-02-14",
        displayDate: "FEBRUARY 14, 2027",
        title: "Behen-tine's Day",
        body: `
            <h2>💗 Behen-tine's Day</h2>

            <p>
                Roses are red.<br>
                Violets are blue.
            </p>

            <p>
                Relationships are cute,
                but unfortunately you're stuck with me too.
            </p>

            <p>
                Happy Valentine's Day to one of
                the great loves of my life—
                in the “I know too much about you
                and will absolutely use it against you”
                category.
            </p>

            <p>
                I hope you're loved loudly today.
            </p>

            <p>
                By Jiju.<br>
                By your family.<br>
                By your friends.<br>
                And obviously by your extremely humble,
                beautiful, talented Behen.
            </p>

            <p>
                You're welcome. 💗
            </p>
        `
    },


    {
        date: "2027-03-27",
        displayDate: "MARCH 27, 2027",
        title: "Halfway Through 23",
        body: `
            <h2>🌷 Halfway Through 23</h2>

            <p>
                <strong>6 MONTHS DOWN.</strong>
            </p>

            <p>
                Half of 23 is already gone.
                Weird, right?
            </p>

            <p>
                Think about what you were worried about
                six months ago.
            </p>

            <p>
                What changed?
                What didn't?
                What happened that you never predicted?
            </p>

            <p>
                I hope somewhere in all of that,
                you've been living too.
            </p>

            <p>
                Not just planning the next thing.
                Not just waiting to accomplish something.
                Not just thinking about who you're supposed
                to become.
            </p>

            <p>
                <strong>Actually living.</strong>
            </p>

            <p>
                You've still got six whole months of 23 left.
            </p>

            <p>
                Do something with them that
                24-year-old Preetu will be glad you did.
            </p>

            <p>❤️</p>
        `
    },


    {
        date: "2027-05-20",
        displayDate: "MAY 20, 2027",
        title: "Long-Distance Behen Services",
        body: `
            <h2>✈️ Long-Distance Behen Services</h2>

            <p>
                🚨 <strong>IMPORTANT SERVICE ANNOUNCEMENT</strong>
            </p>

            <p>
                Your local Pooja branch is temporarily unavailable.
            </p>

            <p>
                She is currently several thousand miles away.
            </p>

            <p>
                However:
            </p>

            <p>
                <strong>
                    BEHEN SERVICES REMAIN FULLY OPERATIONAL.
                </strong>
            </p>

            <p>
                We continue to accept gossip, screenshots,
                complaints, random updates, food pictures,
                outfit opinions and “BEHENNN” with zero context.
            </p>

            <p>
                Time-zone delays may apply.
                Emotional attachment remains unaffected.
            </p>

            <hr>

            <p>
                🎟️ <strong>LONG-DISTANCE CALL-ME PASS</strong>
            </p>

            <p>
                Send me:
                <strong>“I'm using the May 20 pass.”</strong>
            </p>

            <p>
                And we'll make time for a proper Behen call.
                No specific reason required. ♡
            </p>
        `
    },


    {
        date: "2027-06-15",
        displayDate: "JUNE 15, 2027",
        title: "No Occasion. Just You.",
        body: `
            <h2>💌 No Occasion. Just You.</h2>

            <p>
                There's no anniversary today.
                It's not your birthday.
                It's not a holiday.
            </p>

            <p>
                Nothing happened.
            </p>

            <p>
                I intentionally put something here
                on a completely ordinary day.
            </p>

            <p>
                Because sometimes we save all the nice things
                we want to tell people for birthdays.
            </p>

            <p>
                And that's stupid.
            </p>

            <p>
                <strong>
                    I'm really grateful you're my friend.
                </strong>
            </p>

            <p>
                I'm grateful for the random calls,
                food conversations, stupid jokes,
                screenshots and updates nobody else needed.
            </p>

            <p>
                That's the stuff that actually makes up
                a friendship.
            </p>

            <p>
                And I miss it in person right now.
            </p>

            <p>
                That's all.
            </p>

            <p>
                Okay, don't get emotional now. Jk I know you don't cry easily hehe.
            </p>

            <p>Bye. ❤️</p>
        `
    },


    {
        date: "2027-07-06",
        displayDate: "JULY 6, 2027",
        title: "It's My Birthday, But I Miss You",
        body: `
            <h2>🎂 It's My Birthday...</h2>

            <p>
                Which means today is supposed to be about me.
            </p>

            <p>
                So naturally...
            </p>

            <p>
                <strong>I'm using part of it to bother you.</strong>
            </p>

            <p>
                Hi Behen.
            </p>

            <p>
                There's one thing that's weird
                about this birthday:
            </p>

            <p>
                <strong>you're not here.</strong>
            </p>

            <p>
                And I miss you.
            </p>

            <p>
                I miss randomly seeing you.
                I miss our food runs.
                I miss sitting around doing absolutely nothing
                and somehow still having 900 things to discuss.
            </p>

            <p>
                Obviously we still call and text
                and send each other unnecessary updates.
            </p>

            <p>
                But it's not the same as having
                my Behen physically there.
            </p>

            <p>
                So yes. On <strong>my</strong> birthday,
                I left <strong>you</strong> a message.
            </p>

            <p>
                Please don't let this inflate your ego.
            </p>

            <p>
                <strong>I love you times ♾️.</strong>
            </p>

            <p>— Birthday Girl Pooja 🎂❤️</p>
        `
    },


    {
        date: "2027-08-20",
        displayDate: "AUGUST 20, 2027",
        title: "For You Two",
        body: `
            <h2>❤️ For You Two</h2>

            <p>
                Happy anniversary, Preetu & Jiju. ❤️
            </p>

            <p>
                Today's Vault entry isn't really mine.
                It's yours.
            </p>

            <p>
                I hope another year together gives you both
                more reasons to laugh, more places to go,
                more stupid little memories that eventually
                become stories, and more ways to grow together.
            </p>

            <p>
                And Preetu—
            </p>

            <p>
                seeing someone I love being loved
                will always make me happy.
            </p>

            <p>
                Happy anniversary, you two. ❤️
            </p>

            <p>
                Now please go be romantic somewhere.
            </p>

            <p>
                This Vault will return to its regularly
                scheduled Behen Programming™ shortly.
            </p>

            <p>— Pooja</p>
        `
    },


    {
        date: "2027-09-26",
        displayDate: "SEPTEMBER 26, 2027",
        title: "The Last Night of 23",
        body: `
            <h2>🌙 The Last Night of 23</h2>

            <p>
                Hi Behen.
            </p>

            <p>
                It's your last night being 23.
            </p>

            <p>
                Remember when I gave you this stupid app?
            </p>

            <p>
                You had an entire year ahead of you then.
            </p>

            <p>
                And now...
            </p>

            <p>
                <strong>you lived it.</strong>
            </p>

            <p>
                There are things that happened this year
                that neither of us knew were coming
                when you first opened this Vault.
            </p>

            <p>
                And somehow all of it became
                <strong>your 23rd year.</strong>
            </p>

            <p>
                Tomorrow everybody gets to celebrate
                24-year-old Preetu.
            </p>

            <p>
                But tonight I wanted somebody to celebrate
                <strong>23-year-old Preetu one last time.</strong>
            </p>

            <p>
                I'm proud of her.
            </p>

            <p>
                So before midnight, look at yourself.
            </p>

            <p>
                Really.
            </p>

            <p>
                And say goodbye to her.
            </p>

            <p>
                She got you here. ❤️
            </p>

            <p>
                Sleep well, 23-year-old Preetu.
            </p>

            <p>
                There's one more thing waiting
                for you tomorrow.
            </p>

            <p>— Pooja</p>
        `
    },


    {
        date: "2027-09-27",
        displayDate: "SEPTEMBER 27, 2027",
        title: "Hello, 24.",
        body: `
            <h2>🎀 Hello, 24.</h2>

            <p>
                Happy birthday, Preetu. ♡
            </p>

            <p>
                One year ago, I gave you this app
                and told you I didn't know who you'd be
                when we reached the other side of 23.
            </p>

            <p>
                Well...
            </p>

            <p>
                <strong>hi.</strong>
            </p>

            <p>
                There you are.
            </p>

            <p>
                <strong>24.</strong>
            </p>

            <p>
                I've spent this whole app talking to you
                from the past.
            </p>

            <p>
                But there's somebody else who's been waiting
                an entire year to talk to you.
            </p>

            <p>
                <strong>You.</strong>
            </p>

            <p>
                On your 23rd birthday, you wrote something
                for the person you're becoming today.
            </p>

            <p>
                I think it's time.
            </p>

            <p>
                Happy 24th birthday, Behen.
            </p>

            <p>
                <strong>Go meet her. ❤️</strong>
            </p>

            <button
                class="feature-button"
                onclick="closeModal(); showScreen('capsule-screen');">

                OPEN MY TIME CAPSULE

            </button>
        `
    }

];


/* =========================================
   BUILD VAULT
========================================= */

function parseLocalDate(dateString) {

    const [year, month, day] =
        dateString.split("-").map(Number);

    return new Date(year, month - 1, day);

}


function buildVault() {

    const grid =
        document.getElementById("vault-grid");

    grid.innerHTML = "";

    const today = new Date();

    today.setHours(0, 0, 0, 0);


    vaultItems.forEach(item => {

        const unlockDate =
            parseLocalDate(item.date);

        const unlocked =
            today >= unlockDate;


        const card =
            document.createElement("button");

        card.className =
            `vault-card ${unlocked ? "unlocked" : "locked"}`;


        card.innerHTML = `

            <span class="vault-date">
                ${item.displayDate}
            </span>

            <span class="vault-title">
                ${unlocked ? item.title : "🔒 Locked"}
            </span>

            <span class="vault-status">
                ${unlocked ? "♡ FOUND" : "not yet, miss ma'am"}
            </span>

        `;


        card.addEventListener("click", () => {

            if (unlocked) {

                openModal(item.body);

            }

            else {

                openModal(`

                    <h2>🔒 Nice try, Preetu.</h2>

                    <p>
                        This one opens on
                        <strong>${item.displayDate}</strong>.
                    </p>

                    <p>
                        No sweetie, you cannot negotiate with the Vault.
                    </p>

                    <p>
                        Go away. ❤️
                    </p>

                `);

            }

        });


        grid.appendChild(card);

    });

}


buildVault();


/* =========================================
   APPRECIATION MACHINE
========================================= */

const appreciations = [

    {
        title: "My Automatic Person",
        text: `
            You became one of my automatic people
            somewhere along the way.

            Good news? Tell Preetu.
            Bad news? Tell Preetu.
            Something stupid happened? Tell Preetu.

            I don't even think about it anymore.

            You're just there. ❤️
        `
    },

    {
        title: "You Show Up",
        text: `
            One of my favorite things about you
            is that when something actually matters,
            you show up.

            Maybe with advice.
            Maybe with a phone call.
            Maybe just by being there.

            But you're there.

            And I hope you know how much
            that has meant to me.
        `
    },

    {
        title: "Annoyingly Talented",
        text: `
            You are actually annoyingly talented.

            You try something for the FIRST TIME,
            it turns out good, and instead of being happy
            you're like:

            “Why can't I be pro the first time?”

            Girl.

            Please forgive yourself for the terrible
            crime of being human. 😭
        `
    },

    {
        title: "Bol Behen",
        text: `
            There are very few words that make me respond
            as automatically as:

            “Behen.”

            Because obviously the only acceptable response is:

            “Bol Behen.”

            And then I'm about to receive anything from
            important life news to something unbelievably stupid.

            Wouldn't change it. ❤️
        `
    },

    {
        title: "You Care in Tiny Ways",
        text: `
            Did you eat?
            Are you okay?
            How did it go?
            Why the fuck didn't you eat?

            Tiny questions.

            But tiny things are usually how people show
            that they're paying attention.

            And you always pay attention.
        `
    },

    {
        title: "Ride or Die",
        text: `
            You once thanked me for being your ride or die.

            Very sweet.

            But I fear you misunderstood the arrangement.

            You're mine too.

            No returns.
            No exchanges.
            Membership automatically renews forever. ❤️
        `
    },

    {
        title: "You Make Normal Things Fun",
        text: `
            Food. A drive. Sitting somewhere.
            Shopping. Doing absolutely nothing.

            Somehow a completely normal day becomes
            a memory because you were there.

            That's one of my favorite things about us.
        `
    },

    {
        title: "You're ridiculously talented",
        text: `
            You figure shit out.

            School, work, food, coffee,
            random life problems, whatever new thing
            you've decided to learn...

            You just figure it out.

            Sometimes I don't think you realize
            how capable you actually are.
        `
    },

    {
        title: "The Safest Gossip Department",
        text: `
            Thank you for being the person I can send
            a screenshot, three question marks,
            “BEHEN,” and absolutely zero context—

            and somehow you already understand
            that an investigation has begun.

            Our journalism may lack ethics.

            But it has dedication.
        `
    },

    {
        title: "I Trust You",
        text: `
            This one's not funny.

            I trust you.

            With the embarrassing stuff.
            The scary stuff.
            The stupid stuff.
            The things I'm excited about.

            Having someone you can be that unfiltered with
            is rare.

            I'm really grateful I have that with you.
        `
    },

    {
        title: "Your Heart",
        text: `
            Underneath all the opinions, sarcasm,
            and approximately 78,000 judgments
            per day we both have...

            you have a ridiculously soft heart.

            You care deeply about your people.

            It's one of the best things about you.
        `
    },

    {
        title: "You Hype Me Up",
        text: `
            You have this ability to make me feel proud
            of something I was treating like it was nothing.

            You get excited about things I do
            before I even let myself get excited.

            I notice that.

            I love you for it.
        `
    },

    {
        title: "You're Home-ish",
        text: `
            Not “home” in the cheesy Pinterest way.

            More like:

            I can show up looking like shit.
            Complain.
            Eat.
            Talk too much.
            Say nothing.
            Exist.

            And I don't have to perform.

            That's you.
        `
    },

    {
        title: "You're Pretty. Deal With It.",
        text: `
            You're really freaking pretty.

            This is not a debate.

            The committee has reviewed the evidence.

            The decision is final.

            Appeals will not be accepted.
        `
    },

    {
        title: "You Actually Listen",
        text: `
            I can tell you something once and somehow,
            weeks later, you'll remember some random detail
            I forgot I even told you.

            You listen.

            Like actually listen.

            Being remembered like that makes a person
            feel loved.
        `
    },

    {
        title: "My Favorite Yapper",
        text: `
            We have discussed approximately 400 topics
            that started with:

            “Okay but listen—”

            I hope we're 70 and still doing this.

            Except louder because neither of us can hear.
        `
    },

    {
        title: "You Don't Let Me Get Away With Shit",
        text: `
            Sometimes I want support.

            Sometimes what I receive is:

            “Bitch why?”

            And unfortunately...

            sometimes that's exactly what I needed.
        `
    },

    {
        title: "You Make Me Proud",
        text: `
            I've watched you grow into someone
            I genuinely admire.

            Not because everything has always gone perfectly.

            But because you keep going.

            I hope 23-year-old you knows
            that I'm already proud of her.
        `
    },

    {
        title: "You're absolutely Hilarious",
        text: `
            Sometimes intentionally.

            Sometimes absolutely not.

            Your dad jokes alone are evidence
            that something has gone terribly wrong.

            But you've made me laugh on days
            when I really needed it.

            So unfortunately, you're funny.

            Don't get cocky.
        `
    },

    {
        title: "Different Brains, Same Nonsense",
        text: `
            You don't understand tech.
            I don't understand chemistry.

            And somehow we've decided
            this is everybody else's problem.

            Between the two of us,
            we almost make one fully functioning adult.

            Almost.
        `
    },

    {
        title: "You Became Family",
        text: `
            At some point you stopped feeling
            like just my friend.

            You became somebody I expect to still be around
            for all the future shit we haven't even lived yet.

            You became Behen.

            And I don't use that word lightly.
        `
    },

    {
        title: "I'd Pick You Again",
        text: `
            If I somehow had to start over—

            different year,
            different place,
            different version of us—

            I'd still hope I found you.

            Eventually?

            I'd pick you again.
        `
    },

    {
        title: "You Are Loved.",
        final: true,
        text: `
            Preetu,

            For all the things you think you need to improve...

            for all the things you haven't figured out yet...

            for all the versions of yourself
            you're still becoming...

            I hope you never convince yourself
            that you need to become someone better
            before you're worthy of being loved.

            You already are.

            By your family.
            By the people you've chosen.
            And very, very much by me.

            I'm grateful for the person you were
            when I met you.

            I'm proud of the person you are at 23.

            And I'm excited to meet every version
            of you that comes next.

            Love you times ♾️.

            — Pooja ❤️
        `
    }

];


let seenAppreciations =
    JSON.parse(
        localStorage.getItem("preetuAppreciations")
    ) || [];


const appreciationButton =
    document.getElementById("appreciation-button");

const appreciationResult =
    document.getElementById("appreciation-result");

const appreciationProgress =
    document.getElementById("appreciation-progress");


function updateAppreciationProgress() {

    appreciationProgress.textContent =
        `Appreciations dispensed: ${seenAppreciations.length} / 23`;

}


function showAppreciation() {

    let available;


    if (seenAppreciations.length < 22) {

        available =
            appreciations
                .map((item, index) => ({ item, index }))
                .filter(entry =>
                    !entry.item.final &&
                    !seenAppreciations.includes(entry.index)
                );

    }

    else if (!seenAppreciations.includes(22)) {

        available = [
            {
                item: appreciations[22],
                index: 22
            }
        ];

    }

    else {

        available =
            appreciations.map(
                (item, index) => ({ item, index })
            );

    }


    const chosen =
        available[
            Math.floor(
                Math.random() * available.length
            )
        ];


    if (!seenAppreciations.includes(chosen.index)) {

        seenAppreciations.push(chosen.index);

        localStorage.setItem(
            "preetuAppreciations",
            JSON.stringify(seenAppreciations)
        );

    }


    appreciationResult.innerHTML = `

        <h3>${chosen.item.title}</h3>

        ${chosen.item.text
            .split("\n")
            .filter(line => line.trim() !== "")
            .map(line => `<p>${line.trim()}</p>`)
            .join("")}

    `;


    appreciationResult.classList.remove("hidden");

    updateAppreciationProgress();


    if (seenAppreciations.length === 23) {

        appreciationButton.textContent =
            "READ ONE AGAIN ♡";

    }

}


appreciationButton.addEventListener(
    "click",
    showAppreciation
);


updateAppreciationProgress();


/* =========================================
   MINI WHEEL
========================================= */

const wheelOptions = [

    {
        title: "☕ GET A COFFEE",
        text: "Go get or make something unnecessarily caffeinated."
    },

    {
        title: "🍰 GET DESSERT",
        text: "You don't need an occasion. The wheel has spoken."
    },

    {
        title: "🚗 GO ON A DRIVE",
        text: "Music on. Get out of the house. Destination optional."
    },

    {
        title: "📞 CALL YOUR BESTIE",
        text: "Opening line has already been provided: “Behen.”"
    },

    {
        title: "🎬 COMFORT MOVIE",
        text: "Something you've already seen 14 times and will happily watch again."
    },

    {
        title: "💅 GET CUTE FOR NO REASON",
        text: "Hair. Outfit. Pictures. Going somewhere is optional."
    },

    {
        title: "🍜 TRY SOMEWHERE NEW",
        text: "Restaurant, café, bakery. Go somewhere you haven't tried."
    },

    {
        title: "🌸 BUY YOURSELF FLOWERS",
        text: "Yes, yourself. No occasion required."
    },

    {
        title: "📚 MAIN CHARACTER SOLO DATE",
        text: "Coffee shop, bookstore, walk, lunch. Take yourself somewhere."
    },

    {
        title: "🍳 MAKE SOMETHING NEW",
        text: "Acquire another skill and please don't expect immediate professional mastery."
    },

    {
        title: "🛋️ DO ABSOLUTELY NOTHING",
        text: "For once, doing nothing is literally the assignment."
    },

    {
        title: "🎲 DO SOMETHING RANDOM",
        text: "You have 30 minutes to make one tiny spontaneous plan."
    }

];


const wheel =
    document.getElementById("wheel");

const spinButton =
    document.getElementById("spin-button");

const wheelResult =
    document.getElementById("wheel-result");


let wheelRotation = 0;
let spinning = false;


spinButton.addEventListener("click", () => {

    if (spinning) return;

    spinning = true;

    wheelResult.classList.add("hidden");


    const secret =
        Math.random() < 0.02;


    const chosenIndex =
        Math.floor(
            Math.random() * wheelOptions.length
        );


    const sliceDegrees =
        360 / wheelOptions.length;


    const targetAngle =
        360 - (
            chosenIndex * sliceDegrees +
            sliceDegrees / 2
        );


    wheelRotation +=
        1440 + targetAngle;


    wheel.style.transform =
        `rotate(${wheelRotation}deg)`;


    setTimeout(() => {

        if (secret) {

            wheelResult.innerHTML = `

                <h3>🎡 FUCK THE WHEEL.</h3>

                <p>
                    You clearly already know
                    what you want to do.
                </p>

                <p>
                    <strong>Go do that. ❤️</strong>
                </p>

            `;

        }

        else {

            const result =
                wheelOptions[chosenIndex];

            wheelResult.innerHTML = `

                <h3>THE WHEEL HAS SPOKEN.</h3>

                <p>
                    <strong>${result.title}</strong>
                </p>

                <p>${result.text}</p>

                <p>
                    No respins because you don't
                    like the answer.
                </p>

                <p>
                    Okay fine. You can respin.
                </p>

            `;

        }


        wheelResult.classList.remove("hidden");

        spinning = false;

    }, 3600);

});


/* =========================================
   EMERGENCY BUTTON
========================================= */

const emergencyProtocols = [

    [
        "SEVERE OVERTHINKING DETECTED",
        "You have been thinking about the same thing for approximately 700 years. PRESCRIBED TREATMENT: Stop. SECOND OPINION: Call Pooja and let her overthink it with you."
    ],

    [
        "CRITICAL CONDITION DETECTED",
        "You may be hungry and therefore unnecessarily pissed off. Eat first. Reevaluate entire life afterward."
    ],

    [
        "BEHEN HOTLINE",
        "This issue exceeds machine capabilities. Contact qualified professional: Pooja. Recommended opening statement: “Behen.”"
    ],

    [
        "LITTLE TREAT DEFICIENCY",
        "You have not had a little treat recently. This is medically unacceptable.*"
    ],

    [
        "SCREENSHOT PROTOCOL",
        "Do you currently possess a screenshot Pooja needs to see? Why the fuck are you still here? SEND IT."
    ],

    [
        "DELUSION CHECK",
        "Are you actually upset about something important, or have you created an entire situation in your head? If unsure: Behen Consultation™."
    ],

    [
        "PRETTY GIRL EMERGENCY",
        "A suspiciously pretty woman has been detected. Oh. It's just Preetu. Continue."
    ],

    [
        "PERFECTIONISM OUTBREAK",
        "Preetu attempted something once and is somehow not immediately world-renowned. Treatment: try again. Reminder: YOU ARE NOT A MACHINE."
    ],

    [
        "DAD JOKE CONTAMINATION",
        "Dad joke detected. Please evacuate immediately. There is currently no cure."
    ],

    [
        "CHEMISTRY EMERGENCY",
        "Chemistry detected. Pooja has left the chat. Please contact Preetu. Wait. You ARE Preetu. Fuck. Good luck."
    ],

    [
        "TECHNOLOGY EMERGENCY",
        "Have you tried turning it off and back on? Do that before contacting your personal IT department. Payment required: food."
    ],

    [
        "“I'M FINE” DETECTION",
        "You said: “I'm fine.” Machine says: 🤨 Would you like to try that again?"
    ],

    [
        "BAD DAY PROTOCOL",
        "Eat something you like. Shower. Get comfortable. Do one thing that makes your brain shut up. A bad day is not a bad life, Behen. ❤️"
    ],

    [
        "IMMEDIATE YAP REQUIREMENT",
        "Yap levels critically low. Find Pooja. Begin with: “Okay but listen—” Estimated recovery time: 2–4 business hours."
    ],

    [
        "UNSOLICITED POOJA OPINION",
        "You didn't request this. That has never stopped Pooja before. Today's opinion: you should probably get dessert."
    ],

    [
        "FASHION EMERGENCY",
        "Preetu has announced: “I have nothing to wear.” Records indicate this statement may be fraudulent. Inspect closet again."
    ],

    [
        "BRAIN REBOOT REQUIRED",
        "Preetu.exe has too many tabs open. SAVE what matters. CLOSE shit you can't control. RESTART yourself. Recommended reboot method: sleep."
    ],

    [
        "COMPARISON VIRUS DETECTED",
        "You are comparing your life to somebody else's again. Please uninstall immediately. Return to Preetu.exe."
    ],

    [
        "PROUD OF YOU ALERT",
        "You accomplished something and immediately moved on without giving yourself credit. Absolutely fucking not. Go back and be proud for five minutes."
    ],

    [
        "BOREDOM EMERGENCY",
        "Bored Preetu may begin online shopping, overthinking, reorganizing things, bothering Pooja, or acquiring a new hobby. Recommended action: GO SPIN THE WHEEL."
    ],

    [
        "POOJA DEFICIENCY DETECTED",
        "Symptoms include wanting to yap, possessing gossip, seeing food and thinking “we should get that,” and general Behen withdrawal. Call or text immediately."
    ],

    [
        "WATER LEAK DETECTED",
        "Source: Preetu's eyeballs. Cry if you need to. Then drink some water because apparently we're losing fluids now. ❤️"
    ],

    [
        "MAIN CHARACTER MALFUNCTION",
        "This is literally PREETU: YEAR 23. Whose fucking app did you think this was? Proceed accordingly."
    ],

    [
        "CODE RED",
        "The Emergency Machine has exhausted all resources. There is only one protocol remaining: CALL YOUR SOULMATE. No explanation required. ❤️"
    ]

];


const emergencyButton =
    document.getElementById("emergency-button");

const emergencyResult =
    document.getElementById("emergency-result");

let emergencyPresses = 0;


emergencyButton.addEventListener("click", () => {

    emergencyPresses++;

    document.body.classList.add("shake");


    setTimeout(() => {
        document.body.classList.remove("shake");
    }, 400);


    if (emergencyPresses === 8) {

        emergencyResult.innerHTML = `

            <h3>🚨 BITCH.</h3>

            <p>
                You have pressed the emergency button
                eight times.
            </p>

            <p>
                At this point I think
                you just like the button.
            </p>

        `;

    }

    else if (Math.random() < 0.07) {

        emergencyResult.innerHTML = `

            <h3>🚨 PREETU EMERGENCY VERIFICATION SYSTEM</h3>

            <p>Are you okay?</p>

            <button
                class="feature-button"
                onclick="purpleWrong()">

                YES

            </button>

            <button
                class="feature-button"
                onclick="purpleCorrect()">

                PURPLE

            </button>

            <div id="purple-response"></div>

        `;

    }

    else {

        const protocol =
            emergencyProtocols[
                Math.floor(
                    Math.random() *
                    emergencyProtocols.length
                )
            ];


        emergencyResult.innerHTML = `

            <h3>🚨 ${protocol[0]}</h3>

            <p>${protocol[1]}</p>

        `;

    }


    emergencyResult.classList.remove("hidden");

});


function purpleWrong() {

    document.getElementById(
        "purple-response"
    ).innerHTML = `

        <p>
            ❌ <strong>VERIFICATION FAILED</strong>
        </p>

        <p>
            Suspicious answer.
            Please answer correctly. 💀
        </p>

    `;

}


function purpleCorrect() {

    document.getElementById(
        "purple-response"
    ).innerHTML = `

        <p>
            ✅ <strong>IDENTITY VERIFIED</strong>
        </p>

        <p>
            Okay.
            No explanation needed.
        </p>

        <p>
            Behen services are available. ❤️
        </p>

    `;

}


/* =========================================
   LITTLE TREAT MACHINE
========================================= */

const normalTreats = [

    [
        "🍝 HOMEMADE DINNER",
        "Pick something you want and I'll make us dinner."
    ],

    [
        "🍰 EMERGENCY DESSERT RUN",
        "Life is hard. Sugar exists. We know what must be done."
    ],

    [
        "🎬 MOVIE NIGHT",
        "You pick the movie. Yes, you. I surrender control."
    ],

    [
        "🛏️ SLEEPOVER",
        "Food + pajamas + yapping + absolutely destroying any reasonable bedtime."
    ],

    [
        "🚨 COME SEE ME TODAY",
        "One 'come see me today' request. Subject to actual emergencies, work and school because unfortunately Pooja has responsibilities."
    ],

    [
        "☕ COFFEE DATE",
        "One coffee, boba or chai date. Drink + yap included."
    ],

    [
        "🚗 DRIVE & YAP",
        "No destination required. One of us says 'Okay but listen—' and suddenly an hour is gone."
    ],

    [
        "🍽️ YOU PICK WHERE WE EAT",
        "You choose. I come. Within reason, Ambani."
    ],

    [
        "📸 PERSONAL PHOTOGRAPHER",
        "One Pooja photographer session. Complaining about all 147 photos included free of charge."
    ],

    [
        "🛍️ ERRAND BUDDY",
        "One boring errand or shopping trip, now unnecessarily four hours long."
    ],

    [
        "🫠 I NEED MY BEHEN",
        "No explanation required. Send me: 'Redeeming #11.' I'll know. ❤️"
    ]

];


const longDistanceTreats = [

    [
        "📞 DROP EVERYTHING CALL",
        "One proper Behen call. Time-zone negotiations may occur. 😭"
    ],

    [
        "🎬 LONG-DISTANCE MOVIE NIGHT",
        "We FaceTime, pick something and hit play together."
    ],

    [
        "🍜 VIRTUAL DINNER DATE",
        "We both get or make food and eat together on video."
    ],

    [
        "📦 FUTURE TREAT IOU",
        "Claim one normal little treat now and redeem it when Pooja gets back."
    ]

];


const jackpotTreat = [

    "👑 PREETU'S CHOICE",
    "You choose what we do. Within reason. You have not won a trip to Switzerland."

];


const treatButton =
    document.getElementById("treat-button");

const treatResult =
    document.getElementById("treat-result");


let treatRolls = 0;


function isLongDistancePeriod() {

    const today = new Date();

    const start =
        new Date(2027, 4, 1);

    const end =
        new Date(2027, 7, 31);

    return today >= start &&
           today <= end;

}


function getClaimKey() {

    const today = new Date();

    return `preetuTreat-${today.getFullYear()}-${today.getMonth()}`;

}


function showTreat() {

    const existing =
        localStorage.getItem(getClaimKey());


    if (existing) {

        treatResult.innerHTML = `

            <h3>🔒 THIS MONTH'S TREAT IS CLAIMED</h3>

            <p>${existing}</p>

            <p>
                Greedy.
                Come back next month. ❤️
            </p>

        `;

        treatResult.classList.remove("hidden");

        return;

    }


    treatRolls++;


    let treat;


    if (Math.random() < 0.05) {

        treat = jackpotTreat;

    }

    else {

        const pool =
            isLongDistancePeriod()
                ? longDistanceTreats
                : normalTreats;


        treat =
            pool[
                Math.floor(
                    Math.random() * pool.length
                )
            ];

    }


    treatResult.innerHTML = `

        <h3>${treat[0]}</h3>

        <p>${treat[1]}</p>

        <button
            class="feature-button"
            onclick='claimTreat(${JSON.stringify(treat[0])})'>

            ♡ CLAIM THIS

        </button>

        ${
            treatRolls < 3
            ?
            `
                <button
                    class="feature-button"
                    onclick="showTreat()">

                    NOPE. GIMME ANOTHER.

                </button>
            `
            :
            `
                <p>
                    Girl. The machine has presented
                    three perfectly good treats.
                    At this point you want control. 😭
                </p>
            `
        }

    `;


    treatResult.classList.remove("hidden");

}


function claimTreat(title) {

    localStorage.setItem(
        getClaimKey(),
        title
    );


    treatResult.innerHTML = `

        <h3>🎟️ CLAIMED!</h3>

        <p>
            <strong>${title}</strong>
        </p>

        <p>
            Screenshot this and send it to Pooja.
        </p>

        <p>
            Your Friendship Benefits Department
            will process your request shortly. ❤️
        </p>

    `;

}


treatButton.addEventListener(
    "click",
    showTreat
);


/* =========================================
   TIME CAPSULE
========================================= */

const capsuleContent =
    document.getElementById("capsule-content");


const capsuleUnlockDate =
    new Date(2027, 8, 27);


function renderCapsule() {

    const today = new Date();

    today.setHours(0, 0, 0, 0);

    capsuleUnlockDate.setHours(0, 0, 0, 0);


    if (today >= capsuleUnlockDate) {

        capsuleContent.innerHTML = `

            <div class="capsule-lock">💌</div>

            <h3>TIME CAPSULE UNLOCKED</h3>

            <p>
                Happy 24th birthday, Preetu.
            </p>

            <p>
                One year ago, 23-year-old you
                wrote something for the person
                you are today.
            </p>

            <p>
                She didn't know exactly what
                this year would bring.
            </p>

            <p>
                But she knew you'd eventually
                make it here.
            </p>

            <p>
                And you did. ♡
            </p>

            <h3>Your letter is waiting for you.</h3>

            <p>
                <strong>Go get it from Pooja.</strong>
            </p>

            <button
                class="feature-button"
                onclick="capsuleFinalMessage()">

                I'M READY ♡

            </button>

        `;

        return;

    }


    const sealed =
        localStorage.getItem(
            "preetuCapsuleSealed"
        );


    const milliseconds =
        capsuleUnlockDate - today;


    const days =
        Math.ceil(
            milliseconds /
            (1000 * 60 * 60 * 24)
        );


    if (sealed) {

        capsuleContent.innerHTML = `

            <div class="capsule-lock">🔒</div>

            <h3>TIME CAPSULE SEALED</h3>

            <p>
                23-year-old Preetu left
                something for you.
            </p>

            <p>
                Pooja is keeping it safe.
            </p>

            <div class="countdown">
                ${days} days until 24 ♡
            </div>

            <p>
                No peeking.
            </p>

            <p>
                Yes, this includes asking Pooja.
            </p>

            <p>
                No, being cute will not work.
            </p>

            <p>
                Probably.
            </p>

        `;

    }

    else {

        capsuleContent.innerHTML = `

            <div class="capsule-lock">💌</div>

            <p>
                Somewhere, there is a letter
                written by you at 23.
            </p>

            <p>
                Pooja has it.
            </p>

            <p>
                You don't get it back yet.
            </p>

            <h3>
                OPEN DATE
            </h3>

            <p>
                <strong>September 27, 2027</strong>
            </p>

            <button
                class="feature-button"
                onclick="sealCapsule()">

                SEAL MY TIME CAPSULE ♡

            </button>

        `;

    }

}


function sealCapsule() {

    openModal(`

        <h2>Are you sure? 💌</h2>

        <p>
            Once you seal this,
            the Time Capsule stays locked
            until your 24th birthday.
        </p>

        <p>
            Your letter is safe with Pooja.
        </p>

        <p>
            Your only job is to become
            the girl who gets to read it.
        </p>

        <button
            class="feature-button"
            onclick="confirmSealCapsule()">

            SEAL IT 🔐

        </button>

    `);

}


function confirmSealCapsule() {

    localStorage.setItem(
        "preetuCapsuleSealed",
        "true"
    );

    closeModal();

    renderCapsule();

}


function capsuleFinalMessage() {

    openModal(`

        <h2>Go meet 23-year-old Preetu. 💌</h2>

        <p>
            And when you're done reading it...
        </p>

        <p>
            <strong>call you know who.</strong>
        </p>

        <p>
            Obviously.
        </p>

    `);

}


renderCapsule();