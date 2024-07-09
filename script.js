const wordList = [
  //ö ä ü ß Ü Ö Ä é É
  // Chapter One
  [
  {eng: "writer", ger: "Dichter", rules:["der Dichter","(-s)"]},
  {eng: "wind", ger: "Wind", rules:["der Wind"]},
  {eng: "ship", ger: "Schiff", rules:["das Schiff"]},
  {eng: "pipe", ger: "Pfeif", rules:["das Pfeif"]},
  {eng: "grave", ger: "Grab", rules:["das Grab"]},
  {eng: "path", ger: "Pfad", rules:["der Pfad"]},
  {eng: "feather", ger: "Feder", rules:["die Feder"]},
  {eng: "thorn", ger: "Dorn", rules:["der Dorn"]},
  {eng: "thing", ger: "Ding", rules:["das Ding"]},
  {eng: "book", ger: "Buch", rules:["das Buch"]},
  {eng: "might", ger: "Macht", rules:["die Macht"]},
  {eng: "sight", ger: "Sicht", rules:["die Sicht"]},
  {eng: "right", ger: "Recht", rules:[""]},
  {eng: "night", ger: "Nacht", rules:[""]},
  {eng: "to hope", ger: "hoffen", rules:[""]},
  {eng: "to give", ger: "geben", rules:[""]},
  {eng: "to make", ger: "machen", rules:[""]},
  {eng: "to seek", ger: "suchen", rules:[""]},
  {eng: "sharp", ger: "scharf", rules:[""]},
  {eng: "lamp", ger: "Lampe", rules:["die Lampe"]},
  {eng: "child", ger: "Kind", rules:["das Kind (-er)"]},
  {eng: "animal", ger: "Tier", rules:["das Tier"]},
  {eng: "apple", ger: "Apfel", rules:["der Apfel"]},
  {eng: "spoon", ger: "Löffel", rules:["der Löffel"]},
  {eng: "fork", ger: "Gabel", rules:["die Gabel"]},
  {eng: "knife", ger: "Messer", rules:["das Messer"]},
  {eng: "sun", ger: "Sonne", rules:["die Sonne"]},
  {eng: "father", ger: "Vater", rules:["der Vater"]},
  {eng: "uncle", ger: "Onkel", rules:["der Onkel"]},
  {eng: "rooster", ger: "Hahn", rules:["der Hahn"]},
  {eng: "king", ger: "König", rules:["der König"]},
  {eng: "driver", ger: "Fahrer", rules:["der Fahrer"]},
  {eng: "inventor", ger: "Erfinder", rules:["der Erfinder", "-s, -"]},
  {eng: "mother", ger: "Mutter", rules:["die Mutter"]},
  {eng: "aunt", ger: "Tante", rules:["die Tante"]},
  {eng: "health", ger: "Gesundheit", rules:["die Gesundheit"]},
  {eng: "friendliness", ger: "Freundlichkeit", rules:["die Freundlichkeit"]},
  {eng: "music", ger: "Musik", rules:["die Musik"]},
  {eng: "friendship", ger: "Freundschaft", rules:["die Freundschaft"]},
  {eng: "collection", ger: "Sammlung", rules:["die Sammlung"]},
  ],
  //ö ä ü ß Ü Ö Ä é É -¨e
  // Chapter Two"""
  [
    {eng: "to help", ger: "helfen", rules:["hilft"]},
    {eng: "to eat", ger: "essen", rules:["ißt"]},
    {eng: "to let, to leave", ger: "lassen", rules:["läßt"]},
    {eng: "to read", ger: "lesen", rules:["liest"]},
    {eng: "to take", ger: "nehmen", rules:["nimmt"]},
    {eng: "to know", ger: "wissen", rules:["weiß"]},
    {eng: "to speak", ger: "sprechen", rules:["spricht"]},
    {eng: "to grow", ger: "wachsen", rules:["wächst"]},
    {eng: "to become", ger: "werden", rules:["wird"]},
    {eng: "to see", ger: "sehen", rules:["sieht"]},
    {eng: "to be", ger: "sein", rules:["ist"]},
    {eng: "to give", ger: "geben", rules:["gibt"]},
    {eng: "to have", ger: "haben", rules:["hat"]},
    {eng: "to break", ger: "brechen", rules:["bricht"]},
    {eng: "to step", ger: "treten", rules:["tritt"]},
    {eng: "to occur", ger: "geschehen", rules:["geschieht"]},
    {eng: "to steal", ger: "stehlen", rules:["stiehlt"]},
    {eng: "to travel", ger: "fahren", rules:["fährt"]},
    {eng: "to fall", ger: "fallen", rules:["fällt"]},
    {eng: "to sleep", ger: "schlafen", rules:["schläft"]},
    {eng: "to sing", ger: "singen", rules:[""]},
    {eng: "to bring", ger: "bringen", rules:[""]},
    {eng: "to wander", ger: "wandern", rules:[""]},
    {eng: "to speak", ger: "sprechen", rules:[""]},
    {eng: "to grow", ger: "wachsen", rules:[""]},
    {eng: "to know", ger: "wissen", rules:[""]},
    {eng: "heart", ger: "Herz", rules:["das Herz","(-en)"]},
    {eng: "I", ger: "ich", rules:[""]},
    {eng: "you", ger: "ihr", rules:["informal, plural"]},
    {eng: "no", ger: "kein", rules:[""]},
    {eng: "also", ger: "auch", rules:[""]},
    {eng: "doughnut", ger: "Berliner", rules:["der Berliner", "(-)"]},
    {eng: "sausage", ger: "Bratwurst", rules:["die Bratwurst", "(-¨e)"]},
    {eng: "to need", ger: "brauchen", rules:[""]}, 
    {eng: "to bring", ger: "bringen", rules:[""]},
    {eng: "answer", ger: "Antwort", rules:["die Antwort", "(-en)"]},
    {eng: "doctor", ger: "Arzt", rules:["der Arzt", "(-¨e)"]},
    {eng: "face", ger: "Gesicht", rules:["(-er)"]},
    {eng: "conversation", ger: "Gespräch", rules:["das Gespräch", "(-¨er)"]}, 
    {eng: "good", ger: "gut", rules:["adj."]}, 
    {eng: "to think", ger: "denken", rules:[""]},
    {eng: "the", ger: "der - die - das", rules:["nominative"]},
    {eng: "you", ger: "du", rules:["informal"]},
    {eng: "a, one", ger: "ein, eine", rules:[""]},
    {eng: "he", ger: "er", rules:[""]},
    {eng: "it", ger: "es", rules:[""]},
    {eng: "fire", ger: "Feuer", rules:["das Feuer","(-)"]},
    {eng: "to find", ger: "finden", rules:[""]},
    {eng: "woman, wife", ger: "Frau", rules:["die Frau"]},
    {eng: "burned", ger: "gebrannt", rules:[""]},
    {eng: "to be", ger: "sein", rules:[""]},
    {eng: "to have", ger: "haben", rules:[""]},
    {eng: "to become", ger: "werden", rules:[""]},
    {eng: "to heal", ger: "heilen", rules:[""]},
    {eng: "child", ger: "Kind", rules:["das Kind", "(-er)"]},
    {eng: "graveyard", ger: "Kirchhof", rules:["der Kirchhof", "(-¨e)"]},
    {eng: "to shorten", ger: "kürzen", rules:[""]},
    {eng: "to lie, fib", ger: "lügen", rules:[""]},
    {eng: "man, husband", ger: "Mann", rules:["der Mann", "(-¨er)"]},
    {eng: "fool", ger: "Narr", rules:["der Narr","(-en)"]},
    {eng: "nature", ger: "Natur", rules:["die Natur", "(-en)"]},
    {eng: "new", ger: "neu", rules:[""]},
    {eng: "she, they", ger: "sie", rules:[""]},
    {eng: "we", ger: "wir", rules:[""]},
    {eng: "word", ger: "Wort", rules:["das Wort", "(-e or -¨er)"]},
    {eng: "you", ger: "Sie", rules:["formal"]},
    {eng: "many, much", ger: "viel", rules:[""]},
    {eng: "way, path", ger: "Weg", rules:["der Weg", "(-e)"]},
    {eng: "not", ger: "nicht", rules:[""]},
    {eng: "place", ger: "Ort", rules:["der Ort", "(-e)"]},
    {eng: "to rain", ger: "regnen", rules:[""]},
    {eng: "judge", ger: "Richter", rules:["der Richter","(-)"]},
    {eng: "to say, speak", ger: "sagen", rules:[""]},
    {eng: "to avoid", ger: "scheuen", rules:[""]},
    {eng: "beautiful", ger: "schön", rules:[""]},
  ],
  //ö ä ü ß Ü Ö Ä é É -¨e
  //Chapter Three
  [ 
    {eng: "to harm", ger: "schaden", rules:["i"]},
    {eng: "to taste", ger: "schmecken", rules:["i"]},
    {eng: "to break", ger: "brechen", rules:["bricht"]},
    {eng: "everything", ger: "alles", rules:[""]},
    {eng: "apple cake", ger: "Apfelkuchen", rules:["der Apfelkuchen","(-s, -)"]},
    {eng: "belly, stomach", ger: "Bauch", rules:["der Bauch","(-es, -e)"]},
    {eng: "to remain", ger: "bleiben", rules:["i"]},
    {eng: "drama", ger: "Drama", rules:["das Drama","-s, -en"]},
    {eng: "to explain", ger: "erklären", rules:[""]},
    {eng: "industrious", ger: "fleißig", rules:[""]},
    {eng: "patience", ger: "Gedulg", rules:["die Gedulg"]},
    {eng: "hopefully", ger: "hoffentlich", rules:[""]},
    {eng: "learning", ger: "Lernen", rules:["das Lernen", "(-s, -)"]},
    {eng: "not", ger: "nicht", rules:[""]},
    {eng: "riddle, puzzle", ger: "Rätsel", rules:["der Rätsel","(-s, -)"]},
    {eng: "to say", ger: "sagen", rules:[""]},
    {eng: "shield", ger: "Schild", rules:["der Schild","(-s, -e)"]},
    {eng: "difficult", ger: "schwer", rules:[""]},
    {eng: "soul", ger: "Seele", rules:["die Seele", "(-n)"]},
    {eng: "language", ger: "Sprache", rules:["die Sprache", "(-n)"]},
    {eng: "unpleasant", ger: "unangenehm", rules:[""]},
    {eng: "good, well", ger: "wohl", rules:[""]},
    {eng: "viewer, audience", ger: "Zuschauer", rules:["der Zuschauer", "(-s, -)"]},
    {eng: "but, however", ger: "aber", rules:[""]},
    {eng: "work", ger: "Arbeit", rules:["die Arbeit", "(-en)"]},
    {eng: "doctor", ger: "Arzt", rules:["der Arzt", "(-es, -¨e)"]},
    {eng: "medicine", ger: "Arznei", rules:["die Arznei", "(-en)"]},
    {eng: "to build", ger: "bauen", rules:[""]},
    {eng: "to cover", ger: "bedecken", rules:[""]},
    {eng: "bad, guilty", ger: "böse", rules:[""]},
    {eng: "this, these", ger: "dies", rules:[""]},
    {eng: "thing", ger: "Ding", rules:["das Ding", "(-es, -e)"]},
    {eng: "parents", ger: "Eltern", rules:["die Eltern", "(-n)"]},
    {eng: "to escape", ger: "entgehen", rules:["i"]},
    {eng: "earth", ger: "Erde", rules:["die Erde", "(-n)"]},
    {eng: "friend", ger: "Freund", rules:["der Freund", "(-es, -e)"]},
    {eng: "error", ger: "Fehler", rules:["der Fehler", "(-s, -)"]},
    {eng: "effort", ger: "Fleiß", rules:["der Fleiß", "(-es)"]},
    {eng: "fly", ger: "Fliege", rules:["die Fliege", "(-n)"]},
    {eng: "entire", ger: "ganz", rules:["adv."]},
    {eng: "stolen", ger: "gestohlen", rules:[""]},
    {eng: "conscience", ger: "Gewissen", rules:["das Gewissen", "(-s, -)"]},
    {eng: "happiness, luck", ger: "Glück", rules:["das Glück", "(-es)"]},
    {eng: "God", ger: "Gott", rules:["der Gott", "(-es, -¨er)"]},
    {eng: "house", ger: "Haus", rules:["das Haus", "(-es, -¨er)"]},
    {eng: "hell", ger: "Hölle", rules:["die Hölle", "(-n)"]},
    {eng: "each, every", ger: "jeder", rules:[""]},
    {eng: "calf", ger: "Kalb", rules:["das Kalb", "(-es, -¨er)"]},
    {eng: "pebble", ger: "Kieselstein", rules:["der Kieselstein", "(-es, -e)"]},
    {eng: "boy, knave", ger: "Knabe", rules:["der Knabe", "(-n, -n)"]},
    {eng: "to illuminate", ger: "leuchten", rules:["i"]},
    {eng: "one", ger: "man", rules:["always a pronoun"]},
    {eng: "mouth", ger: "Mund", rules:["der Mund", "(-es, -er)"]},
    {eng: "to give as a present", ger: "schenken", rules:[""]},
    {eng: "to taste", ger: "schmecken", rules:["i"]},
    {eng: "difficult", ger: "schwer", rules:[""]},
    {eng: "blessing", ger: "Segen", rules:["der Segen", "(-s -)"]},
    {eng: "side", ger: "Seite", rules:["die Seite", "(-n)"]},
    {eng: "to send", ger: "senden", rules:[""]},
    {eng: "sun", ger: "Sonne", rules:["die Sonne"]},
    {eng: "proverb", ger: "Sprichwort", rules:["das Sprichwort", "(-s, -¨er)"]},
    {eng: "punishment", ger: "Strafe", rules:["die Strafe", "(-n)"]},
    {eng: "daughter", ger: "Tochter", rules:["die Tochter", "(-¨)"]},
    {eng: "perhaps", ger: "vielleicht", rules:[""]},
    {eng: "wisdom", ger: "Weisheit", rules:["die Weisheit"]},
    {eng: "repetition", ger: "Wiederholung", rules:["die Wiederholung", "(-en)"]},
    {eng: "to show", ger: "zeigen", rules:[""]},
    {eng: "time", ger: "Zeit", rules:["die Zeit", "(-en)"]},
    {eng: "wrath", ger: "Zorn", rules:["der Zorn", "(-s, -)"]},
    {eng: "all, every", ger: "all", rules:[""]},
    {eng: "beginning", ger: "Anfang", rules:["der Anfang","(-¨e)"]},
    {eng: "face, countenance", ger: "Angesicht", rules:["das Angesicht"]},
    {eng: "work", ger: "Arbeit", rules:["die Arbeit", "(-en)"]},
    {eng: "farmer", ger: "Bauer", rules:["der Bauer", "(-n)"]},
    {eng: "leg", ger: "Bein", rules:["das Bein","(-e)"]},
    {eng: "sausage", ger: "Bratwurst", rules:["die Bratwurst", "(-¨e)"]},
    {eng: "wide, broad", ger: "breit", rules:[""]},
    {eng: "to bring", ger: "bringen", rules:[""]},
    {eng: "ice", ger: "Eis", rules:["das Eis","(-)"]},
    {eng: "effort", ger: "Fleiß", rules:["der Fleiß"]},
    {eng: "foot", ger: "Fuß", rules:["der Fuß", "(-¨e)"]},
    {eng: "haste", ger: "Hast", rules:["die Hast"]},
    {eng: "always", ger: "immer", rules:[""]},
    {eng: "dress, cloth", ger: "Kleid", rules:["das Kleid","(-er)"]},
    {eng: "short", ger: "kurz", rules:[""]},
    {eng: "long", ger: "lang", rules:[""]},
    {eng: "to love", ger: "lieben", rules:[""]},
    {eng: "to make", ger: "machen", rules:[""]},
    {eng: "master", ger: "Meister", rules:["der Meister","(-)"]},
    {eng: "masterpiece", ger: "Meisterstück", rules:["Meisterstück","(-e)"]},
    {eng: "sermon", ger: "Predigt", rules:["die Predigt","(-en)"]},
    {eng: "difficulty", ger: "Schwierigkeit", rules:["die Schwierigkeit","(-en)"]},
    {eng: "to kill", ger: "töten", rules:[""]},
    {eng: "practice", ger: "Übung", rules:["die Übung","(-en)"]},
    {eng: "misfortune", ger: "Unglück", rules:["das Unglück","(-e)"]},
    {eng: "truth", ger: "Wahrheit", rules:["die Wahrheit","(-en)"]},
    {eng: "dwarf", ger: "Zwerg", rules:["der Zwerg","(-e)"]},
    {eng: "worker", ger: "Arbeiter", rules:["der Arbeit", "(-s, -en)"]},
    {eng: "doctor", ger: "Arzt", rules:["der Arzt", "(-¨e)"]},
    {eng: "eye", ger: "Auge", rules:["das Auge","(-s, -en)"]},
    {eng: "improvement", ger: "Besserung", rules:["die Besserung","(-en)"]},
    {eng: "honor", ger: "Ehre", rules:["die Ehre","(-n)"]},
    {eng: "curse", ger: "Fluch", rules:["der Fluch","(-es, -¨e)"]},
    {eng: "small, poor", ger: "klein", rules:[""]},
    {eng: "rest", ger: "Ruhe", rules:["die Ruhe"]},
    {eng: "shadow", ger: "Schatten", rules:["der Schatten","(-s, -)"]},
    {eng: "soul", ger: "Seele", rules:["die Seele","(-s, -¨e)"]},
    {eng: "self-knowledge", ger: "Selbsterkenntnis", rules:["die Selbsterkenntnis"]},
    {eng: "mirror", ger: "Spiegel", rules:["der Spiegel","(-s, -)"]},
    {eng: "maxim, saying", ger: "Spruch", rules:["der Spruch","(-es, -¨e)"]},
    {eng: "animal", ger: "Tier", rules:["das Tier","(-es, -e)"]},
    {eng: "cow", ger: "Kuh", rules:["die Kuh","(-, -¨e)"]},
    {eng: "life", ger: "Leben", rules:["das Leben","(-s,-)"]},
    {eng: "lion", ger: "Löwe", rules:["der Löwe","(-n, -n)"]},
    {eng: "people", ger: "Leute", rules:["die Leute", "(plural)"]},
    {eng: "man, husband", ger: "Mann", rules:["der Mann","(-es, -¨er)"]},
    {eng: "mother", ger: "Mutter", rules:["die Mutter","-¨"]},
    {eng: "virtue", ger: "Tugend", rules:["die Tugend","(-en)"]},
    {eng: "work", ger: "Werk", rules:["das Werk","(-es, -e)"]},
    {eng: "will", ger: "Wille", rules:["der Wille","(-ns, -)"]},
    {eng: "well-being", ger: "Wohlleben", rules:["das Wohlleben","(-s, -)"]},
    {eng: "goat", ger: "Ziege", rules:["die Ziege","(-n)"]}
  ],
  //ö ä ü ß Ü Ö Ä é É -¨e
  //Chapter Four
  [
  {eng: "old", ger: "alt", rules:["adj."]},
  {eng: "young", ger: "jung", rules:["adj."]},
  {eng: "large, great", ger: "groß", rules:["adj."]},
  {eng: "small", ger: "klein", rules:["adj."]},
  {eng: "good", ger: "gut", rules:["adj."]},
  {eng: "no", ger: "kein", rules:["adj."]},
  {eng: "such", ger: "solcher", rules:["adj."]},
  {eng: "which, what", ger: "welcher", rules:["adj."]},
  {eng: "helpful", ger: "nützlich", rules:["adj."]},
  {eng: "task", ger: "Aufgabe", rules:[""]},
  // {eng: "expensive", ger: "teuer", rules:["adj."]},
  // {eng: "ugly", ger: "übel", rules:["adj."]},
  // {eng: "dark", ger: "dunkel", rules:["adj."]},
  // {eng: "today", ger: "heute", rules:["adv."]},
  // {eng: "soon", ger: "bald", rules:["adv."]},
  // {eng: "here", ger: "hier", rules:["adv."]},
  // {eng: "there", ger: "dort", rules:["adv."]},
  // {eng: "nevertheless", ger: "doch", rules:["adv."]},
  // {eng: "also, even", ger: "auch", rules:["adv."]},
  // {eng: "still", ger: "noch", rules:["adv."]},
  // {eng: "very", ger: "sehr", rules:["adv."]},
  // {eng: "very, entirely", ger: "ganz", rules:["adv."]},
  // {eng: "perhaps", ger: "vielleicht", rules:["adv."]},
  // {eng: "for the most part, mostly", ger: "meistens", rules:["adv."]},
  // {eng: "therefore", ger: "darum", rules:["adv."]},
  // {eng: "but, however", ger: "aber", rules:["adv."]},
  // {eng: "almost", ger: "fast", rules:["adv."]},
  // {eng: "not", ger: "nicht", rules:["adv."]},
  // {eng: "often", ger: "oft", rules:["adv."]},
  // {eng: "mornings", ger: "morgens", rules:["adv."]},
  // {eng: "evenings", ger: "abends", rules:["adv."]},
  // {eng: "nights", ger: "nachts", rules:["adv."]},
  // {eng: "at that time", ger: "damals", rules:["adv."]},
  // {eng: "then", ger: "dann", rules:["adv."]},
  // {eng: "already", ger: "schon", rules:["adv."]},
  // {eng: "now", ger: "nun", rules:["adv."]},
  // {eng: "finally", ger: "endlich", rules:["adv."]},
  // {eng: "everywhere", ger: "überall", rules:["adv."]},
  // {eng: "almost", ger: "fast", rules:["adv."]},
  // {eng: "approximately", ger: "ungefähr", rules:["adv."]},
  // {eng: "moreover", ger: "außerdem", rules:["adv."]},
  // {eng: "otherwise", ger: "sonst", rules:["adv."]},
  // {eng: "even", ger: "sogar", rules:["adv."]},
  // {eng: "rather", ger: "ziemlich", rules:["adv."]},
  // {eng: "actually", ger: "eigentlich", rules:["adv."]},
  // {eng: "rather", ger: "vielmehr", rules:["adv."]},
  // {eng: "very", ger: "sehr", rules:["adv."]},
  // {eng: "really", ger: "recht", rules:["adv."]},
  // {eng: "especially", ger: "besonders", rules:["adv."]},
  // {eng: "possibly", ger: "möglich", rules:["adv."]},
  // {eng: "probably", ger: "wahrscheinlich", rules:["adv."]},
  // {eng: "at least", ger: "wenigstens", rules:["adv."]},
  // {eng: "too", ger: "zu", rules:["adv."]},
  // {eng: "enough", ger: "genug", rules:["adv."]},
  // {eng: "therefore", ger: "daher", rules:["adv."]},
  // {eng: "on that account", ger: "deshalb", rules:["adv."]},
  // {eng: "thereby", ger: "dabei", rules:["adv."]},
  {eng: "other", ger: "ander", rules:["adj."]},
  {eng: "poor", ger: "arm", rules:["adj."]},
  {eng: "poverty", ger: "Armut", rules:["die Armut"]},
  {eng: "bear", ger: "Bär", rules:["der", "-en, -en"]},
  {eng: "to bleed", ger: "bluten", rules:["i"]},
  {eng: "roof", ger: "Dach", rules:["das Dach", "-es, -¨er"]},
  {eng: "window", ger: "Fenster", rules:["das Fenster", "-s, -"]},
  {eng: "dark, gloomy", ger: "finster", rules:["adj."]},
  {eng: "fruit", ger: "Frucht", rules:["das Frucht", "-¨e"]},
  {eng: "gift", ger: "Gabe", rules:["die Gabe"]},
  {eng: "thought", ger: "Gedanke", rules:["der Gedanke", "-ns, -n"]},
  {eng: "dangerous", ger: "gefährlich", rules:["adj."]},
  {eng: "gladly", ger: "gern", rules:["adv."]},
  {eng: "gossip", ger: "Geschwätz", rules:["-es"]},
  {eng: "to believe", ger: "glauben", rules:["i"]},
  {eng: "Lord, Master, Mr.", ger: "Herr", rules:["der Herr", "-n, -en"]},
  {eng: "suffering", ger: "Herzeleid", rules:["das Herzeleid"]},
  {eng: "to hinder", ger: "hindern", rules:[""]},
  {eng: "historian", ger: "Historiker", rules:["der Historiker", "(-s, -)"]},
  {eng: "dog", ger: "Hund", rules:["der Hund","(-es, -e)"]},
  {eng: "church", ger: "Kirche", rules:["die Kirche","(-n)"]},
  {eng: "head", ger: "Kopf", rules:["der Kopf","(-es, -¨e)"]},
  {eng: "for a long time", ger: "lange", rules:["adv."]},
  {eng: "easy, easily", ger: "leicht", rules:["adj. & adv."]},
  {eng: "people", ger: "Leute", rules:["die Leute (pl)"]},
  {eng: "thin", ger: "mager", rules:["adj."]},
  {eng: "melancholy", ger: "melancholisch", rules:[""]},
  {eng: "person", ger: "Mensch", rules:["der Mensch","(-en, -en"]},
  {eng: "gnat", ger: "Mücke", rules:["die Mücke","(-n)"]},
  {eng: "fruit", ger: "Obst", rules:["das Obst", "(-es, -arten)"]},
  {eng: "rain", ger: "Regen", rules:["der Regen", "(-s, -)"]},
  {eng: "to rule", ger: "regieren", rules:[""]},
  {eng: "wealth", ger: "Reichtum", rules:["der Reichtum","(-s)"]},
  {eng: "backwards", ger: "rüchwärts", rules:["adv."]},
  {eng: "soft", ger: "sanft", rules:["adj."]},
  {eng: "sour", ger: "sauer", rules:["adj."]},
  {eng: "to create", ger: "schaffen", rules:[""]},
  {eng: "bad, guilty", ger: "schlecht", rules:["adj. & adv."]},
  {eng: "to see", ger: "sehen", rules:["sieht"]},
  {eng: "his", ger: "sein", rules:["poss. adj."]},
  {eng: "my", ger: "mein", rules:["poss. adj."]},
  {eng: "your", ger: "dein", rules:["poss. adj."]},
  {eng: "his, its", ger: "sein", rules:["poss. adj."]},
  {eng: "her, their", ger: "ihr", rules:["poss. adj."]},
  {eng: "our", ger: "unser", rules:["poss. adj."]},
  {eng: "your", ger: "euer", rules:["poss. adj."]},
  {eng: "your", ger: "Ihr", rules:["poss. adj."]},
  {eng: "constant, constantly", ger: "ständig", rules:["adj. & adv."]},
  {eng: "quiet, quietly", ger: "still", rules:["adj. & adv."]},
  {eng: "mute", ger: "stumm", rules:["adj."]},
  {eng: "sweet", ger: "süß", rules:["adj."]},
  {eng: "daily", ger: "täglich", rules:["adj. & adv."]},
  {eng: "to dance", ger: "tanzen", rules:[""]},
  {eng: "devil", ger: "Teufel", rules:["der Teufel","(-s, -)"]},
  {eng: "death", ger: "Tod", rules:["der Tod", "(-es, -s)"]},
  {eng: "evil, bad, wicked", ger: "übel", rules:["adj. & adv."]},
  {eng: "forbidden", ger: "verboten", rules:["adj."]},
  {eng: "to spoil", ger: "verderben", rules:["verdirbt"]},
  {eng: "many", ger: "viel", rules:["adj."]},
  {eng: "much, a lot", ger: "viel", rules:["adv."]},
  {eng: "perhaps", ger: "viellecht", rules:["adv."]},
  {eng: "work", ger: "Werk", rules:["das Werk","(-es, -e)"]},
  {eng: "cloud", ger: "Wolke", rules:["die Wolke","(-n)"]},
  {eng: "wound", ger: "Wunde", rules:["die Wunde","(-n)"]},
  {eng: "to wash", ger: "waschen", rules:["wäscht"]},
  {eng: "root", ger: "Wurzel", rules:["die Wurzel","(-n)"]},
  {eng: "water", ger: "Wasser", rules:["das Wasser","(-s, -)"]},
  {eng: "wife", ger: "Weib", rules:["das Weib","(-s, -er)"]}
],
  // ö ä ü ß Ü Ö Ä é É -¨e
  //Chapter 5 -- German Made Simple words
  [    
    {eng: "businessman", ger: "Geschäftsmann", rules:[""]},
    {eng: "forty", ger: "vierzig", rules:[""]},
    {eng: "office", ger: "Büro", rules:["das Büro"]},
    {eng: "married", ger: "verheiratet", rules:[""]},
    {eng: "boy", ger: "Junge", rules:["der Junge"]},
    {eng: "twelve", ger: "zwölf", rules:[""]},
    {eng: "ten", ger: "zehn", rules:[""]},
    {eng: "eight", ger: "acht", rules:[""]},
    {eng: "five", ger: "fünf", rules:[""]},
    {eng: "young", ger: "jung", rules:[""]},
    {eng: "old", ger: "alt", rules:[""]},
    {eng: "girl", ger: "Mädchen", rules:["das Mädchen"]},
    {eng: "from", ger: "von", rules:[""]},
    {eng: "profession", ger: "Beruf", rules:[""]},
    {eng: "housewife", ger: "Hausfrau", rules:[""],}
  ],
    // ö ä ü ß Ü Ö Ä é É -¨e
  //Chapter 6
  [    
  {eng: "accused", ger: "Angeklagte", rules:["der Angeklagte", "(-n, -n)"]},
  {eng: "beggar", ger: "Bettler", rules:["der Bettler", "(-s, -)"]},
  {eng: "to frighten", ger: "erschrecken", rules:[""]},
  {eng: "lazy", ger: "faul", rules:[""]},
  {eng: "joyous", ger: "fröhlich", rules:[""]},
  {eng: "fear", ger: "Furcht", rules:["die Furcht"]},
  {eng: "giver", ger: "Geber", rules:["der Geber", "(-s, -)"]},
  {eng: "prayer", ger: "Gebet", rules:["das Gebet", "(-es, -)"]},
  {eng: "to belong to", ger: "gehören", rules:["i"]},
  {eng: "enough", ger: "genug", rules:[""]},
  {eng: "to like", ger: "gern haben", rules:[""]},
  {eng: "poison", ger: "Gift", rules:["das Gift", "(-es, -)"]},
  {eng: "to believe", ger: "glauben", rules:["i"]},
  {eng: "to be called", ger: "heißen", rules:["i"]},
  {eng: "high", ger: "hoch", rules:[""]},
  {eng: "calendar", ger: "Kalender", rules:["der Kalender", "(-s, -)"]},
  {eng: "to know", ger: "kennen", rules:[""]},
  {eng: "kitchen", ger: "Küche", rules:["die Küche", "(-n)"]},
  {eng: "last", ger: "letzt", rules:[""]},
  {eng: "no one", ger: "niemand", rules:[""]},
  {eng: "without", ger: "ohne", rules:[""]},
  {eng: "sentence", ger: "Satz", rules:["der Satz", "(-es, -¨e)"]},
  {eng: "lamb", ger: "Schäflein", rules:["das Schäflein", "(-s, -)"]},
  {eng: "guilty one", ger: "Schuldige", rules:["der Schuldige", "(-n, -n)"]},
  {eng: "to chase", ger: "verjagen", rules:[""]},
  {eng: "why", ger: "wann", rules:[""]},
  {eng: "because of", ger: "wegen", rules:[""]},
  {eng: "wife", ger: "Weib", rules:["das Weib", "(-es, -er)"]},
  {eng: "how", ger: "wie", rules:[""]},
  {eng: "where, what", ger: "wo", rules:[""]},
  {eng: "wool", ger: "Wolle", rules:[""]},
  {eng: "goal", ger: "Ziel", rules:["das Ziel", "(-s, -e)"]},
  {eng: "too", ger: "zu", rules:[""]},
  {eng: "bath", ger: "Bad", rules:["das Bad"]},
  {eng: "glance", ger: "Blick", rules:["das Blick"]},
  {eng: "question", ger: "Frage", rules:["das Frage"]},
  {eng: "to fear", ger: "fürchten", rules:[""]},
  {eng: "grief, sorrow", ger: "Kummer", rules:["der Kummer"]},
  {eng: "to avoid", ger: "meiden", rules:[""]},
  {eng: "only, just", ger: "nur", rules:[""]},
  {eng: "advice", ger: "Raten", rules:["das Raten"]},
  {eng: "to look at", ger: "schauen", rules:[""]},
  {eng: "to joke", ger: "scherzen", rules:[""]},
  {eng: "pain", ger: "Schmerz", rules:["der Schmerz"]},
  {eng: "deed", ger: "Tat", rules:["die Tat"]},
  {eng: "lonely", ger: "einsam", rules:[""]},
  {eng: "wet, damp", ger: "feucht", rules:[""]},
  {eng: "quietly", ger: "leise", rules:[""]},
  {eng: "to be silent", ger: "schweigen", rules:[""]},
  {eng: "to reflect, to mirror", ger: "spiegeln", rules:[""]},
  {eng: "voice", ger: "Stimme", rules:["die Stimme"]},
  {eng: "depth", ger: "die Tiefe", rules:[""]},
  {eng: "dream", ger: "der Traum", rules:[""]},
  ],
    // ö ä ü ß Ü Ö Ä é É -¨e
  //Chapter 7
  [
    {eng: "supper", ger: "Abendbrot", rules:["das Abendbrot"]},
    {eng: "ant", ger: "Ameise", rules:["die Ameise"]},
    {eng: "except for", ger: "außer", rules:[""]},
    {eng: "cup", ger: "Becher", rules:["der Becher"]},
    {eng: "angry, evil", ger: "böse", rules:[""]},
    {eng: "messenger", ger: "Bote", rules:["der Bote"]},
    {eng: "to set, cover", ger: "decken", rules:[""]},
    {eng: "nevertheless", ger: "doch", rules:[""]},
    {eng: "own", ger: "eigen", rules:[""]},
    {eng: "to catch up with", ger: "einholen", rules:[""]},
    {eng: "ability", ger: "Fähigkeit", rules:["die Fähigkeit"]},
    {eng: "laziness", ger: "Faulheit", rules:["die Faulheit"]},
    {eng: "to follow", ger: "folgen", rules:[""]},
    {eng: "to ask about", ger: "fragen nach", rules:[""]},
    {eng: "joy", ger: "Freude", rules:["die Freude"]},
    {eng: "guest", ger: "Gast", rules:["der Gast"]},
    {eng: "opponent", ger: "Gegner", rules:["der Gegner"]},
  ],
  // ö ä ü ß Ü Ö Ä é É -¨e
  //Empty cells for copying
  [
  {eng: "", ger: "", rules:[""]},
  {eng: "", ger: "", rules:[""]},
  {eng: "", ger: "", rules:[""]},
  {eng: "", ger: "", rules:[""]},
  {eng: "", ger: "", rules:[""]},
  {eng: "", ger: "", rules:[""]},
  {eng: "", ger: "", rules:[""]},
  {eng: "", ger: "", rules:[""]},
  {eng: "", ger: "", rules:[""]},
  {eng: "", ger: "", rules:[""]},
  {eng: "", ger: "", rules:[""]},
  {eng: "", ger: "", rules:[""]},
  {eng: "", ger: "", rules:[""]},
  {eng: "", ger: "", rules:[""]},
  {eng: "", ger: "", rules:[""]},
  {eng: "", ger: "", rules:[""]},
  {eng: "", ger: "", rules:[""]},
  {eng: "", ger: "", rules:[""]},
  {eng: "", ger: "", rules:[""]},
  {eng: "", ger: "", rules:[""]},
  {eng: "", ger: "", rules:[""]},
  {eng: "", ger: "", rules:[""]},
  {eng: "", ger: "", rules:[""]},
  {eng: "", ger: "", rules:[""]},
  {eng: "", ger: "", rules:[""]},
  {eng: "", ger: "", rules:[""]},
  {eng: "", ger: "", rules:[""]},
  {eng: "", ger: "", rules:[""]},
  {eng: "", ger: "", rules:[""]},
  {eng: "", ger: "", rules:[""]},
  {eng: "", ger: "", rules:[""]},
  {eng: "", ger: "", rules:[""]},
  {eng: "", ger: "", rules:[""]},
  {eng: "", ger: "", rules:[""]},
  {eng: "", ger: "", rules:[""]},
  {eng: "", ger: "", rules:[""]},
  {eng: "", ger: "", rules:[""]},
  {eng: "", ger: "", rules:[""]},
  {eng: "", ger: "", rules:[""]},
  {eng: "", ger: "", rules:[""]},
]
]

  
const body = document.querySelector('body');
const germanWord = document.querySelector('#checkWidth');
const grammar = document.querySelector('ul');
const englishWord = document.querySelector('#english');
const cardBody = document.querySelector("#card")
const cardSet = document.querySelector("#cardSet");
const chapterSelectionArray = document.querySelectorAll("#chapterList p");

