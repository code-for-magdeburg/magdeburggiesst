import { Content, LocalizedContent } from './content-types';

const deContent: Content = {
  error: {
    title: 'Irgendwas ist schiefgelaufen.',
    contact: 'Bitte wende Dich an',
    issue: 'oder schreib uns einen Issue auf',
    reload: 'Vielleicht hilft es auch die Seite neu zu laden?',
    backToHome: 'Back to home',
  },
  faq: {
    title: 'F.A.Q.',
    description:
      'Basierend auf dem regen Austausch unserer Community auf Slack & euren Rückmeldungen per Email und Telefon, haben wir ein kleines FAQ angelegt. Hier werden die am häuftigsten gestellten Fragen beantwortet.',
    qa: [
      {
        question: 'Wie kann ich mitmachen?',
        answer:
          'Informieren: <br><br>Neugierig, welcher Baum vor deiner Tür steht? Unsere interaktive Karte visualisiert fast 82.000 Straßen- und Anlagenbäume von Magdeburg. Wenn du mehr über einen Baum erfahren willst, navigiere und zoome dich zum gewünschten Standort und klicke auf den farbigen Punkt. Nun werden dir im Menüband links zahlreiche Informationen zum ausgewählten Baum angezeigt. <br><br>Bäume bewässern und adoptieren: <br><br>Du möchtest aktiv werden oder bist bereits aktiv am Gießen? Auf MAGDEBURG GIESST kannst du eintragen, ob und mit wie viel Wasser du einen Baum gegossen hast. Bäume können auch adoptiert werden. Die adoptierten Bäume erscheinen im eigenen Nutzerprofil und können schneller wiedergefunden werden. So können andere Nachbarn in der Umgebung sehen, welche Bäume ihre Aufmerksamkeit benötigen. Um Bäume zu bewässern und zu adoptieren, lege dazu zunächst ein Profil mit einer gültigen Email-Adresse an und logge dich im Anschluss ein. Nun kannst du deine Gieß-Aktionen entsprechend dokumentieren und sehen, ob und wie oft Bäume in deinem Kiez bereits von anderen Nutzer:innen gegossen wurden. <br><br>Vernetzen: <br><br>Über unseren öffentlichen <a target="blank" href="https://join.slack.com/t/magdeburggiesst/shared_invite/zt-1tf5i2z3k-mTmk_PUBEOWuNWzDSNoH4w">Slack Channel</a> kannst du dich mit anderen Gießer:innen austauschen und defekte Pumpen in deinem Kiez melden.',
      },
      {
        question:
          'Was kann ich tun, wenn Bäume nicht richtig eingetragen sind?',
        answer:
          'Wir beziehen den Baum-Datensatz mit allen Attributen wie bspw. Adresse, Baumart und Pflanzjahr je Baum aus den Öffentlichen Verwaltungsdaten der Stadt Magdeburg. Das bereitgestellte Baumkataster basiert wiederum auf den aggregierten Daten des Eigenbetriebs Stadtgarten und Friedhöfe Magdeburg und dem Liegenschaftsservice. Es kann daher immer wieder vorkommen, dass Daten von Bäumen veraltet sind oder Eigenschaften der tagesaktuellen Realität abweichen. Leider können wir selbst keine Änderungen im Baumkataster vornehmen. Etwaige Abweichungen können nur direkt bei der zuständigen Behörde gemeldet werden. Einmal im Jahr veröffentlichen die Stellen aber ein aktualisiertes Baumkataster, das wir nach Veröffentlichung mit MAGDEBURG GIESST verknüpfen.',
      },
      {
        question: 'Warum sollte ich aktiv werden und Bäume gießen?',
        answer:
          'Die langanhaltenden Dürre- und Hitzeperioden der letzten Jahre haben dem Magdeburger Stadtgrün immens zugesetzt.<br><br>Der Eigenbetrieb Stadtgarten und Friedhöfe ist bereits aktiv, kommt allerdings mit dem Gießen während Magdeburger Hitze-Sommern nicht hinterher. Durch die Plattform möchten wir auch Bürger:innen die Möglichkeit geben, Bäumen gezielt auf Grundlage ihrer aktuellen Wasserversorgung zu helfen und sich zu informieren. Ziel ist es, möglichst viele Bäume durch nachbarschaftliches Engagement zu retten.',
      },
      {
        question: 'Wie gieße ich richtig?',
        answer:
          'Je nach Alter, Standort und Baumart benötigen Bäume unterschiedlich viel Wasser. Jungbäume (0-15 Jahre), benötigen mehr Wasser als mittelalte Bäume (15-40 Jahre). Altbäume (ab 40 Jahre) sind meist komplette Selbstversorger. <br><br>Da frisch gepflanzte Bäume bis zum Alter von fünf Jahren in der Regel vom Eigenbetrieb Stadtgarten und Friedhöfe mit Wasser versorgt werden, benötigen besonders die Bäume zwischen fünf und 15 Jahren unsere Aufmerksamkeit, beziehungsweise unser Wasser. Dies haben wir mit den Kennzeichnungen des geringen, mittleren oder hohen Wasserbedarfs hervorgehoben. <br><br>Angelehnt an das Berliner <a target="blank" href="https://www.berlin.de/sen/uvk/natur-und-gruen/stadtgruen/pflegen-und-unterhalten/handbuch-gute-pflege/">Handbuch Gute Pflege</a> empfehlen wir euch, lieber selten, dafür mit größeren Menge an Wasser zu gießen. Das Handbuch empfiehlt für frisch gepflanzte Bäume bis zu 200l pro Gießung. So sorgt ihr dafür, dass die Bodenfeuchte auch in der Tiefe erhöht wird. Im Endeffekt schaden aber auch kleinere Mengen gerade im Hochsommer nicht. Wichtig ist es, den ausgetrockneten Boden vor dem Gießen aufzulockern, sodass das Wasser in den Boden eindringen kann und nicht oberirdisch abläuft oder sich falsch anstaut. Auch zu empfehlen sind sogenannte Gießsäcke aus denen das Wasser nur sehr langsam austritt, kaum oberflächlich abläuft und somit kontinuierlich in den Boden sickert.',
      },
      {
        question: 'An wen kann ich mich wenden, wenn Pumpen kaputt oder beschädigt sind?',
        answer: `Für die Infrastruktur der Straßen, zu denen auch die öffentlichen Schwengelpumpen zählen, sind die jeweiligen Ämter der Stadt verantwortlich. Sollten Pumpen kaputt oder beschädigt sein, kann dort Reparaturbedarf gemeldet werden. Die Standorte der Pumpen in der Karte laden wir wöchentlich aus der Datenbank von Open Street Map. Wenn Ihr helfen wollt, die Daten zu verbessern, indem ihr zum Beispiel eine defekte Pumpe meldet, könnt ihr das in unserem <a target="blank" href="https://app.slack.com/client/T052UAPPF7G/C052YPL8Q1K">Slack Channel #pumpen-melden </a> tun. Die OSM-Community hat dann die Möglichkeit eure Informationen in die Datenbank einzutragen.`,
      },
      {
        question: 'Wie wird mit technischen Problemen umgegangen?',
        answer:
          'Bei der Beteiligungsplattform „MAGDBEBURG GIESST” handelt es sich um einen Prototypen und demnach um eine Beta-Version einer Web-App. Wir sind uns einigen technischen Hürden bewusst, sind aber auf eure Mithilfe angewiesen. Euer technisches Feedback und eure Fragen nehmen wir gerne in unserem <a target="blank" href="https://join.slack.com/t/magdeburggiesst/shared_invite/zt-1tf5i2z3k-mTmk_PUBEOWuNWzDSNoH4w">Slack Channel</a> oder per Mail entgegen. Wer sich in der „Tech-Welt” zu Hause fühlt, ist herzlich zur Mitarbeit in unserem <a target="blank" href="https://github.com/code-for-magdeburg/magdeburggiesst">Open Source GitHub Repository</a> eingeladen und kann seine Issues oder Code Fixes direkt in das Repository kommentieren.',
      },
      {
        question: 'Warum lädt die Website nicht oder nur sehr langsam?',
        answer:
          'Wenn die Seite zum ersten Mal geöffnet wird, lädt der Browser knapp 82.000 Datenpunkte – das kann eine Weile dauern! Unabhängig davon, kann es zu leicht unterschiedlichen  Darstellungen bei der Verwendung unterschiedlicher Browser kommen. Für die beste „Experience” empfehlen wir die Nutzung von Chrome oder Firefox Desktop. Die häufigsten Probleme lassen sich erfahrungsgemäß beseitigen, wenn der Browser nicht veraltet, respektive die neueste Version installiert ist und eine stabile Internetverbindung (LAN oder WLAN) besteht. <br><br>Die Nutzung über das Smartphone (Mobilfunknetz) kann zu Performance-Problemen (Seite lädt langsam) führen. Sollten wiederholt Probleme auftreten, könnt ihr diese in unserem <a target="blank" href="https://join.slack.com/t/magdeburggiesst/shared_invite/zt-1tf5i2z3k-mTmk_PUBEOWuNWzDSNoH4w">Slack Channel</a>, per Mail oder via GitHub Issue unter Angabe des benutzten Geräts, des Betriebssystems, des Browsers und Version des Browsers melden.',
      },
      {
        question:
          'Was tun, wenn ich einen Baum fälschlicherweise gegossen habe?',
        answer:
          'Um eine Gießung rückgängig zu machen, weil bspw. stattdessen der Nachbarbaum oder zu einem anderen Tag gegossen wurde, klicke zunächst auf den Baum. Scrolle in der Seitenleiste des Baumes runter bis zur Ansicht der vergangenen Gießungen, klicke auf das Papierkorb-Symbol neben dem Eintrag, den Du löschen möchtest und klicke auf „Löschen”, um zu bestätigen. Es können nur Gießungen gelöscht werden, die Du selbst vorgenommen hast. Trage nach der Löschung die Gießung mit den richtigen Angaben (Anzahl an Litern und Zeitpunkt) ein.',
      },
      {
        question: 'Ist das Prinzip auf andere Städte übertragbar?',
        answer:
          'Die „Gieß den Kiez” Plattform ist ein Open Source Software Projekt und läuft unter einer MIT Lizenz. Dementsprechend kann die Idee, aber auch der Quellcode für die Umsetzung in anderen Städten kostenlos genutzt und weiterentwickelt werden. Wenn Du dich dafür interessierst, schau gerne im <a target="blank" href="https://github.com/technologiestiftung/giessdenkiez-de">GitHub Repository</a> vorbei oder kontaktiere uns via Mail.',
      },
      {
        question: 'Ich habe immer noch eine Frage!',
        answer:
          'Das FAQ konnte Dir nicht weiterhelfen oder Du hast eine komplexere Anfrage? Dann schreib uns eine <a href="mailto:info@magdeburg-giesst.de?subject=[MAGDEBURG GIESST] Frage:...">Email.</a>',
      },
      {
        question: 'Warum werden nicht alle Magdeburger Bäume angezeigt?',
        answer:
          'MAGDEBURG GIESST baut auf dem Baumkataster auf. Das Baumkataster ist ein Verzeichnis der Stadt, in dem (Stadt-/Straßen- oder Park-)Bäume verwaltet werden und das durch den Eigenbetrieb Stadtgarten und Friedhöfe und dem Liegenschaftsservice bereitgestellt wird. Diese Behörden sind aber nicht für alle Magdeburger Bäume zuständig. Bäume auf Privatgrundstücken oder auf Grundstücken von Wohnungsgenossenschaften beispielsweise tauchen daher bei MAGDEBURG GIESST nicht auf.',
      },
      {
        question: 'I don’t speak any German: What’s going on here?',
        answer:
          'MAGDEBURG GIESST is a participatory platform where you can inform yourself about the trees in your neighbourhood and their water needs. You can explore individual trees in Magdeburg and find out about the proper watering of trees. If you want to water the same trees regularly, you should create an account, adopt the trees and show that they are taken care of. This way, coordination takes place in the neighbourhood.',
      },
    ],
  },
  imprintAndPrivacy: {
    title: 'Impressum und Datenschutz',
    description:
      '<a target="blank" href="https://www.netz39.de/impressum/">Impressum</a> – <a target="blank" href="https://www.netz39.de/datenschutz/">Datenschutz</a>',
    attribution:
      '© <a href="https://www.mapbox.com/about/maps/" target="_blank" rel="noreferrer">Mapbox</a> – © <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap</a> – <a href="https://www.mapbox.com/map-feedback" target="_blank" rel="noreferrer"><strong>Diese Karte verbessern</strong></a>',
  },
  intro: {
    title: '<b><span>MAGDEBURG</span> GIESST</b>',
    subline:
      'Die Magdeburger Stadtbäume leiden unter Trockenheit <br class="large" /> und Du kannst ihnen helfen!',
    description: [
      'Erkundige Dich über den Wasserbedarf der Bäume in Deiner Nachbarschaft, adoptiere den Baum vor Deiner Haustür und werde Teil der aktiven Gieß-Community in Magdeburg!',
    ],
    action: "Los geht's",
  },
  credits: {
    projectOf: 'Ein Projekt der',
    executedBy: 'Durchgeführt von',
    fundedBy: 'Gefördert durch',
  },
  cookies: {
    disclaimer:
      'Diese Webseite verwendet Cookies, um bestimmte Funktionen zu ermöglichen und das Angebot zu verbessern. Indem Du hier fortfährst stimmst Du der Nutzung von Cookies zu.',
    accept: 'Einverstanden',
    info: 'Weitere Informationen',
  },
  legend: {
    title: 'Legende',
    pumps: 'Öffentliche Pumpen',
    publicPump: 'Öffentliche Straßenpumpe',
    lastPumpCheck: 'Letzter Check',
    pumpStyle: 'Pumpenstil',
    updatePumpLink: 'Status in OpenStreetMap aktualisieren',
    precipitation: 'Niederschlag',
    precipitationAreas: 'Niederschlagsflächen',
    dataPoints: 'Datenpunkte',
    treeLayer: 'Straßen- & Anlagenbäume',
    ofLastDays: 'der letzten 30 Tage (Liter)',
    pumpState: {
      working: 'funktionsfähig',
      defect: 'defekt',
      locked: 'verriegelt',
      unknown: 'unbekannt',
    },
  },
  sharing: {
    title:
      'Teile MAGDEBURG GIESST mit Deinem Umfeld und hilf uns, die Gieß-Community zu vergrößern:',
    content:
      'Auf MAGDEBURG GIESST kannst Du Dich über den Magdeburger Baumbestand erkundigen, durstige Bäume finden, und eintragen, wann Du diese gegossen hast!',
  },
  //pls do not delete the following eventNote section to facilitate process of enabling/disabling future news & notes
  // eventNote: {
  //   title:
  //     '<b>Gieß den Kiez Maintenance: </b><br> Nach dem Herbstputz ist uns aufgefallen, daß auch unser Datenbank etwas aufgeräumt werden muss. Daher werden wir am 29.11.2022 von 11:00 bis 16:00 Uhr die Plattform für Wartungsarbeiten abschalten. Wir bitten um euer Verständnis.',
  // },
  // whatsNew: {
  //   title: 'Gieß den Kiez Update:',
  //   description: [
  //     '<strong>Der Frühjahrsputz ist voll im Gange!</strong> In den letzten Tagen haben wir ein großes Update an der Seite vorgenommen. Ihr könnt euch über viele kleine und große Verbesserungen freuen: Wir erleichtern die Übertragbarkeit von Giess den Kiez für andere Städte, ermöglichen Euch die Anpassung Eurer E-Mail-Adresse oder Eures Passwortes und noch einiges mehr. Wir haben bereits all eure Accounts in unser neues System übertragen und beobachten ob Fehler auftauchen, die wir nicht vorhersehen konnten.',
  //     'Für den Fall, dass irgendetwas schief geht, zögert nicht euch an uns zu wenden. Per Slack, per E-Mail oder auf GitHub.<br /><strong>Und zu guter Letzt - das neue Baumkataster für 2023 ist da! \\o/</strong> Es sind circa 40.000 Bäume hinzugekommen, die in den nächsten Tagen auch auf der Seite verfügbar sind!<br/> Viel Spaß beim Gießen!',
  //     // `Auch neu: die <strong>Caretaker-Labels im Bezirk Friedrichshain-Kreuzberg</strong>. Vielleicht findet Ihr ja einen der knapp 1.500 Bäume, die bereits durch das Grünflächenamt gegossen werden! Das Label befindet sich in der Seitenleiste eines Baumes.`,
  //   ],
  // },
  loading: {
    snippets: [
      'Wir laden gerade 82.000 Bäume aus dem Magdeburger Baumbestand.',
      'Wenn Du diese Seite über das Mobilfunknetz aufrufst, kann es etwas dauern.',
      'Sammle Informationen aller Bäume aus dem Magdeburger Baumkataster.',
      'Schon gewusst? Ein Stadtbaum benötigt etwa 70l Wasser in der Woche.',
    ],
  },
  sidebar: {
    addressPlaceholder: 'Addresse',
    participateButton: 'Wie kann ich mitmachen?',
    loading: 'Lade',
    furtherInfo: 'Weitere Infos',
    title: 'Suche & Filter',
    locationSearchTitle: 'Standortsuche',
    dataViewTitle: 'Datenansicht',
    dataViewDescription:
      'Betrachte welche Bäume bereits von anderen Nutzern gegossen wurden. Oder finde heraus, wieviel Niederschlag die Bäume in den letzten 30 Tagen erreicht hat.',
    precipitation: 'Niederschläge',
    adopted: 'Bereits adoptiert',
    lastWatered: 'In den letzten 30 Tagen gegossen',
    waterNeedsTitle: 'Wasserbedarf',
    waterNeedsDescription: 'Finde heraus wie sehr Bäume Wasser benötigen.',
    treeAgeTitle: 'Baumalter',
    treeAgeDescription: 'Erkunde die Geschichte der Magdeburger Baumlandschaft',
    about: [
      {
        title: 'Über das Projekt',
        description:
          'Die Folgen des Klimawandels, insbesondere die trockenen und heißen Sommer, belasten das Magdeburger Ökosystem. Unsere Stadtbäume vertrocknen und tragen langfristige Schäden davon: In den letzten Jahren mussten immer mehr Bäume gefällt werden und ihre Lebensdauer sinkt. Inzwischen wird die Bevölkerung regelmäßig zur Unterstützung aufgerufen, allerdings weitgehend unkoordiniert. Dies möchten wir ändern und mit diesem Projekt eine koordinierte Bürger*innenbeteiligung bei der Bewässerung städtischen Grüns ermöglichen.<br/><br/>Du möchtest Dich über das Gießen von Bäumen informieren, Pumpen melden und Dich mit anderen aktiven Nutzer:innen austauschen? Dann tritt unserem Slack-Chat bei!',
      },
      {
        title: 'Nützliche Links',
        description:
            `<ul>
                <li>
                    <a target="blank" href="https://www.lieblingsbaum-initiative.de/">Initiative Lieblingsbaum</a>
                </li>
                <li>
                    <a target="blank" href="https://www.baumpflegeportal.de/baumpflege/trockenheit-duerre-wann-baeume-giessen/">Baumpflegeportal - Gießen bei Trockenheit</a>
                </li>
                <li>
                    <a target="blank" href="https://www.magdeburg.de/Start/B%C3%BCrger-Stadt/Stadt/Aktionen/index.php?object=tx%7C37.9220.1">Mein Baum für Magdeburg</a>
                </li>
                <li>
                    <a target="blank" href="https://baumfreunde-md.de">Baumfreunde Magdeburg</a>
                </li>
                <li>
                    <a target="blank" href="https://www.bbsr.bund.de/BBSR/DE/veroeffentlichungen/ministerien/bmub/verschiedene-themen/2017/weissbuch-stadtgruen.html">Weißbuch Stadtgrün</a>
                </li>
                <li>
                    <a target="blank" href="https://www.hcu-hamburg.de/fileadmin/documents/REAP/files/Bildungsmaterial_Stadtbaeume_im_Klimawandel_2017.pdf">Stadtbäume - Bedeutung und Herausforderungen in Zeiten des Klimawandels</a>
                </li>
                <li>
                    <a target="blank" href="https://www.bund-naturschutz.de/natur-und-landschaft/stadt-als-lebensraum/stadtbaeume/funktionen-von-stadtbaeumen.html">BUND - Funktionen von Stadtbäumen</a>
                </li>
            </ul>`,
      },
      {
        title: 'Über uns',
        description: `MAGDEBURG GIESST ist ein Projekt von <a target="blank" href="https://codefor.de/magdeburg">Code For Magdeburg</a>, <a target="blank" href="https://baumfreunde-md.de">Baumfreunde Magdeburg</a> und <a target="_blank" href="https://netz39.de">Netz39 e.V.</a> Das Projekt wird unterstützt durch das <a target="blank" href="https://www.citylab-berlin.org/">CityLAB Berlin</a> - ein Projekt der Technologiestiftung Berlin - deren App <a target="blank" href="https://www.giessdenkiez.de">Gieß den Kiez</a> die Basis für die Magdeburger App von MAGDEBURG GIESST bildet.<br /> <br /> Du hast Feedback? Wir würden uns sehr darüber freuen, in unserem dafür eingerichteten <a target="blank" href="https://join.slack.com/t/magdeburggiesst/shared_invite/zt-1tf5i2z3k-mTmk_PUBEOWuNWzDSNoH4w">Slack-Chat</a> von Dir zu hören.`,
      },
      {
        title: 'Datenquellen',
        description: `Die Karte zeigt einen Großteil der Magdeburger Straßen- und Anlagenbäume (ca. 82.000; Stand: Mai 2023). Zusätzlich wird abgebildet, wie viel Niederschlag in den letzten 30 Tagen bei jedem Baum gefallen ist und ob diese in der Zeit bereits gegossen wurden. Aus verschiedenen Gründen sind leider noch nicht alle Magdeburger Stadtbäume aufgeführt. Wir arbeiten aber daran, die Datenlage zu verbessern und eine möglichst vollständige Darstellung des Magdeburger Baumbestandes zu erreichen. Die aktuellen Datenquellen sind:
          <ul>
            <li>
              <a target="blank" href="https://www.magdeburg.de/B%C3%BCrger-Stadt/Verwaltung-Service/Offene-Verwaltungsdaten/index.php?NavID=37.906&object=tx|37.12819.1&La=1&">Offene Verwaltungsdaten Magdeburg</a>
            </li>
            <li>
              <a target="blank" href="https://www.dwd.de/">Deutscher Wetterdienst</a>
            </li>
            <li>Pumpen aus <a target="blank" href=" https://www.openstreetmap.de"> Open Street Map</a>
            </li>
          </ul>`,
      },
      {
        title: 'Partner und Unterstützer',
        description: `Dieses Projekt wäre nicht möglich ohne die Unterstützung der wundervollen Leute der folgenden Einrichtungen: 
          <ul>
            <li>
              <a target="blank" href="https://citylab-berlin.org">CityLab Berlin</a>
            </li>
            <li>
              <a target="blank" href="https://ottopflanzt.de">Otto pflanzt!</a>
            </li>
            <li>
              <a target="blank" href="https://netz39.de">Netz39 e.V.</a>
            </li>
            <li>
              <a target="blank" href="https://baumfreunde-md.de">Baumfreunde Magdeburg</a>
            </li>
            <li>
              <a target="blank" href="https://codefor.de/leipzig">Code for Leipzig</a>
            </li>
          </ul>`
      }
    ],
    waterNeeds: [
      {
        title: 'Niedriger Wasserbedarf',
        description:
          'Straßenbäume höheren Alters (>40 Jahre) haben in der Regel gelernt, sich über das Grundwasser selbst zu versorgen, aber auch sie leiden unter der zunehmenden Hitze und freuen sich über zusätzliches Wasser. Jungbäume unter 5 Jahren hingegen haben einen niedrigen Wasserbedarf, da diese im Normalfall durch den Eigenbetrieb Stadtgarten und Friedhöfe, den Liegenschaftsservice oder andere zuständige Unternehmen versorgt werden.',
      },
      {
        title: 'Mittlerer Wasserbedarf',
        description:
          'Mittelalte Bäume zwischen 15 und 40 Jahren werden in der Regel nicht mehr durch die Grünflächenämter bewässert, haben aber schon ein gewisses Durchhaltevermögen. Aber auch für sie sind die Hitzesommer ungewohnt und sie freuen sich über jeden Eimer: Gerne ein Mal in der Woche mit bis zu 100l gießen. ',
      },
      {
        title: 'Hoher Wasserbedarf',
        description:
          'Jungbäume zwischen fünf und 15 Jahren werden nicht von der Verwaltung bewässert und sind noch keine „Selbstversorger“. Sie freuen sich über viel Wasser von bis zu 200l pro Gießung (ein Mal in der Woche).',
      },
    ],
    treetypes: [],
    openSourceNote: 'MAGDEBURG GIESST ist ein',
    openSourceLink: 'https://github.com/code-for-magdeburg/magdeburggiesst',
    openSourceText: 'Open Source Projekt!',
    profile: {
      logoutAction: 'Ausloggen',
      loginAction: 'Einloggen / Registrieren',
      loggedInHint:
        'Du bist momentan nicht eingeloggt. Wenn Du das Gießen von Bäumen in Deiner Umgebung hier eintragen möchtest, dann registriere Dich oder logge Dich ein.',
      title: 'Profil',
      progress: 'Dein Gießfortschritt',
      adoptedTrees: 'Adoptierte Bäume',
      noTreesAdopted: 'Du hast noch keine Bäume adoptiert.',
      deleteAccountHint:
        'Möchtest Du deinen Account löschen? Damit werden alle von dir generierten Wässerungsdaten einem anonymen Benutzer zugeordnet. Dein Benutzer bei unserem Authentifizierungsdienst Supabase.com wird sofort und unwiderruflich gelöscht.',
      deleteAccountAction: 'Account Löschen',
      deleteAccountWarning:
        '🚨 🚨 🚨 Willst Du Deinen Account wirklich löschen? Diese Aktion ist endgültig. Alle Deine Benutzerdaten werden damit sofort gelöscht!',
      timesWatered: 'mal gegossen',
      litersWatered: 'Liter gegossen',
    },
    account: {
      confirm: 'Account bestätigen',
      title: 'Dein Account',
      username: 'Benutzername',
      registeredMail: 'Registrierte E-Mail Adresse',
      editHint: 'Benutzername oder E-Mail',
      editLink: 'bearbeiten?',
      passwordEditHint: 'Passwort',
      passwordEditLink: 'ändern?',
      editTitle: 'Account bearbeiten',
      editSave: 'Speichern',
      editSaving: 'Wird gespeichert...',
      editClose: 'Schließen',
      editUsernameSuccess: 'Benutzername geändert.',
      editUsernameError:
        'Interner Fehler beim Ändern des Benutzernamens. Versuche es später erneut.',
      editEmailSuccess:
        'Um die Änderung zu bestätigen, bitte klicke auf die Links die per Mail jeweils an Deine alte E-Mail-Adresse "_1_" und deine neue E-Mail-Adresse "_2_" verschickt wurden.',
      editPasswordTitle: 'Passwort ändern',
      oldPasswordTitle: 'Altes Passwort',
      newPasswordTitle: 'Neues Passwort',
      repeatNewPasswordTitle: 'Neues Passwort wiederholen',
      editPasswordSuccess: 'Dein Passwort wurde erfolgreich geändert',
    },
    tree: {
      title: 'Bauminformation',
      age: 'Standalter',
      needs: 'Wasserbedarf',
      wateringAmount: 'Wassermenge',
      ofLastDays: 'der letzten 30 Tage',
      waterings: 'Gießungen',
      rain: 'Regen',
      litersPerSqm: 'Liter pro m²',
      years: 'Jahre',
      adoptedByMe: 'Von mir adoptiert ✔',
      adoptedAlsoByOthers: 'Ebenfalls von anderen adoptiert',
      adoptedOnlyByOthers: 'Von anderen Nutzer:innen adoptiert',
      regularlyWateredBy: 'Dieser Baum wird regelmäßig von "_1_" gewässert.',
      lastWaterings: 'Letzte Bewässerungen',
      latestFirst: 'Neueste zuerst',
      needsVerification:
        'Bäume adoptieren und wässern ist nur möglich mit verifiziertem Account.',
      stopAdoption: 'Adoption aufheben',
      stopAdoptionProgress: 'Adoption wird aufgehoben',
      adopt: 'Baum adoptieren',
      adoptProgress: 'Baum wird adoptiert',
    },
  },
  auth: {
    signinTitle: 'Anmelden',
    signupTitle: 'Registrieren',
    email: 'E-Mail',
    username: 'Benutzername',
    password: 'Passwort',
    signinAction: 'Einloggen',
    signupAction: 'Registrieren',
    noAccountHint: 'Du hast noch keinen Account?',
    alreadyRegisteredHint: 'Du hast schon einen Account?',
    alreadyRegisteredAction: 'Log Dich ein',
    registerLink: 'Registrier Dich',
    forgotPasswordHint: 'Oh nein. Du hast Dein',
    forgotPasswordLink: 'Passwort vergessen?',
    resetPassword: 'Passwort zurücksetzen',
    backToLogin: 'Zurück zur Anmeldung?',
    clickHere: 'Hier klicken',
    bored: 'Dir ist langweilig bis dahin? Dann lies etwas über MAGDEBURG GIESST!',
    profile: 'Profil',
    usernameRestrictions: {
      part1: 'Dein Benutzername sollte zwischen',
      and: 'und',
      part2:
        'Zeichen lang sein, nur aus Zeichen und Zahlen (ohne Leerzeichen am Anfang und Ende) ',
      part3: 'bestehen und natürlich nicht vergeben sein.',
    },
    passwordRestrictions: {
      part1: 'Dein Passwort sollte: Mindestens 8 Zeichen lang sein',
      part2: 'Klein- und Großbuchstaben',
      part3: 'mindestens eines dieser Sonderzeichen @#$%&*()!_+=:;',
      part4: 'und Zahlen enthalten.',
    },
    errors: {
      checkUsername: 'Bitte überprüfe Deinen Benutzernamen',
      checkPassword: 'Bitte überprüfe Dein Passwort',
      userExistsAlready: 'Benutzer bereits registriert',
      emailCouldNotBeSent:
        'Die E-Mail an "_1_" konnte nicht verschickt werden. Versuch es erneut.',
      usernameOrPasswordWrong: 'Benutzername oder Passwort ist falsch',
      ooops: 'Ups... da ist etwas schief gelaufen',
      checkMailForPasswordReset:
        'Überprüfe Deine E-Mail "_1_" nach einem Link um Dein Passwort zu ändern',
      usernameTaken: 'Benutzername bereits vergeben',
    },
    passwordNotSecureEnough: 'Passwort ist nicht sicher genug',
    passwordCouldNotBeChanged: 'Passwort konnte nicht geändert werden',
    passwordChangeSuccess: 'Passwort erfolgreich geändert',
    changePasswordFor: 'Passwort ändern für',
  },
  collaborate: {
    tiles: [
      {
        icon: 'zoom',
        title: 'Entdecken',
        description:
          'Unsere interaktive Karte visualisiert über 82.000 Stadtbäume und zeigt Informationen zu Art, Alter und Wasserbedarf an. Nutze die Filter- und Suchfunktionen, um schnell einen Überblick zu erhalten.',
      },
      {
        icon: 'water',
        title: 'Gießen',
        description:
          'Schnapp Dir eine Gießkanne und werde Teil der Gieß-Community! Bereits Dutzende Mitglieder haben sich für die Bäume in Magdeburg zusammengeschlossen und tragen ihre Gießungen regelmäßig ein.',
      },
      {
        icon: 'subscribe',
        title: 'Adoptieren',
        description:
          'Durch das Adoptieren eines Baumes - oder auch mehrerer - lässt Du deine Nachbarschaft wissen, dass für diese Bäume gesorgt wird. So gelingt ein koordiniertes Engagement.',
      },
      {
        icon: 'info',
        title: 'Austauschen',
        description:
          'Tritt unserem <a target="_blank" href="https://join.slack.com/t/magdeburggiesst/shared_invite/zt-1tf5i2z3k-mTmk_PUBEOWuNWzDSNoH4w">Slack-Chat</a> bei, um Dich mit der Gieß-Community zu vernetzen, Fragen auszutauschen und die Bewässerung in Deinem Kiez abzustimmen.',
      },
    ],
  },
  sales: {
    title: '<i>Gieß den Kiez</i> auch in Deiner Stadt?',
    subtitle:
      'Städte wie Leipzig, Magdeburg und Co. haben sich bereits erfolgreich der Gieß-Welle angeschlossen! Ist deine Stadt die nächste?',
    buttonText: 'Erfahre mehr!',
    buttonLink: 'https://deine-stadt.giessdenkiez.de',
  },
};

