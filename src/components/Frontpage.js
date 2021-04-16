import React from 'react'

const Frontpage = () =>     
(
    <div Class="col-sm-12">

        <div class="container">
            <div class="jumbotron">



                <div class="ui segment">
                    <a id="value" class="ui red label massive">Standard view</a>
                    <br /><br />
                    <button
                        class="ui red button"
                        onClick="store.dispatch(standardView())">
                        Standard View
                    </button>
                    <button
                        class="ui blue button"
                        onClick="store.dispatch(RSSView())">
                        RSS View
                    </button>
                </div>




                <h1>Dungeon & Dragons</h1 >
                <p>Et sted for nørder og rollespillere!</p>

                <img src="https://www.boardgamer.ie/img/cms/dungeons%20and%20dragons/dnd_banner%20top.jpg" class="img-rounded jumbotronImage img-fluid img-responsive" ></img>



            </div>
        </div>

        <div class="row">
            <div Class="col-sm-4">
                <h1>Hvad er D&D</h1>

                <h4>
                    Et gammelt spil spillet med "pen and paper"
                </h4>

                <p>Dungeons & Dragons (forkortet D&D eller DnD) er et bordrollespil. Det blev opfundet af Gary Gygax og Dave Arneson i 1970 og udgivet af Garys firma Tactical Studies Rules (TSR).</p>

                <p>Det har dog siden 1997 været udgivet af det amerikanske spil firma Wizards of the Coast. Dungeons & Dragons var det første og mest populære rollespil (engelsk: Role playing game, forkortet RPG) og har været inspiration for mange senere RPG spil.</p>

                <img src="https://geekandleisure.com/wp-content/uploads/2018/07/Best-DD-Dice-1024x640.jpg" class="img-rounded jumbotronImage img-fluid img-responsive" ></img>


            </div>


            <div Class="col-sm-4">
                <h1>Spillets forløb</h1>

                <p>I Dungeons & Dragons, påtager spillerne sig hver især en rolle (spilkarakter) som de laver i samarbejde med en spilleder (også kaldet Dungeon Master eller DM). Hver spilkarakter har særlige karakteristika som definerer netop ham/hende. </p>

                <p>Når alle spillerne er klar, kan selve spillet gå i gang. Det ledes af Dungeon Master'en som fortæller en overordnet historie og giver herefter spillerne feedback på deres handlinger og gøremål i den verden han har valgt at placere spillet i. Hver spilsession tager fra én til flere timer og kan fortsætte gennem mange spilsessioner, nogle gange over flere år.</p>

                <p>Bordrollespil som forløber over flere spilsessioner kaldes Kampagner (Campaigns). Gennem spillet samler spilkaraktererne erfaring i form af experience points (xp). De tildeles normalt efter hver spilsession og når en spilkarakter har tilstrækkeligt med xp, har han/hun mulighed for at uddanne sig og stige i niveau (level). Herved opnår spilkarakteren nye færdigheder og bliver bedre til sine gamle.</p>
            </div>


            <div Class="col-sm-4">
                <h1>Stemningen i D&D</h1>

                <p>Dungeons & Dragons kan spilles på mange måder, alt efter temperament, humør eller behov. Nogle lægger megen vægt på dialoger og at spille særlige roller, andre på intriger eller detektivagtige mysterier, mens andre igen bruger megen tid på kampsituationer og powergaming (dvs. at stige hurtigt i niveau og udvikle magtfulde spilkarakterer).</p>

                <p>Som rekvisitter til spillet bruges Dungeons & Dragons grundregler, særlige polyhedrale terninger, skriveredskaber og papir. Hertil kan Dungeon Master'en finde inspiration i de mange spilmoduler og spilverdener der er udgivet. Det er meget udbredt også at anvende særlige metalfigurer til at repræsentere spilkaraktererne og de personer og væsner som de møder i spillet, især i forbindelse med kampsituationer, hvor afstande og indbyrdes placering bliver meget afgørende.</p>
            </div>
        </div>

        <br></br>
    </div>
)

export default Frontpage