let wordIndex = Math.floor(Math.random() * wordList[0].length);
let chapterIndex = 0;

// Initial flashcard function.
function setFlashcard() {
  const vocabGer = wordList[chapterIndex][wordIndex].ger;
  const vocabEng = wordList[chapterIndex][wordIndex].eng;
  germanWord.innerText = vocabGer;
  englishWord.innerText = vocabEng; 
  
  const ruleInfo = wordList[chapterIndex][wordIndex]["rules"];
  const listTemplate = ruleInfo.map(entry => `
    <li>${entry}</li>
  `);
  grammar.innerHTML = listTemplate.join('');

  if(germanWord.offsetWidth > 260) {
    germanWord.style.fontSize = "38px"
  } else {
    germanWord.style.fontSize = "45px"
  }
} 


setFlashcard();

// Event listener for changing the chapter of vocab list
chapterSelectionArray.forEach(function(item, i) {
  item.addEventListener('click', function(e) {
    chapterIndex = i;
    wordIndex = Math.floor(Math.random() * wordList[chapterIndex].length);
    cardSet.innerText = chapterIndex + 1;   
    setFlashcard();
  })
})

// Event listeners for showing and hiding English translation
cardBody.addEventListener('click', showEnglish);

body.addEventListener('keydown', function(e) {
  e.preventDefault();
  if (e.key === "Enter") {
    showEnglish();

  }
})