const enContent = {
  error: {
    title: 'Something went wrong.',
    contact: 'Please contact',
    issue: 'or submit an issue on',
    reload: 'Maybe it helps to reload the page?',
    backToHome: 'Back to home',
  },
  faq: {
    title: 'F.A.Q.',
    description: 'Based on the lively exchange between our community on Slack',
    qa: [
      {
        question: 'How can I participate?',
        answer:
          'Inform: <br><br>Curious which tree is in front of your door? Our interactive map visualizes over 82,000 street and plant trees in Magdeburg. If you want to find out more about a tree, navigate and zoom to the desired location and click on the colored dot. You will now see a lot of information about the selected tree in the menu ribbon on the left. <br><br>Watering and adopting trees: <br><br>Do you want to get active or are you already actively watering? On MAGDEBURG GIESST you can enter whether and with how much water you watered a tree. Trees can also be adopted. The adopted trees appear in your own user profile and can be found more quickly. This allows other neighbors in the area to see which trees need their attention. To water and adopt trees, first create a profile with a valid email address and then log in. Now you can document your watering activities accordingly and see whether and how often trees in your neighborhood have already been watered by other users.<br><br>Connect: <br><br> You can use our public <a target="blank" href="https://join.slack.com/t/magdeburggiesst/shared_invite/zt-1tf5i2z3k-mTmk_PUBEOWuNWzDSNoH4w">Slack channel</a> to exchange ideas with other foundries and report defective pumps in your neighborhood.',
      },
      {
        question: 'What can I do if trees are not registered correctly?',
        answer:
          'We obtain the tree data set with all attributes such as address, tree species and planting year for each tree from the Open Data portal of the city of Magdeburg. The tree register provided in the portal is based on the district-aggregated data from the road and green space authorities. It can therefore happen again and again that data from trees is out of date or that properties differ from current reality. Unfortunately, we cannot make any changes to the tree register ourselves. Any deviations can only be reported directly to the responsible district authority. Once a year, the green space authorities publish an updated tree register, which we link to MAGDEBURG GIESST after publication.',
      },
      {
        question: 'Why should I take action and water trees?',
        answer:
          "The prolonged periods of drought and heat in recent years have had a significant impact on the green spaces of Magdeburg.<br><br>The municipal enterprise Stadtgarten und Friedhöfe (City Gardens and Cemeteries) is already active, but struggles to keep up with watering during the hot summers in Magdeburg. Through this platform, we also want to provide citizens with the opportunity to help trees specifically based on their current water supply and to inform themselves. The goal is to save as many trees as possible through community engagement.",
      },
      {
        question: 'How do I water correctly?',
        answer:
          'Depending on their age, location and tree species, trees need different amounts of water. Young trees (0-15 years) need more water than medium-aged trees (15-40 years). Old trees (40 years and older) are usually completely self-sufficient. <br><br>Since freshly planted trees up to the age of five are usually supplied with water by the district parks authorities, the trees between five and 15 years in particular need our attention and our water. We have highlighted this with the labels of low, medium or high water requirement. <br><br>Based on the Berlin <a target="blank" href="https://www.berlin.de/sen/uvk/natur-und-gruen/stadtgruen/pflegen-und-unterhalten/katalog-good-care/">Manual Good Care</a> we recommend that you water it rarely, but rather with a larger amount of water. The manual recommends up to 200l per watering for freshly planted trees. In this way you ensure that the soil moisture is increased even at depth. In the end, even smaller amounts don\'t hurt, especially in midsummer. It is important to loosen the dried out soil before watering so that the water can penetrate into the soil and does not run off above ground or accumulate incorrectly. So-called watering bags are also recommended, from which the water only emerges very slowly, hardly runs off the surface and therefore continuously seeps into the ground.',
      },
      {
        question: 'Who can I contact if pumps are broken or damaged?',
        answer:
          'The respective district roads and green spaces authorities are responsible for the infrastructure of the roads, which also includes the public hand pumps. If pumps are broken or damaged, the need for repairs can be reported there. We load the locations of the pumps on the map weekly from the Open Street Map database. If you want to help improve the data, for example by reporting a defective pump, you can do so in our <a target="blank" href="https://app.slack.com/client/T052UAPPF7G/C052YPL8Q1K" >Slack Channel #pump-report </a> do. The OSM community then has the opportunity to enter your information into the database.',
      },
      {
        question: 'How are technical problems handled?',
        answer:
          'The participation platform “MAGDEBURG GIESST” is a prototype and therefore a beta version of a web app. We are aware of some technical hurdles, but depend on your help. We are happy to receive your technical feedback and questions in our <a target="blank" href="https://join.slack.com/t/magdeburggiesst/shared_invite/zt-1tf5i2z3k-mTmk_PUBEOWuNWzDSNoH4w">Slack Channel</a> or by email. Anyone who feels at home in the “tech world” is welcome to participate in our <a target="blank" href="https://github.com/code-for-magdeburg/magdeburggiesst">Open Source GitHub Repository</ a> invited and can comment on his issues or code fixes directly in the repository.',
      },
      {
        question: 'Why is the website not loading or loading very slowly?',
        answer:
          'When the page is first opened, the browser loads over 82,000 data points - this can take a while! Regardless, there may be slightly different displays when using different browsers. For the best experience, we recommend using Chrome or Firefox Desktop. Experience has shown that the most common problems can be solved if the browser is not outdated or the latest version is installed and there is a stable internet connection (LAN or WLAN). <br><br>Use via smartphone (mobile network) can lead to performance problems (page loads slowly). If problems occur repeatedly, you can report them in our <a target="blank" href="https://join.slack.com/t/magdeburggiesst/shared_invite/zt-1tf5i2z3k-mTmk_PUBEOWuNWzDSNoH4w">Slack Channel</a>, Report by email or via GitHub Issue, stating the device used, the operating system, the browser and the browser version.',
      },
      {
        question: 'What should I do if I watered a tree incorrectly?',
        answer:
          'To undo a watering, for example because the neighboring tree was watered instead or on a different day, first click on the tree. Scroll down the tree sidebar to the view of past waterings, click the trash can icon next to the entry you want to delete, and click “Delete” to confirm. Only castings that you have made yourself can be deleted. After deleting, enter the watering with the correct information (number of liters and time).',
      },
      {
        question: 'Can the principle be transferred to other cities?',
        answer:
          'The “Gieß den Kiez” platform is an open source software project and runs under an MIT license. Accordingly, the idea and also the source code can be used and further developed free of charge for implementation in other cities. If you are interested, please take a look at our <a target="blank" href="https://github.com/technologiestiftung/giessdenkiez-de">GitHub Repository</a> or contact us via email.',
      },
      {
        question: 'I still have a question!',
        answer:
          'The FAQ couldn\'t help you or you have a more complex query? Then write us an <a href="mailto:info@magdeburg-giesst.de?subject=[MAGDEBURG GIESST] Question:...">Email.</a>',
      },
      {
        question: "Why aren't all of Magdeburg's trees shown?",
        answer:
          "MAGDEBURG GIESST builds on the tree cadastre. The tree cadastre is a directory of the city where (city/street or park) trees are managed, provided by the municipal enterprise Stadtgarten und Friedhöfe (City Gardens and Cemeteries) and the property service. However, these authorities are not responsible for all trees in Magdeburg. Trees on private properties or on properties of housing cooperatives, for example, do not appear in MAGDEBURG GIESST.",
      },
      {
        question: "I don't speak any German: What's going on here?",
        answer:
          'MAGDEBURG GIESST is a participatory platform where you can inform yourself about the trees in your neighbourhood and their water needs. You can explore individual trees in Magdeburg and find out about the proper watering of trees. If you want to water the same trees regularly, you should create an account, adopt the trees and show that they are taken care of. This way, coordination takes place in the neighbourhood.',
      },
    ],
  },
  imprintAndPrivacy: {
    title: 'Imprint and data protection',
    description:
      '<a target="blank" href="https://www.netz39.de/impressum/">Imprint</a> – <a target="blank" href="https://www.netz39.de/datenschutz/">Data protection</a>',
    attribution:
      '© <a href="https://www.mapbox.com/about/maps/" target="_blank" rel="noreferrer">Mapbox</a> – © <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap</a> – <a href="https://www.mapbox.com/map-feedback" target="_blank" rel="noreferrer"><strong>Improve this map</strong></a>',
  },
  intro: {
    title: '<b><span>MAGDEBURG</span> GIESST</b>',
    subline:
      'Magdeburg\'s city trees are suffering from drought <br class="large" /> and you can help them!',
    description: [
      'Find out about the water needs of the trees in your neighborhood, adopt the tree on your doorstep and become part of the active watering community in Magdeburg!',
    ],
    action: "Let's go",
  },
  credits: {
    projectOf: 'A project by',
    executedBy: 'Executed by',
    fundedBy: 'Funded by',
  },
  cookies: {
    disclaimer:
      'This website uses cookies to enable certain functions and to improve the offering. By continuing here you agree to the use of cookies.',
    accept: 'Accept',
    info: 'More information',
  },
  legend: {
    title: 'Legend',
    pumps: 'Public pumps',
    publicPump: 'Public street pump',
    lastPumpCheck: 'Last check',
    pumpStyle: 'Pump style',
    updatePumpLink: 'Update status in OpenStreetMap',
    precipitation: 'Precipitation',
    precipitationAreas: 'Precipitation areas',
    dataPoints: 'Data points',
    treeLayer: 'Street and park trees',
    ofLastDays: 'of last 30 days (liters)',
    pumpState: {
      working: 'working',
      defect: 'defect',
      locked: 'locked',
      unknown: 'unknown',
    },
  },
  sharing: {
    title:
      'Share MAGDEBURG GIESST with those around you and help us expand the Gieß community:',
    content:
      "On MAGDEBURG GIESST you can find out about Magdeburg's tree population, find thirsty trees and record when you watered them!",
  },
  loading: {
    snippets: [
      'We are currently loading 82,000 trees from the Magdeburg tree population.',
      'If you access this page via the mobile network, it may take some time.',
      "Collect information about all trees from Magdeburg's tree register.",
      'Did you know? A city tree needs approximately 70 liters of water per week.',
    ],
  },
  sidebar: {
    addressPlaceholder: 'Address',
    participateButton: 'How can I participate?',
    loading: 'Loading',
    furtherInfo: 'More information',
    title: 'Search & Filtering',
    locationSearchTitle: 'Location search',
    dataViewTitle: 'Data view',
    dataViewDescription:
      'See which trees have already been watered by other users. Or find out how much rainfall has reached the trees in the last 30 days.',
    precipitation: 'Precipitation',
    adopted: 'Already adopted',
    lastWatered: 'Watered in last 30 days',
    waterNeedsTitle: 'Water needs',
    waterNeedsDescription: 'Find out how urgently trees need water.',
    treeAgeTitle: 'Tree age',
    treeAgeDescription: "Explore the history of Magdeburg's tree landscape",
    about: [
      {
        title: 'About the project',
        description:
          'The consequences of climate change, especially the dry and hot summers, are putting a strain on Magdeburg\'s ecosystem. <br/><br/>Would you like to find out more about watering trees, report pumps and exchange ideas with other active users?',
      },
      {
        title: 'Useful links',
        description:
          `<ul>
                <li>
                    <a target="blank" href="https://www.lieblingsbaum-initiative.de/">Favorite Tree Initiative</a>
                </li>
                <li>
                    <a target="blank" href="https://www.baumpflegeportal.de/baumpflege/trockenheit-duerre-wann-baeume-giessen/">Tree care portal - watering in dry conditions</a>
                </li>
                <li>
                    <a target="blank" href="https://www.magdeburg.de/Start/B%C3%BCrger-Stadt/Stadt/Aktionen/index.php?object=tx%7C37.9220.1">Mein Baum für Magdeburg</a>
                </li>
                <li>
                    <a target="blank" href="https://baumfreunde-md.de">Baumfreunde Magdeburg</a>
                </li>
                <li>
                    <a target="blank" href="https://www.bmi.bund.de/SharedDocs/downloads/DE/publikationen/themen/bauen/wohnen/weissbuch-stadtgruen.html">Green paper urban green</a>
                </li>
                <li>
                    <a target="blank" href="https://www.hcu-hamburg.de/fileadmin/documents/REAP/files/Bildungsmaterial_Stadtbaeume_im_Klimawandel_2017.pdf">City trees - significance and challenges in times of climate change</a>
                </li>
                <li>
                    <a target="blank" href="https://www.bund-naturschutz.de/natur-und-landschaft/stadt-als-lebensraum/stadtbaeume/funktionen-von-stadtbaeumen.html">BUND - Functions of city trees</a>
                </li>
            </ul>`,
      },
      {
        title: 'About Us',
        description:
          'MAGDEBURG GIESST is a project by <a target="blank" href="https://codefor.de/magdeburg">Code For Magdeburg</a>, <a target="blank" href="https://baumfreunde-md.de">Baumfreunde Magdeburg</a> and <a target="_blank" href="https://netz39.de">Netz39 e.V.</a> The project is supported by the <a target="blank" href="https://www.citylab-berlin.org/">CityLAB Berlin</a>, a project of Technologiestiftung Berlin, whose app <a target="blank" href="https://www.giessdenkiez.de">Gieß den Kiez</a> serves as the basis for the Magdeburg app of MAGDEBURG GIESST.<br /> <br /> Got feedback? We would love to hear from you in our dedicated <a target="blank" href="https://join.slack.com/t/magdeburggiesst/shared_invite/zt-1tf5i2z3k-mTmk_PUBEOWuNWzDSNoH4w">Slack Chat</a>.',
      },
      {
        title: 'Data sources',
        description: `The map shows a large portion of the street and park trees in Magdeburg (approximately 82,000; as of May 2023). Additionally, it indicates how much precipitation has fallen at each tree in the last 30 days and whether they have been watered during that time. Unfortunately, not all of Magdeburg's city trees are listed for various reasons. However, we are working to improve the data and achieve the most complete representation of Magdeburg's tree population possible. The current data sources are:
          <ul>
            <li>
              <a target="blank" href="https://www.magdeburg.de/B%C3%BCrger-Stadt/Verwaltung-Service/Offene-Verwaltungsdaten/index.php?NavID=37.906&object=tx|37.12819.1&La=1&">Open Data Magdeburg</a>
            </li>
            <li>
              <a target="blank" href="https://www.dwd.de/">Deutscher Wetterdienst</a>
            </li>
            <li>
                Pumps from <a target="blank" href=" https://www.openstreetmap.de"> Open Street Map</a>
            </li>
          </ul>`,
      },
      {
        title: 'Partner und Unterstützer',
        description: `This project would not be possible without the support of the wonderful people from the following institutions: 
          <ul>
            <li>
              <a target="blank" href="https://citylab-berlin.org">CityLab Berlin</a>
            </li>
            <li>
              <a target="blank" href="https://ottopflanzt.de">Otto pflanzt!</a>
            </li>
            <li>
              <a target="blank" href="https://netz39.de">Netz39 e.V.</a>
            </li>
            <li>
              <a target="blank" href="https://baumfreunde-md.de">Baumfreunde Magdeburg</a>
            </li>
            <li>
              <a target="blank" href="https://codefor.de/leipzig">Code for Leipzig</a>
            </li>
          </ul>`
      }
    ],
    waterNeeds: [
      {
        title: 'Low water requirements',
        description:
          'Street trees of older age (>40 years) have usually learned to supply themselves with groundwater, but they also suffer from the increasing heat and are happy about additional water. ',
      },
      {
        title: 'Medium water requirements',
        description:
          'Middle-aged trees between 15 and 40 years old are usually no longer watered by the parks departments, but they do have a certain amount of staying power.  ',
      },
      {
        title: 'High water requirements',
        description:
          'Young trees between four and 15 years old are not irrigated by the administration in all districts and are not yet “self-sufficient”. ',
      },
    ],
    treetypes: [],
    openSourceNote: 'MAGDEBURG GIESST is an',
    openSourceLink: 'https://github.com/code-for-magdeburg/magdeburggiesst',
    openSourceText: 'Open Source project!',
    profile: {
      logoutAction: 'Logout',
      loginAction: 'Login / Register',
      loggedInHint:
        'You are currently not logged in. If you would like to list the watering of trees in your area here, then register or log in.',
      title: 'Profile',
      progress: 'Your waterings',
      adoptedTrees: 'Adopted trees',
      noTreesAdopted: "You don't have adopted any trees yet",
      deleteAccountHint:
        'Do you want to delete your account? This means that all watering data you generate is assigned to an anonymous user. Your user on our authentication service Supabase.com will be deleted immediately and irrevocably.',
      deleteAccountAction: 'Delete account',
      deleteAccountWarning:
        '🚨 🚨 🚨 Do you really want to delete your account? This action is final. All your user data will be deleted immediately!',
      timesWatered: 'times watered',
      litersWatered: 'liters watered',
    },
    account: {
      confirm: 'Confirm account',
      title: 'Your account',
      username: 'Username',
      registeredMail: 'Registered email address',
      editHint: 'Username or email',
      editLink: 'edit?',
      passwordEditHint: 'Password',
      passwordEditLink: 'change?',
      editTitle: 'Edit account',
      editSave: 'Save',
      editSaving: 'Saving...',
      editClose: 'Close',
      editUsernameSuccess: 'Username changed successfully.',
      editUsernameError:
        'Internal error while updating username. Please try again later.',
      editEmailSuccess:
        'To confirm the changes, please click the link that was sent to your old email address "_1_" and your new email address "_2_".',
      editPasswordTitle: 'Change password',
      oldPasswordTitle: 'Old password',
      newPasswordTitle: 'New password',
      repeatNewPasswordTitle: 'Repeat new password',
      editPasswordSuccess: 'Your password was changed successfully',
    },
    tree: {
      title: 'Tree information',
      age: 'Age',
      needs: 'Water requirements',
      wateringAmount: 'Watering amounts',
      ofLastDays: 'of last 30 days',
      waterings: 'Waterings',
      rain: 'Rain',
      litersPerSqm: 'Liters per m²',
      years: 'years',
      adoptedByMe: 'Adopted by me ✔',
      adoptedAlsoByOthers: 'Adopted also by others',
      adoptedOnlyByOthers: 'Adopted by others',
      regularlyWateredBy: 'This tree is regularly watered by "_1_".',
      lastWaterings: 'Last waterings',
      latestFirst: 'Latest first',
      needsVerification:
        'Adopting and watering trees is only possible with a verified account.',
      stopAdoption: 'End adoption',
      stopAdoptionProgress: 'Ending adoption',
      adopt: 'Adopt tree',
      adoptProgress: 'Adopting tree',
    },
  },
  auth: {
    signinTitle: 'Login',
    signupTitle: 'Register',
    email: 'Email',
    username: 'Username',
    password: 'Password',
    signinAction: 'Login',
    signupAction: 'Register',
    noAccountHint: 'No account yet?',
    alreadyRegisteredHint: 'You already have an account?',
    alreadyRegisteredAction: 'Login',
    registerLink: 'Register here',
    forgotPasswordHint: 'Oh no, forgot your password?',
    forgotPasswordLink: 'Reset password',
    resetPassword: 'Reset password',
    backToLogin: 'Back to Login?',
    clickHere: 'Click here',
    bored: 'Bored? Read something about MAGDEBURG GIESST!',
    profile: 'Profile',
    usernameRestrictions: {
      part1: 'Your username should be between',
      and: 'and',
      part2:
        'characters long, made only of numbers and characters (without whitespace at start and end)',
      part3: 'and of course should not be already taken.',
    },
    passwordRestrictions: {
      part1: 'Your password should be: At least 8 characters long',
      part2: 'have lower- and uppercase letters',
      part3: 'contain at least one of these special characters @#$%&*()!_+=:;',
      part4: 'and contain numbers.',
    },
    errors: {
      checkUsername: 'Please check your username',
      checkPassword: 'Please check your password',
      userExistsAlready: 'User already registered',
      emailCouldNotBeSent: 'Email to "_1_" could not be sent. Try again.',
      usernameOrPasswordWrong: 'Username or password are wrong',
      ooops: 'Ooops... something did not work as expected',
      checkMailForPasswordReset:
        'Check your email "_1_" for a link to reset your password',
      usernameTaken: 'Username already taken',
    },
    passwordNotSecureEnough: 'Password ist not secure enough',
    passwordCouldNotBeChanged: 'Password could not be changed',
    passwordChangeSuccess: 'Password changed successfully',
    changePasswordFor: 'Change password for',
  },
  collaborate: {
    tiles: [
      {
        icon: 'zoom',
        title: 'Discover',
        description:
          'Our interactive map visualizes over 82,000 urban trees and displays information on species, age and water requirements. Use the filter and search functions to quickly get an overview.',
      },
      {
        icon: 'water',
        title: 'Pour',
        description:
          "Grab a watering can and become part of the watering community! Over a thousand members have already joined forces for Magdeburg's trees and regularly submit their waterings.",
      },
      {
        icon: 'subscribe',
        title: 'To adopt',
        description:
          'By adopting a tree - or several - you let your neighborhood know that these trees will be cared for. This is how coordinated engagement succeeds.',
      },
      {
        icon: 'info',
        title: 'Exchange',
        description:
          'Join ours <a target="_blank" href="https://join.slack.com/t/magdeburggiesst/shared_invite/zt-1tf5i2z3k-mTmk_PUBEOWuNWzDSNoH4w">Slack chat</a> to network with the irrigation community, exchange questions and coordinate irrigation in your neighborhood.',
      },
    ],
  },
  sales: {
    title: '<i>Giess den Kiez</i> also in your city?',
    subtitle:
      'Cities like Leipzig, Magdeburg and Co. have already successfully joined the casting wave! ',
    buttonText: 'Learn more!',
    buttonLink: 'https://deine-stadt.giessdenkiez.de',
  },
};

const localizedContent = {
  de: deContent,
  en: enContent,
} as LocalizedContent;

export default localizedContent;
