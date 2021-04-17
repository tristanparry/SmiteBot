const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX = '>';

const assassin_gods = ["Arachne", "Awilix", "Bakasura", "Bastet", "Camazotz", "Da Ji", "Fenrir", "Hun Batz", "Fenrir", "Loki", "Mercury", "Ne Zha", "Nemesis", "Pele", "Ratatoskr", "Ravana", "Serqet", "Set", "Susano", "Thanatos", "Thor", "Tsukuyomi"]
const guardian_gods = ["Ares", "Artio", "Athena", "Bacchus", "Cabrakan", "Cerberus", "Cthulhu", "Fafnir", "Ganesha", "Geb", "Jormungandr", "Kephri", "Kumbhakarna", "Kuzenbo", "Sobek", "Sylvanus", "Terra", "Xing Tian", "Yemoja", "Ymir"]
const hunter_gods = ["Ah Muzen Cab", "Anhur", "Apollo", "Artemis", "Cernunnos", "Chernobog", "Chiron", "Cupid", "Danzaburou", "Hachiman", "Heimdallr", "Hou Yi", "Izanami", "Jing Wei", "Medusa", "Neith", "Rama", "Skadi", "Ullr", "Xbalanque"]
const mage_gods = ["Agni", "Ah Puch", "Anubis", "Ao Kuang", "Aphrodite", "Baba Yaga", "Baron Samedi", "Chang'e", "Chronos", "Discordia", "Freya", "Hades", "He Bo", "Hel", "Hera", "Isis", "Janus", "Kukulkan", "Merlin", "Nox", "Nu Wa", "Olorun", "Persephone", "Poseidon", "Ra", "Raijin", "Scylla", "Sol", "The Morrigan", "Thoth", "Tiamat", "Vulcan", "Zeus", "Zhong Kui"]
const warrior_gods = ["Achilles", "Amaterasu", "Bellona", "Chaac", "Cu Chulainn", "Erlang Shen", "Gilgamesh", "Guan Yu", "Hercules", "Horus", "King Arthur", "Mulan", "Nike", "Odin", "Osiris", "Sun Wukong", "Tyr", "Vamana"]
const all_gods = [["Arachne", "Assassin", "Greek", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/a/a8/SkinArt_Arachne_Default.jpg/250px-SkinArt_Arachne_Default.jpg?version=c4a707768bfc446d74d38b5c920a6207", "0x8B19FB", "Thor"],
                ["Awilix", "Assassin", "Mayan", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/0/00/SkinArt_Awilix_Default.jpg/250px-SkinArt_Awilix_Default.jpg?version=422b918b34ddd4c09c9a688248a89448", "0x8B19FB", "Nemesis"],
                ["Bakasura", "Assassin", "Hindu", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/f/fd/SkinArt_Bakasura_Default.jpg/250px-SkinArt_Bakasura_Default.jpg?version=ed5cc51a1fd55ed8cc87bc2b234cfb92", "0x8B19FB", "Vamana"],
                ["Bastet", "Assassin", "Egyptian", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/c/c7/SkinArt_Bastet_Default.jpg/250px-SkinArt_Bastet_Default.jpg?version=5ef21a5dcab12f2f63bea80d92d59d07", "0x8B19FB", "Kali"],
                ["Camazotz", "Assassin", "Mayan", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/5/5a/SkinArt_Camazotz_Default.jpg/250px-SkinArt_Camazotz_Default.jpg?version=57cd6679e6b292b4bdfa74f01d3b8feb", "0x8B19FB", "Serqet"],
                ["Da Ji", "Assassin", "Chinese", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/4/43/SkinArt_DaJi_Default.jpg/250px-SkinArt_DaJi_Default.jpg?version=188acf694e5d0a3bd49f008f4441ae12", "0x8B19FB", "Ravana"],
                ["Fenrir", "Assassin", "Norse", "https://gamepedia.cursecdn.com/smite_gamepedia/6/68/SkinArt_Fenrir_Default.jpg", "0x8B19FB", "Mercury"],
                ["Hun Batz", "Assassin", "Mayan", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/5/56/SkinArt_HunBatz_Default.jpg/250px-SkinArt_HunBatz_Default.jpg?version=127108617728dca481fd722c784eb2dd", "0x8B19FB", "Kali"],
                ["Kali", "Assassin", "Hindu", "https://static.wikia.nocookie.net/smite_gamepedia/images/d/d8/SkinArt_Kali_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160505052511", "0x8B19FB", "Ne Zha"],
                ["Loki", "Assassin", "Norse", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/8/88/SkinArt_Loki_Default.jpg/250px-SkinArt_Loki_Default.jpg?version=7b379455fabb693a0b95e0b690c38114", "0x8B19FB", "Arachne"],
                ["Mercury", "Assassin", "Roman", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/6/60/SkinArt_Mercury_Default.jpg/250px-SkinArt_Mercury_Default.jpg?version=ccb92f5a92f4bba4bda1d6f0853ada8f", "0x8B19FB", "Thor"],
                ["Ne Zha", "Assassin", "Chinese", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/d/d4/SkinArt_NeZha_Default.jpg/250px-SkinArt_NeZha_Default.jpg?version=9a6920c09cf424681a1391cebdb77218", "0x8B19FB", "Loki"],
                ["Nemesis", "Assassin", "Greek", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/c/c3/SkinArt_Nemesis_Default.jpg/250px-SkinArt_Nemesis_Default.jpg?version=500e05a7679fadbf46285b00388622e5", "0x8B19FB", "Susano"],
                ["Pele", "Assassin", "Polynesian", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/1/10/SkinArt_Pele_Default.jpg/250px-SkinArt_Pele_Default.jpg?version=ac11d2eced1fe09f16b1d297e043c35e", "0x8B19FB", "Bacchus"],
                ["Ratatoskr", "Assassin", "Norse", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/0/0b/SkinArt_Ratatoskr_Default.jpg/250px-SkinArt_Ratatoskr_Default.jpg?version=14c1104e66a3be3cae9a2cf8b41dccf1", "0x8B19FB", "Fenrir"],
                ["Ravana", "Assassin", "Hindu", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/1/16/SkinArt_Ravana_Default.jpg/250px-SkinArt_Ravana_Default.jpg?version=3e3756d317866a9883099a1ede305a4f", "0x8B19FB", "Bellona"],
                ["Serqet", "Assassin", "Egyptian", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/9/9b/SkinArt_Serqet_Default.jpg/250px-SkinArt_Serqet_Default.jpg?version=944ba75e1cbfaf97eb5340c1c390c858", "0x8B19FB", "Geb"],
                ["Set", "Assassin", "Egyptian", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/c/cf/SkinArt_Set_Default.jpg/250px-SkinArt_Set_Default.jpg?version=962c83f2ba50184d033b54330586cad8", "0x8B19FB", "Hun Batz"],
                ["Susano", "Assassin", "Japanese", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/6/6b/SkinArt_Susano_Default.jpg/250px-SkinArt_Susano_Default.jpg?version=1d7fbbe75f69c2b90593def5c795a11e", "0x8B19FB", "Thor"],
                ["Thanatos", "Assassin", "Greek", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/8/82/SkinArt_Thanatos_Default.jpg/250px-SkinArt_Thanatos_Default.jpg?version=420f2cd26a25a3ddc3ae6e4484487d7e", "0x8B19FB", "Bastet"],
                ["Thor", "Assassin", "Norse", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/7/7e/SkinArt_Thor_Default.jpg/250px-SkinArt_Thor_Default.jpg?version=de9e738598a5571c5549137c66f8f095", "0x8B19FB", "Thanatos"],
                ["Tsukuyomi", "Assassin", "Japanese", "https://static.wikia.nocookie.net/smite_gamepedia/images/1/18/SkinArt_Tsukuyomi_Default.jpg/revision/latest/scale-to-width-down/250?cb=20201216173444", "0x8B19FB", "Nox"],
                ["Ares", "Guardian", "Greek", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/3/33/SkinArt_Ares_Default.jpg/250px-SkinArt_Ares_Default.jpg?version=dc1afc603d4809317129f51f217462c5", "0x6CFF93", "Athena"],
                ["Artio", "Guardian", "Celtic", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/4/4c/SkinArt_Artio_Default.jpg/250px-SkinArt_Artio_Default.jpg?version=7f4a73b6541542ce3caad61cfff9d9d7", "0x6CFF93", "Ares"],
                ["Athena", "Guardian", "Greek", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/d/d7/SkinArt_Athena_Default.jpg/250px-SkinArt_Athena_Default.jpg?version=fd0b6f988649d4471b2ceae35794fcb4", "0x6CFF93", "Geb"],
                ["Bacchus", "Guardian", "Roman", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/d/d4/SkinArt_Bacchus_Default_V2.jpg/250px-SkinArt_Bacchus_Default_V2.jpg?version=2df2fd0098038a6038877547b59409e7", "0x6CFF93", "Fafnir"],
                ["Cabrakan", "Guardian", "Mayan", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/a/a9/SkinArt_Cabrakan_Default.jpg/250px-SkinArt_Cabrakan_Default.jpg?version=74b3ef1493d77ef78064adb0dc18d717", "0x6CFF93", "Geb"],
                ["Cerberus", "Guardian", "Greek", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/d/de/SkinArt_Cerberus_Default.jpg/250px-SkinArt_Cerberus_Default.jpg?version=5f0aeda4640c3409fcb75e7c70d8cee6", "0x6CFF93", "Ganesha"],
                ["Cthulhu", "Guardian", "Great Old Ones", "https://static.wikia.nocookie.net/smite_gamepedia/images/8/8e/T_Cthulhu_Default_Card.png/revision/latest?cb=20200530234343", "0x6CFF93", "Ganesha"],
                ["Fafnir", "Guardian", "Norse", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/4/49/SkinArt_Fafnir_Default.jpg/250px-SkinArt_Fafnir_Default.jpg?version=f2b7b61470789175d80fd5790e6c4012", "0x6CFF93", "Terra"],
                ["Ganesha", "Guardian", "Hindu", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/0/06/SkinArt_Ganesha_Default.jpg/250px-SkinArt_Ganesha_Default.jpg?version=4e53433efc430000834231d4b14aadd6", "0x6CFF93", "Kuzenbo"],
                ["Geb", "Guardian", "Egyptian", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/8/89/SkinArt_Geb_Default.jpg/250px-SkinArt_Geb_Default.jpg?version=3ecbaf4002984e32224fe5ba8d551285", "0x6CFF93", "Ymir"],
                ["Jormungandr", "Guardian", "Norse", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/b/bb/SkinArt_Jormungandr_Default.jpg/250px-SkinArt_Jormungandr_Default.jpg?version=9f6b372e69436fd4f0ddebea4880ebcf", "0x6CFF93", "Cabrakan"],
                ["Kephri", "Guardian", "Egyptian", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/e/e3/SkinArt_Khepri_Default.jpg/250px-SkinArt_Khepri_Default.jpg?version=dd50f137f5777adf98070ff8c76f406b", "0x6CFF93", "Bacchus"],
                ["Kumbhakarna", "Guardian", "Hindu", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/3/33/SkinArt_Kumbhakarna_Default.jpg/250px-SkinArt_Kumbhakarna_Default.jpg?version=dd2dbcf2a34f7b907cd1b9a8ea79e3a8", "0x6CFF93", "Sobek"],
                ["Kuzenbo", "Guardian", "Japanese", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/d/db/SkinArt_Kuzenbo_Default.jpg/250px-SkinArt_Kuzenbo_Default.jpg?version=05055311f6809266d278762fc7ac0e11", "0x6CFF93", "Tyr"],
                ["Sobek", "Guardian", "Egyptian", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/b/b8/SkinArt_Sobek_Default.jpg/250px-SkinArt_Sobek_Default.jpg?version=d50d790e30dd1b654f5dd681a05bc891", "0x6CFF93", "Terra"],
                ["Sylvanus", "Guardian", "Roman", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/2/23/SkinArt_Sylvanus_Default.jpg/250px-SkinArt_Sylvanus_Default.jpg?version=f119e20e31aaf7f8fb5e3eec792bac34", "0x6CFF93", "Sobek"],
                ["Terra", "Guardian", "Roman", "https://gamepedia.cursecdn.com/smite_gamepedia/b/bb/T_Terra_CC_Card.png?version=14c9c310c2de88f8839e557f820b300d", "0x6CFF93", "Xing Tian"],
                ["Xing Tian", "Guardian", "Chinese", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/0/0b/SkinArt_XingTian_Default.jpg/250px-SkinArt_XingTian_Default.jpg?version=75872b716bfa09802f728ec6eaa891b0", "0x6CFF93", "Geb"],
                ["Yemoja", "Guardian", "Yoruba", "https://gamepedia.cursecdn.com/smite_gamepedia/9/96/T_Yemoja_Default_Card.png?version=71e21f68d551b134ca1868e9b1161430", "0x6CFF93", "Sobek"],
                ["Ymir", "Guardian", "Norse", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/1/17/SkinArt_Ymir_Default.jpg/250px-SkinArt_Ymir_Default.jpg?version=f0a119c50ed95ad56892655a5ee7ee5e", "0x6CFF93", "Sobek"],
                ["Ah Muzen Cab", "Hunter", "Mayan", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/1/10/SkinArt_AhMuzenCab_Default.jpg/250px-SkinArt_AhMuzenCab_Default.jpg?version=9e19f1a75387173556cdef53cbe8aa66", "0xFBC719", "Skadi"],
                ["Anhur", "Hunter", "Egyptian", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/1/1e/SkinArt_Anhur_Default.jpg/250px-SkinArt_Anhur_Default.jpg?version=7ab22f823125a0e389269215fe79a12d", "0xFBC719", "Jormungandr"],
                ["Apollo", "Hunter", "Greek", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/8/8e/SkinArt_Apollo_Default.jpg/250px-SkinArt_Apollo_Default.jpg?version=38305f4d6cfbe133c542af899b2090db", "0xFBC719", "Ah Muzen Cab"],
                ["Artemis", "Hunter", "Greek", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/5/53/SkinArt_Artemis_Default.jpg/250px-SkinArt_Artemis_Default.jpg?version=35de7da483cbc017de08945faf9e794e", "0xFBC719", "Kuzenbo"],
                ["Cernunnos", "Hunter", "Celtic", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/f/f0/SkinArt_Cernunnos_Default.jpg/250px-SkinArt_Cernunnos_Default.jpg?version=fa49c7bf709643621230143e7a84e774", "0xFBC719", "Rama"],
                ["Chernobog", "Hunter", "Slavic", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/6/65/SkinArt_Chernobog_Default.jpg/250px-SkinArt_Chernobog_Default.jpg?version=da6306fde637b32f8da74c1618be95fc", "0xFBC719", "Hachiman"],
                ["Chiron", "Hunter", "Greek", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/8/8b/SkinArt_Chiron_Default.jpg/250px-SkinArt_Chiron_Default.jpg?version=6d2922cfcf157d8517d0d12073d8cf6c", "0xFBC719", "Neith"],
                ["Cupid", "Hunter", "Roman", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/6/69/SkinArt_Cupid_Default.jpg/250px-SkinArt_Cupid_Default.jpg?version=cc4352aed8b2269d991c27b972d787e1", "0xFBC719", "Artemis"],
                ["Danzaburou", "Hunter", "Japanese", "https://static.wikia.nocookie.net/smite_gamepedia/images/9/9f/SkinArt_Danzaburou_Default.jpg/revision/latest/scale-to-width-down/250?cb=20201216173146", "0xFBC719", "Anhur"],
                ["Hachiman", "Hunter", "Japanese", "https://gamepedia.cursecdn.com/smite_gamepedia/a/a5/T_Hachiman_OniMusha_Card.png?version=2e7d52ddeadc403fc477f9f95c910b9e", "0xFBC719", "Anhur"],
                ["Heimdallr", "Hunter", "Celtic", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/c/cd/SkinArt_Heimdallr_Default.jpg/250px-SkinArt_Heimdallr_Default.jpg?version=ca553dcfd4fc1820e7261a2a4248cd7d", "0xFBC719", "Cernunnos"],
                ["Hou Yi", "Hunter", "Chinese", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/4/4c/SkinArt_HouYi_Default.jpg/250px-SkinArt_HouYi_Default.jpg?version=25cf69faccbae1eed02966c50a752bd2", "0xFBC719", "Ullr"],
                ["Izanami", "Hunter", "Japanese", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/a/aa/SkinArt_Izanami_Default.jpg/250px-SkinArt_Izanami_Default.jpg?version=2a3ae18197ddd073ac8512bf1a507014", "0xFBC719", "Neith"],
                ["Jing Wei", "Hunter", "Chinese", "https://gamepedia.cursecdn.com/smite_gamepedia/0/0d/SkinArt_JingWei_Default.jpg", "0xFBC719", "Rama"],
                ["Medusa", "Hunter", "Greek", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/0/03/SkinArt_Medusa_Default.jpg/250px-SkinArt_Medusa_Default.jpg?version=5dd0acf83bdb37c90699fcf84aa26556", "0xFBC719", "Apollo"],
                ["Neith", "Hunter", "Egyptian", "https://gamepedia.cursecdn.com/smite_gamepedia/7/7f/T_Neith_Default_Card.png?version=72346f8c009a5b77f88171844d489235", "0xFBC719", "Xbalanque"],
                ["Rama", "Hunter", "Hindu", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/0/00/SkinArt_Rama_Default.jpg/250px-SkinArt_Rama_Default.jpg?version=d66de86aa0ff89f30310b2419ac13d47", "0xFBC719", "Izanami"],
                ["Skadi", "Hunter", "Norse", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/5/58/SkinArt_Skadi_Default.jpg/250px-SkinArt_Skadi_Default.jpg?version=604bca4cfa22b81f5aa2cefe81b312e5", "0xFBC719", "Agni"],
                ["Ullr", "Hunter", "Norse", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/1/1c/SkinArt_Ullr_Default.jpg/250px-SkinArt_Ullr_Default.jpg?version=7520373f41a13aa24bd770647d437dce", "0xFBC719", "Skadi"],
                ["Xbalanque", "Hunter", "Mayan", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/3/3d/SkinArt_Xbalanque_Default.jpg/250px-SkinArt_Xbalanque_Default.jpg?version=17a1f1b38c74dcf526d67f2a1c67a24c", "0xFBC719", "Hou Yi"],
                ["Agni", "Mage", "Hindu", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/2/29/SkinArt_Agni_Default.jpg/250px-SkinArt_Agni_Default.jpg?version=e19aefe01d6050daa7025cfea55f4a10", "0x198DFB", "Poseidon"],
                ["Ah Puch", "Mage", "Mayan", "https://gamepedia.cursecdn.com/smite_gamepedia/c/c9/SkinArt_AhPuch_Default.jpg", "0x198DFB", "Ao Kuang"],
                ["Anubis", "Mage", "Egyptian", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/5/59/SkinArt_Anubis_Default.jpg/250px-SkinArt_Anubis_Default.jpg?version=0b02e237abc9e2c26516ad9c6d629c9a", "0x198DFB", "Vulcan"],
                ["Ao Kuang", "Mage", "Chinese", "https://static.wikia.nocookie.net/smite_gamepedia/images/f/fd/T_AoKuang_Default_Card.png/revision/latest?cb=20141011061557", "0x198DFB", "Isis"],
                ["Aphrodite", "Mage", "Greek", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/3/3b/SkinArt_Aphrodite_Default.jpg/250px-SkinArt_Aphrodite_Default.jpg?version=f5ccfdb7b5dfda818992847a07c3df39", "Chang'e"],
                ["Baba Yaga", "Mage", "Slavic", "https://gamepedia.cursecdn.com/smite_gamepedia/c/c5/T_BabaYaga_Default_Card.png?version=1f9fa548600d4aa2e48ccbf123c31b35", "0x198DFB", "Nox"],
                ["Baron Samedi", "Mage", "Voodoo", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/3/38/SkinArt_BaronSamedi_Default.jpg/250px-SkinArt_BaronSamedi_Default.jpg?version=c8f3cc2d54c1db944180e783c5ab1667", "0x198DFB", "Thoth"],
                ["Chang'e", "Mage", "Chinese", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/9/95/SkinArt_ChangE_Default.jpg/250px-SkinArt_ChangE_Default.jpg?version=87d8b010b9f7ed186dac7a334ea8f631", "0x198DFB", "He Bo"],
                ["Chronos", "Mage", "Greek", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/a/a8/SkinArt_Chronos_Default.jpg/250px-SkinArt_Chronos_Default.jpg?version=e891da44cee155a96f06b79fbd368676", "0x198DFB", "Anubis"],
                ["Discordia", "Mage", "Roman", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/5/58/SkinArt_Discordia_Default.jpg/250px-SkinArt_Discordia_Default.jpg?version=03b1559aa80d28309ec7e2f9a44cb9f9", "0x198DFB", "Agni"],
                ["Freya", "Mage", "Norse", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/c/c9/SkinArt_Freya_Default_V2.jpg/250px-SkinArt_Freya_Default_V2.jpg?version=136f4075870f9926f4c0d4ed148dcc3d", "0x198DFB", "He Bo"],
                ["Hades", "Mage", "Greek", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/8/81/SkinArt_Hades_Default.jpg/250px-SkinArt_Hades_Default.jpg?version=754daea1565528095615f1a2362c1bf4", "0x198DFB", "Scylla"],
                ["He Bo", "Mage", "Chinese", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/e/e2/SkinArt_HeBo_Default.jpg/250px-SkinArt_HeBo_Default.jpg?version=15aff65e0a510a877c2609bea7a8fa3e", "0x198DFB", "Fenrir"],
                ["Hel", "Mage", "Norse", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/b/b6/SkinArt_Hel_Default.jpg/250px-SkinArt_Hel_Default.jpg?version=5cef241a70f85ef43465d3c1876e8f17", "0x198DFB", "Chang'e"],
                ["Hera", "Mage", "Greek", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/2/20/SkinArt_Hera_Default.jpg/250px-SkinArt_Hera_Default.jpg?version=d54b21df2b64a84aa647c29031998455", "0x198DFB", "Discordia"],
                ["Isis", "Mage", "Egyptian", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/0/0a/SkinArt_Isis_Default.jpg/250px-SkinArt_Isis_Default.jpg?version=d1ce1886744e616140adcfa15d29f167", "0x198DFB", "Hades"],
                ["Janus", "Mage", "Roman", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/0/04/SkinArt_Janus_Default.jpg/250px-SkinArt_Janus_Default.jpg?version=b4d5e361dc390f4b15dd8f015bd4d450", "0x198DFB", "Poseidon"],
                ["Kukulkan", "Mage", "Mayan", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/7/73/SkinArt_Kukulkan_Default.jpg/250px-SkinArt_Kukulkan_Default.jpg?version=5687a9c9d032bc347a08321d4fa91f90", "0x198DFB", "Sol"],
                ["Merlin", "Mage", "Arthurian", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/5/59/SkinArt_Merlin_Default.jpg/250px-SkinArt_Merlin_Default.jpg?version=4811c8f9cecdedf4f7312ce511ebd0b2", "0x198DFB", "Bastet"],
                ["Nox", "Mage", "Roman", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/e/e1/SkinArt_Nox_Default.jpg/250px-SkinArt_Nox_Default.jpg?version=1f1bbd55ec0aec104c629bc90f8d03b2", "0x198DFB", "Zhong Kui"],
                ["Nu Wa", "Mage", "Chinese", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/c/cd/SkinArt_NuWa_Default.jpg/250px-SkinArt_NuWa_Default.jpg?version=1c96d4e64813197690339e86f29f42ce", "0x198DFB", "Anubis"],
                ["Olorun", "Mage", "Yoruba", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/3/3e/SkinArt_Olorun_Default.jpg/250px-SkinArt_Olorun_Default.jpg?version=a2824f364816f39e1ae53b799409cc0e", "0x198DFB", "Kali"],
                ["Persephone", "Mage", "Greek", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/c/cf/SkinArt_Persephone_Default.jpg/250px-SkinArt_Persephone_Default.jpg?version=5f23953e849e3d6320e5ae2669bac213", "0x198DFB", "Thanatos"],
                ["Poseidon", "Mage", "Greek", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/c/ca/SkinArt_Poseidon_Default_V2.jpg/250px-SkinArt_Poseidon_Default_V2.jpg?version=1eb02da2bd611619556012db9d70ca45", "0x198DFB", "Ra"],
                ["Ra", "Mage", "Egyptian", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/0/0e/SkinArt_Ra_Default.jpg/250px-SkinArt_Ra_Default.jpg?version=5e97f20bce2d3f57e77e278b2377014c", "0x198DFB", "Ah Puch"],
                ["Raijin", "Mage", "Japanese", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/d/dd/SkinArt_Raijin_Default.jpg/250px-SkinArt_Raijin_Default.jpg?version=67a738c3bfca269672de02e5d37a92e4", "0x198DFB", "Ao Kuang"],
                ["Scylla", "Mage", "Greek", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/c/c7/SkinArt_Scylla_Default.jpg/250px-SkinArt_Scylla_Default.jpg?version=551198bbdeca7c47d064ad3e17db9c37", "0x198DFB", "Janus"],
                ["Sol", "Mage", "Norse", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/d/dc/SkinArt_Sol_Default.jpg/250px-SkinArt_Sol_Default.jpg?version=18ca4cd2e1e1bd7da13ad5fded31e826", "0x198DFB", "Chronos"],
                ["The Morrigan", "Mage", "Celtic", "https://gamepedia.cursecdn.com/smite_gamepedia/f/f6/T_TheMorrigan_Default_Card.png?version=0df00d25dde4ec91193b38f3a7af9e37", "0x198DFB", "Baron Samedi"],
                ["Tiamat", "Mage", "Babylonian", "https://static.wikia.nocookie.net/smite_gamepedia/images/0/07/SkinArt_Tiamat_Default.jpg/revision/latest/scale-to-width-down/250?cb=20210304182729", "0x198DFB", "Sun Wukong"],
                ["Thoth", "Mage", "Egyptian", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/1/19/SkinArt_Thoth_Default.jpg/250px-SkinArt_Thoth_Default.jpg?version=50a819716d080898fcc4844bc97b38f4", "0x198DFB", "Chang'e"],
                ["Vulcan", "Mage", "Roman", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/5/54/SkinArt_Vulcan_Default.jpg/250px-SkinArt_Vulcan_Default.jpg?version=c97a89d2bcef052fbefe2c2645696b7b", "0x198DFB", "Zeus"],
                ["Zeus", "Mage", "Greek", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/e/e3/SkinArt_Zeus_Default.jpg/250px-SkinArt_Zeus_Default.jpg?version=ed76822f0ac6f7dd51a2cdfda890f845", "0x198DFB", "Janus"],
                ["Zhong Kui", "Mage", "Chinese", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/9/91/SkinArt_ZhongKui_Default.jpg/250px-SkinArt_ZhongKui_Default.jpg?version=312d7e578976db28e9da393ca08336de", "0x198DFB", "Aphrodite"],
                ["Achilles", "Warrior", "Greek", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/6/66/SkinArt_Achilles_Default.jpg/250px-SkinArt_Achilles_Default.jpg?version=82632ebe20d25b2eaf91e05811145214", "0xFF5733", "Cu Chulainn"],
                ["Amaterasu", "Warrior", "Japanese", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/8/8a/SkinArt_Amaterasu_Default.jpg/250px-SkinArt_Amaterasu_Default.jpg?version=efbb3efb4fcb4a2396354a6479ae4e8f", "0xFF5733", "Chaac"],
                ["Bellona", "Warrior", "Roman", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/a/aa/SkinArt_Bellona_Default.jpg/250px-SkinArt_Bellona_Default.jpg?version=8413014246687d4b2a8c9ce13924151c", "0xFF5733", "Tyr"],
                ["Chaac", "Warrior", "Mayan", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/e/e4/SkinArt_Chaac_Default.jpg/250px-SkinArt_Chaac_Default.jpg?version=128728f47742f192daeba8056a75ceea", "0xFF5733", "Osiris"],
                ["Cu Chulainn", "Warrior", "Celtic", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/a/aa/SkinArt_CuChulainn_Default.jpg/250px-SkinArt_CuChulainn_Default.jpg?version=c9fe2a1d085423b7c7509d6e74159667", "0xFF5733", "Hercules"],
                ["Erlang Shen", "Warrior", "Chinese", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/0/01/SkinArt_ErlangShen_Default.jpg/250px-SkinArt_ErlangShen_Default.jpg?version=2ec3d62fbab45f1c56d1c8859cfdb673", "0xFF5733", "Osiris"],
                ["Gilgamesh", "Warrior", "Babylonian", "https://static.wikia.nocookie.net/smite_gamepedia/images/0/0c/T_Gilgamesh_Default_Card.png/revision/latest?cb=20210406205124", "0xFF5733", "Hercules"],
                ["Guan Yu", "Warrior", "Chinese", "https://gamepedia.cursecdn.com/smite_gamepedia/5/50/SkinArt_GuanYu_Default.jpg", "0xFF5733", "Amaterasu"],
                ["Hercules", "Warrior", "Roman", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/d/da/SkinArt_Hercules_Default.jpg/250px-SkinArt_Hercules_Default.jpg?version=b90ff78e2672f0035eddd0993740f18c", "0xFF5733", "Odin"],
                ["Horus", "Warrior", "Egyptian", "https://static.wikia.nocookie.net/smite_gamepedia/images/7/71/SkinArt_Horus_Default.jpg/revision/latest/scale-to-width-down/250?cb=20190725153617", "0xFF5733", "Kumbhakarna"],
                ["King Arthur", "Warrior", "Arthurian", "https://gamepedia.cursecdn.com/smite_gamepedia/e/e5/T_KingArthur_Convention2020_Card.png?version=43a396dffd0b85aa890f29f71fa20bca", "0xFF5733", "Artio"],
                ["Mulan", "Warrior", "Chinese", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/1/18/SkinArt_Mulan_Default.jpg/250px-SkinArt_Mulan_Default.jpg?version=5cba8a59fd38a97bded0698b6def8324", "0xFF5733", "Sun Wukong"],
                ["Nike", "Warrior", "Greek", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/e/eb/SkinArt_Nike_Default.jpg/250px-SkinArt_Nike_Default.jpg?version=6a39e4f30490c966fcfd91a7eb038570", "0xFF5733", "Sun Wukong"],
                ["Odin", "Warrior", "Norse", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/1/1e/SkinArt_Odin_Default.jpg/250px-SkinArt_Odin_Default.jpg?version=02083f8555ce2027eb56007e5f0d3841", "0xFF5733", "Tyr"],
                ["Osiris", "Warrior", "Egyptian", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/d/db/SkinArt_Osiris_Default.jpg/250px-SkinArt_Osiris_Default.jpg?version=73fbad462e5cc394b295d4a9acf687f7", "0xFF5733", "Bellona"],
                ["Sun Wukong", "Warrior", "Chinese", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/b/b7/SkinArt_SunWukong_Default.jpg/250px-SkinArt_SunWukong_Default.jpg?version=7e0ffb3ae12aa267af2c49ebb810a1ef", "0xFF5733", "Vamana"],
                ["Tyr", "Warrior", "Norse", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/9/93/SkinArt_Tyr_Default.jpg/250px-SkinArt_Tyr_Default.jpg?version=c4918e13a7e7830551496ad01f4c8502", "0xFF5733", "Guan Yu"],
                ["Vamana", "Warrior", "Hindu", "https://gamepedia.cursecdn.com/smite_gamepedia/thumb/7/7e/SkinArt_Vamana_Default_V2.jpg/250px-SkinArt_Vamana_Default_V2.jpg?version=ee300abe2e75bd34dbafb414565c1487", "0xFF5733", "Bakasura"]]
const jokes = ["Did you know Barack Obama plays smite? Guess what his favorite character is? *Chang'e.*", "Do you know what the Earth and Smites roster have in common? *71% of both are dedicated to water.*", "Well, it's no wonder that Thanatos fed, *he is the god of death after all.*", "Yo momma's so fat, she takes up *two lanes and the jungle.*"]

var version = '1.2.0'

bot.on('ready', () => {
    console.log("SmiteBot is online.");
})

bot.on('message', message => {

    if (!message.content.startsWith(PREFIX)) return;
    var userMessage = message.content.substring(1);
    var args = [];
    if (userMessage.includes(" ")) {
        var space = userMessage.indexOf(" ");
        args.push(userMessage.substring(0, space).toLowerCase());
        args.push(userMessage.substring(space+1).toLowerCase());
    } else {
        args.push(userMessage.toLowerCase());
    }

    switch (args[0]) {
        case "status":
            message.channel.send("SmiteBot is **Online.**")
            break;
        case "version":
            message.channel.send("SmiteBot - **Version " + version + "** - Developed by Tristan Parry (2020)")
            break;
        case "joke":
            var randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
            message.channel.send(randomJoke)
            break;
        case "god":
            if (args[1] === "random") {
                var randomIndex = Math.floor(Math.random() * all_gods.length);

                const embed = new Discord.MessageEmbed()
                    .setTitle(all_gods[randomIndex][0])
                    .addField("God Type", all_gods[randomIndex][1])
                    .addField("Pantheon", all_gods[randomIndex][2])
                    .setThumbnail(all_gods[randomIndex][3])
                    .setColor(all_gods[randomIndex][4])
                message.channel.send(embed);
                break;
            } else {
                for (let i = 0; i < all_gods.length; i++) {
                    if (args[1] === all_gods[i][0].toLowerCase()) {
                        const embed = new Discord.MessageEmbed()
                            .setTitle(all_gods[i][0])
                            .addField("God Type", all_gods[i][1])
                            .addField("Pantheon", all_gods[i][2])
                            .setThumbnail(all_gods[i][3])
                            .setColor(all_gods[i][4])
                        message.channel.send(embed);
                    }
                }
                break;
            }
        case "counter":
            for (let i = 0; i < all_gods.length; i++) {
                if (args[1] === all_gods[i][0].toLowerCase()) {
                    message.channel.send("A good counter to " + all_gods[i][0] + " is **" + all_gods[i][5] + "**.");
                }
            }
            break;
        case "type":
            if (args[1] === "assassin") {
                var outputString = "**SMITE Assassin List:**\n";
                for (let i = 0; i < assassin_gods.length; i++) {
                    outputString += assassin_gods[i] + "\n";
                }
                message.channel.send(outputString);
            } else if (args[1] === "guardian") {
                var outputString = "**SMITE Guardian List:**\n";
                for (let i = 0; i < guardian_gods.length; i++) {
                    outputString += guardian_gods[i] + "\n";
                }
                message.channel.send(outputString);
            } else if (args[1] === "hunter") {
                var outputString = "**SMITE Hunter List:**\n";
                for (let i = 0; i < hunter_gods.length; i++) {
                    outputString += hunter_gods[i] + "\n";
                }
                message.channel.send(outputString);
            } else if (args[1] === "mage") {
                var outputString = "**SMITE Mage List:**\n";
                for (let i = 0; i < mage_gods.length; i++) {
                    outputString += mage_gods[i] + "\n";
                }
                message.channel.send(outputString);
            } else if (args[1] === "warrior") {
                var outputString = "**SMITE Warrior List:**\n";
                for (let i = 0; i < warrior_gods.length; i++) {
                    outputString += warrior_gods[i] + "\n";
                }
                message.channel.send(outputString);
            }
            break;
    }
})

bot.login(process.env.TOKEN);