// Event listeners for moving back and forward through the list


document.querySelector('button#next').addEventListener('click', nextWord);


document.querySelector('button#previous').addEventListener('click', 
previousWord);

body.addEventListener('keyup', function(e) {
  if (e.key === "ArrowRight") {
    e.preventDefault();
    nextWord();
  } else if (e.key === "ArrowLeft") {    
    e.preventDefault();
    previousWord();
  }
})

// Event listeners to go random word in selected chapter
document.querySelector('button#random').addEventListener('click', function(e) {
  wordIndex = Math.floor(Math.random() * wordList[chapterIndex].length);
  setFlashcard();
  if (englishWord.classList.contains("showing")) {
    showEnglish();
  }
})

body.addEventListener('keydown', function(e) {
  e.preventDefault();
  if (e.key === "ArrowUp") {
    wordIndex = Math.floor(Math.random() * wordList[chapterIndex].length);
    setFlashcard();
    if (englishWord.classList.contains("showing")) {
      showEnglish();
    }
  }
})

// Event listeners for showing the grammar rules
document.querySelector('button#grammar').addEventListener('click', function(e) {
  grammar.classList.toggle("showGrammar");
  document.querySelector('button#grammar').classList.toggle("buttonPress");
})

body.addEventListener('keydown', function(e) {
  e.preventDefault();
  if (e.key === "+") {
    grammar.classList.toggle("showGrammar");
    document.querySelector('button#grammar').classList.toggle("buttonPress");
  }
})

