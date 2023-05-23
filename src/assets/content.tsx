interface Item {
  title: string;
  description: string;
}

type TreeTypeId = 'LINDE' | 'AHORN' | 'EICHE' | 'KASTANIE' | 'PLATANE';
export interface TreeType extends Item {
  id: TreeTypeId;
}

type IconType = 'info' | 'zoom' | 'water' | 'subscribe';
export interface CollaborationItem extends Item {
  icon: IconType;
}
interface FAQ extends Item {
  qa: Array<{ question: string; answer: string }>;
}
interface Content {
  faq: FAQ;
  imprintAndPrivacy: {
    title: string;
    description: string;
    attribution: string;
  };
  intro: {
    title: string;
    subline: string;
    disclaimer: string;
    description: string[];
  };
  //pls do not delete the following eventNote section to facilitate process of enabling/disabling future news & notes
  //if event announcemnt is needed just de-comment this section and fill in the announcement text below
  eventNote?: {
    title: string;
  };
  whatsNew?: {
    title: string;
    description: string[];
  };
  loading: {
    snippets: string[];
  };
  sidebar: {
    about: Item[];
    waterNeeds: Item[];
    treetypes: TreeType[];
  };
  collaborate: {
    title: string;
    tiles: CollaborationItem[];
  };
}