// Event listeners for showing the translation
document.querySelector('button#translation').addEventListener('click', function(e) {
  englishWord.classList.toggle("alwaysOn");  
  document.querySelector('button#translation').classList.toggle("buttonPress");
})

// Functions for moving back and forward through the list
function nextWord(e) {
  if(wordIndex < wordList[chapterIndex].length-1) {
    wordIndex = wordIndex + 1;
    setFlashcard();
  } else {
    wordIndex = 0;    
    setFlashcard();
  }
  if (englishWord.classList.contains("showing")) {
    englishWord.classList.toggle("showing")
  }
}

function previousWord(e) {
  if(wordIndex === 0) {
    wordIndex = wordList[chapterIndex].length-1;
    setFlashcard();
  } else {
    wordIndex = wordIndex - 1;    
    setFlashcard();
  }
  if (englishWord.classList.contains("showing")) {
    englishWord.classList.toggle("showing")
  }
}

//Function to show translation
function showEnglish(e) {  
  englishWord.classList.toggle("showing");
}

// trying to use swipe with card change

let touchstartX = 0
let touchendX = 0
    
function checkDirection() {
  if (touchendX < touchstartX && (touchstartX - touchendX) > 30) {
    nextWord()}
  if (touchendX > touchstartX && (touchendX -touchstartX) > 30) {
    previousWord()}
}

cardBody.addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX
})

cardBody.addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX
  checkDirection()
})