const content: Content = {
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
          'Die langanhaltenden Dürre- und Hitzeperioden der letzten zwei Jahre haben dem Magdeburger Stadtgrün immens zugesetzt.<br><br>Der Eigenbetrieb Stadtgarten und Friedhöfe ist bereits aktiv, kommt allerdings mit dem Gießen während Magdeburger Hitze-Sommern nicht hinterher. Durch die Plattform möchten wir auch Bürger:innen die Möglichkeit geben, Bäumen gezielt auf Grundlage ihrer aktuellen Wasserversorgung zu helfen und sich zu informieren. Ziel ist es, möglichst viele Bäume durch nachbarschaftliches Engagement zu retten.',
      },
      {
        question: 'Wie gieße ich richtig?',
        answer:
          'Je nach Alter, Standort und Baumart benötigen Bäume unterschiedlich viel Wasser. Jungbäume (0-15 Jahre), benötigen mehr Wasser als mittelalte Bäume (15-40 Jahre). Altbäume (ab 40 Jahre) sind meist komplette Selbstversorger. <br><br>Da frisch gepflanzte Bäume bis zum Alter von fünf Jahren in der Regel vom Eigenbetrieb Stadtgarten und Friedhöfe mit Wasser versorgt werden, benötigen besonders die Bäume zwischen fünf und 15 Jahren unsere Aufmerksamkeit, beziehungsweise unser Wasser. Dies haben wir mit den Kennzeichnungen des geringen, mittleren oder hohen Wasserbedarfs hervorgehoben. <br><br>Angelehnt an das Berliner <a traget="blank" href="https://www.berlin.de/sen/uvk/natur-und-gruen/stadtgruen/pflegen-und-unterhalten/handbuch-gute-pflege/">Handbuch Gute Pflege</a> empfehlen wir euch, lieber selten, dafür mit größeren Menge an Wasser zu gießen. Das Handbuch empfiehlt für frisch gepflanzte Bäume bis zu 200l pro Gießung. So sorgt ihr dafür, dass die Bodenfeuchte auch in der Tiefe erhöht wird. Im Endeffekt schaden aber auch kleinere Mengen gerade im Hochsommer nicht. Wichtig ist es, den ausgetrockneten Boden vor dem Gießen aufzulockern, sodass das Wasser in den Boden eindringen kann und nicht oberirdisch abläuft oder sich falsch anstaut. Auch zu empfehlen sind sogenannte Gießsäcke aus denen das Wasser nur sehr langsam austritt, kaum oberflächlich abläuft und somit kontinuierlich in den Boden sickert.',
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
          'Um eine Gießung rückgängig zu machen, weil bspw. stattdessen der Nachbarbaum oder zu einem anderen Tag gegossen wurde, klicke zunächst auf den Baum. Scrolle in der Seitenleiste des Baumes runter bis zur Ansicht der vergangenen Gießungen, klicke auf das Papierkorb-Symbol neben dem Eintrag, den du löschen möchtest und klicke auf „Löschen”, um zu bestätigen. Es können nur Gießungen gelöscht werden, die du selbst vorgenommen hast. Trage nach der Löschung die Gießung mit den richtigen Angaben (Anzahl an Litern und Zeitpunkt) ein.',
      },
      {
        question: 'Ist das Prinzip auf andere Städte übertragbar?',
        answer:
          'Die „Gieß den Kiez” Plattform ist ein Open Source Software Projekt und läuft unter einer MIT Lizenz. Dementsprechend kann die Idee, aber auch der Quellcode für die Umsetzung in anderen Städten kostenlos genutzt und weiterentwickelt werden. Wenn Du dich dafür interessierst, schau gerne im <a target="blank" href="https://github.com/technologiestiftung/giessdenkiez-de">GitHub Repository</a> vorbei oder kontaktiere uns via Mail.',
      },
      {
        question: 'Ich habe immer noch eine Frage!',
        answer:
          'Das FAQ konnte dir nicht weiterhelfen oder du hast eine komplexere Anfrage? Dann schreib uns eine <a href="mailto:info@magdeburg-giesst.de?subject=[MAGDEBURG GIESST] Frage:...">Email.</a>',
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
    disclaimer:
      'Hinweis: Das Laden von 82.000 Bäumen ist ressourcenintensiv und funktioniert aktuell nicht auf allen Mobilgeräten einwandfrei. Wir empfehlen die Nutzung via Desktop-Computer',
    description: [
      'Auf dieser Plattform kannst Du Dich über Bäume in Deiner Nachbarschaft und ihren Wasserbedarf informieren. Du kannst einzelne Bäume adoptieren und markieren, wenn Du sie gegossen hast. Wenn Du die Seite regelmäßig nutzen möchtest, solltest Du ein Konto erstellen.',
      'Die Karte zeigt knapp 82.000 Stadtbäume, die Du ganz einfach, auch ohne Konto, erkunden kannst.<br/>Du möchtest Dich über das Gießen von Bäumen informieren, Pumpen melden und Dich mit anderen aktiven Nutzer:innen austauschen? Dann tritt unserem Slack-Chat bei!',
    ],
  },
  //pls do not delete the following eventNote section to facilitate process of enabling/disabling future news & notes
  // eventNote: {
  //   title:
  //     '<b>Gieß den Kiez Maintenance: </b><br> Nach dem Herbstputz ist uns aufgefallen, daß auch unser Datenbank etwas aufgeräumt werden muss. Daher werden wir am 29.11.2022 von 11:00 bis 16:00 Uhr die Plattform für Wartungsarbeiten abschalten. Wir bitten um euer Verständnis.',
  // },
  // whatsNew: {
  //   title: 'Gieß den Kiez Wartung:',
  //   description: [
  //     'Es ist Zeit für den Frühjahrsputz! In den kommenden Tagen werden wir ein großes Update an der Website vornehmen. Freut Euch über viele kleinere und größere Verbesserungen: Wir erleichtern die Übertragbarkeit von Giess den Kiez für andere Städte, ermöglichen Euch die Anpassung Eurer E-Mail Adresse oder des Passwortes und noch einiges mehr.',
  //     '<strong>Achtung: Damit uns niemand unterwegs verloren geht, müssen wir die Registrierung neuer Accounts für einige Tage deaktivieren.</strong> Gießen könnt Ihr aber weiterhin und Eure bisherigen Gießungen bleiben natürlich erhalten.<br /><strong>Und zu guter Letzt - das neue Baumkataster für 2023 ist da! \\o/</strong> Es sind circa 40.000 Bäume hinzugekommen.<br/> Viel Spaß beim Gießen!',
  //     // `Auch neu: die <strong>Caretaker-Labels im Bezirk Friedrichshain-Kreuzberg</strong>. Vielleicht findet Ihr ja einen der knapp 1.500 Bäume, die bereits durch das Grünflächenamt gegossen werden! Das Label befindet sich in der Seitenleiste eines Baumes.`,
  //   ],
  // },
  loading: {
    snippets: [
      'Wir laden gerade 82.000 Bäume aus dem Magdeburger Baumbestand.',
      'Wenn du diese Seite über das Mobilfunknetz aufrufst, kann es etwas dauern.',
      'Sammle Informationen aller Bäume aus dem Magdeburger Baumkataster.',
      'Schon gewusst? Ein Stadtbaum benötigt etwa 70l Wasser in der Woche.',
    ],
  },
  sidebar: {
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
  },
  collaborate: {
    title: '<b>Wie kann ich mitmachen?</b>',
    tiles: [
      {
        icon: 'water',
        title: 'Bäume bewässern',
        description:
          'Informiere Dich auf unserer Plattform, ob die Bäume in deiner Straße Wasser benötigen. Wenn ja, schnapp Dir eine Gießkanne, einen Eimer oder einen Schlauch und leg los. Danach trägst Du die Bewässerung hier ein.',
      },
      {
        icon: 'subscribe',
        title: 'Bäume adoptieren',
        description:
          'Wenn Du regelmäßig die gleichen Bäume gießen willst, kannst Du sie adoptieren und so anzeigen, dass für sie gesorgt ist. So findet eine Koordinierung in der Nachbarschaft statt.',
      },
      {
        icon: 'zoom',
        title: 'Den Baumbestand erkunden',
        description:
          'Unsere Karte ermöglicht es, mehr über einzelne Bäume und auch den gesamten Baumbestand zu erfahren. Nutze die Filter- und Suchfunktion, um mehr über die Bäume von Magdeburg zu lernen.',
      },
      {
        icon: 'info',
        title: 'Mit anderen austauschen',
        description:
          'Tritt unserem <a target="_blank" href="https://join.slack.com/t/magdeburggiesst/shared_invite/zt-1tf5i2z3k-mTmk_PUBEOWuNWzDSNoH4w">Slack-Chat</a> bei, um Dich mit anderen User*innen auszutauschen und die Bewässerung von Bäumen in deinem Kiez zu koordinieren.',
      },
    ],
  },
};

export default content;
